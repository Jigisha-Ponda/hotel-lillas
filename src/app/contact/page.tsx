import type { Metadata } from "next";
import { MapPin, MessageCircle, Phone } from "lucide-react";
import { Instagram } from "@/components/Icons";
import { PageHero, SectionIntro } from "@/components/PageHero";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { ContactForm } from "@/components/ContactForm";
import { Faq } from "@/components/Faq";
import { faqs } from "@/lib/content";
import { img } from "@/lib/images";
import { fullAddress, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${site.name}, Homeguard Chowk, Dwarka, Gujarat 361335. Call ${site.phone} for reservations and enquiries.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const cards = [
    { icon: MapPin, label: "Address", value: fullAddress, href: site.mapLink },
    { icon: Phone, label: "Call us", value: site.phone, href: site.phoneHref },
    { icon: MessageCircle, label: "WhatsApp", value: "Chat with reception", href: `https://wa.me/${site.whatsapp}` },
    { icon: Instagram, label: "Instagram", value: "Follow our story", href: site.instagram },
  ];
  return (
    <>
      <PageHero
        eyebrow={`${site.name} - Dwarka`}
        title="Contact"
        image={img.lobby}
        crumbs={[{ href: "/contact", label: "Contact" }]}
      />

      <section className="py-24 md:py-32">
        <div className="container-luxe">
          <Stagger className="grid gap-px bg-forest/10 sm:grid-cols-2 lg:grid-cols-4">
            {cards.map((c) => (
              <StaggerItem key={c.label} className="group bg-cream">
                <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="block h-full p-9 transition-colors duration-700 hover:bg-forest">
                  <c.icon className="h-7 w-7 stroke-[1.3] text-gold-dark transition-colors group-hover:text-gold" />
                  <p className="mt-8 text-[10px] uppercase tracking-[0.3em] text-ink/50 transition-colors group-hover:text-gold">{c.label}</p>
                  <p className="mt-3 font-display text-xl leading-snug text-forest transition-colors group-hover:text-cream">{c.value}</p>
                </a>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="pb-28 md:pb-36">
        <div className="container-luxe grid gap-16 lg:grid-cols-2">
          <div>
            <SectionIntro eyebrow="Need Assistance ?" title="Get in touch with us" text={`At ${site.name}, we strive to provide exceptional service to our guests. Whether you have inquiries about reservations, amenities, or anything else, our dedicated team is ready to assist you.`} />
            <Reveal delay={0.2} className="mt-12"><ContactForm /></Reveal>
          </div>
          <Reveal delay={0.2} className="relative min-h-[460px] overflow-hidden bg-forest">
            <iframe
              title={`Map — ${site.name}`}
              src={site.mapEmbed}
              className="absolute inset-0 h-full w-full grayscale-[60%] contrast-[1.05]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute inset-x-6 bottom-6 bg-forest/95 p-6 text-cream backdrop-blur">
              <p className="eyebrow !text-gold">Find us</p>
              <p className="mt-2 font-display text-xl">{fullAddress}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-sand py-28 md:py-36">
        <div className="container-luxe grid gap-16 lg:grid-cols-[1fr_1.6fr]">
          <SectionIntro eyebrow="FAQ" title="Good to know" />
          <Reveal delay={0.2}><Faq items={faqs} /></Reveal>
        </div>
      </section>
    </>
  );
}
