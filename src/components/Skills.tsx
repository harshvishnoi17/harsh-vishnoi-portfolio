"use client";

import { motion } from "framer-motion";
import { Code2, BrainCircuit, LayoutTemplate, Server, Database, Settings2 } from "lucide-react";
import { Reveal, RevealHeading, RevealStagger, staggerItem } from "./Reveal";
import SkillCard from "./SkillCard";
import { skillCategories } from "@/data/portfolio";

const icons = [Code2, BrainCircuit, LayoutTemplate, Server, Database, Settings2];

export default function Skills() {
  return (
    <section id="skills" className="section-pad border-t border-line">
      <div className="flex items-center gap-4 mb-16">
        <span className="index-label">02</span>
        <span className="index-label">/ Skills</span>
        <div className="flex-1 h-px bg-line" />
      </div>

      <RevealHeading
        text="Technologies I work with, end to end."
        className="font-display font-semibold text-[clamp(2rem,4.4vw,3.6rem)] leading-[1.05] tracking-tight mb-5"
      />
      <Reveal delay={0.1}>
        <p className="text-muted text-[1.02rem] leading-[1.7] max-w-[640px] font-light mb-3">
          From pixels to production — frontend interfaces, backend systems, AI pipelines, and the cloud
          infrastructure that keeps them running.
        </p>
      </Reveal>
      <Reveal delay={0.15}>
        <p className="font-mono text-xs text-muted mb-12">Hover a card to flip it and see the full skill list.</p>
      </Reveal>

      <RevealStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line">
        {skillCategories.map((cat, i) => (
          <motion.div key={cat.label} variants={staggerItem} className="bg-bg">
            <SkillCard data={cat} Icon={icons[i]} />
          </motion.div>
        ))}
      </RevealStagger>
    </section>
  );
}
