import { GithubIcon, LinkedinIcon } from "./icons/BrandIcons";
import { Mail } from "lucide-react";
import { profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-line px-6 md:px-10 py-10">
      <div className="flex flex-wrap items-center justify-between gap-6">
        <div className="font-display font-semibold text-lg">
          HV<span className="text-accent">.</span>
        </div>
        <p className="font-mono text-[0.72rem] text-muted max-w-[420px] text-center">
          &ldquo;Building scalable software today while engineering the AI systems of tomorrow.&rdquo;
        </p>
        <div className="flex gap-5 font-mono text-[0.72rem] text-muted">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" data-cursor="Open" className="hover:text-fg transition-colors flex items-center gap-1.5">
            <GithubIcon size={13} /> GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" data-cursor="Open" className="hover:text-fg transition-colors flex items-center gap-1.5">
            <LinkedinIcon size={13} /> LinkedIn
          </a>
          <a href={`mailto:${profile.email}`} data-cursor="Say Hi" className="hover:text-fg transition-colors flex items-center gap-1.5">
            <Mail size={13} /> Email
          </a>
        </div>
      </div>
    </footer>
  );
}
