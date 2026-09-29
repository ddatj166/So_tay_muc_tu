import React, { useMemo } from "react";

interface HighlightTextProps {
  text: string;
  query?: string;
  className?: string;
  highlightClassName?: string;
}

/**
 * Thoát các ký tự đặc biệt trong biểu thức chính quy (RegExp)
 */
function escapeRegex(string: string): string {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/**
 * Chuyển đổi chuỗi tiếng Việt có dấu sang không dấu
 * Đảm bảo mỗi ký tự trong chuỗi gốc tương ứng 1-1 với ký tự không dấu
 */
function removeVietnameseTones(str: string): string {
  return Array.from(str)
    .map((c) =>
      c
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/đ/g, "d")
        .replace(/Đ/g, "D")
    )
    .join("");
}

interface MatchRange {
  start: number;
  end: number;
}

/**
 * Tìm tất cả các khoảng vị trí khớp từ khóa trong chuỗi văn bản
 * Hỗ trợ khớp không phân biệt hoa thường và hỗ trợ cả tiếng Việt không dấu
 */
function findHighlightRanges(text: string, query?: string): MatchRange[] {
  if (!text || !query || !query.trim()) return [];

  const trimmedQuery = query.trim();
  const words = trimmedQuery.split(/\s+/).filter(Boolean);
  if (words.length === 0) return [];

  const patternExact = words.map(escapeRegex).join("\\s+");
  const wordsNoTones = words.map((w) => removeVietnameseTones(w.toLowerCase()));
  const patternNoTones = wordsNoTones.map(escapeRegex).join("\\s+");

  const ranges: MatchRange[] = [];

  // 1. So khớp trực tiếp (có dấu chính xác hoặc cùng định dạng)
  try {
    const regexExact = new RegExp(patternExact, "gi");
    let m: RegExpExecArray | null;
    while ((m = regexExact.exec(text)) !== null) {
      if (m[0].length === 0) break;
      ranges.push({ start: m.index, end: m.index + m[0].length });
    }
  } catch {
    // Không làm gián đoạn nếu biểu thức regex lỗi
  }

  // 2. So khớp không dấu (nếu người dùng gõ từ khóa không dấu)
  const textNoTones = removeVietnameseTones(text);
  try {
    const regexNoTones = new RegExp(patternNoTones, "gi");
    let m: RegExpExecArray | null;
    while ((m = regexNoTones.exec(textNoTones)) !== null) {
      if (m[0].length === 0) break;
      const start = m.index;
      const end = m.index + m[0].length;
      // Tránh trùng lặp với các khoảng đã được ghi nhận ở bước 1
      const overlaps = ranges.some((r) => Math.max(r.start, start) < Math.min(r.end, end));
      if (!overlaps) {
        ranges.push({ start, end });
      }
    }
  } catch {
    // Dự phòng an toàn
  }

  ranges.sort((a, b) => a.start - b.start);
  return ranges;
}

/**
 * Component làm nổi bật các đoạn văn bản khớp với từ khóa tìm kiếm
 * Đảm bảo:
 * - Bảo toàn 100% chữ hoa/thường nguyên bản của chuỗi gốc
 * - Làm nổi bật tất cả các lần xuất hiện
 * - An toàn tuyệt đối bằng cách render qua React element (KHÔNG dùng dangerouslySetInnerHTML)
 */
export function HighlightText({
  text,
  query,
  className,
  highlightClassName = "bg-[#B88A72]/35 text-[#3E2723] font-semibold rounded-xs px-0.5",
}: HighlightTextProps) {
  const tokens = useMemo(() => {
    if (!text) return [];
    const ranges = findHighlightRanges(text, query);
    if (ranges.length === 0) {
      return [{ text, isMatch: false }];
    }

    const result: { text: string; isMatch: boolean }[] = [];
    let lastIdx = 0;

    for (const range of ranges) {
      if (range.start > lastIdx) {
        result.push({ text: text.slice(lastIdx, range.start), isMatch: false });
      }
      result.push({ text: text.slice(range.start, range.end), isMatch: true });
      lastIdx = range.end;
    }

    if (lastIdx < text.length) {
      result.push({ text: text.slice(lastIdx), isMatch: false });
    }

    return result;
  }, [text, query]);

  if (!query || !query.trim()) {
    return <span className={className}>{text}</span>;
  }

  return (
    <span className={className}>
      {tokens.map((token, index) =>
        token.isMatch ? (
          <mark key={index} className={highlightClassName}>
            {token.text}
          </mark>
        ) : (
          <React.Fragment key={index}>{token.text}</React.Fragment>
        )
      )}
    </span>
  );
}

export default HighlightText;
