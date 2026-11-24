import type { Metadata, Viewport } from "next";
import "@fontsource/cormorant-garamond/300.css";
import "@fontsource/cormorant-garamond/400.css";
import "@fontsource/cormorant-garamond/400-italic.css";
import "@fontsource/cormorant-garamond/500.css";
import "@fontsource/cormorant-garamond/600.css";
import "@fontsource-variable/jost";
import "./globals.css";
import { site, fullAddress } from "@/lib/site";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Preloader } from "@/components/Preloader";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Cursor, FloatingActions, ScrollProgress } from "@/components/Extras";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Boutique Hotel in Dwarka near Dwarkadhish Temple`,
    template: `%s | ${site.name}, Dwarka`,
  },
  description: site.description,
  keywords: ["Hotel in Dwarka", "Hotel near Dwarkadhish Temple", "Dwarka hotels", "Hotel Lilla's", "sea view hotel Dwarka", "vegetarian restaurant Dwarka"],
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name} — Hotel in Dwarka`,
    description: site.description,
    images: [{ url: "/brand/og-image.jpg", width: 1280, height: 698, alt: site.name }],
    locale: "en_IN",
  },
  twitter: { card: "summary_large_image", images: ["/brand/og-image.jpg"] },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#0c2e23",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Hotel",
  name: site.name,
  description: site.description,
  url: site.url,
  telephone: site.phone,
  image: `${site.url}/brand/og-image.jpg`,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.line1,
    addressLocality: site.address.city,
    addressRegion: site.address.state,
    postalCode: site.address.pin,
    addressCountry: "IN",
  },
  numberOfRooms: 30,
  amenityFeature: ["Baggage hold", "Laundry service", "Restaurant", "Room service", "Free Wi-Fi"].map((name) => ({
    "@type": "LocationFeatureSpecification",
    name,
    value: true,
  })),
  hasMap: site.mapLink,
  sameAs: [site.instagram],
  areaServed: fullAddress,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-IN" className="antialiased">
      <body className="min-h-screen">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Preloader />
        <SmoothScroll />
        <ScrollProgress />
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingActions />
        <Cursor />
      </body>
    </html>
  );
}
