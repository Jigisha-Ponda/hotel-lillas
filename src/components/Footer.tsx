import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { Instagram } from "./Icons";
import { Monogram } from "./Logo";
import { footerLinks, fullAddress, site } from "@/lib/site";
import { LuxeButton } from "./BookButton";
import { Year } from "./Year";

export function Footer() {
  return (
    <footer className="grain relative overflow-hidden bg-forest text-cream">
      <div className="container-luxe relative">
        <div className="flex flex-col items-center gap-8 border-b border-gold/15 py-24 text-center">
          <Monogram className="h-20 w-20" />
          <h2 className="heading-lg max-w-3xl text-cream">
            Your stay in <em className="gold-text not-italic font-normal italic">Devbhoomi Dwarka</em> begins here
          </h2>
          <LuxeButton>Book Your Stay</LuxeButton>
        </div>

        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-2xl tracking-[0.25em] uppercase text-gold-light">{site.name}</p>
            <p className="mt-4 text-sm leading-7 text-cream/60">{site.tagline}. A two-minute walk from the Dwarkadhish Temple.</p>
          </div>
          <div>
            <p className="eyebrow !text-gold">Address</p>
            <a href={site.mapLink} target="_blank" rel="noopener noreferrer" className="mt-5 flex gap-3 text-sm leading-7 text-cream/75 hover:text-gold-light">
              <MapPin className="mt-1 h-4 w-4 shrink-0 text-gold" />
              {fullAddress}
            </a>
            <a href={site.phoneHref} className="mt-3 flex items-center gap-3 text-sm text-cream/75 hover:text-gold-light">
              <Phone className="h-4 w-4 text-gold" /> {site.phone}
            </a>
            {site.email && (
              <a href={`mailto:${site.email}`} className="mt-3 flex items-center gap-3 text-sm text-cream/75 hover:text-gold-light">
                <Mail className="h-4 w-4 text-gold" /> {site.email}
              </a>
            )}
          </div>
          <div>
            <p className="eyebrow !text-gold">Useful Links</p>
            <ul className="mt-5 space-y-3 text-sm">
              {footerLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="group inline-flex items-center gap-2 text-cream/75 transition-colors hover:text-gold-light">
                    <span className="h-px w-0 bg-gold transition-all duration-500 group-hover:w-4" />
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/rooms" className="group inline-flex items-center gap-2 text-cream/75 hover:text-gold-light">
                  <span className="h-px w-0 bg-gold transition-all duration-500 group-hover:w-4" />
                  Rooms &amp; Suites
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="eyebrow !text-gold">Social</p>
            <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 text-gold-light transition-all duration-500 hover:bg-gold hover:text-forest" aria-label="Instagram">
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-gold/15 py-8 text-xs tracking-wider text-cream/45 md:flex-row">
          <p>Copyright © <Year /> | {site.name}. All rights reserved.</p>
          <Link href="/privacy-policy" className="hover:text-gold-light">Privacy Policy</Link>
        </div>
      </div>
      <p aria-hidden className="pointer-events-none select-none text-center font-display text-[22vw] leading-[0.75] font-light text-gold/[0.06] -mb-[3vw]">
        Lilla&rsquo;s
      </p>
    </footer>
  );
}
