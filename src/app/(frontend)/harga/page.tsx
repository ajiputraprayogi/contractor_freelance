"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

type Package = {
  name: string;
  price: string;
  desc: string;
  features: string[];
  button: string;
  popular?: boolean;
  discount?: boolean;
};

export default function PricingPage() {
  const [activeTab, setActiveTab] = useState<"eksterior" | "interior" | "signature">("eksterior");
  const [packages, setPackages] = useState<Package[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPackages() {
      setLoading(true);
      try {
        const res = await fetch(`/dummyapi/harga?tab=${activeTab}`);
        if (!res.ok) throw new Error("Gagal memuat paket");
        const data: Package[] = await res.json();
        setPackages(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchPackages();
  }, [activeTab]);

  return (
    <main className="min-h-screen bg-[#F7F4EF] py-20 px-6">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-semibold text-[#2f3542] mb-4 mt-4">
          Paket Desain LANARA
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Pilih jenis layanan sesuai kebutuhan desain Anda — eksterior, interior, atau full package signature.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center mb-12 gap-4">
        {["eksterior", "interior", "signature"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as any)}
            className={`capitalize px-6 py-2 rounded-full text-sm font-medium transition-all ${
              activeTab === tab
                ? "bg-[#2f3542] text-white"
                : "bg-[#F7F4EF] text-[#2f3542] hover:bg-[#EDEAE4]"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Pricing Cards */}
      {loading ? (
        <p className="text-center text-gray-500">Memuat paket...</p>
      ) : (
        <div
          className={`grid ${
            activeTab === "signature"
              ? "md:grid-cols-1 max-w-3xl mx-auto"
              : "md:grid-cols-2 lg:grid-cols-3"
          } gap-8 max-w-6xl mx-auto`}
        >
          {packages.map((pkg, i) => (
            <div
              key={i}
              className={`relative flex flex-col justify-between rounded-2xl bg-[#F7F4EF] transition p-8 border ${
                pkg.popular ? "border-gray-400" : "border-gray-400"
              }`}
            >
              {pkg.discount && (
                <span className="absolute top-4 right-4 bg-red-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                  Diskon 20%
                </span>
              )}

              <div>
                <h3 className="text-xl font-semibold text-[#2f3542] mb-2">{pkg.name}</h3>
                <p className="text-2xl font-bold text-[#2f3542] mb-2">{pkg.price}</p>
                <p className="text-gray-500 text-sm mb-6">{pkg.desc}</p>
                <ul className="text-left text-gray-700 space-y-2 mb-6">
                  {pkg.features.map((f, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#2f3542] mt-1">•</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Animated Button */}
              <div className="flex justify-center mt-4">
                <button className="mt-4 cursor-pointer group relative inline-flex items-center justify-center overflow-hidden rounded-md bg-[#2f3542] w-auto transition-all duration-500 hover:scale-[1.03]">
                  <div className="inline-flex h-12 translate-y-0 items-center justify-center px-8 text-white transition-all duration-500 group-hover:-translate-y-[150%]">
                    {pkg.button}
                  </div>
                  <div className="absolute inline-flex h-24 w-full translate-y-[100%] items-center justify-center text-[#2E2B25] transition-all duration-500 group-hover:translate-y-0">
                    <span className="absolute h-full w-full translate-y-full skew-y-12 scale-y-0 bg-[#C9A77A] transition-all duration-500 group-hover:translate-y-0 group-hover:scale-150"></span>
                    <span className="z-10 px-8">Let&apos;s Go</span>
                  </div>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Footer */}
      <div className="text-center mt-20 text-gray-600">
        <p className="mb-1">Untuk informasi dan diskusi lebih lanjut:</p>
        <Link href={"/kontak"} className="text-sm">@ Sosial Media</Link>
      </div>
    </main>
  );
}
