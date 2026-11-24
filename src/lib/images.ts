// All photography used on the site lives in /public/images and is referenced here.
// To replace a photo, drop a new file into /public/images/... and update the path below.

const r = "/images/rooms";
const h = "/images/hotel";
const d = "/images/dining";
const w = "/images/dwarka";

export const img = {
  // Wide shots — used for full-screen heroes
  hero: `${w}/devbhoomi-dwarka.webp`,
  heroAlt: `${r}/suite-2.jpg`,
  sea: `${w}/shivrajpur-beach.webp`,

  // Hotel
  exterior: `${h}/exterior.jpg`,
  exteriorCutout: `${h}/exterior-cutout.png`,
  about: `${h}/exterior.jpg`,
  lobby: `${r}/executive-1.jpg`,

  // Rooms
  deluxe: [`${r}/deluxe-1.jpg`, `${r}/deluxe-2.jpg`],
  executive: [`${r}/executive-1.jpg`],
  suite: [`${r}/suite-1.jpg`, `${r}/suite-2.jpg`],

  // Dining
  rooftop: `${d}/rooftop.jpg`,
  restaurant: `${d}/multicuisine.jpg`,
  thali: `${d}/multicuisine.jpg`,
  dining: `${r}/executive-1.jpg`,

  // Dwarka
  temple: `${w}/dwarkadhish.jpg`,
  templeNight: `${w}/dwarkadhish-night.webp`,
  templeAlt: `${w}/rukmini-mata.webp`,
  beach: `${w}/dwarka-beach.jpg`,
  gomti: `${w}/gomti-ghat.jpg`,
  island: `${w}/beyt-island.jpg`,
  sunset: `${w}/sunset-point.webp`,
  lighthouse: `${w}/lighthouse.webp`,
  somnath: `${w}/somnath.webp`,
};

export const placeImages: Record<string, string> = {
  "Siddheshwar Mahadev Temple": `${w}/siddheshwar-mahadev.webp`,
  "Bhadkeshwar Mahadev": `${w}/bhadkeshwar-mahadev.webp`,
  "Gayatri Mandir": `${w}/gayatri-mandir.webp`,
  "Gayatri Shaktipith Mandir": `${w}/gayatri-shaktipith.webp`,
  "Trilok Darshan Art Gallery": `${w}/trilok-darshan.webp`,
  "Sunset Point": `${w}/sunset-point.webp`,
  "Light House Dwarka": `${w}/lighthouse.webp`,
  "Nageshwar Mahadev": `${w}/nageshwar.webp`,
  "Gopi Talab": `${w}/gopi-talab.webp`,
  "Rukmini Mata Temple": `${w}/rukmini-mata.webp`,
  "Beyt Dwarka": `${w}/beyt-island.jpg`,
  "Shivrajpur Beach": `${w}/shivrajpur-beach.webp`,
  "Harsiddhi Mata Temple": `${w}/harsiddhi-mata.webp`,
  "Sudamapuri, Porbandar": `${w}/sudamapuri.webp`,
  "Somnath Jyotirlinga": `${w}/somnath.webp`,
};

export const gallery = [
  { src: img.exterior, alt: "Hotel Lilla's", tag: "Hotel" },
  { src: img.deluxe[0], alt: "Deluxe Room", tag: "Rooms" },
  { src: img.rooftop, alt: "Rooftop restaurant", tag: "Dining" },
  { src: img.suite[0], alt: "Suite Room", tag: "Rooms" },
  { src: img.hero, alt: "Devbhoomi Dwarka from the sea", tag: "Dwarka" },
  { src: img.executive[0], alt: "Executive Deluxe Room", tag: "Rooms" },
  { src: img.restaurant, alt: "Multi-cuisine vegetarian food", tag: "Dining" },
  { src: img.temple, alt: "Dwarkadhish Temple", tag: "Dwarka" },
  { src: img.suite[1], alt: "Suite bedroom", tag: "Rooms" },
  { src: img.templeNight, alt: "Dwarkadhish Temple at night", tag: "Dwarka" },
  { src: img.deluxe[1], alt: "Deluxe Room interior", tag: "Rooms" },
  { src: img.gomti, alt: "Gomti Ghat", tag: "Dwarka" },
  { src: img.sea, alt: "Shivrajpur Beach", tag: "Dwarka" },
  { src: img.lighthouse, alt: "Dwarka lighthouse", tag: "Dwarka" },
  { src: img.beach, alt: "Dwarka Beach", tag: "Dwarka" },
  { src: img.sunset, alt: "Sunset Point", tag: "Dwarka" },
];
