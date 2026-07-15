"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award } from "lucide-react";
import { Reveal, RevealHeading, RevealLine, RevealSlide } from "./Reveal";
import { timeline, certifications } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="section-pad border-t border-line">
      <RevealSlide className="flex items-center gap-4 mb-6">
        <span className="index-label">03</span>
        <span className="index-label">/ Experience</span>
        <div className="flex-1 h-px bg-line" />
      </RevealSlide>

      <RevealLine delay={0.05} />
      <RevealHeading
        text="Where I've been building."
        className="font-display font-semibold text-[clamp(2rem,4.4vw,3.6rem)] leading-[1.05] tracking-tight mb-8"
      />

      <div className="flex flex-col">
        {timeline.map((entry, i) => (
          <motion.div
            key={entry.role}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 md:grid-cols-[80px_1fr_1.4fr] gap-4 md:gap-10 py-10 border-t border-line items-start"
          >
            <span className="font-mono text-xs text-muted">{entry.period}</span>

            <div>
              <div className="flex items-center gap-2.5 mb-2 text-accent">
                {entry.type === "work" ? <Briefcase size={16} /> : <GraduationCap size={16} />}
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-semibold leading-tight">{entry.role}</h3>
              <p className="text-muted text-sm mt-1.5">{entry.org} · {entry.location}</p>
            </div>

            <ul className="flex flex-col gap-3 max-w-[640px]">
              {entry.bullets.map((b, bi) => (
                <li key={bi} className="text-muted font-light text-[0.96rem] leading-[1.6] flex gap-3">
                  <span className="text-accent font-mono flex-none">/</span>
                  <span className="[&_b]:text-fg [&_b]:font-medium" dangerouslySetInnerHTML={{ __html: b }} />
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <Reveal delay={0.1} className="mt-4 border-t border-line pt-10">
        <div className="flex items-center gap-2.5 mb-6">
          <Award size={16} className="text-accent" />
          <h4 className="font-display text-lg font-semibold">Certifications</h4>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
          {certifications.map((c) => (
            <div key={c} className="text-muted text-sm font-light flex gap-2.5 items-start">
              <span className="w-1 h-1 rounded-full bg-accent mt-2 flex-none" />
              {c}
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
