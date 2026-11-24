"use client";

import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Photo } from "./Photo";

type Item = { src: string; alt: string; tag: string };

export function GalleryGrid({ items }: { items: Item[] }) {
  const tags = useMemo(() => ["All", ...Array.from(new Set(items.map((i) => i.tag)))], [items]);
  const [filter, setFilter] = useState("All");
  const [open, setOpen] = useState<number | null>(null);
  const list = filter === "All" ? items : items.filter((i) => i.tag === filter);

  const go = useCallback((d: number) => setOpen((o) => (o === null ? o : (o + d + list.length) % list.length)), [list.length]);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    document.documentElement.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
    };
  }, [open, go]);

  return (
    <>
      <div className="mb-14 flex flex-wrap justify-center gap-3">
        {tags.map((t) => (
          <button
            key={t}
            onClick={() => setFilter(t)}
            className={`relative rounded-full px-6 py-3 text-[11px] uppercase tracking-[0.25em] transition-colors duration-500 ${filter === t ? "text-cream" : "text-forest hover:text-gold-dark"}`}
          >
            {filter === t && <motion.span layoutId="pill" className="absolute inset-0 rounded-full bg-forest" transition={{ type: "spring", stiffness: 300, damping: 30 }} />}
            <span className="relative">{t}</span>
          </button>
        ))}
      </div>

      <motion.div layout className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
        <AnimatePresence mode="popLayout">
          {list.map((item, i) => (
            <motion.button
              layout
              key={item.src + item.alt}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8, delay: (i % 6) * 0.06, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => setOpen(i)}
              className={`group relative block w-full overflow-hidden bg-forest break-inside-avoid ${["aspect-[4/5]", "aspect-[4/3]", "aspect-square"][i % 3]}`}
              aria-label={`Open ${item.alt}`}
            >
              <div className="absolute inset-0 transition-transform duration-[1400ms] ease-luxe group-hover:scale-110">
                <Photo src={item.src} alt={item.alt} fill sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" className="object-cover" />
              </div>
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-forest/80 to-transparent p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="translate-y-4 text-left transition-transform duration-500 group-hover:translate-y-0">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-gold">{item.tag}</p>
                  <p className="font-display text-2xl text-cream">{item.alt}</p>
                </div>
              </div>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {open !== null && list[open] && (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center bg-forest/95 p-4 backdrop-blur-md md:p-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
          >
            <motion.div
              key={list[open].src}
              className="relative h-full w-full"
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <Photo src={list[open].src} alt={list[open].alt} fill sizes="100vw" className="object-contain" />
            </motion.div>
            <p className="absolute bottom-6 left-1/2 -translate-x-1/2 font-display text-xl text-cream">{list[open].alt}</p>
            <button onClick={() => setOpen(null)} className="absolute top-6 right-6 grid h-12 w-12 place-items-center rounded-full border border-gold/50 text-gold-light hover:bg-gold hover:text-forest" aria-label="Close">
              <X className="h-5 w-5" />
            </button>
            <button onClick={(e) => { e.stopPropagation(); go(-1); }} className="absolute left-4 grid h-12 w-12 place-items-center rounded-full border border-gold/50 text-gold-light hover:bg-gold hover:text-forest" aria-label="Previous">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button onClick={(e) => { e.stopPropagation(); go(1); }} className="absolute right-4 grid h-12 w-12 place-items-center rounded-full border border-gold/50 text-gold-light hover:bg-gold hover:text-forest" aria-label="Next">
              <ChevronRight className="h-5 w-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
