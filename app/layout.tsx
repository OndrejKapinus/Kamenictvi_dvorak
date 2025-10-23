import type { Metadata } from "next";
import { Cinzel, EB_Garamond } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// 🏛️ Hlavní font inspirovaný římskými nápisy v kameni
const cinzel = Cinzel({ 
  subsets: ["latin"], 
  display: 'swap',
  variable: '--font-cinzel'
});

// 📖 Klasický font pro čitelnost těla textu
const ebGaramond = EB_Garamond({ 
  subsets: ["latin"], 
  display: 'swap',
  variable: '--font-eb-garamond'
});

// 📝 Metadata stránky pro SEO
export const metadata: Metadata = {
  title: "Kamenictví Dvořák | Tradiční řemeslo, moderní přístup",
  description: "E-shop kamenictví Dvořák s.r.o. v Telči. Pomníky, hřbitovní doplňky, kuchyňské desky, obklady a další kamenické výrobky nejvyšší kvality.",
};

// 🏗️ Základní layout aplikace s hlavičkou a patičkou
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs">
      <body className={`${cinzel.variable} ${ebGaramond.variable} font-garamond`}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}



