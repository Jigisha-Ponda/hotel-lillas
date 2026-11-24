import { LuxeButton } from "@/components/BookButton";
import { Monogram } from "@/components/Logo";

export default function NotFound() {
  return (
    <section className="grain relative flex min-h-[100svh] flex-col items-center justify-center gap-8 bg-forest px-6 text-center text-cream">
      <Monogram className="h-24 w-24" />
      <p className="eyebrow !text-gold">Error 404</p>
      <h1 className="heading-xl">This page has wandered off</h1>
      <p className="max-w-md text-cream/65">The page you&apos;re looking for doesn&apos;t exist or has moved. Let us guide you back.</p>
      <div className="flex flex-wrap justify-center gap-4">
        <LuxeButton href="/">Back to Home</LuxeButton>
        <LuxeButton href="/contact" variant="outline">Contact Us</LuxeButton>
      </div>
    </section>
  );
}
