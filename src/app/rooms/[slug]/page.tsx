import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, BedDouble, Check, Eye, Maximize2, Users } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal, RevealImage, Stagger, StaggerItem } from "@/components/motion";
import { LuxeButton } from "@/components/BookButton";
import { RoomCard } from "@/components/RoomCard";
import { rooms } from "@/lib/content";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return rooms.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: PageProps<"/rooms/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const room = rooms.find((r) => r.slug === slug);
  if (!room) return {};
  return { title: room.name, description: room.short, alternates: { canonical: `/rooms/${room.slug}` } };
}

export default async function RoomPage({ params }: PageProps<"/rooms/[slug]">) {
  const { slug } = await params;
  const idx = rooms.findIndex((r) => r.slug === slug);
  if (idx === -1) notFound();
  const room = rooms[idx];
  const prev = rooms[(idx - 1 + rooms.length) % rooms.length];
  const next = rooms[(idx + 1) % rooms.length];
  const others = rooms.filter((r) => r.slug !== room.slug);

  const facts = [
    { icon: Maximize2, label: "Room", value: room.size },
    { icon: Users, label: "Occupancy", value: room.occupancy },
    { icon: BedDouble, label: "Bed", value: room.bed },
    { icon: Eye, label: "View", value: room.view },
  ];

  return (
    <>
      <PageHero
        eyebrow={`Rooms & Suites · 0${idx + 1}`}
        title={room.name}
        subtitle={room.short}
        image={room.images[0]}
        crumbs={[{ href: "/rooms", label: "Rooms" }, { href: `/rooms/${room.slug}`, label: room.name }]}
      />

      <section className="border-b border-forest/10 bg-sand">
        <div className="container-luxe grid grid-cols-2 md:grid-cols-4">
          {facts.map((f, i) => (
            <Reveal key={f.label} delay={i * 0.08} className="flex items-center gap-4 border-forest/10 py-8 md:border-r md:last:border-r-0 md:px-8 md:first:pl-0">
              <f.icon className="h-6 w-6 stroke-[1.3] text-gold-dark" />
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-ink/50">{f.label}</p>
                <p className="font-display text-xl text-forest">{f.value}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container-luxe grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal><p className="eyebrow">Overview</p></Reveal>
            {room.description.map((p, i) => (
              <Reveal key={i} delay={0.1 + i * 0.1}>
                <p className={`mt-6 ${i === 0 ? "font-display text-[clamp(1.5rem,2.4vw,2.1rem)] leading-snug text-forest" : "body-lg"}`}>{p}</p>
              </Reveal>
            ))}
            <Reveal delay={0.3}><h2 className="mt-16 font-display text-3xl text-forest">In-room amenities</h2></Reveal>
            <Stagger className="mt-8 grid grid-cols-1 gap-x-10 gap-y-4 sm:grid-cols-2">
              {room.amenities.map((a) => (
                <StaggerItem key={a} className="flex items-center gap-3 border-b border-forest/10 pb-4 text-ink/75">
                  <Check className="h-4 w-4 text-gold-dark" /> {a}
                </StaggerItem>
              ))}
            </Stagger>
          </div>
          <aside className="lg:col-span-5">
            <div className="sticky top-28 bg-forest p-10 text-cream">
              <p className="eyebrow !text-gold">Reserve</p>
              <h3 className="mt-4 font-display text-3xl">Book the {room.name}</h3>
              <p className="mt-4 text-sm leading-7 text-cream/65">
                Best rates when you book direct. Need help? Call our reception on{" "}
                <a href={site.phoneHref} className="text-gold-light underline-offset-4 hover:underline">{site.phone}</a>.
              </p>
              <div className="mt-8 flex flex-col gap-3">
                <LuxeButton className="justify-center">Check Availability</LuxeButton>
                <LuxeButton href="/contact" variant="outline" className="justify-center">Enquire</LuxeButton>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className={`container-luxe grid gap-6 ${room.images.length > 1 ? "md:grid-cols-2" : ""}`}>
          {room.images.map((src, i) => (
            <RevealImage key={src} src={src} alt={`${room.name} — photo ${i + 1}`} from={i % 2 ? "right" : "left"} className="aspect-[16/9]" sizes={room.images.length > 1 ? "(min-width:768px) 50vw, 100vw" : "100vw"} />
          ))}
        </div>
      </section>

      <nav className="border-y border-forest/10" aria-label="Room navigation">
        <div className="container-luxe grid grid-cols-2">
          <Link href={`/rooms/${prev.slug}`} className="group flex items-center gap-4 py-10 text-forest">
            <ArrowLeft className="h-5 w-5 transition-transform duration-500 group-hover:-translate-x-2" />
            <span><span className="block text-[10px] uppercase tracking-[0.25em] text-ink/50">Previous</span><span className="font-display text-2xl">{prev.name}</span></span>
          </Link>
          <Link href={`/rooms/${next.slug}`} className="group flex items-center justify-end gap-4 border-l border-forest/10 py-10 text-right text-forest">
            <span><span className="block text-[10px] uppercase tracking-[0.25em] text-ink/50">Next</span><span className="font-display text-2xl">{next.name}</span></span>
            <ArrowRight className="h-5 w-5 transition-transform duration-500 group-hover:translate-x-2" />
          </Link>
        </div>
      </nav>

      <section className="py-24 md:py-32">
        <div className="container-luxe">
          <Reveal><h2 className="heading-lg text-forest">You may also like</h2></Reveal>
          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {others.map((r) => (
              <RoomCard key={r.slug} room={r} index={rooms.indexOf(r)} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
