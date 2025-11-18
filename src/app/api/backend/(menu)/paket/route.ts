import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

// ✅ GET untuk ambil semua Paket
export async function GET() {
    try {
        const pakets = await prisma.paket.findMany({
            select: {
                id: true,
                name: true,
                // Ditambahkan: detail dan kategori
                detail: true, 
                kategori: true, 
                harga: true,
                paket_fitur: {
                    select: { id: true, fitur: true },
                },
            },
            orderBy: { id: "asc" },
        });

        return NextResponse.json(pakets);
    } catch (error) {
        console.error("Prisma error (GET Paket):", error);
        return NextResponse.json(
            { error: "Failed to fetch Paket" },
            { status: 500 }
        );
    }
}

// ✅ POST untuk buat Paket baru
export async function POST(request: Request) {
    try {
        const body = await request.json();
        // Disesuaikan: Tambahkan detail dan kategori dari body
        const { name, harga, detail, kategori, fitur } = body; 

        if (!name || !harga) {
            // Asumsi hanya nama dan harga yang wajib diisi. 
            // Sesuaikan validasi jika detail/kategori juga wajib.
            return NextResponse.json(
                { error: "Nama paket dan harga wajib diisi" },
                { status: 400 }
            );
        }

        const newPaket = await prisma.paket.create({
            data: {
                name,
                harga,
                // Ditambahkan: detail dan kategori
                detail, 
                kategori, 
                paket_fitur: {
                    create: Array.isArray(fitur)
                        ? fitur
                              .filter((f) => f && f.trim() !== "") // Tambahkan pengecekan f untuk keamanan
                              .map((f) => ({ fitur: f }))
                        : [],
                },
            },
            include: { paket_fitur: true },
        });

        return NextResponse.json(newPaket, { status: 201 });
    } catch (error) {
        console.error("Prisma error (POST Paket):", error);
        return NextResponse.json(
            { error: "Failed to create Paket" },
            { status: 500 }
        );
    }
}