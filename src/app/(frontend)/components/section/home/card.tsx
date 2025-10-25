"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function DesignCategories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const res = await fetch("/dummyapi/card");
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

  if (loading) {
    return (
      <section className="py-20 text-center">
        <p>Memuat data desain...</p>
      </section>
    );
  }

  return (
    <section className="py-20 max-w-6xl mx-auto px-6">
      <div className="text-center mb-12">
        <p className="text-sm tracking-[3px] text-[#BFA98E] uppercase">
          Style Modern Minimalis
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold text-[#2E2B25]">
          Pilihan Desain Interior
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((item: any, index: number) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group cursor-pointer"
          >
            <div className="relative h-[280px] w-full overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="mt-4 text-left">
              <h3 className="text-lg text-[#2E2B25]">{item.title}</h3>
              <p className="text-sm text-[#7C7C7C] mt-1">{item.subtitle}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
