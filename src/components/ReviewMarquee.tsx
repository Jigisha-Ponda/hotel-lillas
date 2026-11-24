import { Star } from "lucide-react";

/** Two rows of guest reviews drifting in opposite directions; pauses on hover. */
export function ReviewMarquee({ items }: { items: { name: string; text: string }[] }) {
  const half = Math.ceil(items.length / 2);
  const rows = [items.slice(0, half), items.slice(half)];
  return (
    <div className="relative mt-16 space-y-6 [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
      {rows.map((row, r) => (
        <div key={r} className="group flex overflow-hidden">
          <div
            className={`flex w-max gap-6 animate-marquee group-hover:[animation-play-state:paused] ${r === 1 ? "[animation-direction:reverse]" : ""}`}
            style={{ animationDuration: "60s" }}
          >
            {[...row, ...row, ...row, ...row].map((rv, i) => (
              <figure
                key={i}
                aria-hidden={i >= row.length}
                className="flex w-[340px] shrink-0 flex-col justify-between border border-forest/10 bg-white/60 p-8 transition-colors duration-500 hover:border-gold/50 hover:bg-white md:w-[400px]"
              >
                <div>
                  <div className="flex gap-1 text-gold">
                    {Array.from({ length: 5 }).map((_, k) => <Star key={k} className="h-3.5 w-3.5 fill-current" />)}
                  </div>
                  <blockquote className="mt-5 font-display text-xl leading-snug text-forest">&ldquo;{rv.text}&rdquo;</blockquote>
                </div>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-forest/10 pt-5">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-forest font-display text-sm text-gold-light">
                    {rv.name.charAt(0)}
                  </span>
                  <span>
                    <span className="block text-sm font-medium text-forest capitalize">{rv.name.toLowerCase()}</span>
                    <span className="block text-[10px] uppercase tracking-[0.2em] text-ink/45">Google review</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
