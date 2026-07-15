"use client";

import { useState } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight, Plus } from "lucide-react";
import { GithubIcon } from "./icons/BrandIcons";
import NetworkCanvas from "./NetworkCanvas";
import { Reveal, RevealHeading, RevealLine, RevealSlide } from "./Reveal";
import { projects, profile } from "@/data/portfolio";

export default function Projects() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [expanded, setExpanded] = useState<number | null>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { damping: 24, stiffness: 220 });
  const sy = useSpring(my, { damping: 24, stiffness: 220 });

  return (
    <section
      id="projects"
      className="section-pad border-t border-line"
      onMouseMove={(e) => {
        mx.set(e.clientX);
        my.set(e.clientY);
      }}
    >
      <RevealSlide className="flex items-center gap-4 mb-6">
        <span className="index-label">04</span>
        <span className="index-label">/ Projects</span>
        <div className="flex-1 h-px bg-line" />
      </RevealSlide>

      <RevealLine delay={0.05} />
      <RevealHeading
        text="Selected work."
        className="font-display font-semibold text-[clamp(2rem,4.4vw,3.6rem)] leading-[1.05] tracking-tight mb-3"
      />
      <Reveal delay={0.1}>
        <p className="text-muted text-[1.02rem] leading-[1.7] max-w-[640px] font-light mb-8">
          Production platforms and experiments spanning enterprise SaaS, AI agents, and full-stack applications.
          Click a row for details.
        </p>
      </Reveal>

      <div className="flex flex-col">
        {projects.map((p, i) => {
          const isOpen = expanded === i;
          return (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: (i % 4) * 0.05 }}
              className="border-t border-line"
            >
              <div
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => setExpanded(isOpen ? null : i)}
                data-cursor={isOpen ? "Close" : "Details"}
                className="group py-8 md:py-10 grid grid-cols-1 md:grid-cols-[70px_1fr_auto_auto] gap-3 md:gap-6 items-center cursor-pointer transition-colors"
              >
                <span className="font-mono text-xs text-muted">{String(i + 1).padStart(2, "0")}</span>

                <div>
                  <h3
                    className={`font-display font-semibold text-[7vw] md:text-[3.2vw] leading-[1.02] tracking-tight transition-all duration-500 ${
                      isOpen ? "text-accent translate-x-3" : "group-hover:text-accent group-hover:translate-x-3"
                    }`}
                  >
                    {p.name}
                  </h3>
                  <p className="font-mono text-[0.72rem] text-muted uppercase tracking-wider mt-2">{p.tagline}</p>
                  <div
                    className={`flex flex-wrap gap-2 mt-4 transition-opacity duration-300 ${
                      isOpen ? "opacity-100" : "md:opacity-0 md:group-hover:opacity-100"
                    }`}
                  >
                    {p.stack.slice(0, 5).map((s) => (
                      <span key={s} className="font-mono text-[0.64rem] border border-line rounded-full px-2.5 py-1 text-muted">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2.5 self-start md:self-center">
                  {p.liveUrl && (
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      data-cursor={p.linkLabel || "Visit"}
                      className="w-10 h-10 rounded-full border border-line flex items-center justify-center hover:border-fg transition-colors"
                      aria-label={p.linkLabel || "Visit project"}
                    >
                      <ArrowUpRight size={16} />
                    </a>
                  )}
                  {!p.hideRepo && (
                    <a
                      href={p.repoUrl || profile.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      data-cursor="Code"
                      className="w-10 h-10 rounded-full border border-line flex items-center justify-center hover:border-fg transition-colors"
                      aria-label="View on GitHub"
                    >
                      <GithubIcon size={15} />
                    </a>
                  )}
                </div>

                <span className="self-start md:self-center w-10 h-10 rounded-full border border-line flex items-center justify-center flex-none">
                  <motion.span animate={{ rotate: isOpen ? 135 : 0 }} transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}>
                    <Plus size={16} />
                  </motion.span>
                </span>
              </div>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pb-10 md:pl-[94px] grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-8">
                      <div>
                        <p className="text-muted font-light text-[0.98rem] leading-[1.75] mb-5 max-w-[560px]">
                          {p.description}
                        </p>
                        <ul className="flex flex-col gap-2.5">
                          {p.highlights.map((h) => (
                            <li key={h} className="text-[0.9rem] font-light flex gap-3 leading-[1.6]">
                              <span className="text-accent flex-none">▹</span>
                              <span className="[&_b]:text-fg [&_b]:font-medium" dangerouslySetInnerHTML={{ __html: h }} />
                            </li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-2 mt-6">
                          {p.stack.map((s) => (
                            <span key={s} className="font-mono text-[0.64rem] border border-line rounded-full px-2.5 py-1 text-muted">
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="h-[200px] md:h-full rounded-lg overflow-hidden border border-line relative">
                        <NetworkCanvas count={p.featured ? 30 : 20} linkDistance={100} />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="font-display text-xl font-bold text-fg/10 text-center px-6">{p.name}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* Cursor-follow preview panel (desktop only) */}
      <motion.div
        style={{ left: sx, top: sy }}
        className="hidden lg:block fixed z-[300] pointer-events-none -translate-x-1/2 -translate-y-1/2"
      >
        <AnimatePresence>
          {hovered !== null && expanded === null && (
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="w-[320px] h-[220px] rounded-lg overflow-hidden border border-line bg-bg relative"
            >
              <NetworkCanvas count={hovered !== null && projects[hovered].featured ? 30 : 20} linkDistance={100} />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-display text-2xl font-bold text-fg/10 text-center px-6">
                  {hovered !== null ? projects[hovered].name : ""}
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
