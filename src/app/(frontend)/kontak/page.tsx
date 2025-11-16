"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaWhatsapp,
  FaFacebookF,
  FaTiktok,
  FaEnvelope,
} from "react-icons/fa";
import Link from "next/link";

// ✅ Tipe Contact tanpa color
type Contact = {
  id: number;
  platform: string;
  // username: string;
  url: string;
  icon: "instagram" | "whatsapp" | "facebook" | "tiktok" | "email";
};

export default function ContactPage() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchContacts() {
      try {
        const res = await fetch("/api/kontak");
        if (!res.ok) throw new Error("Failed to fetch contacts");
        const data: Contact[] = await res.json();
        setContacts(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchContacts();
  }, []);

  const iconMap: Record<Contact["icon"], React.ReactNode> = {
    instagram: <FaInstagram className="text-2xl" />,
    whatsapp: <FaWhatsapp className="text-2xl" />,
    facebook: <FaFacebookF className="text-2xl" />,
    tiktok: <FaTiktok className="text-2xl" />,
    email: <FaEnvelope className="text-2xl" />,
  };

  const hoverColorMap: Record<Contact["icon"], string> = {
    instagram: "hover:bg-purple-200 hover:text-purple-700",
    whatsapp: "hover:bg-green-200 hover:text-green-700",
    facebook: "hover:bg-blue-200 hover:text-blue-700",
    tiktok: "hover:bg-gray-200 hover:text-gray-700",
    email: "hover:bg-yellow-200 hover:text-yellow-700",
  };

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
                  <p className="text-sm opacity-70">
                    Modern architecture & interior design
                  </p>
                </div>
              </div>

              <p className="mt-6 leading-relaxed opacity-90">
                Butuh kerjasama atau ngobrol soal desain? <br />
                Kami terbuka buat konsultasi desain, dan request style arsitek.
                Hubungi kami lewat salah satu kanal di samping.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/60 ring-1 ring-gray-200 text-sm">
                  Minimalist
                </span>
                <span className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/60 ring-1 ring-gray-200 text-sm">
                  Aesthetic
                </span>
                <span className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/60 ring-1 ring-gray-200 text-sm">
                  Instagrammable
                </span>
              </div>
            </div>
          </div>

          {/* Right - Contact Cards */}
          <div className="p-8 border-l border-gray-300">
            <h2 className="text-lg font-medium">Kontak</h2>
            <p className="text-sm opacity-70 mt-1">
              Pilih platform yang kamu suka — semua cepat di-reply kok
            </p>

            {loading ? (
              <div className="mt-6 text-sm opacity-70">Memuat kontak...</div>
            ) : (
              <div className="mt-6 grid gap-3">
                {contacts.map((c) => (
                  <Link
                    key={c.id}
                    href={c.url}
                    target="_blank"
                    rel="noreferrer"
                    className={`flex items-center gap-4 p-4 rounded-xl ring-1 ring-gray-200 hover:shadow transition ${hoverColorMap[c.icon]}`}
                  >
                    {iconMap[c.icon]}
                    <div>
                      <div className="text-sm font-medium">{c.platform}</div>
                      <div className="text-xs opacity-70">{c.url}</div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </motion.section>
    </main>
  );
}
