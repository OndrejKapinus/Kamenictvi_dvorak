"use client"; // 🖼️ Interaktivní galerie obrázků

import Image from "next/image";
import { useState } from "react"; // 🎛️ Pro stav aktivního obrázku
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";

// 📸 Props pro galerii
interface GalerieProduktuProps {
  obrázky: string[]; // 🖼️ Pole URL obrázků
  názevProduktu: string; // 📝 Název pro alt text
}

// 🎨 Komponenta galerie s interaktivní navigací
export function GalerieProduktu({ obrázky, názevProduktu }: GalerieProduktuProps) {
  const [aktivníObrázek, nastavAktivníObrázek] = useState(0); // 📍 Index aktuálně zobrazeného obrázku
  const [zobrazitModal, nastavZobrazitModal] = useState(false); // 🔍 Stav pro modal s velkým obrázkem

  // ⬅️ Funkce pro přechod na předchozí obrázek
  const předchozíObrázek = () => {
    nastavAktivníObrázek((prev) => 
      prev === 0 ? obrázky.length - 1 : prev - 1
    );
  };

  // ➡️ Funkce pro přechod na následující obrázek
  const následujícíObrázek = () => {
    nastavAktivníObrázek((prev) => 
      prev === obrázky.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="space-y-4">
      {/* 🖼️ Hlavní obrázek s navigačními šipkami a modal funkcí */}
      <div className="relative group">
        <Dialog open={zobrazitModal} onOpenChange={nastavZobrazitModal}>
          <DialogTrigger asChild>
            <div className="relative aspect-square overflow-hidden rounded-xl border-2 border-slate-200 bg-white shadow-lg cursor-pointer hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
              <Image
                src={obrázky[aktivníObrázek]}
                alt={`${názevProduktu} - obrázek ${aktivníObrázek + 1}`}
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
              {obrázky.length > 1 && (
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
              {obrázky.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {obrázky.map((_, index) => (
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
                  src={obrázky[aktivníObrázek]}
                  alt={`${názevProduktu} - velký obrázek ${aktivníObrázek + 1}`}
                  fill
                  className="object-contain bg-slate-50"
                />
                
                {/* 🎮 Navigace v modalu */}
                {obrázky.length > 1 && (
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
                <h3 className="text-xl font-bold text-slate-900 mb-2">{názevProduktu}</h3>
                <p className="text-slate-600">
                  Obrázek {aktivníObrázek + 1} z {obrázky.length}
                </p>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* 🎯 Interaktivní miniatury */}
      {obrázky.length > 1 && (
        <div className="grid grid-cols-4 gap-3">
          {obrázky.map((obrázek, index) => (
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
                alt={`${názevProduktu} - miniatura ${index + 1}`}
                fill
                className="object-cover"
              />
              
              {/* 🔥 Overlay pro aktivní miniaturu */}
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
  );
}


