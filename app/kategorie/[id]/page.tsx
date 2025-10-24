import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { 
  získatKategorii, 
  získatProduktyPodleKategorie, 
  získatRodičovskouKategorii,
  kategorie
} from "@/lib/data";
import { FiltryKategorie } from "@/components/FiltryKategorie";
import { 
  CheckCircle2, 
  ArrowLeft, 
  Package, 
  Grid, 
  ArrowRight
} from "lucide-react";

// 🎯 Generování statických parametrů pro všechny kategorie
export async function generateStaticParams() {
  const všechnyKategorie: { id: string }[] = []; // 📋 Pole všech ID kategorií
  
  // 🔄 Procházíme hlavní kategorie i podkategorie
  kategorie.forEach((kat) => {
    všechnyKategorie.push({ id: kat.id }); // ➕ Přidáme hlavní kategorii
    
    if (kat.children) { // 👶 Pokud má podkategorie
      kat.children.forEach((podkat) => {
        všechnyKategorie.push({ id: podkat.id }); // ➕ Přidáme podkategorii
      });
    }
  });
  
  return všechnyKategorie; // 🎁 Vrátíme všechny kategorie pro statické vygenerování
}

// 🏷️ Stránka kategorie - zobrazuje produkty v kategorii (statická stránka)
export default function StrankaKategorie({ params }: { params: { id: string } }) {
  const kategorieDetail = získatKategorii(params.id); // 🔎 Načtení kategorie podle ID
  const produktyKategorie = získatProduktyPodleKategorie(params.id); // 📦 Produkty kategorie
  const rodičovskáKategorie = získatRodičovskouKategorii(params.id); // 👆 Rodič pro breadcrumbs

  // ❌ Pokud kategorie neexistuje, zobrazíme 404
  if (!kategorieDetail) {
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
            <span className="text-foreground font-medium">{kategorieDetail.název}</span>
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
                src={kategorieDetail.obrázek}
                alt={kategorieDetail.název}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute top-4 right-4 bg-gradient-to-r from-slate-700 to-slate-800 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl shadow-lg">
                {kategorieDetail.ikona}
              </div>
            </div>

            {/* ℹ️ Informace o kategorii */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-4">
                  {kategorieDetail.název}
                </h1>
                <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-6">
                  {kategorieDetail.popis}
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
              {kategorieDetail.children && kategorieDetail.children.length > 0 && (
                <div className="bg-white p-6 rounded-xl shadow-md border">
                  <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                    <Grid className="h-4 w-4" />
                    Podkategorie
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {kategorieDetail.children.map((podkategorie) => (
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

      {/* 🎯 Filtry a seznam produktů */}
      <FiltryKategorie produkty={produktyKategorie} početNaSkladě={početNaSkladě} />
    </div>
  );
}

