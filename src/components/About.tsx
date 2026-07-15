"use client";

import { Reveal, RevealHeading, RevealLine, RevealSlide } from "./Reveal";
import HangingProfile from "./HangingProfile";
import { aboutParagraphs, aboutFacts } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="section-pad border-t border-line">
      <RevealSlide className="flex items-center gap-4 mb-6">
        <span className="index-label">01</span>
        <span className="index-label">/ About</span>
        <div className="flex-1 h-px bg-line" />
      </RevealSlide>

      <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-16 items-start">
        <div className="order-2 lg:order-1">
          <HangingProfile />
          <div className="grid grid-cols-2 gap-5 mt-10 max-w-[340px] mx-auto lg:mx-0">
            {aboutFacts.map((f) => (
              <Reveal key={f.label} className="border-t border-line pt-3">
                <b className="block text-sm font-medium mb-0.5">{f.value}</b>
                <span className="font-mono text-[0.65rem] text-muted uppercase tracking-wider">{f.label}</span>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <RevealLine delay={0.1} />
          <RevealHeading
            text="Turning complex problems into intelligent digital products."
            className="font-display font-semibold text-[clamp(2rem,4vw,3.2rem)] leading-[1.08] tracking-tight mb-5"
          />
          <div className="space-y-5">
            {aboutParagraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <p
                  className="text-muted text-[1.02rem] leading-[1.85] font-light [&_b]:text-fg [&_b]:font-medium"
                  dangerouslySetInnerHTML={{ __html: p }}
                />
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2} className="mt-10 border-l-2 border-accent pl-6">
            <p className="font-display text-xl md:text-2xl font-medium leading-snug">
              Building intelligent software that solves real-world problems through AI, clean architecture, and modern engineering.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
