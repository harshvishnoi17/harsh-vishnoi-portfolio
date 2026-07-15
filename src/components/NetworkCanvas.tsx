"use client";

import { useEffect, useRef } from "react";

type Point = { x: number; y: number; vx: number; vy: number };

export default function NetworkCanvas({
  count = 26,
  linkDistance = 110,
  className = "",
}: {
  count?: number;
  linkDistance?: number;
  className?: string;
}) {
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

    const points: Point[] = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
    }));

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => (visible = e.isIntersecting));
    });
    observer.observe(canvas);

    const frame = () => {
      raf = requestAnimationFrame(frame);
      if (!visible) return;

      const accent = getComputedStyle(document.documentElement).getPropertyValue("--accent").trim() || "#ff2d3c";
      const rgb = hexToRgbTriplet(accent);

      ctx.clearRect(0, 0, w, h);
      points.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
      });
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const dx = points[i].x - points[j].x;
          const dy = points[i].y - points[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < linkDistance) {
            ctx.strokeStyle = `rgba(${rgb},${(1 - d / linkDistance) * 0.5})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(points[i].x, points[i].y);
            ctx.lineTo(points[j].x, points[j].y);
            ctx.stroke();
          }
        }
      }
      points.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = accent;
        ctx.fill();
      });
    };
    frame();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      observer.disconnect();
    };
  }, [count, linkDistance]);

  return <canvas ref={canvasRef} className={`w-full h-full ${className}`} />;
}

function hexToRgbTriplet(color: string) {
  if (color.startsWith("#")) {
    const hex = color.replace("#", "");
    const full = hex.length === 3 ? hex.split("").map((c) => c + c).join("") : hex;
    const bigint = parseInt(full, 16);
    return `${(bigint >> 16) & 255},${(bigint >> 8) & 255},${bigint & 255}`;
  }
  if (color.startsWith("rgb")) {
    const nums = color.match(/[\d.]+/g);
    if (nums && nums.length >= 3) return `${nums[0]},${nums[1]},${nums[2]}`;
  }
  // space-separated CSS var format
  const parts = color.trim().split(/\s+/);
  if (parts.length === 3) return parts.join(",");
  return "255,45,60";
}
