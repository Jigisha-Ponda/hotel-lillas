"use client";

import { useState } from "react";
import { useClientValue } from "@/lib/useClient";
import { motion } from "motion/react";
import { site } from "@/lib/site";

/** Quick availability bar. Opens the hotel's booking engine in a new tab. */
export function BookingBar({ className = "" }: { className?: string }) {
  const minDate = useClientValue<string | undefined>(() => new Date().toISOString().slice(0, 10), undefined);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = new URL(site.bookingUrl);
    if (checkIn) url.searchParams.set("checkin", checkIn);
    if (checkOut) url.searchParams.set("checkout", checkOut);
    url.searchParams.set("adults", guests);
    window.open(url.toString(), "_blank", "noopener");
  };

  const field = "w-full bg-transparent text-[15px] text-cream outline-none [color-scheme:dark] placeholder:text-cream/40";
  return (
    <motion.form
      onSubmit={submit}
      className={`grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-gold/25 bg-gold/20 backdrop-blur-xl md:grid-cols-[1fr_1fr_1fr_auto] ${className}`}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.1, delay: 1.3, ease: [0.22, 1, 0.36, 1] }}
    >
      <label className="flex flex-col gap-1 bg-forest/70 px-6 py-4">
        <span className="text-[10px] uppercase tracking-[0.3em] text-gold">Check-in</span>
        <input type="date" min={minDate} value={checkIn} onChange={(e) => setCheckIn(e.target.value)} className={field} suppressHydrationWarning />
      </label>
      <label className="flex flex-col gap-1 bg-forest/70 px-6 py-4">
        <span className="text-[10px] uppercase tracking-[0.3em] text-gold">Check-out</span>
        <input type="date" min={checkIn || minDate} value={checkOut} onChange={(e) => setCheckOut(e.target.value)} className={field} suppressHydrationWarning />
      </label>
      <label className="col-span-2 flex flex-col gap-1 bg-forest/70 px-6 py-4 md:col-span-1">
        <span className="text-[10px] uppercase tracking-[0.3em] text-gold">Guests</span>
        <select value={guests} onChange={(e) => setGuests(e.target.value)} className={`${field} [&>option]:bg-forest`}>
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <option key={n} value={n}>
              {n} {n === 1 ? "Adult" : "Adults"}
            </option>
          ))}
        </select>
      </label>
      <button type="submit" className="group col-span-2 relative overflow-hidden bg-gold px-10 py-5 text-[12px] font-medium uppercase tracking-[0.28em] text-forest md:col-span-1">
        <span className="absolute inset-0 translate-y-full bg-cream transition-transform duration-500 ease-luxe group-hover:translate-y-0" />
        <span className="relative">Check Availability</span>
      </button>
    </motion.form>
  );
}
