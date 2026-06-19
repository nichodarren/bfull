import type { Campus, Category, MenuItem, QueueStall, Tenant } from "./types";

export const CATEGORIES: Category[] = [
  "Semua",
  "Makanan Utama",
  "Camilan",
  "Minuman",
  "Sehat",
];

/** Demo account credentials shown on the login screen. */
export const DEMO_EMAIL = "demo@binus.ac.id";
export const DEMO_PASSWORD = "bfull2026";

export const CAMPUSES: Campus[] = [
  { id: "anggrek", name: "Kampus Anggrek", area: "Kebon Jeruk, Jakarta Barat" },
  { id: "syahdan", name: "Kampus Syahdan", area: "Palmerah, Jakarta Barat" },
  { id: "kijang", name: "Kampus Kijang", area: "Kemanggisan, Jakarta Barat" },
  { id: "alsut", name: "Kampus Alam Sutera", area: "Tangerang Selatan" },
  { id: "bekasi", name: "Kampus Bekasi", area: "Summarecon, Bekasi" },
  { id: "bandung", name: "Kampus Bandung", area: "Pasirkaliki, Bandung" },
  { id: "malang", name: "Kampus Malang", area: "Araya, Malang" },
  { id: "senayan", name: "BINUS @Senayan (JWC)", area: "Senayan, Jakarta Pusat" },
];

export const DEFAULT_CAMPUS_ID = "anggrek";

export const REVIEW_TAGS = [
  "Pelayanan cepat",
  "Enak",
  "Porsi pas",
  "Kemasan rapi",
  "Sesuai harga",
  "Pelayan ramah",
];

export interface Voucher {
  id: string;
  code: string;
  label: string;
  desc: string;
  /** Flat discount in IDR. */
  amount: number;
}

export const VOUCHERS: Voucher[] = [
  {
    id: "v1",
    code: "BFULL10K",
    label: "Potongan Rp 10.000",
    desc: "Min. pesanan Rp 30.000",
    amount: 10000,
  },
  {
    id: "v2",
    code: "NEWBIE",
    label: "Potongan Rp 5.000",
    desc: "Pesanan pertama hari ini",
    amount: 5000,
  },
  {
    id: "v3",
    code: "LUNCHRUSH",
    label: "Potongan Rp 8.000",
    desc: "Berlaku 11.00-13.00",
    amount: 8000,
  },
];

export const TENANTS: Tenant[] = [
  {
    id: "aw",
    name: "A&W Restaurant",
    tagline: "Burger · Ayam Goreng · Root Beer",
    cuisine: "Barat",
    logoColor: "bg-red-600",
    initials: "AW",
    rating: 4.6,
    etaMin: 12,
    priceLevel: 2,
    banner:
      "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=1200&q=80",
  },
  {
    id: "sb",
    name: "Starbucks",
    tagline: "Kopi · Pastri · Camilan Manis",
    cuisine: "Kopi",
    logoColor: "bg-emerald-700",
    initials: "SB",
    rating: 4.8,
    etaMin: 8,
    priceLevel: 3,
    banner:
      "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=1200&q=80",
  },
  {
    id: "yo",
    name: "Yoshinoya",
    tagline: "Rice Bowl Jepang · Ramen",
    cuisine: "Jepang",
    logoColor: "bg-orange-600",
    initials: "YO",
    rating: 4.7,
    etaMin: 13,
    priceLevel: 2,
    banner:
      "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=1200&q=80",
  },
  {
    id: "hb",
    name: "HokBen",
    tagline: "Bento Jepang · Teriyaki · Ekkado",
    cuisine: "Jepang",
    logoColor: "bg-orange-700",
    initials: "HB",
    rating: 4.7,
    etaMin: 10,
    priceLevel: 2,
    banner:
      "https://images.unsplash.com/photo-1583032015879-e5022cb87c3b?w=1200&q=80",
  },
  {
    id: "cc",
    name: "Cerita Cinta",
    tagline: "Masakan Rumahan Indonesia · Kopi",
    cuisine: "Indonesia",
    logoColor: "bg-rose-500",
    initials: "CC",
    rating: 4.6,
    etaMin: 12,
    priceLevel: 1,
    banner:
      "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=1200&q=80",
  },
  {
    id: "be",
    name: "Bakmie Effata",
    tagline: "Mie Bangka · Pangsit · Bakso",
    cuisine: "Bangka",
    logoColor: "bg-amber-600",
    initials: "BE",
    rating: 4.7,
    etaMin: 9,
    priceLevel: 1,
    banner:
      "https://images.unsplash.com/photo-1612927601601-6638404737ce?w=1200&q=80",
  },
  {
    id: "rg",
    name: "Rasela Gourmet",
    tagline: "Nasi Campur · Rendang · Lauk Khas",
    cuisine: "Indonesia",
    logoColor: "bg-teal-600",
    initials: "RG",
    rating: 4.5,
    etaMin: 11,
    priceLevel: 2,
    banner:
      "https://images.unsplash.com/photo-1567337710282-00832b415979?w=1200&q=80",
  },
];

