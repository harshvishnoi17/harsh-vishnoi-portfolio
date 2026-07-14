"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function RotatingBadge({ text = "AVAILABLE FOR WORK" }: { text?: string }) {
  const full = `${text} • ${text} • `;
  const id = "circlePath";

  return (
    <div className="relative w-[110px] h-[110px] flex-none" data-cursor="Contact">
      <motion.svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
      >
        <defs>
          <path id={id} d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
        </defs>
        <text fontSize="8.2" fill="var(--fg)" fontFamily="var(--font-mono)" letterSpacing="1.5">
          <textPath href={`#${id}`} startOffset="0%">
            {full}
          </textPath>
        </text>
      </motion.svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="w-9 h-9 rounded-full bg-accent flex items-center justify-center">
          <ArrowUpRight size={16} className="text-[#0b0b0c]" />
        </span>
      </div>
    </div>
  );
}
