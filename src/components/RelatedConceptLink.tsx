"use client";

import React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

interface RelatedConceptLinkProps {
  id: string;
  name: string;
}

/**
 * Thẻ liên kết khái niệm liên quan kèm tương tác hover mượt mà
 * - Nhấc nhẹ khi hover (translateY -1px)
 * - Mũi tên trượt nhẹ sang phải
 * - Phản hồi nhấn (tap) tinh tế
 * - Tự động tắt hiệu ứng khi prefers-reduced-motion được bật
 */
export function RelatedConceptLink({ id, name }: RelatedConceptLinkProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      whileHover={shouldReduceMotion ? undefined : { y: -1 }}
      whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
      transition={{ duration: 0.15, ease: "easeOut" }}
      className="inline-flex"
    >
      <Link
        href={`/concept/${id}`}
        className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white/70 border border-[#EADBC8] text-sm font-medium text-[#3E2723] hover:bg-[#EADBC8]/50 hover:border-[#B88A72] hover:text-[#7D5A4C] transition-colors shadow-xs group"
      >
        <span>{name}</span>
        <span
          className="text-[#B88A72] group-hover:text-[#7D5A4C] group-hover:translate-x-1 transition-transform duration-150"
          aria-hidden="true"
        >
          →
        </span>
      </Link>
    </motion.div>
  );
}

export default RelatedConceptLink;
