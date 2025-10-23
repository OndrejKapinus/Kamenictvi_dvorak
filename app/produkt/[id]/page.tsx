"use client"; // 🔧 Komponenta s interaktivitou

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useState } from "react"; // 🎛️ Pro stav aktivního obrázku
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { získatProdukt, produkty, kategorie } from "@/lib/data";
import { CheckCircle2, XCircle, ShoppingCart, ArrowLeft, Package, Truck, Shield, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";

// 🛍️ Detail produktu - zobrazuje veškeré informace o produktu
export default function DetailProduktu({ params }: { params: { id: string } }) {
  const produkt = získatProdukt(params.id); // 🔎 Načtení produktu podle ID
  
  // 🖼️ Stav pro správu galerie
  const [aktivníObrázek, nastavAktivníObrázek] = useState(0); // Index aktuálně zobrazeného obrázku
  const [zobrazitModal, nastavZobrazitModal] = useState(false); // Stav pro modal s velkým obrázkem

  // ❌ Pokud produkt neexistuje, zobrazíme 404
  if (!produkt) {
    notFound();
  }

  // 🏷️ Najdeme kategorii produktu pro breadcrumbs
  const kategorieProduktu = kategorie.find(k => k.id === produkt.kategorie);

  // 🔗 Související produkty ze stejné kategorie
  const souvisejícíProdukty = produkty
    .filter(p => p.kategorie === produkt.kategorie && p.id !== produkt.id && p.naSkladě)
    .slice(0, 4);

  // 🎮 Funkce pro navigaci mezi obrázky
  const předchozíObrázek = () => {
    nastavAktivníObrázek((prev) => 
      prev === 0 ? produkt.obrázky.length - 1 : prev - 1
    );
  };

  const následujícíObrázek = () => {
    nastavAktivníObrázek((prev) => 
      prev === produkt.obrázky.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="flex flex-col">
      {/* 🧭 Breadcrumbs navigace */}
      <div className="border-b">
        <div className="container px-4 py-4">
          <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">
              Domů
            </Link>
            <span>/</span>
            {kategorieProduktu && (
              <>
                <Link href={`/kategorie/${kategorieProduktu.id}`} className="hover:text-foreground transition-colors">
                  {kategorieProduktu.název}
                </Link>
                <span>/</span>
              </>
            )}
            <span className="text-foreground">{produkt.název}</span>
          </nav>
        </div>
      </div>

      {/* 📦 Hlavní obsah produktu */}
      <section className="py-12 md:py-16">
        <div className="container px-4">
          <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Zpět na hlavní stránku
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* 🖼️ Premium galerie obrázků s interaktivitou */}
            <div className="space-y-4">
              {/* Hlavní obrázek s navigačními šipkami a modal funkcí */}
              <div className="relative group">
                <Dialog open={zobrazitModal} onOpenChange={nastavZobrazitModal}>
                  <DialogTrigger asChild>
                    <div className="relative aspect-square overflow-hidden rounded-xl border-2 border-slate-200 bg-white shadow-lg cursor-pointer hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
                      <Image
                        src={produkt.obrázky[aktivníObrázek]}
                        alt={`${produkt.název} - obrázek ${aktivníObrázek + 1}`}
                        fill
                        className="object-cover transition-transform duration-700"
                        priority
                      />
                      
                      {/* 🔍 Zoom overlay */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                        <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-100 transition-all duration-300">
                          <ZoomIn className="h-6 w-6 text-slate-700" />
                        </div>
                      </div>

                      {/* 🎮 Navigační šipky (pouze pokud je více obrázků) */}
                      {produkt.obrázky.length > 1 && (
                        <>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              předchozíObrázek();
                            }}
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg"
                          >
                            <ChevronLeft className="h-5 w-5 text-slate-700" />
                          </button>
                          
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              následujícíObrázek();
                            }}
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg"
                          >
                            <ChevronRight className="h-5 w-5 text-slate-700" />
                          </button>
                        </>
                      )}

                      {/* 📍 Indikátor pozice */}
                      {produkt.obrázky.length > 1 && (
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                          {produkt.obrázky.map((_, index) => (
                            <div
                              key={index}
                              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                index === aktivníObrázek 
                                  ? 'bg-white shadow-lg' 
                                  : 'bg-white/50'
                              }`}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  </DialogTrigger>

                  {/* 🖼️ Modal s velkým obrázkem */}
                  <DialogContent className="max-w-4xl w-full p-0 bg-transparent border-0">
                    <div className="relative bg-white rounded-xl overflow-hidden shadow-2xl">
                      <div className="relative aspect-square lg:aspect-video">
                        <Image
                          src={produkt.obrázky[aktivníObrázek]}
                          alt={`${produkt.název} - velký obrázek ${aktivníObrázek + 1}`}
                          fill
                          className="object-contain bg-slate-50"
                        />
                        
                        {/* 🎮 Navigace v modalu */}
                        {produkt.obrázky.length > 1 && (
                          <>
                            <button
                              onClick={předchozíObrázek}
                              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white rounded-full p-3 transition-colors duration-300"
                            >
                              <ChevronLeft className="h-6 w-6" />
                            </button>
                            
                            <button
                              onClick={následujícíObrázek}
                              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white rounded-full p-3 transition-colors duration-300"
                            >
                              <ChevronRight className="h-6 w-6" />
                            </button>
                          </>
                        )}
                      </div>
                      
                      {/* 📊 Info panel v modalu */}
                      <div className="p-6 bg-white border-t">
                        <h3 className="text-xl font-bold text-slate-900 mb-2">{produkt.název}</h3>
                        <p className="text-slate-600">
                          Obrázek {aktivníObrázek + 1} z {produkt.obrázky.length}
                        </p>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>

              {/* 🎯 Interaktivní miniatury */}
              {produkt.obrázky.length > 1 && (
                <div className="grid grid-cols-4 gap-3">
                  {produkt.obrázky.map((obrázek, index) => (
                    <button
                      key={index}
                      onClick={() => nastavAktivníObrázek(index)}
                      className={`relative aspect-square overflow-hidden rounded-lg border-2 transition-all duration-300 hover:shadow-lg hover:scale-105 ${
                        index === aktivníObrázek 
                          ? 'border-slate-800 ring-2 ring-slate-300 shadow-lg' 
                          : 'border-slate-200 hover:border-slate-400'
                      }`}
                    >
                      <Image
                        src={obrázek}
                        alt={`${produkt.název} - miniatura ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                      
                      {/* 🔥 Overlay pro aktivní miniaturу */}
                      <div className={`absolute inset-0 transition-opacity duration-300 ${
                        index === aktivníObrázek 
                          ? 'bg-slate-900/10' 
                          : 'bg-transparent hover:bg-slate-900/5'
                      }`} />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* ℹ️ Informace o produktu */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-3">{produkt.název}</h1>
                
                {/* 🏷️ Dostupnost */}
                {produkt.naSkladě ? (
                  <Badge className="bg-green-600">
                    <CheckCircle2 className="mr-1 h-3 w-3" />
                    Skladem
                  </Badge>
                ) : (
                  <Badge variant="destructive">
                    <XCircle className="mr-1 h-3 w-3" />
                    Není skladem
                  </Badge>
                )}
              </div>

              {/* 💰 Cena */}
              <div className="py-4 border-y">
                <p className="text-4xl font-bold">{produkt.cena.toLocaleString('cs-CZ')} Kč</p>
                <p className="text-sm text-muted-foreground mt-1">Cena včetně DPH</p>
              </div>

              {/* 📝 Popis */}
              <div>
                <h2 className="text-xl font-semibold mb-3">Popis produktu</h2>
                <p className="text-muted-foreground leading-relaxed">{produkt.popis}</p>
              </div>

              {/* 🛒 Tlačítko přidat do košíku */}
              <div className="space-y-4 pt-4">
                <Button size="lg" className="w-full" disabled={!produkt.naSkladě}>
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  {produkt.naSkladě ? "Přidat do košíku" : "Produkt není dostupný"}
                </Button>
                
                {!produkt.naSkladě && (
                  <p className="text-sm text-center text-muted-foreground">
                    Tento produkt momentálně není skladem. Kontaktujte nás pro informace o dostupnosti.
                  </p>
                )}
              </div>

              {/* ✅ Výhody */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6">
                <div className="flex items-start space-x-3">
                  <Package className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">Kvalitní materiál</p>
                    <p className="text-xs text-muted-foreground">Přírodní kámen</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Truck className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">Doprava</p>
                    <p className="text-xs text-muted-foreground">Po celé ČR</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Shield className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">Záruka kvality</p>
                    <p className="text-xs text-muted-foreground">Ruční práce</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🔗 Související produkty */}
      {souvisejícíProdukty.length > 0 && (
        <section className="py-16 bg-muted/50">
          <div className="container px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Související produkty</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {souvisejícíProdukty.map((souvisejícíProdukt) => (
                <Link key={souvisejícíProdukt.id} href={`/produkt/${souvisejícíProdukt.id}`}>
                  <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 h-full">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={souvisejícíProdukt.obrázky[0]}
                        alt={souvisejícíProdukt.název}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {souvisejícíProdukt.naSkladě && (
                        <Badge className="absolute top-3 right-3 bg-green-600">
                          <CheckCircle2 className="mr-1 h-3 w-3" />
                          Skladem
                        </Badge>
                      )}
                    </div>
                    <CardHeader>
                      <CardTitle className="group-hover:text-primary transition-colors line-clamp-2 text-base">
                        {souvisejícíProdukt.název}
                      </CardTitle>
                      <CardDescription className="line-clamp-2 text-sm">
                        {souvisejícíProdukt.popis}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-xl font-bold">
                        {souvisejícíProdukt.cena.toLocaleString('cs-CZ')} Kč
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}



