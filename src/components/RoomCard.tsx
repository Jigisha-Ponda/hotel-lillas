"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight, BedDouble, Users } from "lucide-react";
import type { Room } from "@/lib/content";
import { Photo } from "./Photo";

export function RoomCard({ room, index }: { room: Room; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 1.1, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="group"
    >
      <Link href={`/rooms/${room.slug}`} className="block" data-cursor>
        <div className="relative aspect-[4/5] overflow-hidden rounded-[2px] bg-forest">
          <div className="absolute inset-0 transition-transform duration-[1600ms] ease-luxe group-hover:scale-110">
            <Photo src={room.images[0]} alt={room.name} fill sizes="(min-width:1024px) 33vw, 100vw" className="object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-forest/90 via-forest/10 to-transparent opacity-80 transition-opacity duration-700 group-hover:opacity-100" />
          <span className="absolute top-6 left-6 font-display text-6xl font-light text-cream/30">0{index + 1}</span>
          <span className="absolute top-6 right-6 rounded-full border border-cream/30 px-4 py-2 text-[10px] uppercase tracking-[0.25em] text-cream backdrop-blur">
            {room.view}
          </span>
          <div className="absolute inset-x-6 bottom-6 text-cream">
            <h3 className="font-display text-3xl md:text-4xl">{room.name}</h3>
            <div className="grid grid-rows-[0fr] transition-all duration-700 ease-luxe group-hover:grid-rows-[1fr]">
              <p className="overflow-hidden text-sm leading-7 text-cream/75">
                <span className="block pt-3">{room.short}</span>
              </p>
            </div>
            <div className="mt-5 flex items-center justify-between border-t border-cream/20 pt-4 text-[11px] uppercase tracking-[0.2em] text-cream/70">
              <span className="flex items-center gap-4">
                <span className="flex items-center gap-1.5"><Users className="h-3.5 w-3.5 text-gold" />{room.occupancy}</span>
                <span className="hidden items-center gap-1.5 sm:flex"><BedDouble className="h-3.5 w-3.5 text-gold" />{room.bed}</span>
              </span>
              <span className="grid h-10 w-10 place-items-center rounded-full border border-gold/60 text-gold-light transition-all duration-500 group-hover:rotate-45 group-hover:bg-gold group-hover:text-forest">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
