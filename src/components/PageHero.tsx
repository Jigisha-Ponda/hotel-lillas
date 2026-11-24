"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Link from "next/link";
import { Photo } from "./Photo";
import { SplitText } from "./motion";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  crumbs = [],
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  image: string;
  crumbs?: { href: string; label: string }[];
}) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  return (
    <section ref={ref} className="grain relative flex h-[78svh] min-h-[560px] items-end overflow-hidden bg-forest text-cream">
      <motion.div className="absolute inset-0" style={{ y }}>
        <motion.div className="absolute inset-0" initial={{ scale: 1.2 }} animate={{ scale: 1 }} transition={{ duration: 2.6, ease: [0.22, 1, 0.36, 1] }}>
          <Photo src={image} alt="" fill priority sizes="100vw" className="object-cover" />
        </motion.div>
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/55 to-forest/30" />
      <motion.div className="container-luxe relative pb-20 md:pb-28" style={{ opacity }}>
        <motion.nav
          aria-label="Breadcrumb"
          className="mb-8 flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-cream/60"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Link href="/" className="hover:text-gold-light">Home</Link>
          {crumbs.map((c) => (
            <span key={c.href} className="flex items-center gap-3">
              <span className="h-px w-5 bg-gold/60" />
              <Link href={c.href} className="hover:text-gold-light">{c.label}</Link>
            </span>
          ))}
        </motion.nav>
        <motion.p className="eyebrow !text-gold" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.4 }}>
          {eyebrow}
        </motion.p>
        <SplitText as="h1" immediate delay={0.45} text={title} className="heading-xl mt-5 max-w-5xl text-cream" />
        {subtitle && (
          <motion.p
            className="mt-7 max-w-xl text-[17px] leading-8 font-light text-cream/75"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            {subtitle}
          </motion.p>
        )}
      </motion.div>
    </section>
  );
}

export function SectionIntro({ eyebrow, title, text, center = false, light = false }: { eyebrow: string; title: string; text?: string; center?: boolean; light?: boolean }) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <motion.div
        className={`flex items-center gap-4 ${center ? "justify-center" : ""}`}
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
      >
        <span className="h-px w-10 bg-gold" />
        <span className={`eyebrow ${light ? "!text-gold" : ""}`}>{eyebrow}</span>
        {center && <span className="h-px w-10 bg-gold" />}
      </motion.div>
      <SplitText text={title} className={`heading-lg mt-6 ${light ? "text-cream" : "text-forest"}`} />
      {text && (
        <motion.p
          className={`mt-6 text-[17px] leading-[1.85] font-light ${light ? "text-cream/70" : "text-ink/70"}`}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          {text}
        </motion.p>
      )}
    </div>
  );
}
