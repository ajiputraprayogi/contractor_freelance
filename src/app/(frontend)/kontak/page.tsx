"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaInstagram, FaWhatsapp, FaFacebookF, FaTiktok, FaEnvelope } from "react-icons/fa";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen w-full flex items-center justify-center text-[#2E2B25] p-6 pt-[8rem] md:pt-[5rem]">
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-5xl rounded-2xl shadow-lg overflow-hidden ring-1 ring-gray-200"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left - Brand + Hero */}
          <div className="p-8 bg-[#F7F4EF] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 relative">
                  <Image
                    src="/images/brand/logos.png"
                    alt="Lanara Design Logo"
                    fill
                    className="object-contain rounded-xl"
                  />
                </div>
                <div>
                  <h1 className="text-2xl font-semibold">Lanara Design</h1>
                  <p className="text-sm opacity-70">Modern architecture & interior design</p>
                </div>
              </div>

              <p className="mt-6 leading-relaxed opacity-90">
                Butuh kerjasama atau ngobrol soal desain? <br />Kami terbuka buat konsultasi desain, dan request style arsitek. Hubungi kami lewat salah satu kanal di samping.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/60 ring-1 ring-gray-200 text-sm">Minimalist</span>
                <span className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/60 ring-1 ring-gray-200 text-sm">Aesthetic</span>
                <span className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/60 ring-1 ring-gray-200 text-sm">Instagrammable</span>
              </div>
            </div>

            {/* <footer className="mt-8 text-xs opacity-60">Designed with ❤️ — clean, accessible, and production-ready.</footer> */}
          </div>

          {/* Right - Contact Cards */}
          <div className="p-8 border-l border-gray-300">
            <h2 className="text-lg font-medium">Kontak</h2>
            <p className="text-sm opacity-70 mt-1">Pilih platform yang kamu suka — semua cepat di-reply kok</p>

            <div className="mt-6 grid gap-3">
              {/* Instagram */}
              <Link
                href="https://instagram.com/lanara.design"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl ring-1 ring-gray-200 hover:shadow transition hover:bg-purple-200 hover:text-purple-700"
              >
                <FaInstagram className="text-2xl" />
                <div>
                  <div className="text-sm font-medium">Instagram</div>
                  <div className="text-xs opacity-70">lanara.design</div>
                </div>
              </Link>

              {/* WhatsApp */}
              <Link
                href="https://wa.me/6288901133932"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl ring-1 ring-gray-200 hover:shadow transition hover:bg-green-200 hover:text-green-700"
              >
                <FaWhatsapp className="text-2xl" />
                <div>
                  <div className="text-sm font-medium">WhatsApp</div>
                  <div className="text-xs opacity-70">+62 889-0113-3932</div>
                </div>
              </Link>

              {/* Facebook */}
              <Link
                href="https://facebook.com/lanaradesain"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl ring-1 ring-gray-200 hover:shadow transition hover:bg-blue-200 hover:text-blue-700"
              >
                <FaFacebookF className="text-2xl" />
                <div>
                  <div className="text-sm font-medium">Facebook</div>
                  <div className="text-xs opacity-70">Lanara Desain</div>
                </div>
              </Link>

              {/* TikTok */}
              <Link
                href="https://www.tiktok.com/@lanara.design"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl ring-1 ring-gray-200 hover:shadow transition hover:bg-gray-200 hover:text-gray-700"
              >
                <FaTiktok className="text-2xl" />
                <div>
                  <div className="text-sm font-medium">TikTok</div>
                  <div className="text-xs opacity-70">lanara.design</div>
                </div>
              </Link>

              {/* Email */}
              <Link
                href="mailto:lanaradesign25@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl ring-1 ring-gray-200 hover:shadow transition hover:bg-yellow-200 hover:text-yellow-700"
              >
                <FaEnvelope className="text-2xl" />
                <div>
                  <div className="text-sm font-medium">Email</div>
                  <div className="text-xs opacity-70">lanaradesign25@gmail.com</div>
                </div>
              </Link>
            </div>

            {/* <div className="mt-6 text-xs opacity-60">
              <strong>Note:</strong> Pastikan nomor dan username sudah benar sebelum menghubungi.
            </div> */}
          </div>
        </div>
      </motion.section>
    </main>
  );
}
