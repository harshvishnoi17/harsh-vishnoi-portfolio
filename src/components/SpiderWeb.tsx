"use client";

import { useEffect, useRef } from "react";

type Leg = {
  angle: number;
  length: number;
  segments: number;
  swaySpeed: number;
  swayAmount: number;
  phase: number;
};

export default function SpiderWeb({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0;
    let h = 0;
    let raf = 0;
    let visible = true;

    const resize = () => {
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * devicePixelRatio;
      canvas.height = h * devicePixelRatio;
      ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => (visible = e.isIntersecting));
    });
    observer.observe(canvas);

    const LEG_COUNT = 9;
    const legs: Leg[] = Array.from({ length: LEG_COUNT }, (_, i) => ({
      angle: (i / LEG_COUNT) * Math.PI * 2,
      length: 0.72 + ((i * 37) % 23) / 100,
      segments: 5,
      swaySpeed: 0.4 + ((i * 13) % 10) / 20,
      swayAmount: 0.045 + ((i * 7) % 10) / 260,
      phase: i * 0.9,
    }));

    const packets = Array.from({ length: LEG_COUNT }, (_, i) => ({
      leg: i,
      t: (i / LEG_COUNT) * 1,
      speed: 0.14 + ((i * 11) % 10) / 90,
    }));

    let cx = 0;
    let cy = 0;
    let radius = 0;

    const legPoint = (leg: Leg, segT: number, time: number) => {
      const sway = Math.sin(time * leg.swaySpeed + leg.phase + segT * 3.4) * leg.swayAmount * segT;
      const angle = leg.angle + sway;
      const r = radius * leg.length * segT;
      return { x: cx + Math.cos(angle) * r, y: cy + Math.sin(angle) * r * 0.72 };
    };

    const start = performance.now();

    const frame = (now: number) => {
      raf = requestAnimationFrame(frame);
      if (!visible) return;
      const time = (now - start) / 1000;

      cx = w * 0.62;
      cy = h * 0.42;
      radius = Math.min(w, h) * 0.62;

      const styles = getComputedStyle(document.documentElement);
      const accent = styles.getPropertyValue("--accent").trim() || "#ff2d3c";
      const fg = styles.getPropertyValue("--fg").trim() || "#f5f4f0";
      const bg = styles.getPropertyValue("--bg").trim() || "#0a0a0a";
      // detect light mode by checking if bg is a light color
      const isLight = bg.startsWith("#f") || bg.startsWith("#e") || bg.startsWith("#d");
      const lineOpacity = isLight ? 0.45 : 0.32;
      const ringOpacity = isLight ? 0.35 : 0.25;

      ctx.clearRect(0, 0, w, h);

      // legs
      legs.forEach((leg) => {
        ctx.beginPath();
        for (let s = 0; s <= leg.segments; s++) {
          const segT = s / leg.segments;
          const p = legPoint(leg, segT, time);
          if (s === 0) ctx.moveTo(p.x, p.y);
          else ctx.lineTo(p.x, p.y);
        }
        ctx.strokeStyle = hexToRgba(fg, lineOpacity);
        ctx.lineWidth = 1.2;
        ctx.stroke();
      });

      // concentric web rings connecting legs at matching radii
      const ringSteps = [0.28, 0.52, 0.76, 1];
      ringSteps.forEach((ringT) => {
        ctx.beginPath();
        legs.forEach((leg, i) => {
          const p = legPoint(leg, ringT, time);
          if (i === 0) ctx.moveTo(p.x, p.y);
          else ctx.lineTo(p.x, p.y);
        });
        ctx.closePath();
        ctx.strokeStyle = hexToRgba(accent, ringOpacity);
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      // traveling packets (data / NLP tokens moving along legs)
      packets.forEach((pk) => {
        pk.t += 0.006 * pk.speed * 10 * 0.06;
        if (pk.t > 1) pk.t = 0;
        const leg = legs[pk.leg];
        const p = legPoint(leg, pk.t, time);
        ctx.beginPath();
        ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = accent;
        ctx.shadowColor = accent;
        ctx.shadowBlur = 12;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // center node
      ctx.beginPath();
      ctx.arc(cx, cy, 5, 0, Math.PI * 2);
      ctx.fillStyle = accent;
      ctx.shadowColor = accent;
      ctx.shadowBlur = 16;
      ctx.fill();
      ctx.shadowBlur = 0;
      ctx.beginPath();
      ctx.arc(cx, cy, 12, 0, Math.PI * 2);
      ctx.strokeStyle = hexToRgba(accent, 0.5);
      ctx.lineWidth = 1;
      ctx.stroke();
    };

    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      observer.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} className={`w-full h-full ${className}`} aria-hidden="true" />;
}

function hexToRgba(color: string, alpha: number) {
  // Handle hex
  if (color.startsWith("#")) {
    const hex = color.replace("#", "");
    const full = hex.length === 3 ? hex.split("").map((c) => c + c).join("") : hex;
    const bigint = parseInt(full, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `rgba(${r},${g},${b},${alpha})`;
  }
  // Handle rgb(...) / rgba(...)
  if (color.startsWith("rgb")) {
    const nums = color.match(/[\d.]+/g);
    if (nums && nums.length >= 3) return `rgba(${nums[0]},${nums[1]},${nums[2]},${alpha})`;
  }
  // Handle space-separated "r g b" CSS variable format
  const parts = color.trim().split(/\s+/);
  if (parts.length === 3 && parts.every((p) => !isNaN(Number(p)))) {
    return `rgba(${parts[0]},${parts[1]},${parts[2]},${alpha})`;
  }
  return color;
}
