"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import ArmoredVisor from "./icons/ArmoredVisor";
import { SkillCategory } from "@/data/portfolio";

export default function SkillCard({ data, Icon }: { data: SkillCategory; Icon: LucideIcon }) {
  const [flipped, setFlipped] = useState(false);
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- avoids hydration mismatch on themed front face
    setMounted(true);
  }, []);

  const isIron = mounted && theme === "iron";

  return (
    <div
      className="perspective-1000 h-[260px]"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onClick={() => setFlipped((f) => !f)}
      data-cursor="Flip"
    >
      <motion.div
        className="relative w-full h-full preserve-3d cursor-pointer"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Front */}
        <div className="absolute inset-0 backface-hidden border border-line p-6 flex flex-col justify-between hover:border-fg transition-colors bg-bg overflow-hidden">
          {isIron ? (
            <div className="flex flex-col items-center justify-center h-full gap-3">
              <ArmoredVisor size={56} />
              <h3 className="font-display text-base font-semibold text-center">{data.label}</h3>
              <span className="font-mono text-[0.6rem] text-muted uppercase tracking-wider">
                {data.skills.length} skills — hover to view
              </span>
            </div>
          ) : (
            <>
              <div className="flex items-start justify-between">
                <span className="font-mono text-[0.68rem] text-muted">{data.tag}</span>
                <Icon size={20} className="text-accent" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold mb-1.5">{data.label}</h3>
                <p className="text-muted text-sm font-light">{data.blurb}</p>
              </div>
              <div className="font-mono text-[0.64rem] text-muted uppercase tracking-wider">
                {data.skills.length} skills — hover to view
              </div>
            </>
          )}
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 backface-hidden border border-fg bg-fg text-bg p-5 flex flex-col justify-center overflow-hidden"
          style={{ transform: "rotateY(180deg)" }}
        >
          <span className="font-mono text-[0.62rem] text-accent uppercase tracking-wider mb-3">{data.label}</span>
          <ul className="grid grid-cols-2 gap-x-3 gap-y-1.5">
            {data.skills.map((s) => (
              <li key={s} className="text-[0.76rem] leading-snug font-light flex items-start gap-1.5">
                <span className="w-1 h-1 rounded-full bg-accent flex-none mt-1.5" />
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
}
