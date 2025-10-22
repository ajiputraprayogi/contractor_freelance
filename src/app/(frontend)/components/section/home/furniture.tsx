"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import DesignCategories from "./card";

export default function FurnitureHero() {
    return (
        <section
            className="w-full text-white overflow-hidden bg-fixed bg-center bg-cover bg-no-repeat relative"
            style={{
                backgroundImage: "url('/images/design/home1.jpg')",
            }}
        >
            {/* <DesignCategories/> */}
            {/* Overlay semi transparan */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Konten */}
            <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-10 text-center md:text-left">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-5xl font-semibold mb-4"
                >
                    Keindahan Sejati <br /> Desain Arsitektur Modern
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-gray-200 max-w-2xl mx-auto md:mx-0 leading-relaxed mb-6"
                >
                    Didirikan dengan semangat terhadap kualitas dan dedikasi pada keindahan desain,
                    <span className="font-semibold"> LANARA Architect </span> menghadirkan desain yang
                    tak lekang oleh waktu — memadukan kenyamanan, gaya sederhana, dan sentuhan
                    keanggunan untuk mempercantik ruang tinggal Anda.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.3 }}
                    className="flex flex-col md:flex-row items-center gap-4 md:gap-6 justify-center md:justify-start"
                >
                    <Link
                        href="/kontak"
                        className="cursor-pointer group relative inline-flex items-center justify-center overflow-hidden rounded-3xl bg-[#D7B899] font-medium w-auto transition-all duration-500 hover:scale-[1.03]"
                    >
                        <div className="inline-flex h-12 translate-y-0 items-center justify-center px-8 text-[#2E2B25] transition-all duration-500 group-hover:-translate-y-[150%]">
                            Tunggu Apalagi
                        </div>

                        <div className="absolute inline-flex h-24 w-full translate-y-[100%] items-center justify-center text-[#2E2B25] transition-all duration-500 group-hover:translate-y-0">
                            <span className="absolute h-full w-full translate-y-full skew-y-12 scale-y-0 bg-[#C9A77A] transition-all duration-500 group-hover:translate-y-0 group-hover:scale-150"></span>
                            <span className="z-10 px-8">Let&apos;s Go</span>
                        </div>
                    </Link>
                </motion.div>
            </div>

        </section>
    );
}
