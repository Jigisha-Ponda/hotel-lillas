# Hotel Lilla's — Website

Next.js 16 (App Router) + Tailwind CSS 4 + Motion + Lenis smooth scrolling.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start   # production check
```

## Pages

| URL | Page |
|---|---|
| `/` | Home |
| `/about` | About |
| `/rooms` | Rooms & Suites |
| `/rooms/deluxe-room` · `/rooms/executive-deluxe-room` · `/rooms/suite-room` | Room details |
| `/dining` | Rooftop restaurant |
| `/devbhoomi-dwarka` | Dwarka guide + temple timings |
| `/gallery` | Gallery with filters + lightbox |
| `/contact` | Contact, WhatsApp enquiry form, map, FAQ |
| `/privacy-policy` | Privacy policy |

`/sitemap.xml` and `/robots.txt` are generated automatically.

## Where to edit things

- **Name, phone, address, booking link, Instagram, map** → `src/lib/site.ts`
- **Rooms, amenities, temples, sightseeing, FAQs** → `src/lib/content.ts`
- **Photos** → `src/lib/images.ts` (currently stock placeholders — put real hotel photos in `public/images/` and replace the URLs, e.g. `"/images/rooms/deluxe-1.jpg"`)
- **Logo** → `src/components/Logo.tsx` (vector), favicon `src/app/icon.png`, share image `public/brand/og-image.jpg`
- **Colours & fonts** → `src/app/globals.css` (`@theme` block)

## Before launch checklist

1. Replace the booking link in `site.ts` with the Hotel Lilla's booking-engine URL.
2. Replace the Instagram link and Google reviews link with the new accounts.
3. Add an email address in `site.ts` (optional — it appears automatically in the footer).
4. Swap stock photos for real hotel photos.
5. Confirm room details (occupancy, bed type, in-room amenities) in `content.ts`.
6. Set `NEXT_PUBLIC_SITE_URL` on Vercel to your final domain (e.g. `https://hotellillas.com`).

## Deploy: GitHub → Vercel → GoDaddy domain

### 1. Push to GitHub
```bash
git init            # already done if you received this repo with a .git folder
git add .
git commit -m "Hotel Lilla's website"
git branch -M main
git remote add origin https://github.com/<your-username>/hotel-lillas.git
git push -u origin main
```
(Create the empty repo `hotel-lillas` on github.com first — no README.)

### 2. Deploy on Vercel
1. vercel.com → **Add New → Project** → import the `hotel-lillas` GitHub repo.
2. Framework: Next.js (auto-detected). Leave build settings as default.
3. **Environment Variables** → add `NEXT_PUBLIC_SITE_URL` = `https://yourdomain.com`.
4. Deploy. Every future `git push` redeploys automatically.

### 3. Point the GoDaddy domain
1. Vercel → Project → **Settings → Domains** → add `yourdomain.com` and `www.yourdomain.com`.
2. GoDaddy → **My Products → Domain → DNS → Manage DNS**:
   - Edit the **A** record for `@` → value shown by Vercel (usually `76.76.21.21`), TTL 600.
   - Edit/Add a **CNAME** for `www` → value shown by Vercel (usually `cname.vercel-dns.com`).
   - Delete any other `@` A records or GoDaddy "Parked"/forwarding entries.
3. Wait 10 min – a few hours. Vercel issues the SSL certificate automatically.
