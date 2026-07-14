"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const start = Date.now();
    const duration = 2000;
    const raf = () => {
      const elapsed = Date.now() - start;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setCount(pct);
      if (pct < 100) requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    const timer = setTimeout(() => {
      setDone(true);
      document.body.style.overflow = "auto";
    }, 2300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ y: "-100%" }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[10000] bg-bg text-fg flex flex-col justify-between p-8 md:p-12"
        >
          <div className="flex justify-between items-start font-mono text-xs uppercase tracking-wider text-muted">
            <span>Harsh Vishnoi</span>
            <span>AI Engineer / Full-Stack</span>
          </div>

          <div className="flex items-end justify-between">
            <span className="font-display font-semibold text-[16vw] leading-[0.85] tracking-tight">
              {String(count).padStart(2, "0")}
            </span>
            <span className="font-display font-semibold text-[4vw] mb-2 text-muted">%</span>
          </div>

          <div className="w-full h-px bg-line relative overflow-hidden">
            <motion.div
              className="absolute left-0 top-0 h-full bg-accent"
              style={{ width: `${count}%` }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
