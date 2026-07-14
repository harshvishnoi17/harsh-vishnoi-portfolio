export default function ArmoredVisor({ size = 64 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* outer plate */}
      <path
        d="M32 4 L52 14 L54 34 Q54 50 32 60 Q10 50 10 34 L12 14 Z"
        stroke="var(--accent-2)"
        strokeWidth="1.4"
        fill="var(--surface)"
      />
      {/* center ridge */}
      <path d="M32 8 L32 56" stroke="var(--accent-2)" strokeWidth="1" opacity="0.35" />
      {/* brow line */}
      <path d="M16 24 Q32 18 48 24" stroke="var(--accent-2)" strokeWidth="1" opacity="0.5" fill="none" />
      {/* glowing eyes */}
      <g className="glow-pulse">
        <path d="M18 27 L27 25 L26 31 L18 32 Z" fill="var(--accent-3)" />
        <path d="M46 27 L37 25 L38 31 L46 32 Z" fill="var(--accent-3)" />
      </g>
      {/* chin vents */}
      <path d="M22 44 L26 46 M32 46 L32 48 M42 44 L38 46" stroke="var(--accent-2)" strokeWidth="1" opacity="0.4" />
      {/* side plates */}
      <path d="M10 34 L4 38 M54 34 L60 38" stroke="var(--accent-2)" strokeWidth="1" opacity="0.3" />
    </svg>
  );
}
