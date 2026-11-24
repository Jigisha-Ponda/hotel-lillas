import { img } from "./images";

export type Room = {
  slug: string;
  name: string;
  short: string;
  description: string[];
  images: string[];
  size: string;
  occupancy: string;
  bed: string;
  view: string;
  highlights: string[];
  amenities: string[];
};

export const rooms: Room[] = [
  {
    slug: "deluxe-room",
    name: "Deluxe Room",
    short:
      "Perfect for a relaxing getaway, our Deluxe Rooms offer a cosy haven with plush furnishings and modern amenities.",
    description: [
      "Perfect for a relaxing getaway, our Deluxe Rooms offer a cosy haven with plush furnishings and modern amenities.",
      "Ideal for couples and solo travellers, each room brings together thoughtful design and modern amenities — so you can rest well and be ready for the next morning's Mangla Aarti, just a two-minute walk away.",
    ],
    images: img.deluxe,
    size: "Cosy",
    occupancy: "2 Adults",
    bed: "King / Twin",
    view: "City",
    highlights: ["Plush furnishings", "Modern amenities", "2 min walk to Dwarkadhish Temple"],
    amenities: ["Air conditioning", "Free Wi-Fi", "LED television", "Room service", "Ensuite bathroom", "Hot water 24×7", "Daily housekeeping", "Toiletries"],
  },
  {
    slug: "executive-deluxe-room",
    name: "Executive Deluxe Room",
    short:
      "Upgrade your experience with our Executive Deluxe Rooms, featuring spacious layouts, city views, and additional amenities for the discerning traveller.",
    description: [
      "Upgrade your experience with our Executive Deluxe Rooms, featuring spacious layouts, city views, and additional amenities for the discerning traveller.",
      "Thoughtfully appointed for families and guests who like a little extra, it is the perfect balance of comfort, calm and convenience — moments away from the temple and the ghats.",
    ],
    images: img.executive,
    size: "Spacious",
    occupancy: "2 Adults + 1 Child",
    bed: "King",
    view: "City",
    highlights: ["City views", "Extra living space", "Enhanced amenities"],
    amenities: ["Air conditioning", "Free Wi-Fi", "LED television", "Room service", "Seating area", "Ensuite bathroom", "Tea & coffee", "Daily housekeeping"],
  },
  {
    slug: "suite-room",
    name: "Suite Room",
    short:
      "Indulge in unparalleled luxury in our opulent Suite Rooms. These expansive spaces boast city views, a separate living area, and premium amenities for an unforgettable stay.",
    description: [
      "Indulge in unparalleled luxury in our opulent Suite Rooms. These expansive spaces boast city views, a separate living area, and premium amenities for an unforgettable stay.",
      "Whether you are travelling with family or celebrating a special pilgrimage, the Suite offers space to gather, relax and enjoy Dwarka in complete comfort.",
    ],
    images: img.suite,
    size: "Most Expansive",
    occupancy: "Up to 4 Guests",
    bed: "King",
    view: "City",
    highlights: ["Separate living area", "City views", "Premium amenities"],
    amenities: ["Air conditioning", "Free Wi-Fi", "Smart television", "Priority room service", "Separate living room", "Premium bath amenities", "Tea & coffee", "Daily housekeeping"],
  },
];

export const amenities = [
  { icon: "Luggage", title: "Baggage Hold", text: "Arrived early or leaving late? We'll keep your luggage safe." },
  { icon: "Shirt", title: "Laundry Service", text: "Same-day laundry so you can travel light." },
  { icon: "UtensilsCrossed", title: "Restaurant", text: "Rooftop multi-cuisine vegetarian dining with sea views." },
  { icon: "ConciergeBell", title: "Room Service", text: "Meals and refreshments delivered to your door." },
  { icon: "Wifi", title: "Free Wi-Fi", text: "Fast, complimentary Wi-Fi across the hotel." },
] as const;

export const nearby = [
  { name: "Dwarkadhish Temple", distance: "2 min walk", image: img.temple, text: "The 'Jagat Mandir' of Lord Krishna, steps from the hotel." },
  { name: "Dwarka Beach", distance: "Nearby", image: img.beach, text: "Golden sands and the open Arabian Sea." },
  { name: "Gomti Ghat", distance: "Walking distance", image: img.gomti, text: "Sacred ghats where the Gomti meets the sea." },
  { name: "Beyt Island", distance: "34 km", image: img.island, text: "Believed to be the site of Krishna's ancient Dwarka." },
];

