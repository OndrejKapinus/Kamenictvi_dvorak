"use client"; // 🔧 Client komponenta pro interaktivní obsah kategorie

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import FiltryProduktu from "@/components/FiltryProduktu";
import { 
  CheckCircle2, 
  Package, 
  Filter,
  ArrowRight
} from "lucide-react";
import { Produkt } from "@/lib/data";

// 🏷️ Props pro komponentu obsahu kategorie
interface KategorieObsahProps {
  produktyKategorie: Produkt[]; // 📦 Produkty v kategorii
}

// 🛍️ Interaktivní obsah kategorie s filtry
export default function KategorieObsah({ produktyKategorie }: KategorieObsahProps) {
  // 🎯 Stav pro filtrované produkty
  const [filtrovanéProdukty, nastavFiltrovanéProdukty] = useState<Produkt[]>(produktyKategorie);

  return (
    <>
      {/* 🎯 Filtry a řazení */}
      <section className="py-8 bg-white border-b border-slate-200">
        <div className="container px-4">
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">
              Produkty ({filtrovanéProdukty.length} z {produktyKategorie.length})
            </h3>
          </div>
          <FiltryProduktu 
            produkty={produktyKategorie} 
            onFiltrovaneProdukty={nastavFiltrovanéProdukty}
          />
        </div>
      </section>

      {/* 🛍️ Seznam produktů */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        {/* 🎨 Dekorativní pozadí */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-40 left-20 w-64 h-64 bg-slate-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 right-20 w-80 h-80 bg-slate-400 rounded-full blur-3xl"></div>
        </div>

        <div className="container px-4 relative z-10">
          {filtrovanéProdukty.length === 0 ? (
            // 😞 Žádné produkty
            <div className="text-center py-16">
              <div className="mx-auto w-32 h-32 bg-slate-200 rounded-full flex items-center justify-center mb-6">
                <Package className="h-16 w-16 text-slate-400" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">Žádné produkty nenalezeny</h3>
              <p className="text-lg text-slate-600 mb-6">
                V této kategorii momentálně nejsou žádné produkty dle zvolených filtrů.
              </p>
            </div>
          ) : (
            // 🛍️ Grid produktů
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filtrovanéProdukty.map((produkt) => (
                <Link key={produkt.id} href={`/produkt/${produkt.id}`} className="group">
                  <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 h-full border border-slate-200 bg-white/90 backdrop-blur-sm group-hover:bg-white transform group-hover:-translate-y-3 group-hover:border-slate-300">
                    <div className="relative h-72 overflow-hidden">
                      <Image
                        src={produkt.obrázky[0]}
                        alt={produkt.název}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      
                      {/* 🌟 Skladem badge */}
                      {produkt.naSkladě && (
                        <div className="absolute top-3 right-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg flex items-center gap-1">
                          <CheckCircle2 className="h-3 w-3" />
                          Skladem
                        </div>
                      )}
                    </div>
                    
                    <CardHeader className="p-6">
                      <CardTitle className="group-hover:text-slate-600 transition-colors duration-300 line-clamp-2 text-lg font-heading mb-3">
                        {produkt.název}
                      </CardTitle>
                      
                      <CardDescription className="line-clamp-3 text-slate-600 leading-relaxed mb-4">
                        {produkt.popis}
                      </CardDescription>
                      
                      {/* Cena vlevo a tlačítko vpravo */}
                      <div className="flex justify-between items-center pt-2">
                        <div className="text-2xl font-bold text-slate-800">
                          {produkt.cena.toLocaleString('cs-CZ')} Kč
                        </div>
                        <Button variant="outline" size="sm" className="group-hover:bg-slate-800 group-hover:text-white transition-colors duration-300">
                          Zobrazit detail
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </Button>
                      </div>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
