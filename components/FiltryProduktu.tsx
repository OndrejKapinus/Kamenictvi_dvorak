"use client"; // 🔧 Komponenta s interaktivitou pro filtry

import { useState } from "react"; // 🎛️ Pro stav filtrů
import { Button } from "@/components/ui/button";
import { CheckCircle2, Filter } from "lucide-react";
import { Produkt } from "@/lib/data";

// 🎯 Props pro komponentu filtrů
interface FiltryProduktuProps {
  produkty: Produkt[]; // 📦 Všechny produkty kategorie
  onFiltrovaneProdukty: (filtrovane: Produkt[]) => void; // 🔄 Callback pro filtrované produkty
}

// 🎛️ Interaktivní komponenta pro filtry produktů
export default function FiltryProduktu({ produkty, onFiltrovaneProdukty }: FiltryProduktuProps) {
  // 🎯 Stavy pro filtry
  const [jenSkladem, nastavJenSkladem] = useState(false); // Filtr pouze produkty skladem
  const [řazeníPodleCeny, nastavŘazeníPodleCeny] = useState<'asc' | 'desc' | null>(null); // Řazení podle ceny

  // 📊 Statistiky
  const početNaSkladě = produkty.filter(p => p.naSkladě).length;

  // 🔄 Funkce pro aplikování filtrů
  const aplikovatFiltry = (novyJenSkladem: boolean, noveRazeni: 'asc' | 'desc' | null) => {
    let filtrovanéProdukty = [...produkty];
    
    // 📦 Filtr skladem
    if (novyJenSkladem) {
      filtrovanéProdukty = filtrovanéProdukty.filter(p => p.naSkladě);
    }
    
    // 💰 Řazení podle ceny
    if (noveRazeni === 'asc') {
      filtrovanéProdukty.sort((a, b) => a.cena - b.cena);
    } else if (noveRazeni === 'desc') {
      filtrovanéProdukty.sort((a, b) => b.cena - a.cena);
    }

    onFiltrovaneProdukty(filtrovanéProdukty);
  };

  // 🎛️ Handler pro filtr skladem
  const handleJenSkladem = () => {
    const novyStav = !jenSkladem;
    nastavJenSkladem(novyStav);
    aplikovatFiltry(novyStav, řazeníPodleCeny);
  };

  // 💰 Handler pro řazení podle ceny
  const handleRazeniCeny = (smer: 'asc' | 'desc') => {
    const noveRazeni = řazeníPodleCeny === smer ? null : smer;
    nastavŘazeníPodleCeny(noveRazeni);
    aplikovatFiltry(jenSkladem, noveRazeni);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
      <div className="flex items-center gap-3">
        <Filter className="h-5 w-5 text-slate-600" />
        <h3 className="text-lg font-semibold text-slate-900">
          Filtry a řazení
        </h3>
      </div>
      
      <div className="flex flex-wrap gap-4 items-center">
        {/* 📦 Filtr skladem */}
        <Button
          variant={jenSkladem ? "default" : "outline"}
          size="sm"
          onClick={handleJenSkladem}
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
            onClick={() => handleRazeniCeny('asc')}
          >
            Cena ↑
          </Button>
          <Button
            variant={řazeníPodleCeny === 'desc' ? "default" : "outline"}
            size="sm"
            onClick={() => handleRazeniCeny('desc')}
          >
            Cena ↓
          </Button>
        </div>
      </div>
    </div>
  );
}
