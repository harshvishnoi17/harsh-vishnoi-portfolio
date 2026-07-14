"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [label, setLabel] = useState("");
  const [active, setActive] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { damping: 26, stiffness: 300, mass: 0.5 });
  const sy = useSpring(y, { damping: 26, stiffness: 300, mass: 0.5 });

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time viewport check on mount
    setIsDesktop(window.matchMedia("(min-width: 901px)").matches);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const el = document.elementFromPoint(e.clientX, e.clientY);
      const target = el?.closest<HTMLElement>("[data-cursor]");
      if (target) {
        setActive(true);
        setLabel(target.dataset.cursor || "");
      } else {
        setActive(false);
        setLabel("");
      }
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [isDesktop, x, y]);

  if (!isDesktop) return null;

  return (
    <motion.div
      style={{ left: sx, top: sy }}
      className="fixed z-[9999] pointer-events-none -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
    >
      <motion.div
        animate={{
          width: active ? (label ? 92 : 14) : 8,
          height: active ? (label ? 92 : 14) : 8,
          backgroundColor: active ? "var(--color-accent)" : "var(--fg)",
        }}
        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
        className="rounded-full flex items-center justify-center"
      >
        {label && (
          <motion.span
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            className="font-mono text-[0.62rem] uppercase tracking-wider text-[#0b0b0c] text-center px-1"
          >
            {label}
          </motion.span>
        )}
      </motion.div>
    </motion.div>
  );
}
