import type { Metadata } from "next";
import "./globals.css";
import GradualBlur from "./components/layout/gradual";
import Navbar from "./components/layout/Navbar";
import AOSInitializer from "./components/layout/AOSinitializer";
import Footer from "./components/layout/Footer";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800","900"],
});

export const metadata: Metadata = {
  title: "Lanara Desain",
  description: "Jasa Desain Arsitek Kediri",
  keywords: ["arsitektur", "Desain", "interior", "Lanara", "arsitektur modern"],
  authors: [{ name: "Lanara Desain" }],
  creator: "Lanara Desain",
  publisher: "Lanara Desain",
  metadataBase: new URL("https://www.LanaraDesain.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Lanara Desain",
    description: "Solusi Desain Arsitek Murah & Berkualitas",
    url: "https://www.LanaraDesain.com",
    siteName: "Lanara Desain",
    images: [
      {
        url: "/images/brand/logos.png",
        width: 1200,
        height: 630,
        alt: "Lanara Desain Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lanara Desain",
    description: "Solusi Modern Jasa Arsitek",
    creator: "@LanaraDesain",
    images: ["/images/brand/logos.png"],
  },
  icons: {
    icon: "/images/brand/logos.png",
    shortcut: "/images/brand/logos.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        {/* AOS Animations */}
        <AOSInitializer />
        
        {/* Main Section */}
        <section className="relative min-h-screen overflow-hidden bg-[#F7F4EF]">
          <Navbar />
          {children}
          <Footer />

          {/* Gradual Blur Effect */}
          <div className="fixed bottom-0 left-0 w-full pointer-events-none">
            <GradualBlur
              target="parent"
              position="bottom"
              height="3rem"
              strength={2}
              divCount={5}
              curve="bezier"
              exponential={true}
              opacity={1}
            />
          </div>
        </section>
      </body>
    </html>
  );
}
