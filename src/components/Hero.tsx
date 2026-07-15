"use client";

import { motion, Variants } from "framer-motion";
import Marquee from "./Marquee";
import RotatingBadge from "./RotatingBadge";
import SpiderWeb from "./SpiderWeb";
import { rotatingRoles, profile } from "@/data/portfolio";

const reveal: Variants = {
  hidden: { y: "110%" },
  visible: (i: number) => ({
    y: "0%",
    transition: { duration: 1, delay: 0.15 + i * 0.07, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

const nameReveal: Variants = {
  hidden: { y: "115%" },
  visible: { y: "0%", transition: { duration: 1.1, delay: 0.55, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center pt-24 pb-10 px-6 md:px-10 overflow-hidden">
      {/* Animated spider-web / data-transmission graphic filling the empty space */}
      <div className="absolute inset-0 opacity-[0.75] pointer-events-none spider-web-wrap">
        <SpiderWeb />
      </div>

      <div className="relative flex justify-between items-start mb-4 md:mb-6">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.3, duration: 0.6 }}
          className="index-label max-w-[220px]"
        >
          AI Software Engineer &amp; Full‑Stack Developer {profile.location}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.5, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="hidden sm:block"
        >
          <RotatingBadge />
        </motion.div>
      </div>

      {/* Big name masthead */}
      <div className="relative overflow-hidden">
        <motion.div
          variants={nameReveal}
          initial="hidden"
          animate="visible"
          className="font-display font-semibold tracking-tight leading-[0.9] text-[9.5vw] md:text-[5.4vw] gradient-text"
        >
          Harsh Vishnoi
        </motion.div>
      </div>

      <h1 className="relative font-display font-semibold leading-[0.86] tracking-tight text-[11.5vw] md:text-[7.6vw] mt-1 md:mt-2">
        <div className="overflow-hidden">
          <motion.div custom={0} variants={reveal} initial="hidden" animate="visible">
            Building
          </motion.div>
        </div>
        <div className="overflow-hidden flex items-baseline gap-4">
          <motion.div custom={1} variants={reveal} initial="hidden" animate="visible" className="stroke-text">
            Intelligent
          </motion.div>
        </div>
        <div className="overflow-hidden">
          <motion.div custom={2} variants={reveal} initial="hidden" animate="visible">
            Software.
          </motion.div>
        </div>
      </h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.9, duration: 0.7 }}
        className="relative flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mt-10 md:mt-14"
      >
        <p className="max-w-[420px] text-muted text-[1.02rem] leading-[1.7] font-light">
          I engineer modern AI-powered applications that combine scalable backend systems, intuitive user
          experiences, and production-ready AI solutions.
        </p>
        <div className="flex gap-3">
          <a
            href="#projects"
            onClick={(e) => { e.preventDefault(); document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }); }}
            data-cursor="View"
            className="font-mono text-xs uppercase tracking-wider px-6 py-4 rounded-full bg-accent text-white hover:opacity-85 transition-opacity"
          >
            View Work
          </a>
          <a
            href={profile.resume}
            target="_blank"
            data-cursor="PDF"
            className="font-mono text-xs uppercase tracking-wider px-6 py-4 rounded-full border border-line hover:border-fg transition-colors"
          >
            Resume
          </a>
        </div>
      </motion.div>

      {/* Scroll indicator — above marquee */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.8, duration: 0.7 }}
        className="relative flex flex-col items-center gap-2 mt-8 md:mt-10"
      >
        {/* Mouse outline */}
        <div className="w-6 h-9 rounded-full border-2 border-muted/50 flex justify-center pt-1.5">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-2 rounded-full bg-accent"
          />
        </div>
        <span className="font-mono text-[0.6rem] uppercase tracking-widest text-muted/50">Scroll</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: 0.8 }}
        className="relative mt-4 border-y border-line py-4"
      >
        <Marquee duration={26}>
          {rotatingRoles.map((r, i) => (
            <span key={i} className="flex items-center gap-8 font-display text-2xl md:text-4xl font-medium text-muted/60">
              {r}
              <span className="text-accent text-xl">✦</span>
            </span>
          ))}
        </Marquee>
      </motion.div>

    </section>
  );
}
