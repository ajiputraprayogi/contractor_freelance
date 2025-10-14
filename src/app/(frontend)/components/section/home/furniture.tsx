"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import ButtonUp from "../../atomic/buttonUp";

export default function FurnitureHero() {
    return (
        <section className="w-full bg-[#f9f8f6] text-[#1a1a1a] overflow-hidden mb-[50rem]">
            {/* Text Section */}
            <div className="max-w-6xl mx-auto px-6 pt-20 pb-10 text-center md:text-left">
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
                    className="text-gray-600 max-w-2xl mx-auto md:mx-0 leading-relaxed mb-6"
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
                    {/* <Link
            href="#"
            className="px-6 py-3 bg-[#1a1a1a] text-white rounded-full text-sm font-medium hover:bg-[#BFA98E] hover:text-black transition"
          >
            Berminat?
          </Link> */}
                    <button
                        //   onClick={onExploreClick}
                        className=" cursor-pointer group relative inline-flex items-center justify-center overflow-hidden rounded-3xl bg-[#D7B899] font-medium w-auto transition-all duration-500 hover:scale-[1.03]"
                    >
                        <div className="inline-flex h-12 translate-y-0 items-center justify-center px-8 text-[#2E2B25] transition-all duration-500 group-hover:-translate-y-[150%]">
                            Tunggu Apalagi
                        </div>

                        <div className="absolute inline-flex h-24 w-full translate-y-[100%] items-center justify-center text-[#2E2B25] transition-all duration-500 group-hover:translate-y-0">
                            <span className="absolute h-full w-full translate-y-full skew-y-12 scale-y-0 bg-[#C9A77A] transition-all duration-500 group-hover:translate-y-0 group-hover:scale-150"></span>
                            <span className="z-10 px-8">Let&apos;s Go</span>

                        </div>
                    </button>

                    {/* <button className="flex items-center gap-2 text-sm text-[#1a1a1a] hover:text-[#BFA98E] transition">
            <span className="w-10 h-10 rounded-full border border-[#1a1a1a] flex items-center justify-center hover:border-[#BFA98E] transition">
              ▶
            </span>
            Play Video
          </button> */}
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="relative w-full h-[320px] md:h-[480px] flex justify-center items-center px-10 md:px-20 overflow-hidden"
            >
                {/* Background setengah warna */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#f9f8f6] from-50% to-[#111] to-50%" />

                {/* Frame gambar */}
                <div className="relative w-full h-[260px] md:h-[400px] overflow-hidden rounded-2xl shadow-lg">
                    <Image
                        src="/images/design/home1.jpg"
                        alt="Dining Table"
                        fill
                        className="object-cover object-center"
                        priority
                    />
                </div>
            </motion.div>




        </section>
    );
}
