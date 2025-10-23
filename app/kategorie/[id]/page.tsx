"use client"; // 🔧 Komponenta s interaktivitou pro filtry

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useState } from "react"; // 🎛️ Pro stav filtrů
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  získatKategorii, 
  získatProduktyPodleKategorie, 
  získatRodičovskouKategorii,
  produkty 
} from "@/lib/data";
import { 
  CheckCircle2, 
  XCircle, 
  ArrowLeft, 
  Package, 
  Grid, 
  Filter,
  ArrowRight,
  ShoppingCart
} from "lucide-react";

// 🔍 Generování statických parametrů pro všechny kategorie
export async function generateStaticParams() {
  // TODO: Implementovat načítání všech kategoriích IDs pro static generation
  return [];
}

// 🏷️ Stránka kategorie - zobrazuje produkty v kategorii
export default function StrankaKategorie({ params }: { params: { id: string } }) {
  const kategorie = získatKategorii(params.id); // 🔎 Načtení kategorie podle ID
  const produktyKategorie = získatProduktyPodleKategorie(params.id); // 📦 Produkty kategorie
  const rodičovskáKategorie = získatRodičovskouKategorii(params.id); // 👆 Rodič pro breadcrumbs
  
  // 🎯 Stavy pro filtry
  const [jenSkladem, nastavJenSkladem] = useState(false); // Filtr pouze produkty skladem
  const [řazeníPodleCeny, nastavŘazeníPodleCeny] = useState<'asc' | 'desc' | null>(null); // Řazení podle ceny

  // ❌ Pokud kategorie neexistuje, zobrazíme 404
  if (!kategorie) {
    notFound();
  }

  // 🔧 Filtrování a řazení produktů
  let filtrovanéProdukty = [...produktyKategorie];
  
  // 📦 Filtr skladem
  if (jenSkladem) {
    filtrovanéProdukty = filtrovanéProdukty.filter(p => p.naSkladě);
  }
  
  // 💰 Řazení podle ceny
  if (řazeníPodleCeny === 'asc') {
    filtrovanéProdukty.sort((a, b) => a.cena - b.cena);
  } else if (řazeníPodleCeny === 'desc') {
    filtrovanéProdukty.sort((a, b) => b.cena - a.cena);
  }

  // 📊 Statistiky
  const početNaSkladě = produktyKategorie.filter(p => p.naSkladě).length;
  const nejnižšíCena = produktyKategorie.length > 0 ? Math.min(...produktyKategorie.map(p => p.cena)) : 0;
  const nejvyššíCena = produktyKategorie.length > 0 ? Math.max(...produktyKategorie.map(p => p.cena)) : 0;

  return (
    <div className="flex flex-col">
      {/* 🧭 Breadcrumbs navigace */}
      <div className="border-b bg-slate-50">
        <div className="container px-4 py-4">
          <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors font-medium">
              Domů
            </Link>
            <span>/</span>
            {rodičovskáKategorie && (
              <>
                <Link 
                  href={`/kategorie/${rodičovskáKategorie.id}`} 
                  className="hover:text-foreground transition-colors"
                >
                  {rodičovskáKategorie.název}
                </Link>
                <span>/</span>
              </>
            )}
            <span className="text-foreground font-medium">{kategorie.název}</span>
          </nav>
        </div>
      </div>

      {/* 📋 Header kategorie */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="container px-4">
          <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Zpět na hlavní stránku
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* 🖼️ Obrázek kategorie */}
            <div className="relative h-80 overflow-hidden rounded-2xl bg-white shadow-xl">
              <Image
                src={kategorie.obrázek}
                alt={kategorie.název}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute top-4 right-4 bg-gradient-to-r from-slate-700 to-slate-800 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl shadow-lg">
                {kategorie.ikona}
              </div>
            </div>

            {/* ℹ️ Informace o kategorii */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-4">
                  {kategorie.název}
                </h1>
                <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-6">
                  {kategorie.popis}
                </p>
              </div>

              {/* 📊 Statistiky kategorie */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white p-4 rounded-xl shadow-md border">
                  <div className="flex items-center gap-2 mb-2">
                    <Package className="h-4 w-4 text-blue-500" />
                    <span className="text-sm font-medium text-slate-600">Celkem produktů</span>
                  </div>
                  <p className="text-2xl font-bold text-slate-900">{produktyKategorie.length}</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-md border">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <span className="text-sm font-medium text-slate-600">Skladem</span>
                  </div>
                  <p className="text-2xl font-bold text-slate-900">{početNaSkladě}</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-md border">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-medium text-slate-600">Od</span>
                  </div>
                  <p className="text-xl font-bold text-slate-900">{nejnižšíCena.toLocaleString('cs-CZ')} Kč</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-md border">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-medium text-slate-600">Do</span>
                  </div>
                  <p className="text-xl font-bold text-slate-900">{nejvyššíCena.toLocaleString('cs-CZ')} Kč</p>
                </div>
              </div>

              {/* 📋 Podkategorie (pokud existují) */}
              {kategorie.children && kategorie.children.length > 0 && (
                <div className="bg-white p-6 rounded-xl shadow-md border">
                  <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                    <Grid className="h-4 w-4" />
                    Podkategorie
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {kategorie.children.map((podkategorie) => (
                      <Link 
                        key={podkategorie.id} 
                        href={`/kategorie/${podkategorie.id}`}
                        className="flex items-center gap-3 p-3 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors group"
                      >
                        <span className="text-lg">{podkategorie.ikona}</span>
                        <div className="flex-1">
                          <p className="font-medium text-slate-900 group-hover:text-slate-700">
                            {podkategorie.název}
                          </p>
                          <p className="text-sm text-slate-600">{podkategorie.popis}</p>
                        </div>
                        <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-slate-600 group-hover:translate-x-1 transition-all" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 🎯 Filtry a řazení */}
      <section className="py-8 bg-white border-b border-slate-200">
        <div className="container px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <div className="flex items-center gap-3">
              <Filter className="h-5 w-5 text-slate-600" />
              <h3 className="text-lg font-semibold text-slate-900">
                Produkty ({filtrovanéProdukty.length} z {produktyKategorie.length})
              </h3>
            </div>
            
            <div className="flex flex-wrap gap-4 items-center">
              {/* 📦 Filtr skladem */}
              <Button
                variant={jenSkladem ? "default" : "outline"}
                size="sm"
                onClick={() => nastavJenSkladem(!jenSkladem)}
                className="gap-2"
              >
                <CheckCircle2 className="h-4 w-4" />
                Jen skladem ({početNaSkladě})
              </Button>
              
              {/* 💰 Řazení podle ceny */}
              <div className="flex gap-2">
                <Button
                  variant={řazeníPodleCeny === 'asc' ? "default" : "outline"}
                  size="sm"
                  onClick={() => nastavŘazeníPodleCeny(řazeníPodleCeny === 'asc' ? null : 'asc')}
                >
                  Cena ↑
                </Button>
                <Button
                  variant={řazeníPodleCeny === 'desc' ? "default" : "outline"}
                  size="sm"
                  onClick={() => nastavŘazeníPodleCeny(řazeníPodleCeny === 'desc' ? null : 'desc')}
                >
                  Cena ↓
                </Button>
              </div>
            </div>
          </div>
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
                {jenSkladem 
                  ? "V této kategorii momentálně nejsou žádné produkty skladem."
                  : "V této kategorii zatím nejsou žádné produkty."
                }
              </p>
              <Button onClick={() => nastavJenSkladem(false)} variant="outline">
                Zobrazit všechny produkty
              </Button>
            </div>
          ) : (
            // 🛍️ Grid produktů
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filtrovanéProdukty.map((produkt, index) => (
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
                      <div className="flex justify-between items-start mb-3">
                        <CardTitle className="group-hover:text-slate-600 transition-colors duration-300 line-clamp-2 text-lg font-heading flex-1">
                          {produkt.název}
                        </CardTitle>
                        {/* 💰 Cena */}
                        <div className="ml-4 flex-shrink-0">
                          <div className="bg-slate-100 px-3 py-1 rounded-lg border">
                            <p className="text-slate-800 text-lg font-heading font-bold">
                              {produkt.cena.toLocaleString('cs-CZ')} Kč
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <CardDescription className="line-clamp-3 text-slate-600 leading-relaxed mb-4">
                        {produkt.popis}
                      </CardDescription>
                      
                      {/* 🎯 Call to action */}
                      <div className="pt-2 flex items-center text-slate-800 font-semibold group-hover:text-slate-600 transition-colors duration-300">
                        <span>Zobrazit detail</span>
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
