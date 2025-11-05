// app/api/eksterior/route.ts
import { NextResponse } from "next/server";

// Dummy data portfolio
const portfolioDB = [
  // --- Kategori Cafe (3 items) ---
  {
    id: 1,
    slug: "cafe-1",
    name: "Cafe Minimalis 1",
    description: "Desain cafe minimalis dengan nuansa modern dan outdoor seating.",
    image: "/images/eksterior/cafe1.png",
    type: "cafe",
  },
  {
    id: 2,
    slug: "cafe-2",
    name: "Cafe Kontemporer 2",
    description: "Desain cafe dengan sentuhan kontemporer dan material alami.",
    image: "/images/eksterior/cafe2.png",
    type: "cafe",
  },
  {
    id: 3,
    slug: "cafe-3",
    name: "Cafe Industrial 3",
    description: "Desain cafe bergaya industrial dengan ekspos bata dan besi.",
    image: "/images/eksterior/cafe3.png",
    type: "cafe",
  },
  // --- Kategori Hunian (12 items) - Gabungan Klasik, Lantai, dan Modern ---
  {
    id: 4,
    slug: "hunian-klasik-1",
    name: "Hunian Klasik 1",
    description: "Rumah hunian bergaya klasik dengan detail elegan.",
    image: "/images/eksterior/klasik1.png",
    type: "hunian",
  },
  {
    id: 5,
    slug: "hunian-klasik-2",
    name: "Hunian Klasik 2",
    description: "Rumah hunian bergaya klasik dengan portico yang menawan.",
    image: "/images/eksterior/klasik2.png",
    type: "hunian",
  },
  {
    id: 6,
    slug: "hunian-klasik-3",
    name: "Hunian Klasik 3",
    description: "Rumah hunian bergaya klasik modern dengan atap pelana.",
    image: "/images/eksterior/klasik3.png",
    type: "hunian",
  },
  {
    id: 7,
    slug: "hunian-klasik-4",
    name: "Hunian Klasik 4",
    description: "Rumah hunian bergaya klasik dengan dominasi warna netral.",
    image: "/images/eksterior/klasik4.png",
    type: "hunian",
  },
  {
    id: 8,
    slug: "hunian-klasik-5",
    name: "Hunian Klasik 5",
    description: "Rumah hunian bergaya klasik minimalis.",
    image: "/images/eksterior/klasik5.png",
    type: "hunian",
  },
  {
    id: 15,
    slug: "hunian-compact-lantai-1",
    name: "Hunian Compact 1 Lantai",
    description: "Desain hunian minimalis modern 1 lantai dengan atap pelana.",
    image: "/images/eksterior/lantai1.png",
    type: "hunian",
  },
  {
    id: 16,
    slug: "hunian-compact-lantai-2",
    name: "Hunian Compact 2 Lantai",
    description: "Desain hunian minimalis modern 1 lantai dengan warna cerah.",
    image: "/images/eksterior/lantai2.png",
    type: "hunian",
  },
  {
    id: 26,
    slug: "hunian-modern-1",
    name: "Hunian Modern 1",
    description: "Rumah modern 2 lantai dengan fasad minimalis.",
    image: "/images/eksterior/modern1.png",
    type: "hunian",
  },
  {
    id: 27,
    slug: "hunian-modern-2",
    name: "Hunian Modern 2",
    description: "Rumah modern 2 lantai dengan aksen kayu dan kaca.",
    image: "/images/eksterior/modern2.png",
    type: "hunian",
  },
  {
    id: 28,
    slug: "hunian-modern-3",
    name: "Hunian Modern 3",
    description: "Rumah modern 2 lantai dengan desain kotak minimalis.",
    image: "/images/eksterior/modern3.png",
    type: "hunian",
  },
  {
    id: 29,
    slug: "hunian-modern-4",
    name: "Hunian Modern 4",
    description: "Rumah modern 2 lantai dengan carport luas dan taman.",
    image: "/images/eksterior/modern4.png",
    type: "hunian",
  },
  {
    id: 31,
    slug: "hunian-modern-6",
    name: "Hunian Modern 6",
    description: "Rumah modern 2 lantai dengan balcony dan railing besi.",
    image: "/images/eksterior/modern6.png",
    type: "hunian",
  },
  // --- Kategori Kost (3 items) ---
  {
    id: 12,
    slug: "kost-1",
    name: "Kost Modern 1",
    description: "Bangunan kos minimalis modern dengan banyak bukaan.",
    image: "/images/eksterior/kost1.png",
    type: "kost",
  },
  {
    id: 13,
    slug: "kost-2",
    name: "Kost Modern 2",
    description: "Bangunan kos modern dengan fasad unik dan balcony.",
    image: "/images/eksterior/kost2.png",
    type: "kost",
  },
  {
    id: 14,
    slug: "kost-3",
    name: "Kost Modern 3",
    description: "Bangunan kos 2 lantai dengan desain yang efisien dan fungsional.",
    image: "/images/eksterior/kost3.png",
    type: "kost",
  },
  // --- Kategori Tempat Ibadah (7 items) - Gabungan Klenteng dan Masjid ---
  {
    id: 9,
    slug: "klenteng-1",
    name: "Klenteng Vihara 1",
    description: "Desain arsitektur klenteng tradisional yang megah.",
    image: "/images/eksterior/klenteng1.png",
    type: "tempat ibadah",
  },
  {
    id: 10,
    slug: "klenteng-2",
    name: "Klenteng Vihara 2",
    description: "Desain arsitektur klenteng dengan detail ukiran khas.",
    image: "/images/eksterior/klenteng2.png",
    type: "tempat ibadah",
  },
  {
    id: 11,
    slug: "klenteng-3",
    name: "Klenteng Vihara 3",
    description: "Desain arsitektur klenteng yang kental dengan budaya Tiongkok.",
    image: "/images/eksterior/klenteng3.png",
    type: "tempat ibadah",
  },
  {
    id: 22,
    slug: "masjid-1",
    name: "Masjid Modern 1",
    description: "Masjid dengan desain modern dan dominasi warna putih.",
    image: "/images/eksterior/masjid1.png",
    type: "tempat ibadah",
  },
  {
    id: 23,
    slug: "masjid-2",
    name: "Masjid Modern 2",
    description: "Masjid dengan menara minimalis dan arsitektur kontemporer.",
    image: "/images/eksterior/masjid2.png",
    type: "tempat ibadah",
  },
  {
    id: 24,
    slug: "masjid-3",
    name: "Masjid Modern 3",
    description: "Masjid dengan desain terbuka dan ventilasi alami.",
    image: "/images/eksterior/masjid3.png",
    type: "tempat ibadah",
  },
  {
    id: 25,
    slug: "masjid-4",
    name: "Masjid Modern 4",
    description: "Masjid dengan kubah unik dan fasad modern.",
    image: "/images/eksterior/masjid4.png",
    type: "tempat ibadah",
  },
  // --- Kategori Perumahan (3 items) ---
  {
    id: 32,
    slug: "perum-1",
    name: "Rumah Perumahan 1",
    description: "Desain rumah perumahan minimalis tipe menengah.",
    image: "/images/eksterior/perum1.png",
    type: "perumahan",
  },
  {
    id: 33,
    slug: "perum-2",
    name: "Rumah Perumahan 2",
    description: "Desain rumah perumahan modern dengan atap datar.",
    image: "/images/eksterior/perum2.png",
    type: "perumahan",
  },
  {
    id: 34,
    slug: "perum-3",
    name: "Rumah Perumahan 3",
    description: "Desain rumah perumahan minimalis 2 lantai.",
    image: "/images/eksterior/perum3.png",
    type: "perumahan",
  },
  // --- Kategori Villa (3 items) ---
  {
    id: 35,
    slug: "villa-1",
    name: "Villa Mewah 1",
    description: "Desain villa 2 lantai dengan konsep terbuka dan mewah.",
    image: "/images/eksterior/villa1.png",
    type: "villa",
  },
  {
    id: 36,
    slug: "villa-2",
    name: "Villa Mewah 2",
    description: "Desain villa modern dengan kolam renang dan taman.",
    image: "/images/eksterior/villa2.png",
    type: "villa",
  },
  {
    id: 37,
    slug: "villa-3",
    name: "Villa Mewah 3",
    description: "Desain villa tropis modern dengan banyak bukaan dan pencahayaan.",
    image: "/images/eksterior/villa3.png",
    type: "villa",
  },
];

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const typeFilter = searchParams.get("type"); // query ?type=perumahan, ?type=cafe, dll

    // Filter data sesuai tipe
    const filtered = typeFilter
      ? portfolioDB.filter((proj) => proj.type === typeFilter)
      : portfolioDB;

    // Format response sesuai komponen React
    const projects = filtered.map((proj) => ({
      title: proj.name,
      subtitle: proj.description,
      image: proj.image,
      type: proj.type,
    }));

    return NextResponse.json(projects);
  } catch (error) {
    console.error("Error fetching portfolio:", error);
    return NextResponse.json(
      { error: "Gagal memuat data portofolio" },
      { status: 500 }
    );
  }
}
