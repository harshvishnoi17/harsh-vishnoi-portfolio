"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { profile } from "@/data/portfolio";

export default function HangingProfile() {
  const constraintsRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-120, 0, 120], [-14, 0, 14]);
  const springRotate = useSpring(rotate, { stiffness: 220, damping: 14 });
  const springX = useSpring(x, { stiffness: 200, damping: 12 });

  return (
    <div ref={constraintsRef} className="relative pt-14 select-none" data-cursor="Drag me">
      {/* hook */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-fg bg-bg z-10" />
      <svg className="absolute top-2 left-1/2 -translate-x-1/2 w-px h-12 overflow-visible" aria-hidden="true">
        <motion.line
          x1="0"
          y1="0"
          x2={springX}
          y2="48"
          stroke="var(--fg)"
          strokeWidth="1"
        />
      </svg>

      <motion.div
        drag
        dragConstraints={constraintsRef}
        dragElastic={0.15}
        style={{ x: springX, rotate: springRotate, transformOrigin: "top center" }}
        onDrag={(_, info) => x.set(info.offset.x)}
        onDragEnd={() => x.set(0)}
        whileTap={{ cursor: "grabbing" }}
        className="relative mt-12 w-full max-w-[320px] mx-auto cursor-grab rounded-sm overflow-hidden border border-line bg-surface"
      >
        <Image
          src={profile.portrait}
          alt={profile.name}
          width={480}
          height={720}
          className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-[filter] duration-500"
          priority
          draggable={false}
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-bg/80 to-transparent">
          <span className="font-mono text-[0.65rem] uppercase tracking-wider text-fg/80">{profile.name}</span>
        </div>
      </motion.div>
    </div>
  );
}
