"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import StepSection from "../components/section/layanan/step";

interface Layanan {
  label: string;
  images: string[];
  desc: string;
  fitur: string[];
}

export default function LayananPage() {
  const [layananList, setLayananList] = useState<Layanan[]>([]);
  const [active, setActive] = useState<Layanan | null>(null);
  const [imageIndex, setImageIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLayanan = async () => {
      try {
        const res = await fetch("/dummyapi/layanan");
        const data: Layanan[] = await res.json();
        setLayananList(data);
        setActive(data[0]);
      } catch (err) {
        console.error("Gagal fetch layanan:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchLayanan();
  }, []);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (!active) return null;

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-16 mt-[1.5rem] md:mt-[3rem]" style={{ backgroundColor: "#F7F4EF", color: "#2E2B25" }}>
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-3 text-[#2E2B25] mt-5">Jenis Desain</h2>
        <p className="text-sm md:text-base text-[#2E2B25]/70">Harmoni antara fungsi, estetika, dan identitas ruang.</p>
      </div>

      {/* Tombol kategori */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {layananList.map((item) => (
          <button
            key={item.label}
            onClick={() => { setActive(item); setImageIndex(0); }}
            className={`px-4 py-2 text-sm md:text-base border transition-all duration-300 cursor-pointer ${active.label === item.label ? "bg-[#C9A77A] text-white border-[#C9A77A]" : "border-[#C9A77A]/40 text-[#2E2B25] hover:bg-[#C9A77A]/10"}`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Area utama */}
      <section className="grid md:grid-cols-[1.2fr_0.8fr] gap-8 items-stretch max-w-6xl w-full">
        {/* Box gambar */}
        <div className="relative h-[350px] md:h-[420px] rounded-2xl overflow-hidden border border-[#C9A77A]/40 bg-[#2f3542]/5">
          <AnimatePresence mode="wait">
            <motion.div key={active.images[imageIndex]} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} className="absolute inset-0">
              <Image src={active.images[imageIndex]} alt={active.label} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent" />
            </motion.div>
          </AnimatePresence>
          {/* Indikator bawah */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            {active.images.map((_, i) => (
              <span key={i} onClick={() => setImageIndex(i)} className={`h-2 w-2 rounded-full cursor-pointer transition-all ${i === imageIndex ? "bg-white w-4" : "bg-white/50"}`} />
            ))}
          </div>
        </div>

        {/* Box deskripsi */}
        <motion.div key={active.desc} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="h-[350px] md:h-[420px] flex flex-col justify-between text-sm md:text-base leading-relaxed text-[#2E2B25]/90 border border-[#C9A77A]/40 rounded-2xl p-6 bg-[#2E2B25]/5">
          <div>
            <p className="mb-4">{active.desc}</p>
            <ul className="list-decimal list-inside space-y-2 text-[#2E2B25]/80">
              {active.fitur.map((f, i) => (<li key={i}>{f}</li>))}
            </ul>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <button onClick={() => window.open(active.images[imageIndex], "_blank")} className="cursor-pointer group relative inline-flex items-center justify-center overflow-hidden rounded-bl-md bg-[#D7B899] font-medium w-full transition-all duration-500 hover:scale-[1.03]">
              <div className="inline-flex h-12 items-center justify-center px-6 text-[#2E2B25] transition-all duration-500 group-hover:-translate-y-[150%]">Full View</div>
              <div className="absolute inline-flex h-24 w-full translate-y-[100%] items-center justify-center text-[#2E2B25] transition-all duration-500 group-hover:translate-y-0">
                <span className="absolute h-full w-full translate-y-full skew-y-12 scale-y-0 bg-[#C9A77A] transition-all duration-500 group-hover:translate-y-0 group-hover:scale-150"></span>
                <span className="z-10 px-6">Detail</span>
              </div>
            </button>

            <button onClick={() => (window.location.href = "https://wa.me/6285812209767")} className="cursor-pointer group relative inline-flex items-center justify-center overflow-hidden rounded-br-md bg-[#D7B899] font-medium w-full transition-all duration-500 hover:scale-[1.03]">
              <div className="inline-flex h-12 items-center justify-center px-6 text-[#2E2B25] transition-all duration-500 group-hover:-translate-y-[150%]">Hubungi</div>
              <div className="absolute inline-flex h-24 w-full translate-y-[100%] items-center justify-center text-[#2E2B25] transition-all duration-500 group-hover:translate-y-0">
                <span className="absolute h-full w-full translate-y-full skew-y-12 scale-y-0 bg-[#C9A77A] transition-all duration-500 group-hover:translate-y-0 group-hover:scale-150"></span>
                <span className="z-10 px-6">Admin</span>
              </div>
            </button>
          </div>
        </motion.div>
      </section>

      {/* Step Section */}
      <section>
        <div className="text-center mb-12 mt-12 md:mt-20">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-3 text-[#2E2B25]">Tahapan Order</h2>
          <p className="text-sm md:text-base text-[#2E2B25]/70">Berikut skema layanan yang tersedia</p>
        </div>
        <StepSection />
      </section>
    </main>
  );
}
