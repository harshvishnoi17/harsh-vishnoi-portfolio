"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Phone, FileDown, Loader2, Check, AlertCircle } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons/BrandIcons";
import { Reveal, RevealHeading, RevealLine, RevealSlide } from "./Reveal";
import MagneticButton from "./MagneticButton";
import { profile } from "@/data/portfolio";

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  return (
    <section id="contact" className="section-pad border-t border-line">
      <RevealSlide className="flex items-center gap-4 mb-6">
        <span className="index-label">06</span>
        <span className="index-label">/ Contact</span>
        <div className="flex-1 h-px bg-line" />
      </RevealSlide>

      <RevealLine delay={0.05} />
      <RevealHeading
        text="Let's build something amazing together."
        className="font-display font-semibold leading-[0.95] tracking-tight text-[9vw] md:text-[6vw] mb-3"
      />
      <Reveal delay={0.1}>
        <p className="text-muted text-[1.02rem] leading-[1.7] max-w-[560px] font-light mb-8">
          Whether you&apos;re looking to build an AI-powered product, modern web application, or enterprise
          software — I&apos;d love to connect.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 border-t border-line pt-12">
        {/* Form */}
        <Reveal>
          <form onSubmit={handleSubmit} className="flex flex-col gap-5 max-w-[480px]">
            <div>
              <label className="font-mono text-[0.65rem] uppercase tracking-wider text-muted block mb-2">
                Name
              </label>
              <input
                required
                type="text"
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                placeholder="Your name"
                className="w-full bg-transparent border-b border-line pb-3 text-base focus:outline-none focus:border-accent transition-colors"
              />
            </div>
            <div>
              <label className="font-mono text-[0.65rem] uppercase tracking-wider text-muted block mb-2">
                Email
              </label>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                placeholder="you@company.com"
                className="w-full bg-transparent border-b border-line pb-3 text-base focus:outline-none focus:border-accent transition-colors"
              />
            </div>
            <div>
              <label className="font-mono text-[0.65rem] uppercase tracking-wider text-muted block mb-2">
                Message
              </label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                placeholder="Tell me about your project..."
                className="w-full bg-transparent border-b border-line pb-3 text-base focus:outline-none focus:border-accent transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              data-cursor="Send"
              className="mt-4 self-start font-mono text-[0.78rem] tracking-wider uppercase px-7 py-4 rounded-full bg-accent text-white hover:opacity-85 transition-opacity disabled:opacity-60 flex items-center gap-2.5"
            >
              {status === "sending" && <Loader2 size={15} className="animate-spin" />}
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            <AnimatePresence mode="wait">
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-2 text-sm text-accent-2"
                >
                  <Check size={15} /> Message sent — I&apos;ll get back to you soon.
                </motion.div>
              )}
              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-2 text-sm text-accent"
                >
                  <AlertCircle size={15} /> {errorMsg}
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </Reveal>

        {/* Direct info */}
        <div>
          <Reveal className="flex items-start gap-4 py-5 border-b border-line">
            <Mail size={17} className="text-accent mt-1" />
            <div>
              <div className="font-mono text-[0.65rem] uppercase tracking-wider text-muted mb-1.5">Email</div>
              <a href={`mailto:${profile.email}`} className="text-base hover:text-accent transition-colors break-all">
                {profile.email}
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.05} className="flex items-start gap-4 py-5 border-b border-line">
            <Phone size={17} className="text-accent mt-1" />
            <div>
              <div className="font-mono text-[0.65rem] uppercase tracking-wider text-muted mb-1.5">Phone</div>
              <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="text-base hover:text-accent transition-colors">
                {profile.phone}
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="flex items-start gap-4 py-5 border-b border-line">
            <MapPin size={17} className="text-accent mt-1" />
            <div>
              <div className="font-mono text-[0.65rem] uppercase tracking-wider text-muted mb-1.5">Location</div>
              <span className="text-base">{profile.location}</span>
            </div>
          </Reveal>

          <div className="flex flex-wrap gap-3 mt-10">
            <MagneticButton
              href={profile.linkedin}
              target="_blank"
              cursor="Open"
              className="font-mono text-[0.75rem] tracking-wider uppercase px-6 py-4 rounded-full border border-line hover:border-fg transition-colors flex items-center gap-2"
            >
              <LinkedinIcon size={15} /> LinkedIn
            </MagneticButton>
            <MagneticButton
              href={profile.github}
              target="_blank"
              cursor="Open"
              className="font-mono text-[0.75rem] tracking-wider uppercase px-6 py-4 rounded-full border border-line hover:border-fg transition-colors flex items-center gap-2"
            >
              <GithubIcon size={15} /> GitHub
            </MagneticButton>
            <MagneticButton
              href={profile.resume}
              target="_blank"
              cursor="PDF"
              className="font-mono text-[0.75rem] tracking-wider uppercase px-6 py-4 rounded-full bg-fg text-bg flex items-center gap-2"
            >
              <FileDown size={15} /> Resume
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
}
