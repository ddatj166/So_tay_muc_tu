import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getConceptById } from "@/lib/concepts";
import { CONCEPTS } from "@/data/concepts";
import { Concept } from "@/types/concept";
import { ConceptText } from "@/components/ConceptText";
import { ConceptDetailMotion } from "@/components/ConceptDetailMotion";
import { RelatedConceptLink } from "@/components/RelatedConceptLink";

interface PageProps {
  params: Promise<{ id: string }>;
}

// Pre-render tất cả 57 khái niệm trong thời gian build
export function generateStaticParams() {
  return CONCEPTS.map((concept) => ({
    id: concept.id,
  }));
}

// Tạo metadata động theo từng khái niệm
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const concept = getConceptById(id);

  if (!concept) {
    return {
      title: "Không tìm thấy khái niệm - Sổ Tay Mục Từ",
    };
  }

  const cleanDescription = concept.definition
    .replace(/<[^>]*>/g, "")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\*([^*]+)\*/g, "$1")
    .replace(/^-\s*/, "")
    .slice(0, 160);

  return {
    title: `${concept.name} - Sổ Tay Mục Từ`,
    description: cleanDescription,
  };
}

// Xử lý render văn bản có định dạng in đậm, in nghiêng, gạch chân và ngắt đoạn
function renderFormattedContent(text: string) {
  const paragraphs = text.split(/\n\n+/);

  return (
    <div className="space-y-3">
      {paragraphs.map((para, pIdx) => {
        const formattedHtml = para
          .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
          .replace(/\*([^*]+)\*/g, "<em>$1</em>")
          .replace(/<\/?u>/g, "")
          .replace(/\n/g, "<br />");

        return (
          <p
            key={pIdx}
            className="leading-relaxed"
            dangerouslySetInnerHTML={{ __html: formattedHtml }}
          />
        );
      })}
    </div>
  );
}

export default async function ConceptDetailPage({ params }: PageProps) {
  const { id } = await params;
  const concept = getConceptById(id);

  // Nếu không tìm thấy concept, gọi hàm notFound() của Next.js
  if (!concept) {
    notFound();
  }

  // Lấy danh sách ID các khái niệm liên quan nếu có trường relatedConcepts
  const rawRelated = (concept as { relatedConcepts?: string[] }).relatedConcepts;
  const relatedConceptIds = Array.isArray(rawRelated) ? rawRelated : [];

  // Tìm các concept tương ứng và bỏ qua các ID không tồn tại
  const validRelatedConcepts = relatedConceptIds
    .map((relId) => getConceptById(relId))
    .filter((rel): rel is Concept => rel !== undefined);

  return (
    <div className="min-h-screen bg-[#FAF1E6] text-[#3E2723] flex flex-col items-center selection:bg-[#B88A72]/30 selection:text-[#3E2723]">
      <ConceptDetailMotion className="w-full max-w-3xl px-4 sm:px-6 py-10 sm:py-14 flex flex-col flex-1">
        {/* Nút điều hướng quay lại trang chủ */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#7D5A4C] hover:text-[#3E2723] transition-colors py-1.5 px-3 rounded-lg hover:bg-[#EADBC8]/50 group"
          >
            <svg
              className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform duration-150"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Quay lại từ điển
          </Link>
        </div>

        {/* 1. CONCEPT NAME: Tên khái niệm cỡ lớn, căn giữa ngang, là trọng tâm thị giác */}
        <header className="text-center mb-10 sm:mb-14">
          <span className="inline-block px-3 py-1 mb-3.5 text-xs font-semibold tracking-wider text-[#7D5A4C] uppercase bg-[#EADBC8]/50 border border-[#EADBC8] rounded-full">
            Mục từ #{concept.order}
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#3E2723] leading-tight">
            {concept.name}
          </h1>
        </header>

        {/* 2. DEFINITION: Định nghĩa đầy đủ, dễ đọc, giữ nguyên nội dung với auto-linking */}
        <section className="mb-8 sm:mb-10">
          <h2 className="text-xs font-bold uppercase tracking-wider text-[#7D5A4C] mb-3">
            Định nghĩa
          </h2>
          <div className="bg-white/75 border border-[#EADBC8] rounded-xl p-6 sm:p-8 text-[#3E2723] text-base sm:text-lg leading-relaxed shadow-xs">
            <ConceptText text={concept.definition} currentConceptId={concept.id} />
          </div>
        </section>

        {/* 3. EXAMPLES: Các ví dụ minh họa, hiển thị phân biệt rõ ràng so với định nghĩa */}
        {concept.examples && concept.examples.length > 0 && (
          <section className="mb-8 sm:mb-10">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#7D5A4C] mb-3">
              Ví dụ minh họa
            </h2>
            <div className="space-y-4">
              {concept.examples.map((example, idx) => (
                <div
                  key={idx}
                  className="bg-[#EADBC8]/50 border-l-4 border-l-[#B88A72] border-y border-r border-[#EADBC8] rounded-r-xl p-5 sm:p-6 text-[#3E2723] text-sm sm:text-base leading-relaxed shadow-xs"
                >
                  {renderFormattedContent(example)}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 4. ILLUSTRATION: Hình ảnh minh họa (chỉ hiển thị khi có imageUrl) */}
        {concept.imageUrl && (
          <section className="mb-8 sm:mb-10">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#7D5A4C] mb-3">
              Hình ảnh minh họa
            </h2>
            <div className="bg-white/70 border border-[#EADBC8] rounded-xl p-4 sm:p-6 flex flex-col items-center shadow-xs">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={concept.imageUrl}
                alt={concept.imageAlt || concept.name}
                className="max-h-96 w-auto rounded-lg object-contain"
              />
              {concept.imageAlt && (
                <p className="mt-2.5 text-xs text-[#7D5A4C] text-center italic">
                  {concept.imageAlt}
                </p>
              )}
            </div>
          </section>
        )}

        {/* 5. RELATED CONCEPTS: Các khái niệm liên quan (chỉ hiển thị khi có dữ liệu) */}
        {validRelatedConcepts.length > 0 && (
          <section className="mb-8 sm:mb-10">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#7D5A4C] mb-3">
              Khái niệm liên quan
            </h2>
            <div className="flex flex-wrap gap-2.5">
              {validRelatedConcepts.map((relConcept) => (
                <RelatedConceptLink
                  key={relConcept.id}
                  id={relConcept.id}
                  name={relConcept.name}
                />
              ))}
            </div>
          </section>
        )}

        {/* Điều hướng chân trang */}
        <div className="mt-8 pt-6 border-t border-[#EADBC8] flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[#7D5A4C]">
          <Link
            href="/"
            className="hover:text-[#3E2723] transition-colors inline-flex items-center gap-1 group"
          >
            <span className="group-hover:-translate-x-0.5 transition-transform duration-150">←</span>
            <span>Về danh sách mục từ</span>
          </Link>
          <div className="text-right">
            <span className="opacity-75">Thực hiện: </span>
            <span className="font-medium text-[#3E2723]">Nguyễn Ngọc Đan Linh, Trần Nga My, Đặng Thu Ngân</span>
          </div>
        </div>
      </ConceptDetailMotion>
    </div>
  );
}
