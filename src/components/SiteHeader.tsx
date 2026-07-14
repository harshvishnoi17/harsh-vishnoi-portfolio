"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import ThemeSwitcher from "./ThemeSwitcher";
import { navLinks, profile } from "@/data/portfolio";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 40));

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[500] flex items-center justify-between px-6 md:px-10 py-5 transition-colors duration-300 ${
          scrolled && !open ? "backdrop-blur-md bg-bg/70 border-b border-line" : ""
        }`}
      >
        <a href="#hero" className="font-display font-semibold text-lg tracking-tight" data-cursor="Home">
          HV<span className="text-accent">.</span>
        </a>
        <div className="flex items-center gap-4">
          <ThemeSwitcher />
          <button
            onClick={() => setOpen((o) => !o)}
            data-cursor={open ? "Close" : "Menu"}
            className="font-mono text-xs uppercase tracking-wider flex items-center gap-3 border border-line rounded-full px-4 py-2.5"
          >
            <span className="relative w-4 h-3 flex flex-col justify-between">
              <motion.span
                animate={{ rotate: open ? 45 : 0, y: open ? 5 : 0 }}
                className="block h-px w-full bg-fg origin-center"
              />
              <motion.span
                animate={{ opacity: open ? 0 : 1 }}
                className="block h-px w-full bg-fg"
              />
              <motion.span
                animate={{ rotate: open ? -45 : 0, y: open ? -5 : 0 }}
                className="block h-px w-full bg-fg origin-center"
              />
            </span>
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[400] bg-bg flex flex-col justify-between px-6 md:px-14 pt-28 pb-12"
          >
            <nav className="flex flex-col">
              {navLinks.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ y: 60, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.15 + i * 0.06, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  data-cursor="View"
                  className="group flex items-baseline gap-5 py-3 md:py-4 border-b border-line"
                >
                  <span className="font-mono text-xs text-muted w-8">0{i + 1}</span>
                  <span className="font-display font-semibold text-[10vw] md:text-[5.2vw] leading-none tracking-tight group-hover:text-accent transition-colors">
                    {l.label}
                  </span>
                </motion.a>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap justify-between items-end gap-8 font-mono text-xs uppercase tracking-wider text-muted"
            >
              <div className="flex gap-6">
                <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-fg transition-colors">GitHub</a>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-fg transition-colors">LinkedIn</a>
                <a href={`mailto:${profile.email}`} className="hover:text-fg transition-colors">Email</a>
              </div>
              <span>{profile.location}</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
