import type { Metadata } from "next";
import { PageHero, SectionIntro } from "@/components/PageHero";
import { Reveal, RevealImage, SplitText, Stagger, StaggerItem } from "@/components/motion";
import { LuxeButton } from "@/components/BookButton";
import { img } from "@/lib/images";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description: `Discover ${site.name} — a boutique hotel in Dwarka by the Arabian Sea, a two-minute walk from the Dwarkadhish Temple.`,
  alternates: { canonical: "/about" },
};

const values = [
  { t: "Personalised hospitality", d: "We get to know our guests, so every stay — pilgrimage, family trip or getaway — feels tailored to you." },
  { t: "Calm by design", d: "Thirty individually designed rooms, soft light and quiet corners create a true retreat from the bustle of the temple town." },
  { t: "Rooted in Dwarka", d: "Our team shares local knowledge freely — aarti timings, sunset hours and the best way to reach Beyt Dwarka." },
  { t: "Pure vegetarian", d: "Our rooftop restaurant serves wholesome multi-cuisine vegetarian food that respects the spirit of the holy city." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow={`About ${site.name}`}
        title={"A tranquil retreat\nby the Arabian Sea"}
        subtitle="A boutique hotel in Devbhoomi Dwarka, created for discerning travellers and pilgrims who value comfort, calm and heartfelt service."
        image={img.heroAlt}
        crumbs={[{ href: "/about", label: "About" }]}
      />

      <section className="py-28 md:py-40">
        <div className="container-luxe grid items-center gap-16 lg:grid-cols-2">
          <div>
            <SectionIntro
              eyebrow="Our Story"
              title="Personal experiences, crafted with care"
              text={`${site.name} was created with a simple belief: a great hotel stay is personal. Located in the heart of Dwarka, close to the Arabian Sea and just a two-minute walk from the revered Dwarkadhish Temple, we offer a serene boutique escape for discerning travellers.`}
            />
            <Reveal delay={0.3}>
              <p className="body-lg mt-6">
                Each of our 30 rooms is individually designed — from cosy Deluxe Rooms to sea-view Executive Deluxe Rooms and expansive Suites. Add our rooftop vegetarian restaurant, attentive room service and genuine local guidance, and you have the perfect base for exploring Devbhoomi Dwarka.
              </p>
            </Reveal>
          </div>
          <RevealImage src={img.about} alt="Inside Hotel Lilla's" className="aspect-[4/5]" />
        </div>
      </section>

      <section className="grain relative bg-forest py-28 text-cream md:py-36">
        <div className="container-luxe">
          <SectionIntro light center eyebrow="What we stand for" title="The Lilla's way" />
          <Stagger className="mt-20 grid gap-px bg-gold/15 md:grid-cols-2">
            {values.map((v, i) => (
              <StaggerItem key={v.t} className="group bg-forest p-10 transition-colors duration-700 hover:bg-forest-700 md:p-14">
                <span className="font-display text-5xl text-gold/40">0{i + 1}</span>
                <h3 className="mt-6 font-display text-3xl">{v.t}</h3>
                <p className="mt-4 max-w-md leading-8 text-cream/65">{v.d}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="py-28 text-center md:py-40">
        <div className="container-luxe">
          <SplitText text={"Come stay with us\nin Dwarka"} className="heading-xl text-forest" />
          <Reveal delay={0.3} className="mt-12 flex flex-wrap justify-center gap-4">
            <LuxeButton variant="dark">Book Your Stay</LuxeButton>
            <LuxeButton href="/contact" variant="outline-dark">Contact Us</LuxeButton>
          </Reveal>
        </div>
      </section>
    </>
  );
}
