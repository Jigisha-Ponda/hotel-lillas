import { site } from "@/lib/site";

type Props = { className?: string; showWordmark?: boolean; tone?: "gold" | "light" | "dark"; draw?: boolean };

/** Octagonal HL monogram, recreated as crisp vector from the Hotel Lilla's logo. */
export function Monogram({ className = "", draw = false }: { className?: string; draw?: boolean }) {
  const oct = (i: number) => {
    const r = 48 - i;
    const k = r * 0.4142;
    return `M${50 - k},${50 - r} L${50 + k},${50 - r} L${50 + r},${50 - k} L${50 + r},${50 + k} L${50 + k},${50 + r} L${50 - k},${50 + r} L${50 - r},${50 + k} L${50 - r},${50 - k} Z`;
  };
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="hl-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f1e2b8" />
          <stop offset="0.45" stopColor="#c8a96a" />
          <stop offset="0.7" stopColor="#e9d6a6" />
          <stop offset="1" stopColor="#9c7f45" />
        </linearGradient>
        <linearGradient id="hl-gold-letters" gradientUnits="userSpaceOnUse" x1="250" y1="197" x2="697" y2="695">
          <stop offset="0" stopColor="#f1e2b8" />
          <stop offset="0.45" stopColor="#c8a96a" />
          <stop offset="0.7" stopColor="#e9d6a6" />
          <stop offset="1" stopColor="#9c7f45" />
        </linearGradient>
      </defs>
      <path d={oct(0)} fill="none" stroke="url(#hl-gold)" strokeWidth="0.9" pathLength={1} className={draw ? "logo-draw" : ""} />
      <path d={oct(4)} fill="none" stroke="url(#hl-gold)" strokeWidth="0.9" pathLength={1} className={draw ? "logo-draw logo-draw-2" : ""} />
      {/* Interlocked H + L, drawn in a 900×900 grid traced from the logo artwork. */}
      <g transform="translate(50 50) scale(0.1157) translate(-450 -450)" fill="url(#hl-gold-letters)" className={draw ? "logo-letters" : ""}>
        <path d={stem(300, 345, 270, 615, 50, 45)} />
        <path d={stem(545, 590, 270, 615, 40, 55)} />
        <rect x="343" y="418" width="204" height="30" />
        <path d="M375,197 H520 V209 Q470,209 470,231 V655 Q470,677 494,677 H640 Q674,668 688,598 H697 L691,695 H375 V683 Q420,683 420,661 V231 Q420,209 375,209 Z" />
      </g>
    </svg>
  );
}

/** A vertical serif stem (x1–x2, y1–y2) with bracketed slab serifs reaching `sl` left and `sr` right. */
function stem(x1: number, x2: number, y1: number, y2: number, sl: number, sr: number) {
  const t = 12;
  const b = 20;
  return [
    `M${x1 - sl},${y1} H${x2 + sr} V${y1 + t}`,
    `Q${x2},${y1 + t} ${x2},${y1 + t + b} V${y2 - t - b} Q${x2},${y2 - t} ${x2 + sr},${y2 - t}`,
    `V${y2} H${x1 - sl} V${y2 - t}`,
    `Q${x1},${y2 - t} ${x1},${y2 - t - b} V${y1 + t + b} Q${x1},${y1 + t} ${x1 - sl},${y1 + t} Z`,
  ].join(" ");
}

export function Logo({ className = "", showWordmark = true, tone = "gold" }: Props) {
  const color = tone === "dark" ? "text-forest" : tone === "light" ? "text-cream" : "text-gold-light";
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <Monogram className="h-11 w-11 shrink-0" />
      {showWordmark && (
        <span className={`font-display text-[19px] leading-none tracking-[0.32em] uppercase ${color}`}>
          {site.name}
        </span>
      )}
    </span>
  );
}
