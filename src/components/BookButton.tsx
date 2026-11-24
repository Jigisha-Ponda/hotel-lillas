import Link from "next/link";
import { site } from "@/lib/site";
import { ArrowUpRight } from "lucide-react";

type Props = {
  href?: string;
  children?: React.ReactNode;
  variant?: "gold" | "outline" | "outline-dark" | "dark";
  className?: string;
  external?: boolean;
};

/** Premium pill button with a sliding fill on hover. */
export function LuxeButton({ href = site.bookingUrl, children = "Book Now", variant = "gold", className = "", external }: Props) {
  const isExternal = external ?? !href.startsWith("/");
  const newTab = href.startsWith("http");
  const base =
    "group relative inline-flex items-center gap-3 overflow-hidden rounded-full px-8 py-4 text-[12px] font-medium uppercase tracking-[0.28em] transition-colors duration-500";
  const styles = {
    gold: "bg-gold text-forest",
    dark: "bg-forest text-cream",
    outline: "border border-gold/60 text-cream",
    "outline-dark": "border border-forest/30 text-forest",
  }[variant];
  const fill = {
    gold: "bg-cream",
    dark: "bg-gold",
    outline: "bg-gold",
    "outline-dark": "bg-forest",
  }[variant];
  const hoverText = {
    gold: "group-hover:text-forest",
    dark: "group-hover:text-forest",
    outline: "group-hover:text-forest",
    "outline-dark": "group-hover:text-cream",
  }[variant];
  const inner = (
    <>
      <span className={`absolute inset-0 translate-y-full rounded-full ${fill} transition-transform duration-[650ms] ease-luxe group-hover:translate-y-0`} />
      <span className={`relative z-10 transition-colors duration-500 ${hoverText}`}>{children}</span>
      <ArrowUpRight className={`relative z-10 h-4 w-4 transition-all duration-500 group-hover:rotate-45 ${hoverText}`} />
    </>
  );
  return isExternal ? (
    <a href={href} target={newTab ? "_blank" : undefined} rel={newTab ? "noopener noreferrer" : undefined} className={`${base} ${styles} ${className}`}>
      {inner}
    </a>
  ) : (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {inner}
    </Link>
  );
}
