"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const layananList = [
    {
        label: "Desain Rumah",
        image: "/images/design/home1.jpg",
        desc: "Kami menciptakan desain rumah dengan keseimbangan fungsi dan estetika, menghadirkan ruang yang nyaman dan bernilai tinggi.",
        fitur: [
            "Perencanaan tata ruang efisien",
            "Material berkualitas tinggi",
            "Konsep desain sesuai kebutuhan klien",
        ],
    },
    {
        label: "Desain Interior",
        image: "/images/design/home2.png",
        desc: "Interior kami fokus pada harmoni, pencahayaan alami, dan karakter unik setiap ruangan.",
        fitur: [
            "Pemilihan furnitur dan dekorasi",
            "Optimalisasi pencahayaan alami",
            "Konsultasi tema dan gaya interior",
        ],
    },
    {
        label: "Desain Eksterior",
        image: "/images/design/home3.jpg",
        desc: "Bangunan yang memikat dari luar dan berkarakter kuat, dengan detail material yang elegan.",
        fitur: [
            "Fasad modern dan elegan",
            "Kombinasi warna dan tekstur proporsional",
            "Desain ramah lingkungan",
        ],
    },
    {
        label: "Renovasi & Konsultasi",
        image: "/images/design/home4.png",
        desc: "Memberikan solusi desain modern untuk hunian lama, disesuaikan dengan kebutuhan dan gaya hidup Anda.",
        fitur: [
            "Evaluasi struktur bangunan lama",
            "Desain penyesuaian ruang",
            "Pendampingan konsultasi desain",
        ],
    },
];

export default function LayananPage() {
    const [active, setActive] = useState(layananList[0]);

    return (
        <main
            className="min-h-screen flex flex-col items-center justify-center px-6 py-16 transition-colors duration-500 mt-[1.5rem] md:mt-[3rem]"
            style={{ backgroundColor: "#F7F4EF", color: "#2E2B25" }}
        >
            {/* Heading */}
            <div className="text-center mb-12">
                <h1 className="text-3xl md:text-5xl font-semibold tracking-tight mb-3 text-[#2E2B25]">
                    Jenis Desain
                </h1>
                <p className="text-sm md:text-base text-[#2E2B25]/70">
                    Harmoni antara fungsi, estetika, dan identitas ruang.
                </p>
            </div>

            {/* Tombol di atas */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
                {layananList.map((item) => (
                    <button
                        key={item.label}
                        onClick={() => setActive(item)}
                        className={`px-4 py-2 rounded-lg text-sm md:text-base border transition-all duration-300 cursor-pointer
              ${active.label === item.label
                                ? "bg-[#C9A77A] text-white border-[#C9A77A]"
                                : "border-[#C9A77A]/40 text-[#2E2B25] hover:bg-[#C9A77A]/10"
                            }`}
                    >
                        {item.label}
                    </button>
                ))}
            </div>

            {/* Area utama */}
            <section className="grid md:grid-cols-[1.2fr_0.8fr] gap-8 items-stretch max-w-6xl w-full">
                {/* Box gambar */}
                <div className="relative h-[350px] md:h-[420px] rounded-2xl overflow-hidden border border-[#C9A77A]/40 bg-[#2E2B25]/5">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={active.image}
                            initial={{ opacity: 0, scale: 0.97 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.97 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="absolute inset-0"
                        >
                            <Image
                                src={active.image}
                                alt={active.label}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent" />
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Box deskripsi */}
                {/* Box deskripsi */}
                <motion.div
                    // key={active.desc}
                    // initial={{ opacity: 0, y: 10 }}
                    // animate={{ opacity: 1, y: 0 }}
                    // transition={{ duration: 0.4 }}
                    className="h-[350px] md:h-[420px] flex flex-col justify-between text-sm md:text-base leading-relaxed text-[#2E2B25]/90 border border-[#C9A77A]/40 rounded-2xl p-6 bg-[#2E2B25]/5"
                >
                    {/* Bagian atas: deskripsi + fitur */}
                    <motion.div
                    key={active.desc}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}>
                        <p className="mb-4">{active.desc}</p>
                        <ul className="list-decimal list-inside space-y-2 text-[#2E2B25]/80">
                            {active.fitur.map((f, i) => (
                                <li key={i}>{f}</li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Dua tombol animasi di bawah */}
                    <div className="mt-6 grid grid-cols-2 gap-3">
                        {/* Tombol Full View */}
                        <button
                            onClick={() => window.open(active.image, "_blank")}
                            className="group relative inline-flex items-center justify-center overflow-hidden rounded-bl-md bg-[#D7B899] font-medium w-full transition-all duration-500 hover:scale-[1.03]"
                        >
                            <div className="inline-flex h-12 items-center justify-center px-6 text-[#2E2B25] transition-all duration-500 group-hover:-translate-y-[150%]">
                                Full View
                            </div>
                            <div className="absolute inline-flex h-24 w-full translate-y-[100%] items-center justify-center text-[#2E2B25] transition-all duration-500 group-hover:translate-y-0">
                                <span className="absolute h-full w-full translate-y-full skew-y-12 scale-y-0 bg-[#C9A77A] transition-all duration-500 group-hover:translate-y-0 group-hover:scale-150"></span>
                                <span className="z-10 px-6">Lihat Detail</span>
                            </div>
                        </button>

                        {/* Tombol Hubungi Admin */}
                        <button
                            onClick={() => (window.location.href = 'https://wa.me/6285812209767')}
                            className="group relative inline-flex items-center justify-center overflow-hidden rounded-br-md bg-[#D7B899] font-medium w-full transition-all duration-500 hover:scale-[1.03]"
                        >
                            <div className="inline-flex h-12 items-center justify-center px-6 text-[#2E2B25] transition-all duration-500 group-hover:-translate-y-[150%]">
                                Hubungi Admin
                            </div>
                            <div className="absolute inline-flex h-24 w-full translate-y-[100%] items-center justify-center text-[#2E2B25] transition-all duration-500 group-hover:translate-y-0">
                                <span className="absolute h-full w-full translate-y-full skew-y-12 scale-y-0 bg-[#C9A77A] transition-all duration-500 group-hover:translate-y-0 group-hover:scale-150"></span>
                                <span className="z-10 px-6">Chat Sekarang</span>
                            </div>
                        </button>
                    </div>
                </motion.div>


            </section>
        </main>
    );
}
