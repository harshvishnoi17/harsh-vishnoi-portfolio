"use client";

import { Reveal, RevealHeading } from "./Reveal";
import Marquee from "./Marquee";
import { aiLabItems } from "@/data/portfolio";

const rowA = aiLabItems.slice(0, 6);
const rowB = aiLabItems.slice(6);

export default function AILab() {
  return (
    <section id="ai-lab" className="section-pad border-t border-line">
      <div className="flex items-center gap-4 mb-16">
        <span className="index-label">05</span>
        <span className="index-label">/ AI Lab</span>
        <div className="flex-1 h-px bg-line" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-10 items-end mb-14">
        <RevealHeading
          text="Exploring the future of intelligent software."
          className="font-display font-semibold text-[clamp(2rem,4.4vw,3.6rem)] leading-[1.05] tracking-tight"
        />
        <Reveal delay={0.1}>
          <p className="text-muted text-[1.02rem] leading-[1.7] font-light">
            My experimental workspace — where I research, prototype, and build next-generation AI systems beyond
            production projects.
          </p>
        </Reveal>
      </div>

      <div className="border-y border-line py-6 flex flex-col gap-4">
        <Marquee duration={30}>
          {rowA.map((item) => (
            <span
              key={item}
              className="font-display text-3xl md:text-5xl font-medium text-muted/50 hover:text-accent transition-colors flex items-center gap-6"
            >
              {item}
              <span className="text-accent text-lg">◆</span>
            </span>
          ))}
        </Marquee>
        <Marquee duration={34} reverse>
          {rowB.map((item) => (
            <span
              key={item}
              className="font-display text-3xl md:text-5xl font-medium text-muted/50 hover:text-accent transition-colors flex items-center gap-6"
            >
              {item}
              <span className="text-accent text-lg">◆</span>
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
