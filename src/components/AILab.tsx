"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal, RevealHeading, RevealLine, RevealSlide } from "./Reveal";
import Marquee from "./Marquee";
import { aiLabItems, streamTokens } from "@/data/portfolio";

const focusAreas = [
  {
    id: "agents",
    tag: "01",
    title: "Multi-Agent Systems",
    icon: "⬡",
    desc: "Orchestrating networks of specialized AI agents using LangGraph — each with distinct roles, memory, and tool access — to solve complex multi-step problems autonomously.",
    tokens: ["graph.invoke()", "→ planner", "→ executor", "→ critic", "state.update()"],
  },
  {
    id: "rag",
    tag: "02",
    title: "RAG & Knowledge Systems",
    icon: "◎",
    desc: "Building retrieval-augmented pipelines with semantic search, vector embeddings, and re-ranking to ground LLM responses in real, up-to-date context.",
    tokens: ["embed(query)", "→ retrieve", "top_k=5", "→ rerank", "→ generate"],
  },
  {
    id: "voice",
    tag: "03",
    title: "AI Voice Agents",
    icon: "◈",
    desc: "Real-time conversational voice AI using Amazon Nova Sonic — streaming audio in/out with intent classification, guardrails, and tool-calling capabilities.",
    tokens: ["stream.audio()", "→ transcribe", "→ intent", "→ respond", "latency<200ms"],
  },
  {
    id: "mcp",
    tag: "04",
    title: "MCP Tool Servers",
    icon: "⬢",
    desc: "Designing Model Context Protocol servers that expose enterprise APIs as AI-callable tools — bridging LLMs with real business systems at scale.",
    tokens: ["@mcp.tool()", "97 tools", "→ P6 API", "→ Unifier", "encrypted_creds"],
  },
  {
    id: "saas",
    tag: "05",
    title: "AI-Powered SaaS",
    icon: "◇",
    desc: "Shipping production AI features inside multi-tenant SaaS platforms — handling auth, rate limiting, tenant isolation, and observability at enterprise scale.",
    tokens: ["tenant_id", "→ route", "→ llm_call", "→ cache", "audit_log()"],
  },
  {
    id: "workflow",
    tag: "06",
    title: "Workflow Orchestration",
    icon: "⟁",
    desc: "Automating end-to-end business workflows with conditional branching, human-in-the-loop checkpoints, and resilient retry logic powered by LangGraph state machines.",
    tokens: ["StateGraph()", "→ branch", "human_review?", "→ approve", "→ finalize"],
  },
];

export default function AILab() {
  const [active, setActive] = useState<string | null>(null);
  const activeCard = focusAreas.find((f) => f.id === active);

  return (
    <section id="ai-lab" className="section-pad border-t border-line">
      <RevealSlide className="flex items-center gap-4 mb-6">
        <span className="index-label">05</span>
        <span className="index-label">/ AI Lab</span>
        <div className="flex-1 h-px bg-line" />
      </RevealSlide>

      <div className="flex flex-col gap-3 mb-8">
        <RevealLine delay={0.05} />
        <RevealHeading
          text="Exploring the future of intelligent software."
          className="font-display font-semibold text-[clamp(2rem,4.4vw,3.6rem)] leading-[1.05] tracking-tight"
        />
        <Reveal delay={0.1}>
          <p className="text-muted text-[1.02rem] leading-[1.7] font-light max-w-[640px]">
            My experimental workspace — where I research, prototype, and build next-generation AI systems beyond
            production projects.
          </p>
        </Reveal>
      </div>

      {/* Focus area cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line mb-0">
        {focusAreas.map((f, i) => (
          <motion.div
            key={f.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            onClick={() => setActive(active === f.id ? null : f.id)}
            className={`relative bg-bg p-6 cursor-pointer group transition-colors duration-300 ${
              active === f.id ? "bg-surface" : "hover:bg-surface"
            }`}
          >
            {/* Glow on active */}
            {active === f.id && (
              <motion.div
                layoutId="card-glow"
                className="absolute inset-0 bg-accent/5 pointer-events-none"
                transition={{ duration: 0.3 }}
              />
            )}

            <div className="flex items-start justify-between mb-4">
              <span className="font-mono text-xs text-muted">{f.tag}</span>
              <span
                className={`text-2xl transition-colors duration-300 ${
                  active === f.id ? "text-accent" : "text-muted/40 group-hover:text-accent/60"
                }`}
              >
                {f.icon}
              </span>
            </div>

            <h3
              className={`font-display font-semibold text-lg leading-tight mb-3 transition-colors duration-300 ${
                active === f.id ? "text-accent" : "group-hover:text-accent"
              }`}
            >
              {f.title}
            </h3>

            <AnimatePresence initial={false}>
              {active === f.id ? (
                <motion.div
                  key="expanded"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <p className="text-muted text-sm leading-[1.7] font-light mb-4">{f.desc}</p>
                  {/* Token stream */}
                  <div className="flex flex-wrap gap-1.5">
                    {f.tokens.map((t, ti) => (
                      <motion.span
                        key={t}
                        initial={{ opacity: 0, x: -6 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: ti * 0.07 }}
                        className="font-mono text-[0.62rem] text-accent/80 bg-accent/8 border border-accent/20 rounded px-2 py-0.5"
                      >
                        {t}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.p
                  key="collapsed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-muted text-sm leading-[1.6] font-light line-clamp-2"
                >
                  {f.desc}
                </motion.p>
              )}
            </AnimatePresence>

            {/* Click hint */}
            <div className="mt-4 flex items-center gap-1.5">
              <motion.span
                animate={{ rotate: active === f.id ? 45 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-muted/40 text-lg leading-none"
              >
                +
              </motion.span>
              <span className="font-mono text-[0.6rem] text-muted/40 uppercase tracking-wider">
                {active === f.id ? "Collapse" : "Expand"}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Live token stream bar */}
      <Reveal delay={0.2}>
        <div className="border border-t-0 border-line bg-surface px-5 py-3 flex items-center gap-3 mb-0">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse flex-none" />
          <span className="font-mono text-[0.65rem] text-muted uppercase tracking-widest flex-none">Live stream</span>
          <div className="flex-1 overflow-hidden">
            <Marquee duration={18} gap="2rem">
              {streamTokens.map((t) => (
                <span key={t} className="font-mono text-[0.72rem] text-accent/60">
                  {t}
                </span>
              ))}
            </Marquee>
          </div>
        </div>
      </Reveal>

      {/* Scrolling tech marquee */}
      <div className="border-x border-b border-line py-5 flex flex-col gap-3">
        <Marquee duration={28}>
          {aiLabItems.slice(0, 7).map((item) => (
            <span
              key={item}
              className="font-display text-xl md:text-2xl font-medium text-muted/40 hover:text-accent transition-colors flex items-center gap-5"
            >
              {item}
              <span className="text-accent/60 text-sm">◆</span>
            </span>
          ))}
        </Marquee>
        <Marquee duration={32} reverse>
          {aiLabItems.slice(7).map((item) => (
            <span
              key={item}
              className="font-display text-xl md:text-2xl font-medium text-muted/40 hover:text-accent transition-colors flex items-center gap-5"
            >
              {item}
              <span className="text-accent/60 text-sm">◆</span>
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
