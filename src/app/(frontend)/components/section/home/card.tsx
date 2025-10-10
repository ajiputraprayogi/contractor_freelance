"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const categories = [
  {
    title: "American Style",
    subtitle: "Minimalist Home Decor",
    image: "/images/design/home1.jpg",
  },
  {
    title: "Desain Kontemporer",
    subtitle: "Minimalist Vibe",
    image: "/images/design/home2.jpg",
  },
  {
    title: "Ceramics Design",
    subtitle: "Garasi Luas",
    image: "/images/design/home3.jpg",
  },
  {
    title: "Desain Aersial",
    subtitle: "Kombinasi Natural",
    image: "/images/design/home1.jpg",
  },
];

export default function DesignCategories() {
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
        {categories.map((item, index) => (
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
