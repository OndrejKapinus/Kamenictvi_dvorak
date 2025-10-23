import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { produkty, získatKategorii } from "@/lib/data";
import { ArrowRight, ShoppingCart, Package, Star, Eye } from "lucide-react";

// 🛒 Stránka s celým sortimentem všech produktů
export default function SortimentPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero sekce */}
      <section className="relative bg-gradient-to-br from-slate-50 via-slate-100 to-stone-100 py-16 md:py-24 overflow-hidden">
        {/* Dekorativní pozadí */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-slate-300 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-stone-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container px-4 relative z-10">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 bg-slate-800 text-white px-4 py-2 rounded-full text-sm font-medium">
              <Package className="h-4 w-4" />
              Kompletní nabídka
            </div>
             <h1 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 leading-tight">
               Celý sortiment
             </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Všechny naše produkty na jednom místě - kamenické výrobky bez rozdělení podle kategorií.
            </p>
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-full font-bold shadow-lg">
              <ShoppingCart className="h-5 w-5" />
              {produkty.length} produktů k dispozici
            </div>
          </div>
        </div>
      </section>

      {/* Grid všech produktů */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
        {/* Dekorativní pozadí */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-40 left-20 w-96 h-96 bg-slate-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 right-20 w-80 h-80 bg-stone-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container px-4 relative z-10">
          {/* Premium grid produktů */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {produkty.map((produkt, index) => {
              const kategorie = získatKategorii(produkt.kategorie); // 🏷️ Získáme název kategorie pro zobrazení
              
              return (
                <Link key={produkt.id} href={`/produkt/${produkt.id}`} className="group">
                  <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 h-full border border-slate-200 bg-white/90 backdrop-blur-sm group-hover:bg-white transform group-hover:-translate-y-3 group-hover:border-slate-300">
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={produkt.obrázky[0]}
                        alt={produkt.název}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      
                      {/* Badge kategorie */}
                      {kategorie && (
                        <div className="absolute top-3 left-3 bg-gradient-to-r from-slate-700 to-slate-800 text-white px-3 py-1 rounded-lg text-xs font-bold shadow-lg">
                          {kategorie.název.length > 15 ? 
                            `${kategorie.název.substring(0, 15)}...` : 
                            kategorie.název
                          }
                        </div>
                      )}
                      
                      {/* Badge skladem/není skladem */}
                      <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold shadow-lg ${
                        produkt.naSkladě 
                          ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white' 
                          : 'bg-gradient-to-r from-red-500 to-rose-600 text-white'
                       }`}>
                         {produkt.naSkladě ? 'Skladem' : 'Na objednávku'}
                       </div>
                    </div>
                    
                    <CardHeader className="p-6">
                      <div className="space-y-3 mb-3">
                        <CardTitle className="group-hover:text-slate-600 transition-colors duration-300 line-clamp-2 text-lg font-heading">
                          {produkt.název}
                        </CardTitle>
                      </div>
                      
                      <CardDescription className="line-clamp-3 text-slate-600 leading-relaxed mb-4">
                        {produkt.popis}
                      </CardDescription>

                      {/* Cena vlevo a tlačítko vpravo */}
                      <div className="flex justify-between items-center pt-2">
                        <div className="text-2xl font-bold text-slate-800">
                          {produkt.cena.toLocaleString('cs-CZ')} Kč
                        </div>
                         <Button variant="outline" size="sm" className="group-hover:bg-slate-800 group-hover:text-white transition-colors duration-300">
                           <Eye className="h-4 w-4 mr-2" />
                           Zobrazit detail
                           <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                         </Button>
                      </div>
                    </CardHeader>
                  </Card>
                </Link>
              );
            })}
          </div>

          {/* Statistiky na konci */}
          <div className="text-center mt-16 space-y-6">
            <div className="inline-flex items-center gap-4 bg-gradient-to-r from-slate-800 to-slate-700 text-white px-8 py-4 rounded-2xl shadow-xl">
              <Package className="h-6 w-6" />
              <span className="font-heading text-lg font-bold">Zobrazeno všech {produkty.length} produktů z našeho sortimentu</span>
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center">
               <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold flex items-center gap-2">
                 <Package className="h-4 w-4" />
                 {produkty.filter(p => p.naSkladě).length} skladem
               </div>
               <div className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full font-semibold flex items-center gap-2">
                 <ShoppingCart className="h-4 w-4" />
                 {produkty.filter(p => !p.naSkladě).length} na objednávku
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
