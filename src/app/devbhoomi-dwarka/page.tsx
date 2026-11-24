import type { Metadata } from "next";
import { Clock, Phone } from "lucide-react";
import { PageHero, SectionIntro } from "@/components/PageHero";
import { Reveal, RevealImage, SplitText, Stagger, StaggerItem } from "@/components/motion";
import { LuxeButton } from "@/components/BookButton";
import { PlaceGrid } from "@/components/PlaceGrid";
import { dwarkaTemples, gujarat, sightseeing, templeTimings } from "@/lib/content";
import { img } from "@/lib/images";
import { fullAddress, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Devbhoomi Dwarka — Places to Visit & Temple Timings",
  description:
    "Your guide to Devbhoomi Dwarka: Dwarkadhish Temple timings, must-visit temples, nearby sightseeing like Nageshwar, Beyt Dwarka and Shivrajpur Beach, and day trips across Gujarat.",
  alternates: { canonical: "/devbhoomi-dwarka" },
};

export default function DwarkaPage() {
  return (
    <>
      <PageHero
        eyebrow={`${site.name} Welcomes You To`}
        title="Devbhoomi Dwarka"
        subtitle="Devbhoomi Dwarka is India's holiest city, located in the western part of Kathiawar Gujarat, is part of the Char Dhams."
        image={img.hero}
        crumbs={[{ href: "/devbhoomi-dwarka", label: "Devbhoomi Dwarka" }]}
      />

      <section className="py-28 md:py-40">
        <div className="container-luxe grid items-center gap-16 lg:grid-cols-2">
          <div>
            <SectionIntro
              eyebrow="Devbhoomi Dwarka"
              title="Devbhoomi Dwarka - The Kingdom of Lord Krishna"
              text="Dwarka has a rich heritage and spiritual significance making it a popular holy place for Hindus worldwide. The city is home to various temples, including the renowned Dwarkadhish Temple, dedicated to Lord Krishna. The temple's architecture and divine aura attract devotees from far and wide. The current Dwarka is the seventh and final avatar, a testament to its enduring spiritual significance."
            />
            <Reveal delay={0.3} className="mt-10 flex flex-wrap gap-4">
              <LuxeButton href="/contact" variant="dark">Contact Us</LuxeButton>
              <LuxeButton variant="outline-dark">Book Your Stay</LuxeButton>
            </Reveal>
          </div>
          <RevealImage src={img.templeAlt} alt="Rukmini Mata Temple, Dwarka" className="aspect-[4/5]" />
        </div>
      </section>

      {/* Dwarkadhish */}
      <section className="grain relative overflow-hidden bg-forest py-28 text-cream md:py-36">
        <div className="container-luxe grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionIntro
              light
              eyebrow="Dwarkadhish Mandir"
              title="Must - Visit Temple in Dwarka"
              text={`Dwarkadhish Temple, a spiritual haven near the shores of the Arabian Sea, stands as a rich heritage and India's religious destination. Dwarkadhish Mandir is located just a 2-minute walking distance from the luxurious ${site.name}. This historic temple's timeless beauty and deep spiritual importance have drawn tourists here for decades across the world.`}
            />
          </div>
          <div>
            <Reveal><p className="eyebrow !text-gold flex items-center gap-3"><Clock className="h-4 w-4" /> Temple Timing</p></Reveal>
            <Stagger className="mt-6 divide-y divide-gold/15 border-y border-gold/15">
              {templeTimings.map((t, i) => (
                <StaggerItem key={i} className="flex items-center justify-between py-4">
                  <span className={`text-sm uppercase tracking-[0.2em] ${t.closed ? "text-cream/40" : "text-cream/80"}`}>{t.label}</span>
                  <span className={`font-display text-2xl ${t.closed ? "text-cream/40" : "text-gold-light"}`}>{t.time}</span>
                </StaggerItem>
              ))}
            </Stagger>
            <Reveal delay={0.3}><p className="mt-5 text-xs text-cream/45">Timings may change on festivals and special occasions — please check with our reception.</p></Reveal>
          </div>
        </div>
      </section>

      <section className="py-28 md:py-36">
        <div className="container-luxe">
          <SectionIntro eyebrow="Places to Visit in Dwarka" title="A Journey Through Time" text="Devbhoomi Dwarka is a city with a very special connection to Lord Krishna. Within the city, there are lots of places and temples to explore." />
          <div className="mt-16"><PlaceGrid places={dwarkaTemples} /></div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-forest py-28 text-cream md:py-36">
        <RevealImage src={img.island} alt="" className="!absolute inset-0 opacity-30" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-b from-forest via-forest/85 to-forest" />
        <div className="container-luxe relative">
          <SectionIntro light eyebrow="Near By Sight Seeing" title="Plan Your Journey To Explore Devbhoomi" text={`${site.name} Dwarka is committed to making your visit memorable and comfortable.`} />
          <div className="mt-16"><PlaceGrid places={sightseeing} dark /></div>
        </div>
      </section>

      <section className="py-28 md:py-36">
        <div className="container-luxe">
          <SectionIntro eyebrow="Easy Journey" title="Explore Gujarat" text="Keep Devbhoomi as your 1st choice and explore Gujarat best destination closer to Dwarka...." />
          <div className="mt-16"><PlaceGrid places={gujarat} /></div>
        </div>
      </section>

      <section className="bg-sand py-28">
        <div className="container-luxe grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SplitText text={`Contact ${site.name}`} className="heading-lg text-forest" />
            <Reveal delay={0.2}>
              <p className="body-lg mt-6">
                Contact {site.name} Reception to find the details and make your visit memorable and comfortable. We are delighted to provide you with the best services and guidance to make your Journey and stay special in our heritage city of Dwarka.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.2} className="bg-forest p-10 text-cream">
            <p className="eyebrow !text-gold">Address</p>
            <p className="mt-4 font-display text-2xl leading-snug">{fullAddress}</p>
            <a href={site.phoneHref} className="mt-6 flex items-center gap-3 text-gold-light"><Phone className="h-4 w-4" /> {site.phone}</a>
            <div className="mt-8"><LuxeButton href="/contact">Get in Touch</LuxeButton></div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
