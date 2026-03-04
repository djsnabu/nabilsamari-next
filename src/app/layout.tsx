import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nabil Samari – Creative Technologist | Tapahtumat, Web, Automaatiot",
  description: "Nabil Samari – lähes 100 tuotettua tapahtumaa, 5 verkkosivustoa, automaatioita jotka säästävät 300–10 000 €/kk. Seinäjoki.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fi">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
