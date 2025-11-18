import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET() {
  try {
    const pakets = await prisma.paket.findMany({
      include: {
        paket_fitur: {
          select: { fitur: true },
        },
      },
      orderBy: { id: "asc" },
    });

    const formatted = pakets.map((pkt) => ({
      name: pkt.name,
      harga: pkt.harga,
      detail: pkt.detail || "",        // ambil dari field "detail"
      kategori: pkt.kategori || "",  // tambahkan kategori
      paket_fitur: pkt.paket_fitur.map((f) => f.fitur),
    }));

    return NextResponse.json(formatted);
  } catch (error) {
    console.error("GET PAKET ERROR:", error);
    return NextResponse.json(
      { error: "Failed to fetch Paket" },
      { status: 500 }
    );
  }
}
