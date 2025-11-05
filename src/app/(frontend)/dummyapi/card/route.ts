import { NextResponse } from "next/server";

export async function GET() {
  const data = [
    {
      title: "Hunian Rumah",
      subtitle: "Minimalist Home Decor",
      image: "/images/eksterior/lantai1.png",
    },
    {
      title: "Kost",
      subtitle: "Minimalist Vibe",
      image: "/images/eksterior/kost1.png",
    },
    {
      title: "Cafe",
      subtitle: "Garasi Luas",
      image: "/images/eksterior/cafe3.png",
    },
    {
      title: "Tempat Ibadah",
      subtitle: "Kombinasi Natural",
      image: "/images/eksterior/masjid1.png",
    },
    //     {
    //   title: "Tempat Umum",
    //   subtitle: "Garasi Luas",
    //   image: "/images/eksterior/kost1.png",
    // },
    {
      title: "Interior",
      subtitle: "Kombinasi Natural",
      image: "/images/interior/enscape6.png",
    },
  ];

  return NextResponse.json(data);
}
