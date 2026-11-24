"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { Logo } from "./Logo";
import { nav, site, fullAddress } from "@/lib/site";
import { LuxeButton } from "./BookButton";

export function Header() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > 40);
    setHidden(y > 300 && y > prev && !open);
  });

  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <motion.header
        className="fixed inset-x-0 top-0 z-50"
        animate={{ y: hidden ? "-100%" : "0%" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div
          className={`transition-all duration-700 ease-luxe ${
            scrolled && !open ? "bg-forest/90 py-3 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.6)] backdrop-blur-xl" : "bg-transparent py-6"
          }`}
        >
          <div className="container-luxe flex items-center justify-between gap-6">
            <Link href="/" aria-label={`${site.name} — Home`} className="relative z-10">
              <Logo className="[&_span]:text-[15px] md:[&_span]:text-[17px]" />
            </Link>

            <nav className="hidden items-center gap-8 xl:flex" aria-label="Main">
              {nav.map((item) => {
                const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`group relative py-2 text-[11px] font-medium uppercase tracking-[0.26em] transition-colors duration-300 ${
                      active ? "text-gold-light" : "text-cream/85 hover:text-gold-light"
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute -bottom-0.5 left-0 h-px bg-gold transition-all duration-500 ease-luxe ${
                        active ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>

            <div className="relative z-10 flex items-center gap-4">
              <div className="hidden md:block">
                <LuxeButton className="!px-6 !py-3">Reservation</LuxeButton>
              </div>
              <button
                onClick={() => setOpen((o) => !o)}
                className="group flex h-12 w-12 flex-col items-center justify-center gap-[7px] rounded-full border border-gold/40 xl:hidden"
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
              >
                <span className={`h-px w-5 bg-gold-light transition-all duration-500 ${open ? "translate-y-[4px] rotate-45" : ""}`} />
                <span className={`h-px w-5 bg-gold-light transition-all duration-500 ${open ? "-translate-y-[4px] -rotate-45" : ""}`} />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="grain fixed inset-0 z-40 overflow-y-auto bg-forest"
            initial={{ clipPath: "circle(0% at calc(100% - 60px) 50px)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 60px) 50px)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 60px) 50px)" }}
            transition={{ duration: 0.9, ease: [0.77, 0, 0.18, 1] }}
          >
            <div className="container-luxe flex min-h-full flex-col justify-between pt-32 pb-10">
              <nav className="flex flex-col gap-1" aria-label="Mobile">
                {[...nav, { href: "/privacy-policy", label: "Privacy Policy" }].map((item, i) => (
                  <div key={item.href} className="overflow-hidden">
                    <motion.div
                      initial={{ y: "110%" }}
                      animate={{ y: 0 }}
                      exit={{ y: "110%" }}
                      transition={{ duration: 0.8, delay: 0.25 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <Link
                        href={item.href}
                        className="group flex items-baseline gap-5 py-1 font-display text-[clamp(2.2rem,8vw,4rem)] font-light text-cream transition-colors hover:text-gold-light"
                      >
                        <span className="font-sans text-xs tracking-widest text-gold/70">0{i + 1}</span>
                        <span className="transition-transform duration-500 ease-luxe group-hover:translate-x-3">{item.label}</span>
                      </Link>
                    </motion.div>
                  </div>
                ))}
              </nav>
              <motion.div
                className="mt-12 grid gap-6 border-t border-gold/20 pt-8 text-sm text-cream/70 md:grid-cols-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <p>{fullAddress}</p>
                <a href={site.phoneHref} className="flex items-center gap-2 hover:text-gold-light">
                  <Phone className="h-4 w-4" /> {site.phone}
                </a>
                <div>
                  <LuxeButton>Book Your Stay</LuxeButton>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
