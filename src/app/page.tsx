import Link from "next/link";
import { ArrowUpRight, Clock, MapPin, Star } from "lucide-react";
import { HomeHero } from "@/components/HomeHero";
import { Counter, Reveal, RevealImage, SplitText, Stagger, StaggerItem } from "@/components/motion";
import { SectionIntro } from "@/components/PageHero";
import { RoomCard } from "@/components/RoomCard";
import { LuxeButton } from "@/components/BookButton";
import { Photo } from "@/components/Photo";
import { iconMap } from "@/components/Icons";
import { amenities, nearby, reviews, rooms, templeTimings } from "@/lib/content";
import { ReviewMarquee } from "@/components/ReviewMarquee";
import { img } from "@/lib/images";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <>
      <HomeHero />

      {/* About */}
      <section className="relative overflow-hidden py-28 md:py-40">
        <div className="container-luxe grid items-center gap-16 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <SectionIntro
              eyebrow={`${site.name} - Dwarka's Newest Gem`}
              title={`Experience the ${site.shortName} Difference`}
              text={`${site.name} is a serene boutique property in the heart of Dwarka, moments from the Arabian Sea. Designed as a tranquil escape for discerning travellers and pilgrims alike, every detail — from our individually designed rooms to our rooftop vegetarian restaurant — is shaped around one idea: a stay that feels personal.`}
            />
            <Reveal delay={0.3} className="mt-10 flex flex-wrap gap-4">
              <LuxeButton href="/about" variant="outline-dark">Our Story</LuxeButton>
            </Reveal>
            <div className="mt-16 grid grid-cols-2 gap-y-10 border-t border-forest/15 pt-10 sm:grid-cols-4">
              {[
                { n: 30, s: "", l: "Designed rooms" },
                { n: 2, s: " min", l: "Walk to temple" },
                { n: 300, s: "+", l: "Google reviews" },
                { n: 100, s: "%", l: "Pure vegetarian" },
              ].map((s) => (
                <div key={s.l}>
                  <p className="font-display text-5xl font-light text-forest"><Counter to={s.n} suffix={s.s} /></p>
                  <p className="mt-2 text-[11px] uppercase tracking-[0.22em] text-ink/55">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative lg:col-span-6">
            <RevealImage src={img.about} alt="Hotel Lilla's building" className="aspect-[4/5] w-[82%] ml-auto" />
            <RevealImage src={img.lobby} alt="Executive Deluxe Room" from="left" className="absolute -bottom-12 left-0 aspect-square w-[46%] border-[10px] border-cream" />
            <div className="absolute -top-8 left-[8%] hidden h-40 w-40 animate-[spin_30s_linear_infinite] md:block">
              <svg viewBox="0 0 100 100" className="h-full w-full">
                <defs><path id="c" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" /></defs>
                <text fontSize="8.4" letterSpacing="3.2" fill="#9c7f45" fontFamily="Jost Variable, sans-serif">
                  <textPath href="#c">HOTEL LILLA&apos;S · DWARKA · GUJARAT ·</textPath>
                </text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="overflow-hidden border-y border-gold/25 bg-forest py-7 text-gold-light">
        <div className="animate-marquee flex w-max gap-14 whitespace-nowrap font-display text-4xl font-light italic md:text-5xl">
          {Array.from({ length: 2 }).flatMap((_, k) =>
            ["Arabian Sea Views", "Rooftop Dining", "30 Designed Rooms", "Steps from Dwarkadhish", "Warm Hospitality", "Pure Vegetarian"].map((t) => (
              <span key={`${k}-${t}`} className="flex items-center gap-14">
                {t} <span className="text-2xl not-italic text-gold">✦</span>
              </span>
            )),
          )}
        </div>
      </div>

      {/* Rooms */}
      <section className="py-28 md:py-40">
        <div className="container-luxe">
          <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
            <SectionIntro
              eyebrow="Rooms & Suite"
              title="30 Uniquely Designed Rooms"
              text="Unwind in one of our 30 beautifully appointed rooms, each meticulously designed to provide a haven of comfort and style. Choose from three distinct categories to suit your needs"
            />
            <Reveal><LuxeButton href="/rooms" variant="outline-dark">View All Rooms</LuxeButton></Reveal>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {rooms.map((r, i) => (
              <RoomCard key={r.slug} room={r} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="grain relative overflow-hidden bg-forest py-28 text-cream md:py-36">
        <div className="container-luxe">
          <SectionIntro center light eyebrow="Guest Amenities" title="Lifestyle Essentials For Guest Conveniences" text="Our thoughtfully curated amenities cater to your every need. We've designed your stay to be an escape from the ordinary. Experience the perfect blend of comfortability and practicality." />
          <Stagger className="mt-20 grid gap-px overflow-hidden rounded-sm bg-gold/15 sm:grid-cols-2 lg:grid-cols-5">
            {amenities.map((a) => {
              const Icon = iconMap[a.icon];
              return (
                <StaggerItem key={a.title} className="group relative bg-forest p-10 transition-colors duration-700 hover:bg-forest-700">
                  <span className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-gold transition-transform duration-700 ease-luxe group-hover:scale-x-100" />
                  <Icon className="h-9 w-9 stroke-[1.2] text-gold transition-transform duration-700 ease-luxe group-hover:-translate-y-1 group-hover:scale-110" />
                  <h3 className="mt-8 font-display text-2xl">{a.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-cream/60">{a.text}</p>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      {/* Restaurant */}
      <section className="py-28 md:py-40">
        <div className="container-luxe grid items-center gap-16 lg:grid-cols-2">
          <div className="relative order-2 lg:order-1">
            <RevealImage src={img.rooftop} alt="Rooftop restaurant overlooking the Arabian Sea" className="aspect-[5/6]" />
            <Reveal delay={0.4} className="absolute -right-4 -bottom-10 max-w-[260px] bg-gold p-8 text-forest md:-right-12">
              <p className="font-display text-5xl font-light">100%</p>
              <p className="mt-2 text-[11px] uppercase tracking-[0.25em]">Pure vegetarian kitchen</p>
            </Reveal>
          </div>
          <div className="order-1 lg:order-2 lg:pl-10">
            <SectionIntro
              eyebrow="Roof Top Restaurant"
              title="Multi-Cuisine Veg Restaurant - A Culinary Journey Awaits"
              text="Embark on a delightful culinary adventure at our rooftop multi-cuisine vegetarian restaurant. Savour a symphony of flavours as our chefs tantalize your taste buds with delectable dishes from across India. Enjoy panoramic views of the Arabian Sea as you dine under the starlit sky, creating memories that will last a lifetime."
            />
          </div>
        </div>
      </section>

      {/* Temple timings */}
      <section className="pb-28 md:pb-40">
        <div className="container-luxe">
          <div className="grain relative overflow-hidden rounded-sm bg-forest-700 px-8 py-16 text-cream md:px-16">
            <div className="absolute inset-0 opacity-25">
              <Photo src={img.templeNight} alt="" fill sizes="100vw" className="object-cover" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-forest via-forest/90 to-forest/60" />
            <div className="relative grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-center">
              <div>
                <p className="eyebrow !text-gold flex items-center gap-3"><Clock className="h-4 w-4" /> Dwarkadhish Temple Timings</p>
                <SplitText text="Plan your darshan — just two minutes away" className="heading-md mt-5 text-cream" />
                <Link href="/devbhoomi-dwarka" className="group mt-8 inline-flex items-center gap-3 text-[12px] uppercase tracking-[0.25em] text-gold-light">
                  Explore Devbhoomi Dwarka
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:rotate-45" />
                </Link>
              </div>
              <Stagger className="grid grid-cols-2 gap-px bg-gold/20 sm:grid-cols-4">
                {templeTimings.map((t, i) => (
                  <StaggerItem key={i} className="bg-forest/80 p-5 backdrop-blur">
                    <p className={`font-display text-2xl ${t.closed ? "text-cream/45" : "text-gold-light"}`}>{t.time}</p>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-cream/60">{t.label}</p>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby */}
      <section className="bg-sand py-28 md:py-40">
        <div className="container-luxe">
          <SectionIntro eyebrow="Places of Interest" title="Sacred sites, steps from your door" />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {nearby.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.1}>
                <Link href="/devbhoomi-dwarka" className="group block" data-cursor>
                  <div className="relative aspect-[3/4] overflow-hidden bg-forest">
                    <div className="absolute inset-0 transition-transform duration-[1600ms] ease-luxe group-hover:scale-110">
                      <Photo src={p.image} alt={p.name} fill sizes="(min-width:1024px) 25vw, 50vw" className="object-cover" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-forest/85 to-transparent" />
                    <span className="absolute top-5 left-5 flex items-center gap-1.5 rounded-full bg-cream/90 px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-forest">
                      <MapPin className="h-3 w-3" /> {p.distance}
                    </span>
                    <div className="absolute inset-x-5 bottom-5 text-cream">
                      <h3 className="font-display text-2xl">{p.name}</h3>
                      <p className="mt-2 text-sm leading-6 text-cream/70">{p.text}</p>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Dwarka overview */}
      <section className="relative flex min-h-[90svh] items-center overflow-hidden bg-forest text-cream">
        <RevealImage src={img.sea} alt="The Arabian Sea at Dwarka" className="!absolute inset-0" strength={18} sizes="100vw" />
        <div className="absolute inset-0 bg-forest/65" />
        <div className="container-luxe relative py-28 text-center">
          <Reveal><p className="eyebrow !text-gold">Dwarka</p></Reveal>
          <SplitText text={"A City Steeped in\nLegend and Archaeology"} className="heading-xl mx-auto mt-6 max-w-5xl" />
          <Reveal delay={0.3}>
            <p className="mx-auto mt-8 max-w-2xl text-[17px] leading-8 font-light text-cream/80">
              Nestled on the shores of the Arabian Sea, a city whispers of a bygone era. Dwarka, a name synonymous with Lord Krishna, transcends the boundaries of time. Here, legend and history intertwine, creating a tapestry rich in mythology and archaeological intrigue.
            </p>
            <p className="mx-auto mt-5 max-w-2xl text-[17px] leading-8 font-light text-cream/70">
              This mystical city is not just a pilgrimage site for devout Hindus, but a window into a glorious past. Dwarka was believed to be the ancient capital of Lord Krishna&apos;s kingdom, a prosperous city that thrived by the sea. As you walk its streets, the air vibrates with echoes of Krishna&apos;s reign. Explore its magnificent temples, uncover its secrets, and experience the magic of Dwarka – a place where faith and history come alive.
            </p>
          </Reveal>
          <Reveal delay={0.45} className="mt-10 flex justify-center">
            <LuxeButton href="/devbhoomi-dwarka" variant="outline">Discover Dwarka</LuxeButton>
          </Reveal>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-28 md:py-40">
        <div className="container-luxe">
          <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
            <SectionIntro eyebrow="Guest Reviews" title="What our guests say" />
            <Reveal delay={0.2} className="flex items-center gap-6">
              <div>
                <p className="font-display text-5xl font-light text-forest">EXCELLENT</p>
                <div className="mt-2 flex items-center gap-3">
                  <div className="flex gap-1 text-gold">
                    {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                  </div>
                  <span className="text-sm text-ink/60">Based on {site.rating.count} reviews</span>
                </div>
              </div>
            </Reveal>
          </div>
          <ReviewMarquee items={reviews} />
          <Reveal className="mt-12 flex justify-center">
            <LuxeButton href={site.googleReviewsUrl} variant="outline-dark">Read on Google</LuxeButton>
          </Reveal>
        </div>
      </section>
    </>
  );
}
