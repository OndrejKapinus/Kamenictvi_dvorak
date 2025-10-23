import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { získatProdukt, produkty, kategorie } from "@/lib/data";
import { CheckCircle2, XCircle, ShoppingCart, ArrowLeft, Package, Truck, Shield } from "lucide-react";
import ProduktGalerie from "@/components/ProduktGalerie";

// 🔧 Generuje statické parametry pro všechny produkty při buildu  
export async function generateStaticParams() {
  // 📦 Vrátíme ID všech produktů pro statický export
  return produkty.map(produkt => ({
    id: produkt.id
  }));
}

// 🛍️ Detail produktu - zobrazuje veškeré informace o produktu
export default function DetailProduktu({ params }: { params: { id: string } }) {
  const produkt = získatProdukt(params.id); // 🔎 Načtení produktu podle ID

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
            {/* 🖼️ Interaktivní galerie obrázků */}
            <ProduktGalerie obrázky={produkt.obrázky} názevProduktu={produkt.název} />

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
                      {/* Cena vlevo a tlačítko vpravo */}
                      <div className="flex justify-between items-center">
                        <div className="text-xl font-bold">
                          {souvisejícíProdukt.cena.toLocaleString('cs-CZ')} Kč
                        </div>
                        <Button variant="outline" size="sm" className="group-hover:bg-slate-800 group-hover:text-white transition-colors duration-300">
                          Detail
                        </Button>
                      </div>
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



