import type { MetadataRoute } from "next";
import { rooms } from "@/lib/content";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/about", "/rooms", "/devbhoomi-dwarka", "/gallery", "/contact", "/privacy-policy"];
  return [
    ...pages.map((p) => ({ url: `${site.url}${p}`, changeFrequency: "monthly" as const, priority: p === "" ? 1 : 0.8 })),
    ...rooms.map((r) => ({ url: `${site.url}/rooms/${r.slug}`, changeFrequency: "monthly" as const, priority: 0.7 })),
  ];
}
