"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

const THEMES = [
  { id: "dark", label: "Spider", swatch: "linear-gradient(135deg, #0a0a0a 50%, #ff2d3c 50%)" },
  { id: "light", label: "Light", swatch: "linear-gradient(135deg, #f5f3ee 50%, #d61f2c 50%)" },
  { id: "aurora", label: "BMW M", swatch: "linear-gradient(135deg, #ffffff 40%, #1c69d4 40%, #1c69d4 70%, #e22718 70%)" },
  { id: "iron", label: "Iron", swatch: "linear-gradient(135deg, #e2352f 45%, #ffd35c 100%)" },
] as const;

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- standard next-themes hydration-safe mount check
    setMounted(true);
  }, []);

  if (!mounted) return <div className="h-9 w-[136px]" />;

  return (
    <div className="flex items-center gap-1.5 border border-line rounded-full p-1.5">
      {THEMES.map((t) => (
        <button
          key={t.id}
          onClick={() => setTheme(t.id)}
          data-cursor={t.label}
          aria-label={`${t.label} theme`}
          className="relative w-6 h-6 rounded-full flex items-center justify-center"
          style={{ background: t.swatch }}
        >
          {theme === t.id && (
            <motion.span
              layoutId="theme-ring"
              className="absolute -inset-[3px] rounded-full border-2 border-fg"
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            />
          )}
        </button>
      ))}
    </div>
  );
}
