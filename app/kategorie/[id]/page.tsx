import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  získatKategorii, 
  získatProduktyPodleKategorie, 
  získatRodičovskouKategorii,
  produkty,
  kategorie 
} from "@/lib/data";
import KategorieObsah from "@/components/KategorieObsah";
import { 
  ArrowLeft, 
  Package, 
  Grid,
  ArrowRight
} from "lucide-react";

// 🔧 Generuje statické parametry pro všechny kategorie při buildu
export async function generateStaticParams() {
  // 📋 Získáme všechny kategorie včetně podkategorií pro statický export
  const parametry: { id: string }[] = [];
  
  kategorie.forEach(kat => {
    // 🏷️ Přidáme hlavní kategorii
    parametry.push({ id: kat.id });
    
    // 👶 Přidáme i všechny podkategorie
    if (kat.children) {
      kat.children.forEach(podkategorie => {
        parametry.push({ id: podkategorie.id });
      });
    }
  });
  
  return parametry;
}

// 🏷️ Stránka kategorie - zobrazuje produkty v kategorii
export default function StrankaKategorie({ params }: { params: { id: string } }) {
  const kategorie = získatKategorii(params.id); // 🔎 Načtení kategorie podle ID
  const produktyKategorie = získatProduktyPodleKategorie(params.id); // 📦 Produkty kategorie
  const rodičovskáKategorie = získatRodičovskouKategorii(params.id); // 👆 Rodič pro breadcrumbs

  // ❌ Pokud kategorie neexistuje, zobrazíme 404
  if (!kategorie) {
    notFound();
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

      {/* 🛍️ Interaktivní obsah s produkty a filtry */}
      <KategorieObsah produktyKategorie={produktyKategorie} />
    </div>
  );
}