/**
 * Simulated live canteen queue shown in the "Antrian Kantin" board. In
 * production this would stream from a realtime backend; here it fluctuates
 * client-side every few seconds. Stalls map to real tenants above.
 */
export const CANTEEN_STALLS: QueueStall[] = [
  { id: "rg", name: "Rasela Gourmet", emoji: "🍛", queue: 3, avgWaitPerOrder: 4 },
  { id: "be", name: "Bakmie Effata", emoji: "🍜", queue: 11, avgWaitPerOrder: 5 },
  { id: "sb", name: "Starbucks", emoji: "🥤", queue: 2, avgWaitPerOrder: 2 },
  { id: "cc", name: "Cerita Cinta", emoji: "🔥", queue: 7, avgWaitPerOrder: 6 },
];

export const MENU_ITEMS: MenuItem[] = [
  // A&W
  {
    id: "aw1",
    tenantId: "aw",
    name: "Burger Sapi Deluxe",
    description: "Patty sapi panggang juicy, keju cheddar, selada, dan tomat.",
    price: 35000,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80",
    category: "Makanan Utama",
    prepTime: 12,
    rating: 4.6,
    calories: 650,
  },
  {
    id: "aw2",
    tenantId: "aw",
    name: "Kentang Keriting",
    description: "Kentang keriting berbumbu disajikan dengan aioli bawang putih.",
    price: 22000,
    image: "https://images.unsplash.com/photo-1518013431117-eb1465fa5752?w=800&q=80",
    category: "Camilan",
    prepTime: 8,
    rating: 4.5,
    calories: 410,
  },
  {
    id: "aw3",
    tenantId: "aw",
    name: "Root Beer Float",
    description: "Root beer khas dengan satu scoop es krim vanila.",
    price: 25000,
    image: "https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?w=800&q=80",
    category: "Minuman",
    prepTime: 4,
    rating: 4.7,
    calories: 280,
  },
  // Starbucks
  {
    id: "sb1",
    tenantId: "sb",
    name: "Iced Matcha Latte",
    description: "Matcha premium grade seremonial dengan susu oat dan es.",
    price: 45000,
    image: "https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?w=800&q=80",
    category: "Minuman",
    prepTime: 6,
    rating: 4.8,
    calories: 180,
  },
  {
    id: "sb2",
    tenantId: "sb",
    name: "Caffe Latte",
    description: "Espresso pekat dengan susu steam dan lapisan tipis busa.",
    price: 38000,
    image: "https://images.unsplash.com/photo-1561882468-9110e03e0f78?w=800&q=80",
    category: "Minuman",
    prepTime: 5,
    rating: 4.7,
    calories: 150,
  },
  {
    id: "sb3",
    tenantId: "sb",
    name: "Kue Lava Cokelat",
    description: "Kue cokelat lumer hangat dengan satu scoop gelato vanila.",
    price: 32000,
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800&q=80",
    category: "Camilan",
    prepTime: 9,
    rating: 4.9,
    calories: 480,
  },
  // Yoshinoya
  {
    id: "yo1",
    tenantId: "yo",
    name: "Beef Bowl (Gyudon)",
    description: "Irisan tipis daging sapi dalam saus manis gurih di atas nasi.",
    price: 42000,
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
    category: "Makanan Utama",
    prepTime: 11,
    rating: 4.7,
    calories: 590,
  },
  {
    id: "yo2",
    tenantId: "yo",
    name: "Rice Bowl Ayam Teriyaki",
    description: "Ayam panggang berlapis teriyaki dengan sayuran kukus.",
    price: 40000,
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&q=80",
    category: "Makanan Utama",
    prepTime: 12,
    rating: 4.6,
    calories: 560,
  },
  {
    id: "yo3",
    tenantId: "yo",
    name: "Ramen Sapi Pedas",
    description: "Kuah miso gurih dengan daging sapi pedas, telur setengah matang, dan rebung.",
    price: 45000,
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&q=80",
    category: "Makanan Utama",
    prepTime: 15,
    rating: 4.9,
    calories: 680,
  },
  // HokBen
  {
    id: "hb1",
    tenantId: "hb",
    name: "Beef Yakiniku Bento",
    description: "Irisan daging sapi panggang saus kecap manis dengan nasi dan salad.",
    price: 42000,
    image: "https://images.unsplash.com/photo-1583032015879-e5022cb87c3b?w=800&q=80",
    category: "Makanan Utama",
    prepTime: 11,
    rating: 4.7,
    calories: 620,
  },
  {
    id: "hb2",
    tenantId: "hb",
    name: "Chicken Teriyaki Bento",
    description: "Ayam teriyaki panggang dengan nasi, telur gulung, dan acar.",
    price: 38000,
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&q=80",
    category: "Makanan Utama",
    prepTime: 10,
    rating: 4.6,
    calories: 580,
  },
  {
    id: "hb3",
    tenantId: "hb",
    name: "Ekkado & Karaage",
    description: "Kantong telur udang-ayam khas dengan karaage renyah.",
    price: 26000,
    image: "https://images.unsplash.com/photo-1562967914-608f82629710?w=800&q=80",
    category: "Camilan",
    prepTime: 8,
    rating: 4.8,
    calories: 430,
  },
  // Cerita Cinta
  {
    id: "cc1",
    tenantId: "cc",
    name: "Nasi Ayam Penyet",
    description: "Ayam goreng penyet dengan sambal terasi, nasi, dan lalapan.",
    price: 28000,
    image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=800&q=80",
    category: "Makanan Utama",
    prepTime: 12,
    rating: 4.6,
    calories: 640,
  },
  {
    id: "cc2",
    tenantId: "cc",
    name: "Nasi Goreng Spesial",
    description: "Nasi goreng dengan ayam, udang, telur ceplok, dan acar.",
    price: 30000,
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&q=80",
    category: "Makanan Utama",
    prepTime: 13,
    rating: 4.7,
    calories: 600,
  },
  {
    id: "cc3",
    tenantId: "cc",
    name: "Kopi Susu Gula Aren",
    description: "Espresso dingin dengan susu segar dan sirup gula aren.",
    price: 18000,
    image: "https://images.unsplash.com/photo-1561882468-9110e03e0f78?w=800&q=80",
    category: "Minuman",
    prepTime: 5,
    rating: 4.8,
    calories: 190,
  },
  // Bakmie Effata
  {
    id: "be1",
    tenantId: "be",
    name: "Bakmi Ayam Keriting",
    description: "Mie keriting Bangka kenyal dengan ayam cincang gurih.",
    price: 25000,
    image: "https://images.unsplash.com/photo-1612927601601-6638404737ce?w=800&q=80",
    category: "Makanan Utama",
    prepTime: 9,
    rating: 4.7,
    calories: 520,
  },
  {
    id: "be2",
    tenantId: "be",
    name: "Bakmi + Pangsit Goreng",
    description: "Bakmi ayam disajikan dengan pangsit goreng renyah.",
    price: 28000,
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&q=80",
    category: "Makanan Utama",
    prepTime: 10,
    rating: 4.6,
    calories: 560,
  },
  {
    id: "be3",
    tenantId: "be",
    name: "Bakso Sapi Urat",
    description: "Bakso urat sapi dalam kuah bening yang gurih.",
    price: 20000,
    image: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=800&q=80",
    category: "Camilan",
    prepTime: 8,
    rating: 4.5,
    calories: 380,
  },
  // Rasela Gourmet
  {
    id: "rg1",
    tenantId: "rg",
    name: "Nasi Rendang Sapi",
    description: "Nasi putih dengan rendang sapi masak lama dan sambal.",
    price: 34000,
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=800&q=80",
    category: "Makanan Utama",
    prepTime: 11,
    rating: 4.6,
    calories: 700,
  },
  {
    id: "rg2",
    tenantId: "rg",
    name: "Nasi Ayam Tepung Kari",
    description: "Ayam tepung renyah dengan saus kari di atas nasi hangat.",
    price: 32000,
    image: "https://images.unsplash.com/photo-1562967914-608f82629710?w=800&q=80",
    category: "Makanan Utama",
    prepTime: 12,
    rating: 4.5,
    calories: 660,
  },
  {
    id: "rg3",
    tenantId: "rg",
    name: "Capcay Sayur",
    description: "Tumis aneka sayuran dalam saus gurih yang ringan.",
    price: 26000,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80",
    category: "Sehat",
    prepTime: 9,
    rating: 4.4,
    calories: 240,
  },
];

export function getTenant(id: string): Tenant | undefined {
  return TENANTS.find((t) => t.id === id);
}

export function getMenuItem(id: string): MenuItem | undefined {
  return MENU_ITEMS.find((m) => m.id === id);
}

export function tenantItems(tenantId: string): MenuItem[] {
  return MENU_ITEMS.filter((m) => m.tenantId === tenantId);
}
