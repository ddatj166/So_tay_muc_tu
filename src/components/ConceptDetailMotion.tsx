"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

interface ConceptDetailMotionProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Component bọc animation vào trang chi tiết khái niệm
 * - Xuất hiện nhẹ nhàng (opacity và translateY nhỏ)
 * - Tốc độ nhanh (300ms), không làm người dùng phải chờ đợi
 * - Tự động tắt nếu người dùng bật chế độ prefers-reduced-motion
 */
export function ConceptDetailMotion({
  children,
  className,
}: ConceptDetailMotionProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.main
      initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={
        shouldReduceMotion
          ? { duration: 0 }
          : { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }
      }
      className={className}
    >
      {children}
    </motion.main>
  );
}

export default ConceptDetailMotion;
