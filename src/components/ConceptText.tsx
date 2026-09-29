import React from "react";
import Link from "next/link";
import { CONCEPTS } from "@/data/concepts";

interface ConceptTextProps {
  text: string;
  currentConceptId?: string;
  className?: string;
}

interface Term {
  phrase: string;
  conceptId: string;
}

interface TextToken {
  type: "text" | "link";
  value: string;
  conceptId?: string;
}

/**
 * Escape các ký tự đặc biệt trong biểu thức chính quy (RegExp)
 */
function escapeRegex(string: string): string {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/**
 * Trích xuất danh sách các cụm từ đại diện cho các khái niệm hợp lệ
 * - Loại bỏ khái niệm hiện tại để tránh tự liên kết (self-link)
 * - Tách các tên phụ trong ngoặc đơn nếu có (vd: "Tên chính (Tên phụ)")
 * - Sắp xếp theo độ dài giảm dần để ưu tiên khái niệm dài hơn khi có sự trùng lặp
 */
function getCandidateTerms(currentConceptId?: string): Term[] {
  const terms: Term[] = [];

  for (const c of CONCEPTS) {
    // Không liên kết tới chính nó
    if (c.id === currentConceptId) continue;

    // Không tự động liên kết từ "tiếng" (concept-24) vì đây là từ thông dụng (vd: tiếng Việt)
    if (c.id === "concept-24" || c.name.toLowerCase() === "tiếng") continue;

    // Cụm từ tên chính
    terms.push({ phrase: c.name, conceptId: c.id });

    // Hỗ trợ thêm tên phụ nếu tên có dạng "Khái niệm chính (Khái niệm phụ)"
    const parenMatch = c.name.match(/^(.+?)\s*\((.+?)\)$/);
    if (parenMatch) {
      const mainPart = parenMatch[1].trim();
      const subPart = parenMatch[2].trim();
      if (mainPart && mainPart.toLowerCase() !== "tiếng") terms.push({ phrase: mainPart, conceptId: c.id });
      if (subPart && subPart.toLowerCase() !== "tiếng") terms.push({ phrase: subPart, conceptId: c.id });
    }
  }

  // Ưu tiên khái niệm có tên dài hơn (Longer match preferred)
  terms.sort((a, b) => b.phrase.length - a.phrase.length);
  return terms;
}

/**
 * Tìm kiếm các cụm từ khái niệm trong chuỗi văn bản thuần và tách thành các token
 * - So khớp không phân biệt chữ hoa/thường (Case-insensitive)
 * - Đảm bảo ranh giới từ theo chuẩn Unicode tiếng Việt (Tránh partial-word match)
 * - Không tạo liên kết lồng nhau hoặc chồng lấn (No overlapping links)
 * - Giữ nguyên 100% chữ hoa/thường của văn bản gốc
 */
function linkPlainText(text: string, terms: Term[]): TextToken[] {
  if (!text || terms.length === 0) return [{ type: "text", value: text }];

  interface MatchItem {
    start: number;
    end: number;
    matchedText: string;
    conceptId: string;
  }

  const matches: MatchItem[] = [];

  for (const term of terms) {
    const escaped = escapeRegex(term.phrase);
    // Sử dụng Unicode boundary: không bị bao quanh bởi ký tự chữ cái hoặc chữ số
    const regex = new RegExp(
      "(?<![\\p{L}\\p{N}])" + escaped + "(?![\\p{L}\\p{N}])",
      "giu"
    );
    let m: RegExpExecArray | null;

    while ((m = regex.exec(text)) !== null) {
      const start = m.index;
      const end = start + m[0].length;

      // Kiểm tra nếu vị trí khớp bị trùng hoặc lấn vào vị trí đã được khớp trước đó
      const overlaps = matches.some(
        (existing) => start < existing.end && end > existing.start
      );

      if (!overlaps) {
        matches.push({
          start,
          end,
          matchedText: m[0],
          conceptId: term.conceptId,
        });
      }
    }
  }

  // Sắp xếp các đoạn khớp theo thứ tự xuất hiện từ đầu đến cuối
  matches.sort((a, b) => a.start - b.start);

  const tokens: TextToken[] = [];
  let lastIndex = 0;

  for (const m of matches) {
    if (m.start > lastIndex) {
      tokens.push({ type: "text", value: text.slice(lastIndex, m.start) });
    }
    tokens.push({ type: "link", value: m.matchedText, conceptId: m.conceptId });
    lastIndex = m.end;
  }

  if (lastIndex < text.length) {
    tokens.push({ type: "text", value: text.slice(lastIndex) });
  }

  return tokens;
}

/**
 * Chuyển đổi các token văn bản & link thành các React Node
 */
function renderTokens(tokens: TextToken[], keyPrefix: string): React.ReactNode[] {
  const nodes: React.ReactNode[] = [];

  tokens.forEach((token, idx) => {
    if (token.type === "link" && token.conceptId) {
      nodes.push(
        <Link
          key={`${keyPrefix}-lnk-${idx}`}
          href={`/concept/${token.conceptId}`}
          className="font-medium text-[#7D5A4C] hover:text-[#3E2723] bg-[#EADBC8]/45 hover:bg-[#EADBC8] px-1 py-0.25 rounded-xs transition-colors duration-150"
        >
          {token.value}
        </Link>
      );
    } else {
      // Xử lý xuống dòng \n trong đoạn văn bản thuần
      const lines = token.value.split("\n");
      lines.forEach((line, lineIdx) => {
        if (lineIdx > 0) {
          nodes.push(<br key={`${keyPrefix}-br-${idx}-${lineIdx}`} />);
        }
        if (line) {
          nodes.push(line);
        }
      });
    }
  });

  return nodes;
}

/**
 * Xử lý một đoạn văn bản có chứa định dạng HTML/Markdown (<u>, **, *)
 * và tự động liên kết các tên khái niệm bên trong
 */
function parseAndRenderParagraph(
  para: string,
  terms: Term[],
  keyPrefix: string
): React.ReactNode {
  // Regex nhận diện các định dạng <u>...</u>, **...**, *...*
  const formatRegex = /<u>([\s\S]*?)<\/u>|\*\*([^*]+)\*\*|\*([^*]+)\*/g;
  const nodes: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let segIndex = 0;

  while ((match = formatRegex.exec(para)) !== null) {
    const matchStart = match.index;
    if (matchStart > lastIndex) {
      const textBefore = para.slice(lastIndex, matchStart);
      const tokens = linkPlainText(textBefore, terms);
      nodes.push(...renderTokens(tokens, `${keyPrefix}-txt-${segIndex++}`));
    }

    if (match[1] !== undefined) {
      // Thẻ <u> (không hiển thị gạch chân nữa)
      const innerTokens = linkPlainText(match[1], terms);
      nodes.push(
        <React.Fragment key={`${keyPrefix}-u-${segIndex++}`}>
          {renderTokens(innerTokens, `${keyPrefix}-u-inner-${segIndex}`)}
        </React.Fragment>
      );
    } else if (match[2] !== undefined) {
      // Thẻ ** (in đậm)
      const innerTokens = linkPlainText(match[2], terms);
      nodes.push(
        <strong key={`${keyPrefix}-b-${segIndex++}`}>
          {renderTokens(innerTokens, `${keyPrefix}-b-inner-${segIndex}`)}
        </strong>
      );
    } else if (match[3] !== undefined) {
      // Thẻ * (in nghiêng)
      const innerTokens = linkPlainText(match[3], terms);
      nodes.push(
        <em key={`${keyPrefix}-i-${segIndex++}`}>
          {renderTokens(innerTokens, `${keyPrefix}-i-inner-${segIndex}`)}
        </em>
      );
    }

    lastIndex = formatRegex.lastIndex;
  }

  if (lastIndex < para.length) {
    const textRemaining = para.slice(lastIndex);
    const tokens = linkPlainText(textRemaining, terms);
    nodes.push(...renderTokens(tokens, `${keyPrefix}-txt-${segIndex++}`));
  }

  return (
    <p key={keyPrefix} className="leading-relaxed">
      {nodes}
    </p>
  );
}

/**
 * Component hiển thị nội dung định nghĩa với khả năng tự động liên kết (Auto-linking)
 * tới các trang khái niệm tương ứng khi tên của chúng xuất hiện trong văn bản.
 */
export function ConceptText({
  text,
  currentConceptId,
  className = "space-y-3",
}: ConceptTextProps) {
  if (!text) return null;

  // Lấy danh sách các khái niệm hợp lệ để liên kết
  const candidateTerms = getCandidateTerms(currentConceptId);

  // Tách văn bản thành các đoạn văn riêng biệt
  const paragraphs = text.split(/\n\n+/);

  return (
    <div className={className}>
      {paragraphs.map((para, pIdx) =>
        parseAndRenderParagraph(para, candidateTerms, `p-${pIdx}`)
      )}
    </div>
  );
}

export default ConceptText;
