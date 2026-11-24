import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { PageHero, SectionIntro } from "@/components/PageHero";
import { Reveal, RevealImage } from "@/components/motion";
import { LuxeButton } from "@/components/BookButton";
import { rooms } from "@/lib/content";
import { img } from "@/lib/images";

export const metadata: Metadata = {
  title: "Rooms & Suites",
  description: "30 individually designed rooms in Dwarka — Deluxe Rooms, sea-view Executive Deluxe Rooms and expansive Suites with separate living areas.",
  alternates: { canonical: "/rooms" },
};

export default function RoomsPage() {
  return (
    <>
      <PageHero
        eyebrow="Rooms & Suites"
        title={"Thirty rooms,\neach with its own story"}
        subtitle="Choose from three categories of individually designed accommodation, all a two-minute walk from the Dwarkadhish Temple."
        image={img.suite[0]}
        crumbs={[{ href: "/rooms", label: "Rooms & Suites" }]}
      />

      <section className="py-28 md:py-36">
        <div className="container-luxe">
          <SectionIntro center eyebrow="Stay" title="Find the room that suits your journey" />
        </div>
        <div className="container-luxe mt-24 space-y-32 md:space-y-44">
          {rooms.map((room, i) => (
            <article key={room.slug} className="grid items-center gap-12 lg:grid-cols-12 lg:gap-20">
              <div className={`lg:col-span-7 ${i % 2 ? "lg:order-2" : ""}`}>
                <Link href={`/rooms/${room.slug}`} aria-label={room.name} data-cursor>
                  <RevealImage src={room.images[0]} alt={room.name} from={i % 2 ? "right" : "left"} className="aspect-[4/3]" sizes="(min-width:1024px) 58vw, 100vw" />
                </Link>
              </div>
              <div className="lg:col-span-5">
                <Reveal>
                  <p className="font-display text-7xl font-light text-gold/50">0{i + 1}</p>
                  <p className="eyebrow mt-4">{room.view} · {room.size}</p>
                  <h2 className="heading-lg mt-4 text-forest">{room.name}</h2>
                  <p className="body-lg mt-6">{room.short}</p>
                  <ul className="mt-8 space-y-3">
                    {room.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-3 text-ink/75">
                        <Check className="h-4 w-4 text-gold-dark" /> {h}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-10 flex flex-wrap gap-4">
                    <LuxeButton href={`/rooms/${room.slug}`} variant="dark">View Details</LuxeButton>
                    <LuxeButton variant="outline-dark">Book Now</LuxeButton>
                  </div>
                </Reveal>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