export const templeTimings = [
  { label: "Mangla Aarti", time: "6:30 AM" },
  { label: "Shingar Aarti", time: "10:30 AM" },
  { label: "Rajbhog", time: "12:00 Noon" },
  { label: "Closed", time: "1:00 PM", closed: true },
  { label: "Uthapam", time: "5:00 PM" },
  { label: "Sandhya Aarti", time: "7:30 PM" },
  { label: "Shayan Aarti", time: "8:30 PM" },
  { label: "Closed", time: "9:30 PM", closed: true },
];

export type Place = { name: string; distance: string; time?: string; text: string; image?: string };

export const dwarkaTemples: Place[] = [
  {
    name: "Siddheshwar Mahadev Temple",
    distance: "750 meters (5min from Dwarkadhish Mandir)",
    text: "Unlike the more popular temples in Dwarka, Siddheshwar Mahadev Temple is often less crowded, allowing visitors to experience a more intimate connection with the divine. This ancient Shiva temple, dedicated to Lord Shiva, is a place that provides a quiet and peaceful atmosphere for spiritual seekers.",
  },
  {
    name: "Bhadkeshwar Mahadev",
    distance: "2 km (10mins from Dwarkadhish Mandir)",
    text: "Shri Bhadkeshwar Mahadev Mandir is a unique and magnificent temple situated beside the Arabian Sea. According to legend, a Shivalinga appeared from the depth of the ocean, about 5,000 years ago, which resulted in the creation of this holy place.",
  },
  {
    name: "Gayatri Mandir",
    distance: "1.7 km from Dwarkadhish Mandir",
    text: "Gayatri Mandir situated approximately 1.7 kilometres from Dwarkadhish Mandir, Gayatri Mandir is blessed with a beautiful location close to the Arabian Sea. The temple's proximity to the ocean creates a peaceful ambience, enhanced by the gentle sound of waves and the refreshing sea breeze.",
  },
  {
    name: "Gayatri Shaktipith Mandir",
    distance: "850 meters (5min from Dwarkadhish Mandir)",
    text: "Gayatri Shaktipith Mandir is situated approximately 850 meters from Dwarkadhish Mandir. Gayatri Mandir is blessed with a beautiful location close to the Arabian Sea. The temple's proximity to the ocean creates a peaceful ambience, enhanced by the gentle sound of waves and the refreshing sea breeze.",
  },
  {
    name: "Trilok Darshan Art Gallery",
    distance: "1 km (5min from Dwarkadhish Mandir)",
    text: "Trilok Darshan Art Gallery is more than just a cultural centre. It's a haven for spiritual travellers. The gallery offers a variety of activities, including Rajyoga meditation, yoga classes, and addiction recovery camps. These programs are designed to empower individuals, promote inner peace, and help them overcome challenges.",
  },
  {
    name: "Sunset Point",
    distance: "1.6 km (7min from Dwarkadhish Mandir)",
    text: "When you are in Dwarka, ensure a memorable experience, it's recommended to visit Sunset Point during the late afternoon, about an hour before sunset. For more information and to plan your visit, you can contact Hotel Lilla's reception, which can provide details on the best time to visit and any additional amenities or activities available in the area.",
  },
  {
    name: "Light House Dwarka",
    distance: "1.5 km (7min from Dwarkadhish Mandir)",
    text: "The lighthouse's history dates back to 1866 when an earlier version, equipped with an oil lamp, was first established. In the early 1960s, the lighthouse was modernized with the installation of a powerful light bulb, ensuring its continued relevance in the modern era.",
  },
];

