import { NextResponse } from "next/server";

export async function GET() {
  const data = [
    {
      title: "American Style",
      subtitle: "Minimalist Home Decor",
      image: "/images/design/home1.jpg",
    },
    {
      title: "Desain Kontemporer",
      subtitle: "Minimalist Vibe",
      image: "/images/design/home2.png",
    },
    {
      title: "Ceramics Design",
      subtitle: "Garasi Luas",
      image: "/images/design/home3.jpg",
    },
    {
      title: "Desain Aersial",
      subtitle: "Kombinasi Natural",
      image: "/images/design/home4.png",
    },
  ];

  return NextResponse.json(data);
}
