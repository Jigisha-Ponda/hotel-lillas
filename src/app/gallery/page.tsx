import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { GalleryGrid } from "@/components/GalleryGrid";
import { gallery, img } from "@/lib/images";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photos of Hotel Lilla's rooms, rooftop restaurant and the sacred city of Dwarka.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <PageHero eyebrow="Gallery" title={"Moments at\nHotel Lilla's"} image={img.deluxe[1]} crumbs={[{ href: "/gallery", label: "Gallery" }]} />
      <section className="py-24 md:py-32">
        <div className="container-luxe">
          <GalleryGrid items={gallery} />
        </div>
      </section>
    </>
  );
}
