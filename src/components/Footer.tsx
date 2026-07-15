"use client";

import { motion } from "framer-motion";
import { GithubIcon, LinkedinIcon } from "./icons/BrandIcons";
import { Mail } from "lucide-react";
import { profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="border-t border-line px-6 md:px-10 py-10"
    >
      <div className="flex flex-wrap items-center justify-between gap-6">
        <div className="font-display font-semibold text-lg">
          HV<span className="text-accent">.</span>
        </div>
        <p className="font-mono text-[0.72rem] text-muted max-w-[420px] text-center">
          &ldquo;Building scalable software today while engineering the AI systems of tomorrow.&rdquo;
        </p>
        <div className="flex gap-5 font-mono text-[0.72rem] text-muted">
          {[
            { href: profile.github, icon: <GithubIcon size={13} />, label: "GitHub", cursor: "Open" },
            { href: profile.linkedin, icon: <LinkedinIcon size={13} />, label: "LinkedIn", cursor: "Open" },
            { href: `mailto:${profile.email}`, icon: <Mail size={13} />, label: "Email", cursor: "Say Hi" },
          ].map((l) => (
            <motion.a
              key={l.label}
              href={l.href}
              target={l.label !== "Email" ? "_blank" : undefined}
              rel="noopener noreferrer"
              data-cursor={l.cursor}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
              className="hover:text-fg transition-colors flex items-center gap-1.5"
            >
              {l.icon} {l.label}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.footer>
  );
}
