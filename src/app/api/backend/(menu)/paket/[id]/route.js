import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

// ✅ Ambil detail Paket by ID
export async function GET(req, context) {
    try {
        const id = parseInt(context.params.id, 10);
        if (isNaN(id)) {
            return NextResponse.json({ error: "ID tidak valid" }, { status: 400 });
        }

        const paket = await prisma.paket.findUnique({
            where: { id },
            // Disesuaikan: Mengambil relasi 'paket_fitur'
            include: { paket_fitur: true }, 
        });

        if (!paket) {
            return NextResponse.json(
                { error: "Data Paket tidak ditemukan" },
                { status: 404 }
            );
        }

        return NextResponse.json(paket, { status: 200 });
    } catch (error) {
        console.error("Prisma error (GET Paket by ID):", error);
        return NextResponse.json(
            { error: "Gagal mengambil data Paket" },
            { status: 500 }
        );
    }
}

// 🔄 Update Paket (Disesuaikan untuk detail dan kategori)
export async function PUT(req, context) {
    try {
        const id = parseInt(context.params.id, 10);
        if (isNaN(id)) {
            return NextResponse.json({ error: "ID tidak valid" }, { status: 400 });
        }

        const body = await req.json();
        // Disesuaikan: Ambil detail dan kategori dari body
        const { name, harga, detail, kategori, fitur } = body; 

        const existing = await prisma.paket.findUnique({ where: { id } });
        if (!existing) {
            return NextResponse.json(
                { error: "Data Paket tidak ditemukan" },
                { status: 404 }
            );
        }
        
        // Opsional: Lakukan validasi minimal jika ada bidang yang wajib diisi
        // if (!name || !harga || !kategori) { /* ... error response ... */ }

        const updated = await prisma.paket.update({
            where: { id },
            data: {
                name: name ?? existing.name,
                harga: harga ?? existing.harga,
                // Ditambahkan: Update detail dan kategori
                detail: detail ?? existing.detail,
                kategori: kategori ?? existing.kategori,
                
                // Mengelola fitur (menghapus yang lama, membuat yang baru)
                paket_fitur: { // Disesuaikan: Menggunakan relasi 'paket_fitur'
                    deleteMany: {}, // hapus fitur lama
                    create: Array.isArray(fitur)
                        ? fitur.filter((f) => f.trim() !== "").map((f) => ({ fitur: f }))
                        : [],
                },
            },
            // Disesuaikan: Mengambil relasi 'paket_fitur' setelah update
            include: { paket_fitur: true }, 
        });

        return NextResponse.json(updated, { status: 200 });
    } catch (error) {
        console.error("Prisma error (PUT Paket):", error);
        return NextResponse.json(
            { error: "Gagal update data Paket" },
            { status: 500 }
        );
    }
}

// ✅ Hapus Paket
export async function DELETE(req, context) {
    try {
        const id = parseInt(context.params.id, 10);
        if (isNaN(id)) {
            return NextResponse.json({ error: "ID tidak valid" }, { status: 400 });
        }

        const existing = await prisma.paket.findUnique({ where: { id } });
        if (!existing) {
            return NextResponse.json(
                { error: "Data Paket tidak ditemukan" },
                { status: 404 }
            );
        }

        // Catatan: Jika relasi 'paket_fitur' di Prisma menggunakan `onDelete: Cascade`,
        // fitur akan otomatis terhapus. Jika tidak, Anda mungkin perlu menghapus fitur
        // terlebih dahulu sebelum menghapus paket:
        /*
        await prisma.paketFitur.deleteMany({
            where: { paketId: id }
        });
        */

        await prisma.paket.delete({ where: { id } });

        return NextResponse.json(
            { message: "Paket berhasil dihapus" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Prisma error (DELETE Paket):", error);
        return NextResponse.json(
            { error: "Gagal menghapus Paket" },
            { status: 500 }
        );
    }
}