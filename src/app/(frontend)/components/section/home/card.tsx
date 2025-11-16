"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function DesignCategories() {
  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [resetKey, setResetKey] = useState(0); // trigger re-render animasi
  const [selectedImage, setSelectedImage] = useState<string | null>(null); // untuk modal

  useEffect(() => {
    async function fetchCategories() {
      try {
        const res = await fetch("/api/portofolio/eksterior");
        if (!res.ok) throw new Error("Gagal mengambil data");
        const data = await res.json();
        setCategories(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchCategories();
  }, []);

  // Reset animasi kalau scroll balik ke atas (posisi 0)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setResetKey((prev) => prev + 1);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (loading) {
    return (
      <section className="py-20 text-center">
        <p>Memuat data desain...</p>
      </section>
    );
  }

  return (
    <section key={resetKey} className="py-20 max-w-6xl mx-auto px-6 relative">
      <div className="text-center mb-12">
        <p className="text-sm tracking-[3px] text-[#BFA98E] uppercase">
          Style Modern Minimalis
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold text-[#2E2B25]">
          Melayani jasa desain arsitektur dengan gaya, fungsi, dan kenyamanan yang seimbang.
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group cursor-pointer"
            onClick={() => setSelectedImage(item.image)} // buka modal
          >
            <div className="relative h-[280px] w-full overflow-hidden rounded-xl shadow-sm">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="mt-4 text-left">
              <h3 className="text-lg text-[#2E2B25]">{item.name}</h3>
              <p className="text-sm text-[#7C7C7C] mt-1">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

            {/* Modal Fullscreen */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)} // klik overlay untuk close
          >
            <motion.div
              className="relative max-w-3xl w-full h-[80vh]"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()} // mencegah close saat klik gambar
            >
              <Image
                src={selectedImage}
                alt="Desain Full"
                fill
                className="object-contain rounded-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
