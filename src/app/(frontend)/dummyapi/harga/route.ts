// app/api/packages/route.ts
import { NextResponse } from "next/server";

const packagesData = {
  eksterior: [
    {
      name: "Basic EKS",
      price: "Rp 15.000 / m²",
      desc: "Paket dasar untuk gambar arsitektur eksterior dan visual 3D.",
      features: [
        "Rencana Denah, Potongan, Tampak 2D",
        "Rencana Atap 2D",
        "Gambar 3D (7 Visualisasi)",
        "Free Revisi 3x",
      ],
      button: "Pilih Paket",
    },
    {
      name: "Standar EKS",
      price: "Rp 25.000 / m²",
      desc: "Paket lengkap dengan gambar kerja dan visual profesional.",
      features: [
        "Gambar Kerja Arsitektur Lengkap",
        "Gambar 3D Eksterior (7 Visualisasi)",
        "Free Revisi 3x",
      ],
      popular: true,
      button: "Pilih Paket",
    },
    {
      name: "Premium EKS",
      price: "Rp 50.000 / m²",
      desc: "Paket eksklusif dengan animasi dan RAB eksterior.",
      features: [
        "Gambar Kerja Arsitektur Lengkap",
        "Gambar 3D Eksterior (7 Visualisasi)",
        "Video Animasi Eksterior",
        "RAB Eksterior",
        "Free Revisi 3x",
      ],
      button: "Hubungi Kami",
    },
  ],
  interior: [
    {
      name: "Basic INT",
      price: "Rp 30.000 / m²",
      desc: "Desain dasar interior dengan visual 3D setiap ruangan.",
      features: [
        "Denah Bangunan 3D",
        "Desain Interior (3 Visualisasi / Ruang)",
        "Free Revisi 3x",
      ],
      button: "Pilih Paket",
    },
    {
      name: "Standar INT",
      price: "Rp 40.000 / m²",
      desc: "Detail interior dengan dimensi furniture lengkap.",
      features: [
        "Detail Interior (Denah, Potongan, Dimensi Furniture)",
        "Desain Interior (3 Visualisasi / Ruang)",
        "Free Revisi 3x",
      ],
      popular: true,
      button: "Pilih Paket",
    },
    {
      name: "Premium INT",
      price: "Rp 60.000 / m²",
      desc: "Paket interior profesional dengan animasi dan RAB.",
      features: [
        "Detail Interior Lengkap",
        "Desain Interior (3 Visualisasi / Ruang)",
        "Video Animasi Interior",
        "RAB Interior",
        "Free Revisi 3x",
      ],
      button: "Hubungi Kami",
    },
  ],
  signature: [
    {
      name: "Signature LANARA",
      price: "Rp 80.000 / m²",
      desc: "Paket all-in-one: arsitektur + interior + RAB + animasi (diskon 20%).",
      features: [
        "Gambar Kerja Arsitektur & Interior Lengkap",
        "Gambar 3D Eksterior & Interior",
        "Video Animasi Eksterior & Interior",
        "RAB Lengkap",
        "Free Revisi 3x",
      ],
      discount: true,
      button: "Diskon 20%",
    },
  ],
};

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const tab = searchParams.get("tab") || "eksterior";
    const data = packagesData[tab as keyof typeof packagesData] || [];
    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Gagal memuat paket" }, { status: 500 });
  }
}
