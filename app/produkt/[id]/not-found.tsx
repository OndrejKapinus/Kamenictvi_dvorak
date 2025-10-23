import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

// ❌ Stránka 404 pro neexistující produkty
export default function ProduktNotFound() {
  return (
    <div className="container px-4 py-24 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">Produkt nenalezen</h2>
      <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
        Omlouváme se, ale produkt, který hledáte, nebyl nalezen nebo již není dostupný.
      </p>
      <Button size="lg" asChild>
        <Link href="/">
          <ArrowLeft className="mr-2 h-5 w-5" />
          Zpět na hlavní stránku
        </Link>
      </Button>
    </div>
  );
}