export const sightseeing: Place[] = [
  {
    name: "Nageshwar Mahadev",
    distance: "15 kilometres from the city of Dwarka (25 minutes drive)",
    text: "One of the twelve Jyotirlingas in India is a sacred shrine located approximately 15 kilometres from the city of Dwarka. Its rich mythology and divine energy make it a truly special and unforgettable destination.",
  },
  {
    name: "Gopi Talab",
    distance: "20 km (30 min from Dwarka)",
    text: "It stands as a symbol of the divine love between Lord Krishna and the Gopis. The pond's association with this heavenly dance serves as a reminder of the power of devotion, the beauty of human connection, and the eternal nature of love.",
  },
  {
    name: "Rukmini Mata Temple",
    distance: "5 km (10 min from city)",
    text: "Situated on the outskirts of Dwarka, is a sacred shrine dedicated to Rukmini, the beloved queen of Lord Krishna. This ancient temple, believed to be over 2,500 years old, stands as a witness to experience a love story between the divine couple. Located approximately 3 kilometres (10 minutes drive) from the city.",
  },
  {
    name: "Beyt Dwarka",
    distance: "34 km (50 min from Dwarka City)",
    text: "It offers a glimpse into the legendary Kingdom of Krishna. The island is believed to have been the site of the ancient city of Dwarka, which was submerged beneath the Arabian Sea. The current Dwarka is said to be the seventh incarnation of the original city. It is located 34 km (50 minutes drive) from the city of Dwarka.",
  },
  {
    name: "Shivrajpur Beach",
    distance: "12 km (20 mins from Dwarka city)",
    text: "Located approximately 12 kilometres (20 minutes drive) from Dwarka, Gujarat, along the Dwarka-Okha Highway, is a coastal paradise that has recently earned the prestigious Blue Flag certification. This recognition signifies the beach's exceptional water quality, environmental management, and visitor amenities.",
  },
];

export const gujarat: Place[] = [
  {
    name: "Harsiddhi Mata Temple",
    distance: "65 km from Dwarka City",
    text: "Situated at the border of Halar and Sorath, is a revered shrine dedicated to Lord Krishna and considered the Kuldevi (family deity) of King Vikramaditya. It is 65km from Dwarka City.",
  },
  {
    name: "Sudamapuri, Porbandar",
    distance: "100 km from Dwarka City",
    text: "Situated in the heart of Porbandar, is a unique and inspiring shrine dedicated to Sudama, the childhood friend of Lord Krishna. It is 100km away from Dwarka City.",
  },
  {
    name: "Somnath Jyotirlinga",
    distance: "240 km from Dwarka City",
    text: "Located in Prabhas Patan, Veraval, Gujarat, is a revered Hindu temple and the first among the twelve Jyotirlinga shrines dedicated to Lord Shiva. It is 240km from Dwarka City.",
  },
];

export const reviews = [
  { name: "Jignesh Rangpara", text: "very nice hotel in dwarka" },
  { name: "Harsh Pancholi", text: "It's good all facelity" },
  { name: "Saikat Paria", text: "Good to stay, room is little small but ambience is good" },
  {
    name: "Madhuba Ravalji",
    text: "It was a good experience, the room was neat and clean. Staff's behaviour was very nice and helpful. Dwarkadhish temple, Gomti ghat, sudama setu, Sangam narayan temple etc. were at 10-15 min. walkable distance from the hotel.",
  },
  {
    name: "SHARAD SRIVASTAVA",
    text: "Its the best property I’ve ever visit . And the services are also too good and fast . The management of the hotel makes sure that you get the best experience in everything like.",
  },
  { name: "Sandesh Waghe", text: "Perfect location. Near temple and lots of options for food. Rooms are neat and clean." },
  { name: "Avkash Chaudhari", text: "Very Good Experience And Staff is very Friendy and clean and safe" },
];

export const reviewThemes = [
  { title: "Spotless & well kept", text: "Guests consistently mention how clean the rooms and common areas are." },
  { title: "Warm, helpful staff", text: "Our team is often praised for being friendly, attentive and quick to help." },
  { title: "Perfect location", text: "Close to the temples, the ghats and plenty of good food options." },
  { title: "Pleasant ambience", text: "A calm, welcoming atmosphere to come back to after a day of darshan." },
];

export const faqs = [
  { q: "How far is Hotel Lilla's from the Dwarkadhish Temple?", a: "Just a two-minute walk — you can comfortably attend the early Mangla Aarti at 6:30 AM." },
  { q: "What kind of food does the restaurant serve?", a: "Our rooftop restaurant is pure vegetarian and multi-cuisine, with dishes from across India and views of the Arabian Sea." },
  { q: "Can I leave my luggage before check-in or after check-out?", a: "Yes. We offer a baggage hold so you can explore Dwarka freely." },
  { q: "Do you help plan trips to Beyt Dwarka, Nageshwar and Shivrajpur?", a: "Absolutely. Our reception can guide you on timings, routes and local travel for nearby sightseeing." },
];
