"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { Monogram } from "./Logo";
import { site } from "@/lib/site";

/** Plays once per browser session: the monogram draws itself, then the curtain lifts. */
export function Preloader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem("hl-intro") === "1";
      sessionStorage.setItem("hl-intro", "1");
    } catch {}
    const t = setTimeout(() => setShow(false), seen ? 250 : 2300);
    document.documentElement.style.overflow = "hidden";
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!show) document.documentElement.style.overflow = "";
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="grain fixed inset-0 z-[100] grid place-items-center bg-forest"
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          initial={{ clipPath: "inset(0 0 0% 0)" }}
          transition={{ duration: 1.1, ease: [0.77, 0, 0.18, 1] }}
        >
          <motion.div
            className="flex flex-col items-center gap-7"
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
          >
            <Monogram draw className="h-28 w-28 md:h-32 md:w-32" />
            <motion.p
              className="font-display text-xl tracking-[0.5em] text-gold-light uppercase"
              initial={{ opacity: 0, letterSpacing: "0.9em" }}
              animate={{ opacity: 1, letterSpacing: "0.5em" }}
              transition={{ duration: 1.4, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              {site.name}
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
