// app/api/layanan/route.ts
import { NextResponse } from "next/server";

const layananList = [
  {
    label: "Desain Rumah",
    images: [
      "/images/design/home1.jpg",
      "/images/design/home2.png",
      "/images/design/home3.jpg",
    ],
    desc: "Kami menciptakan desain rumah dengan keseimbangan fungsi dan estetika, menghadirkan ruang yang nyaman dan bernilai tinggi.",
    fitur: [
      "Perencanaan tata ruang efisien",
      "Material berkualitas tinggi",
      "Konsep desain sesuai kebutuhan klien",
    ],
  },
  {
    label: "Desain Interior",
    images: [
      "/images/design/int1.png",
      "/images/design/int2.png",
      "/images/design/int3.png",
    ],
    desc: "Interior kami fokus pada harmoni, pencahayaan alami, dan karakter unik setiap ruangan.",
    fitur: [
      "Pemilihan furnitur dan dekorasi",
      "Optimalisasi pencahayaan alami",
      "Konsultasi tema dan gaya interior",
    ],
  },
  {
    label: "Desain Eksterior",
    images: [
      "/images/design/home1.jpg",
      "/images/design/home2.png",
      "/images/design/home3.jpg",
    ],
    desc: "Bangunan yang memikat dari luar dan berkarakter kuat, dengan detail material yang elegan.",
    fitur: [
      "Fasad modern dan elegan",
      "Kombinasi warna dan tekstur proporsional",
      "Desain ramah lingkungan",
    ],
  },
];

export async function GET() {
  return NextResponse.json(layananList);
}
