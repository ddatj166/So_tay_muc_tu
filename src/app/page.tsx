"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { searchConcepts } from "@/lib/concepts";
import { HighlightText } from "@/components/HighlightText";
import { Concept } from "@/types/concept";

// Trích xuất đoạn xem trước cho định nghĩa (loại bỏ thẻ HTML và cú pháp Markdown)
function getDefinitionPreview(definition: string): string {
  return definition
    .replace(/<[^>]*>/g, "")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\*([^*]+)\*/g, "$1")
    .replace(/^-\s*/, "")
    .replace(/\s+/g, " ")
    .trim();
}

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const shouldReduceMotion = useReducedMotion();

  const filteredConcepts = useMemo(() => {
    return searchConcepts(searchQuery);
  }, [searchQuery]);

  // Gom nhóm tuần tự theo chữ cái đầu tiên và bảo toàn đúng thứ tự hiện có của dữ liệu
  const groupedConcepts = useMemo(() => {
    const groups: { letter: string; items: Concept[] }[] = [];
    let currentGroup: { letter: string; items: Concept[] } | null = null;

    for (const concept of filteredConcepts) {
      const letter = concept.name.charAt(0).toUpperCase();
      if (!currentGroup || currentGroup.letter !== letter) {
        currentGroup = { letter, items: [concept] };
        groups.push(currentGroup);
      } else {
        currentGroup.items.push(concept);
      }
    }

    return groups;
  }, [filteredConcepts]);

  return (
    <div className="min-h-screen bg-[#FAF1E6] text-[#3E2723] flex flex-col items-center selection:bg-[#B88A72]/30 selection:text-[#3E2723]">
      {/* Container chính căn giữa trang */}
      <main className="w-full max-w-3xl px-4 sm:px-6 py-12 sm:py-16 flex flex-col flex-1">
        {/* 1. Header / Hero area */}
        <motion.header
          initial={shouldReduceMotion ? false : { opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="text-center mb-8 sm:mb-10"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 mb-3.5 text-xs font-semibold tracking-wider text-[#7D5A4C] uppercase bg-[#EADBC8]/50 border border-[#EADBC8] rounded-full">
            Ngôn ngữ học tiếng Việt
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold tracking-tight text-[#3E2723] mb-3 leading-tight">
            Sổ Tay Mục Từ
          </h1>
          <p className="text-sm sm:text-base text-[#7D5A4C] max-w-lg mx-auto mb-8 leading-relaxed">
            Tra cứu và duyệt các khái niệm, quy tắc cấu tạo từ và hiện tượng từ vựng học tiếng Việt.
          </p>

          {/* Thanh tìm kiếm */}
          <div className="relative max-w-xl mx-auto w-full group">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#7D5A4C]">
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm kiếm theo tên khái niệm hoặc định nghĩa..."
              className="w-full pl-11 pr-11 py-3.5 bg-white/80 hover:bg-white focus:bg-white border border-[#EADBC8] hover:border-[#B88A72]/60 focus:border-[#B88A72] rounded-xl text-[#3E2723] placeholder-[#7D5A4C]/60 text-sm sm:text-base shadow-xs focus:outline-none focus:ring-3 focus:ring-[#B88A72]/20 transition-all duration-150"
            />
            <AnimatePresence>
              {searchQuery && (
                <motion.button
                  key="clear-search-btn"
                  initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.15 }}
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-[#7D5A4C] hover:text-[#3E2723] transition-colors"
                  title="Xóa tìm kiếm"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </motion.button>
              )}
            </AnimatePresence>
          </div>

          {/* Thống kê kết quả tìm kiếm */}
          <div className="mt-3.5 text-xs sm:text-sm text-[#7D5A4C]">
            {searchQuery.trim() ? (
              <span>
                Tìm thấy <strong className="text-[#3E2723] font-semibold">{filteredConcepts.length}</strong> kết quả cho &ldquo;{searchQuery.trim()}&rdquo;
              </span>
            ) : (
              <span>Tổng số <strong className="text-[#3E2723] font-semibold">{filteredConcepts.length}</strong> mục từ</span>
            )}
          </div>
        </motion.header>

        {/* 2. Main concept list */}
        <section className="flex-1">
          {filteredConcepts.length === 0 ? (
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="text-center py-14 px-6 bg-white/70 border border-[#EADBC8] rounded-xl shadow-xs"
            >
              <p className="text-base font-semibold text-[#3E2723] mb-1.5">
                Không tìm thấy khái niệm phù hợp
              </p>
              <p className="text-sm text-[#7D5A4C] mb-5">
                Vui lòng thử từ khóa khác hoặc kiểm tra lại chính tả.
              </p>
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="inline-flex items-center px-4 py-2 text-xs sm:text-sm font-medium rounded-lg text-[#FAF1E6] bg-[#B88A72] hover:bg-[#7D5A4C] transition-colors shadow-xs"
              >
                Xem tất cả khái niệm
              </button>
            </motion.div>
          ) : (
            <div className="space-y-6">
              {groupedConcepts.map((group, groupIdx) => (
                <motion.div
                  key={`${group.letter}-${groupIdx}`}
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.25,
                    delay: shouldReduceMotion ? 0 : Math.min(groupIdx * 0.025, 0.15),
                    ease: "easeOut",
                  }}
                  className="space-y-2"
                >
                  {/* Tiêu đề chữ cái đại diện nhóm */}
                  <div className="flex items-center gap-3 pt-2">
                    <span className="inline-flex items-center justify-center w-7 h-7 rounded-md bg-[#EADBC8]/70 text-[#3E2723] font-bold text-xs tracking-wider border border-[#EADBC8]">
                      {group.letter}
                    </span>
                    <div className="h-px flex-1 bg-[#EADBC8]/80" />
                  </div>

                  {/* Danh sách các concept trong nhóm */}
                  <div className="bg-white/70 border border-[#EADBC8] rounded-xl shadow-xs divide-y divide-[#EADBC8]/50 overflow-hidden">
                    {group.items.map((concept) => (
                      <Link
                        key={concept.id}
                        href={`/concept/${concept.id}`}
                        className="group flex items-start justify-between gap-3 sm:gap-4 p-4 sm:p-5 transition-all duration-150 hover:bg-[#EADBC8]/30 hover:translate-x-0.5 focus-visible:bg-[#EADBC8]/40 focus-visible:outline-none"
                      >
                        <div className="flex-1 min-w-0">
                          <div className="flex items-baseline gap-2">
                            <h2 className="font-semibold text-base sm:text-lg text-[#3E2723] group-hover:text-[#7D5A4C] transition-colors leading-snug">
                              <HighlightText text={concept.name} query={searchQuery} />
                            </h2>
                            <span className="text-xs text-[#7D5A4C]/75 font-mono">
                              #{concept.order}
                            </span>
                          </div>
                          <p className="mt-1.5 text-sm text-[#3E2723]/80 line-clamp-2 leading-relaxed">
                            <HighlightText
                              text={getDefinitionPreview(concept.definition)}
                              query={searchQuery}
                            />
                          </p>
                        </div>
                        <div className="pt-1 text-[#B88A72] group-hover:text-[#7D5A4C] group-hover:translate-x-1 transition-all duration-150 flex-shrink-0">
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </section>

        {/* Footer */}
        <footer className="mt-14 pt-6 border-t border-[#EADBC8] flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[#7D5A4C]">
          <div>Sổ Tay Mục Từ Ngôn Ngữ Học Tiếng Việt &bull; 57 Khái niệm</div>
          <div className="text-right">
            <span className="opacity-75">Thực hiện: </span>
            <span className="font-medium text-[#3E2723]">Nguyễn Ngọc Đan Linh, Trần Nga My, Đặng Thu Ngân</span>
          </div>
        </footer>
      </main>
    </div>
  );
}
