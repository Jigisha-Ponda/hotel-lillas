"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Check, Send } from "lucide-react";
import { site } from "@/lib/site";

/**
 * Enquiry form. With no backend, it opens WhatsApp with the enquiry pre-filled so it
 * reaches reception instantly. (Swap for an email/API route later if preferred.)
 */
export function ContactForm() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", checkIn: "", guests: "2", message: "" });
  const [sent, setSent] = useState(false);
  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = [
      `Hello ${site.name}, I have an enquiry.`,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      form.email && `Email: ${form.email}`,
      form.checkIn && `Arrival: ${form.checkIn}`,
      `Guests: ${form.guests}`,
      form.message && `Message: ${form.message}`,
    ].filter(Boolean);
    window.open(`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`, "_blank", "noopener");
    setSent(true);
  };

  const input =
    "peer w-full border-b border-forest/20 bg-transparent pt-6 pb-3 text-[15px] text-forest outline-none transition-colors focus:border-gold-dark placeholder-transparent";
  const label =
    "pointer-events-none absolute top-6 left-0 text-[13px] text-ink/50 transition-all duration-300 peer-focus:top-0 peer-focus:text-[10px] peer-focus:tracking-[0.25em] peer-focus:uppercase peer-focus:text-gold-dark peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-[0.25em]";

  return (
    <form onSubmit={submit} className="relative grid gap-8 sm:grid-cols-2">
      <div className="relative">
        <input id="name" required placeholder="Name" value={form.name} onChange={set("name")} className={input} />
        <label htmlFor="name" className={label}>Full name *</label>
      </div>
      <div className="relative">
        <input id="phone" required type="tel" placeholder="Phone" value={form.phone} onChange={set("phone")} className={input} />
        <label htmlFor="phone" className={label}>Phone *</label>
      </div>
      <div className="relative">
        <input id="email" type="email" placeholder="Email" value={form.email} onChange={set("email")} className={input} />
        <label htmlFor="email" className={label}>Email</label>
      </div>
      <div className="grid grid-cols-2 gap-6">
        <div className="relative">
          <input id="arrival" type="date" placeholder="Arrival" value={form.checkIn} onChange={set("checkIn")} className={`${input} [&:not(:focus)]:text-forest`} />
          <label htmlFor="arrival" className={`${label} !top-0 !text-[10px] !uppercase !tracking-[0.25em]`}>Arrival</label>
        </div>
        <div className="relative">
          <select id="guests" value={form.guests} onChange={set("guests")} className={input}>
            {[1, 2, 3, 4, 5, 6, 8, 10].map((n) => <option key={n} value={n}>{n}</option>)}
          </select>
          <label htmlFor="guests" className={`${label} !top-0 !text-[10px] !uppercase !tracking-[0.25em]`}>Guests</label>
        </div>
      </div>
      <div className="relative sm:col-span-2">
        <textarea id="message" rows={4} maxLength={180} placeholder="Message" value={form.message} onChange={set("message")} className={`${input} resize-none`} />
        <label htmlFor="message" className={label}>How can we help?</label>
        <span className="absolute right-0 bottom-3 text-[11px] text-ink/40">{form.message.length} / 180</span>
      </div>
      <div className="flex flex-wrap items-center gap-6 sm:col-span-2">
        <button type="submit" className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-forest px-9 py-4 text-[12px] font-medium uppercase tracking-[0.28em] text-cream">
          <span className="absolute inset-0 translate-y-full rounded-full bg-gold transition-transform duration-500 ease-luxe group-hover:translate-y-0" />
          <span className="relative transition-colors group-hover:text-forest">Send Message</span>
          <Send className="relative h-4 w-4 transition-all duration-500 group-hover:translate-x-1 group-hover:text-forest" />
        </button>
        <AnimatePresence>
          {sent && (
            <motion.p initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} className="flex items-center gap-2 text-sm text-forest">
              <Check className="h-4 w-4 text-gold-dark" /> Opening WhatsApp — just press send.
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </form>
  );
}
