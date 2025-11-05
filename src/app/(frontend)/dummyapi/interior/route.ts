// app/api/interior/route.ts
import { NextResponse } from "next/server";

// Dummy data portfolio Interior (14 items)
const portfolioDB_Interior = [
  // --- Kategori Enscape (Interior Ruang Utama / kamar & enscape) ---
  {
    id: 1,
    slug: "interior-enscape-1",
    name: "Interior Living Room Modern 1",
    description: "Visualisasi interior ruang tamu minimalis modern dengan pencahayaan tersembunyi.",
    image: "/images/interior/enscape1.png",
    type: "kamar",
  },
  {
    id: 2,
    slug: "interior-enscape-2",
    name: "Interior Ruang Keluarga Minimalis 2",
    description: "Visualisasi interior ruang keluarga dengan desain terbuka dan furniture kontemporer.",
    image: "/images/interior/enscape2.png",
    type: "kamar",
  },
  {
    id: 3,
    slug: "interior-enscape-3",
    name: "Interior Ruang Makan dan Dapur 3",
    description: "Visualisasi interior dapur dan ruang makan dengan kitchen island mewah.",
    image: "/images/interior/enscape3.png",
    type: "kamar",
  },
  {
    id: 4,
    slug: "interior-enscape-4",
    name: "Interior Dapur dan Pantry 4",
    description: "Visualisasi interior dapur bersih dengan storage tersembunyi dan material elegan.",
    image: "/images/interior/enscape4.png",
    type: "kamar",
  },
  {
    id: 5,
    slug: "interior-enscape-5",
    name: "Interior Ruang Utama enscape 5",
    description: "Visualisasi interior mewah (kemungkinan enscape) dengan plafon tinggi dan lighting dramatis.",
    image: "/images/interior/enscape5.png",
    type: "enscape",
  },
  {
    id: 6,
    slug: "interior-enscape-6",
    name: "Interior Ruang Santai Mewah 6",
    description: "Visualisasi interior ruang santai dengan nuansa hangat dan jendela besar.",
    image: "/images/interior/enscape6.png",
    type: "enscape",
  },
  // --- Kategori Kamar Tidur (kamar) ---
  {
    id: 7,
    slug: "kamar-tidur-modern-1",
    name: "Kamar Tidur Modern 1",
    description: "Desain interior kamar tidur utama modern dengan nuansa elegan.",
    image: "/images/interior/kamar1.png",
    type: "kamar",
  },
  {
    id: 8,
    slug: "kamar-tidur-modern-2",
    name: "Kamar Tidur Modern 2",
    description: "Desain interior kamar tidur dengan panel dinding minimalis dan furniture kayu.",
    image: "/images/interior/kamar2.png",
    type: "kamar",
  },
  // --- Kategori Klasik (Interior Kamar Tidur) ---
  {
    id: 9,
    slug: "kamar-tidur-klasik-1",
    name: "Kamar Tidur Klasik Mewah 1",
    description: "Desain interior kamar tidur klasik dengan headboard berlapis dan pencahayaan mewah.",
    image: "/images/interior/klasik1.png",
    type: "kamar",
  },
  {
    id: 10,
    slug: "kamar-tidur-klasik-2",
    name: "Kamar Tidur Klasik Mewah 2",
    description: "Desain interior kamar tidur utama gaya klasik dengan dominasi warna krem.",
    image: "/images/interior/klasik2.png",
    type: "kamar",
  },
  {
    id: 11,
    slug: "kamar-tidur-klasik-3",
    name: "Kamar Tidur Klasik Mewah 3",
    description: "Desain interior kamar tidur dengan tirai mewah dan sentuhan emas.",
    image: "/images/interior/klasik3.png",
    type: "kamar",
  },
  // --- Kategori WC / Kamar Mandi ---
  {
    id: 12,
    slug: "kamar-mandi-wc-1",
    name: "Interior Kamar Mandi Modern 1",
    description: "Desain interior kamar mandi modern dengan cermin besar dan backsplash gelap.",
    image: "/images/interior/wc1.png",
    type: "wc",
  },
  {
    id: 13,
    slug: "kamar-mandi-wc-2",
    name: "Interior Kamar Mandi Modern 2",
    description: "Desain interior kamar mandi dengan dinding marmer dan kabinet kayu.",
    image: "/images/interior/wc2.png",
    type: "wc",
  },
  {
    id: 14,
    slug: "kamar-mandi-wc-3",
    name: "Interior Kamar Mandi Modern 3",
    description: "Desain interior kamar mandi minimalis dengan pencahayaan spotlight.",
    image: "/images/interior/wc3.png",
    type: "wc",
  },
];

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    // Filter berdasarkan type
    const typeFilter = searchParams.get("type"); 

    const filtered = typeFilter
      ? portfolioDB_Interior.filter((proj) => proj.type === typeFilter)
      : portfolioDB_Interior;

    // Format response
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
      { error: "Gagal memuat data portofolio interior" },
      { status: 500 }
    );
  }
}