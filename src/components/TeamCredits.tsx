"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

/**
 * Thẻ hiển thị tên các thành viên thực hiện ở góc phải màn hình
 * Thiết kế trang nhã, màu sắc ấm áp đồng bộ với bảng màu từ điển (#FAF1E6, #EADBC8, #B88A72, #7D5A4C, #3E2723)
 * Hỗ trợ thu gọn/mở rộng linh hoạt để đảm bảo trải nghiệm đọc thoải mái nhất trên mọi thiết bị
 */
export function TeamCredits() {
  const [isOpen, setIsOpen] = useState(true);
  const shouldReduceMotion = useReducedMotion();

  const members = [
    "Nguyễn Ngọc Đan Linh",
    "Trần Nga My",
    "Đặng Thu Ngân",
  ];

  return (
    <aside
      aria-label="Thành viên thực hiện"
      className="fixed bottom-4 right-4 z-40 select-none print:hidden"
    >
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 12, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="bg-[#FAF1E6]/95 backdrop-blur-md border border-[#EADBC8] shadow-sm rounded-xl overflow-hidden min-w-[190px]"
      >
        {/* Thanh tiêu đề có nút thu gọn/mở rộng */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between gap-2.5 px-3.5 py-2 text-left hover:bg-[#EADBC8]/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B88A72]/40"
          title={isOpen ? "Thu gọn danh sách thành viên" : "Mở rộng danh sách thành viên"}
        >
          <div className="flex items-center gap-1.5">
            <span
              className="w-1.5 h-1.5 rounded-full bg-[#B88A72]"
              aria-hidden="true"
            />
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#7D5A4C]">
              Thành viên thực hiện
            </span>
          </div>
          <svg
            className={`w-3.5 h-3.5 text-[#7D5A4C] transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {/* Danh sách tên thành viên */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={shouldReduceMotion ? false : { height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={shouldReduceMotion ? undefined : { height: 0, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              <div className="px-3.5 pb-2.5 pt-1 border-t border-[#EADBC8]/60">
                <ul className="text-xs font-medium text-[#3E2723] space-y-1 leading-snug">
                  {members.map((name) => (
                    <li key={name} className="flex items-center gap-1.5">
                      <span className="text-[#B88A72] text-[10px]">&bull;</span>
                      <span>{name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </aside>
  );
}

export default TeamCredits;
