// Central place for all brand + contact details.
// Update these values once and they change across the whole website.

export const site = {
  name: "Hotel Lilla's",
  shortName: "Lilla's",
  legalName: "Hotel Lilla's by Millora",
  tagline: "A Boutique Stay by the Arabian Sea",
  city: "Dwarka",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://hotellillas.com",
  description:
    "Hotel Lilla's is a boutique hotel in Dwarka, Gujarat — a two-minute walk from the Dwarkadhish Temple, with 30 individually designed rooms, sea views and a rooftop vegetarian restaurant.",
  phone: "+91 97262 86398",
  phoneHref: "tel:+919726286398",
  whatsapp: "919726286398",
  email: "", // add a reservations email here when available, e.g. "stay@hotellillas.com"
  address: {
    line1: "Homeguard Chowk",
    city: "Dwarka",
    state: "Gujarat",
    pin: "361335",
    country: "India",
  },
  // Booking engine — replace with the Hotel Lilla's booking link from eGlobe when it is ready.
  bookingUrl:
    "https://hotels.eglobe-solutions.com/hotelleelas/booking/hotels/hotel-leelas-dwarka",
  // Replace with the new Instagram handle after the rebrand.
  instagram:
    "https://www.instagram.com/leelas_hotel_dwarka",
  googleReviewsUrl:
    "https://www.google.com/search?q=Hotel+Leela%27s+by+Millora+Dwarka+reviews",
  mapEmbed:
    "https://maps.google.com/maps?q=Homeguard%20Chowk%2C%20Dwarka%2C%20Gujarat%20361335&t=m&z=15&output=embed&iwloc=near",
  mapLink:
    "https://www.google.com/maps/search/?api=1&query=Homeguard+Chowk+Dwarka+Gujarat+361335",
  rating: { label: "Excellent", count: 300 },
};

export const fullAddress = `${site.legalName}, ${site.address.line1}, ${site.address.city}, ${site.address.state} ${site.address.pin}`;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/rooms", label: "Rooms & Suites" },
  { href: "/devbhoomi-dwarka", label: "Devbhoomi Dwarka" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/devbhoomi-dwarka", label: "Devbhoomi Dwarka" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy-policy", label: "Privacy Policy" },
];
