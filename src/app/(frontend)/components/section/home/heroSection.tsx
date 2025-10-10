"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface HeroSectionProps {
  onExploreClick: () => void;
}

export default function HeroSection({ onExploreClick }: HeroSectionProps) {
  return (
    <section className="relative h-[100vh] w-full">
      <Image
        src="/images/design/home1.jpg"
        alt="Hero Background"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl tracking-wide text-white/90 font-semibold"
        >
          Lanara Design Architecture
        </motion.h1>

        <button
          onClick={onExploreClick}
          className="mt-8 cursor-pointer group relative inline-flex items-center justify-center overflow-hidden rounded-3xl bg-[#D7B899] font-medium w-auto transition-all duration-500 hover:scale-[1.03]"
        >
          <div className="inline-flex h-12 translate-y-0 items-center justify-center px-8 text-[#2E2B25] transition-all duration-500 group-hover:-translate-y-[150%]">
            Eksplor Sekarang
          </div>

          <div className="absolute inline-flex h-24 w-full translate-y-[100%] items-center justify-center text-[#2E2B25] transition-all duration-500 group-hover:translate-y-0">
            <span className="absolute h-full w-full translate-y-full skew-y-12 scale-y-0 bg-[#C9A77A] transition-all duration-500 group-hover:translate-y-0 group-hover:scale-150"></span>
            <span className="z-10 px-8">Let&apos;s Go</span>

          </div>
        </button>
      </div>
    </section>
  );
}
