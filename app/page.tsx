import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { kategorie, produkty } from "@/lib/data";
import { ArrowRight, ArrowDown, CheckCircle2, Filter, Grid, Package } from "lucide-react";

// Hlavní stránka eshopu 🏠
export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero sekce s wow efektem */}
      <section 
        className="relative bg-gradient-to-br from-slate-50 via-slate-100 to-stone-100 py-28 md:py-40 overflow-hidden"
        style={{
          backgroundImage: `url('/engin-akyurt-uTwf8uvEAPU-unsplash.jpg')`, // 🎨 Pozadí hero sekce
          backgroundSize: 'cover', // 📐 Pozadí pokryje celou sekci
          backgroundPosition: 'center center', // 📍 Centrovat pozadí
          backgroundAttachment: 'fixed', // 🔒 Parallax efekt při scrollování
        }}
      >
        {/* Overlay gradient pro lepší čitelnost textu */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50/80 via-slate-100/85 to-stone-100/80"></div>
        
        {/* Animované pozadí s kamennými prvky */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 bg-stone-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-slate-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="space-y-3">
              <h1 className="text-4xl md:text-6xl font-heading font-bold tracking-tight text-slate-900 drop-shadow-sm">
                Kamenictví Dvořák
              </h1>
              <p className="text-xl md:text-2xl text-slate-700 font-medium">
                Tradiční řemeslo, moderní přístup, individuální řešení
              </p>
            </div>
            <div className="flex flex-wrap gap-4 justify-center pt-8">
              <Button size="lg" className="bg-slate-800 hover:bg-slate-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-lg font-bold px-8 py-4" asChild>
                <Link href="#kategorie">
                  Prohlédnout kategorie
                  <ArrowDown className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-800 hover:text-white hover:border-slate-800 shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-lg font-bold px-8 py-4" asChild>
                <Link href="/o-nas">
                  O nás
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 🏷️ Kategorie produktů */}
      <section id="kategorie" className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        {/* 🎨 Dekorativní pozadí */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-40 left-20 w-64 h-64 bg-slate-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 right-20 w-80 h-80 bg-slate-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container px-4 relative z-10">
          <div className="text-center space-y-6 mb-16">
            <div className="inline-flex items-center gap-2 bg-slate-800 text-white px-4 py-2 rounded-full text-sm font-medium">
              <Grid className="h-4 w-4" />
              Sortiment kategorií
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 leading-tight">
              Naše kategorie
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Procházejte naší širokou nabídkou kategorie kamenických výrobků podle vašich potřeb.
            </p>
          </div>

          {/* 🏷️ Premium grid všech kategorií */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {kategorie
              .filter(kat => !kat.parent) // 👆 Pouze hlavní kategorie bez rodiče
              .map((kat, index) => (
              <Link key={kat.id} href={`/kategorie/${kat.id}`} className="group">
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 h-full border border-slate-200 bg-white/90 backdrop-blur-sm group-hover:bg-white transform group-hover:-translate-y-3 group-hover:border-slate-300">
                  <div className="relative h-72 overflow-hidden">
                    <Image
                      src={kat.obrázek}
                      alt={kat.název}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* 🎨 Ikona kategorie v rohu */}
                    <div className="absolute top-3 right-3 bg-gradient-to-r from-slate-700 to-slate-800 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl shadow-lg">
                      {kat.ikona}
                    </div>
                    
                    {/* 🌟 Badge počtu podkategorií */}
                    {kat.children && kat.children.length > 0 && (
                      <div className="absolute top-3 left-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg flex items-center gap-1">
                        <Package className="h-3 w-3" />
                        {kat.children.length} podkategorií
                      </div>
                    )}
                    
                  </div>
                  
                  <CardHeader className="p-6">
                    <div className="space-y-3 mb-3">
                      <CardTitle className="group-hover:text-slate-600 transition-colors duration-300 line-clamp-2 text-lg font-heading">
                        {kat.název}
                      </CardTitle>
                    </div>
                    
                    <CardDescription className="line-clamp-3 text-slate-600 leading-relaxed mb-4">
                      {kat.popis}
                    </CardDescription>

                    {/* 📋 Seznam podkategorií (pokud existují) */}
                    {kat.children && kat.children.length > 0 && (
                      <div className="mb-4 space-y-1">
                        <p className="text-xs font-semibold text-slate-800 mb-2">Podkategorie:</p>
                        <div className="flex flex-wrap gap-1">
                          {kat.children.slice(0, 3).map((podkategorie) => (
                            <Badge 
                              key={podkategorie.id} 
                              variant="outline" 
                              className="text-xs bg-slate-50 text-slate-600"
                            >
                              {podkategorie.název.length > 20 ? 
                                `${podkategorie.název.substring(0, 20)}...` : 
                                podkategorie.název
                              }
                            </Badge>
                          ))}
                          {kat.children.length > 3 && (
                            <Badge variant="outline" className="text-xs bg-slate-50 text-slate-500">
                              +{kat.children.length - 3} dalších
                            </Badge>
                          )}
                        </div>
                      </div>
                    )}
                    
                    {/* 🎯 Call to action */}
                    <div className="pt-2 flex items-center text-slate-800 font-semibold group-hover:text-slate-600 transition-colors duration-300">
                      <span>Prohlédnout produkty</span>
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>

          {/* 🎉 Statistiky */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center gap-4 bg-gradient-to-r from-slate-800 to-slate-700 text-white px-8 py-4 rounded-2xl shadow-xl">
              <Package className="h-6 w-6" />
              <span className="font-heading text-lg font-bold">Více než {kategorie.length} specializovaných kategorií</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}




