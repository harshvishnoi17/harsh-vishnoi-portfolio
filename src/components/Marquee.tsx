"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

export default function Marquee({
  children,
  duration = 22,
  reverse = false,
  className = "",
  gap = "3rem",
}: {
  children: ReactNode;
  duration?: number;
  reverse?: boolean;
  className?: string;
  gap?: string;
}) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        className="flex w-max items-center"
        style={{ gap }}
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
      >
        <div className="flex items-center" style={{ gap }}>
          {children}
        </div>
        <div className="flex items-center" style={{ gap }} aria-hidden="true">
          {children}
        </div>
      </motion.div>
    </div>
  );
}
