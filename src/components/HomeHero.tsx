"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Photo } from "./Photo";
import { SplitText, Magnetic } from "./motion";
import { LuxeButton } from "./BookButton";
import { BookingBar } from "./BookingBar";
import { img } from "@/lib/images";
import { site } from "@/lib/site";

export function HomeHero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const fade = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} className="grain relative flex min-h-[100svh] flex-col justify-end overflow-hidden bg-forest text-cream">
      <motion.div className="absolute inset-0" style={{ y, scale }}>
        <motion.div className="absolute inset-0" initial={{ scale: 1.25 }} animate={{ scale: 1 }} transition={{ duration: 3.2, ease: [0.22, 1, 0.36, 1] }}>
          <Photo src={img.hero} alt={`${site.name}, Dwarka`} fill priority sizes="100vw" className="object-cover" />
        </motion.div>
      </motion.div>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,28,21,0.55)_0%,rgba(7,28,21,0.2)_35%,rgba(7,28,21,0.85)_85%,#0c2e23_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,28,21,0.7)_0%,rgba(7,28,21,0.25)_55%,transparent_100%)]" />

      <motion.div className="container-luxe relative pt-40 pb-12" style={{ opacity: fade }}>
        <motion.div
          className="flex items-center gap-4"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="h-px w-12 bg-gold" />
          <span className="eyebrow !text-gold-light">Welcome To Hotel Lilla&apos;s</span>
        </motion.div>

        <SplitText
          as="h1"
          immediate
          delay={0.6}
          text={"Dwarka's\nNewest Gem"}
          className="mt-7 font-display text-[clamp(3.2rem,9vw,8.5rem)] leading-[0.92] font-light tracking-[-0.015em]"
        />

        <div className="mt-10 flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <motion.p
            className="max-w-md text-[17px] leading-8 font-light text-cream/80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
          >
            Escape the ordinary and immerse yourself in serenity at Hotel Lilla&apos;s, Dwarka. Our boutique haven, nestled amidst the calming embrace of the Arabian Sea, offers an intimate retreat for discerning travellers.
          </motion.p>
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <Magnetic>
              <LuxeButton>BOOK NOW</LuxeButton>
            </Magnetic>
            <Magnetic>
              <LuxeButton href="/rooms" variant="outline">Explore Rooms</LuxeButton>
            </Magnetic>
          </motion.div>
        </div>

        <BookingBar className="mt-14" />
      </motion.div>

      <motion.div
        className="absolute right-8 bottom-1/2 hidden flex-col items-center gap-4 lg:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <span className="[writing-mode:vertical-rl] text-[10px] uppercase tracking-[0.4em] text-cream/60">Scroll</span>
        <span className="relative h-20 w-px overflow-hidden bg-cream/20">
          <motion.span
            className="absolute inset-x-0 top-0 h-8 bg-gold"
            animate={{ y: ["-100%", "250%"] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </motion.div>
    </section>
  );
}
