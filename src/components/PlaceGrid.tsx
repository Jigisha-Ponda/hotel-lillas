import Link from "next/link";
import { MapPin, ArrowUpRight } from "lucide-react";
import type { Place } from "@/lib/content";
import { Stagger, StaggerItem } from "./motion";
import { Photo } from "./Photo";
import { placeImages } from "@/lib/images";

export function PlaceGrid({ places, dark = false }: { places: Place[]; dark?: boolean }) {
  return (
    <Stagger className={`grid border-t border-l sm:grid-cols-2 lg:grid-cols-3 ${dark ? "border-gold/15" : "border-forest/10"}`}>
      {places.map((p, i) => (
        <StaggerItem
          key={p.name}
          className={`group relative overflow-hidden border-r border-b p-9 transition-colors duration-700 ${dark ? "border-gold/15 bg-forest/60 hover:bg-forest-700" : "border-forest/10 hover:bg-white"}`}
        >
          <span className="absolute inset-x-0 bottom-0 z-10 h-[2px] origin-left scale-x-0 bg-gold transition-transform duration-700 ease-luxe group-hover:scale-x-100" />
          {(p.image ?? placeImages[p.name]) && (
            <div className="relative -mx-9 -mt-9 mb-8 aspect-[4/3] overflow-hidden bg-forest">
              <div className="absolute inset-0 transition-transform duration-[1600ms] ease-luxe group-hover:scale-110">
                <Photo src={(p.image ?? placeImages[p.name])!} alt={p.name} fill sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" className="object-cover" />
              </div>
            </div>
          )}
          <div className="flex items-start justify-between gap-4">
            <span className={`font-display text-4xl font-light ${dark ? "text-gold/40" : "text-gold-dark/50"}`}>{String(i + 1).padStart(2, "0")}</span>
          </div>
          <h3 className={`mt-6 font-display text-[1.75rem] leading-tight ${dark ? "text-cream" : "text-forest"}`}>{p.name}</h3>
          <p className={`mt-3 flex items-start gap-2 text-[11px] uppercase tracking-[0.14em] ${dark ? "text-gold-light" : "text-gold-dark"}`}>
            <MapPin className="mt-px h-3.5 w-3.5 shrink-0" /> {p.distance}
          </p>
          <p className={`mt-4 text-sm leading-7 ${dark ? "text-cream/60" : "text-ink/65"}`}>{p.text}</p>
          <Link href="/contact" className={`mt-6 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] ${dark ? "text-gold-light" : "text-forest"} hover:text-gold`}>
            Contact <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover:rotate-45" />
          </Link>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
