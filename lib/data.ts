// 📊 Datová struktura pro produkty a kategorie

export interface Produkt {
  id: string;
  název: string;
  cena: number;
  popis: string;
  kategorie: string;
  obrázky: string[];
  naSkladě: boolean;
}

export interface Kategorie {
  id: string;
  název: string;
  popis: string;
  obrázek: string;
  ikona: string;
  parent?: string; // 👆 ID rodičovské kategorie
  children?: Kategorie[]; // 👶 Podkategorie 
}

// 🏷️ Kategorie produktů s hierarchickou strukturou
export const kategorie: Kategorie[] = [
  {
    id: "atypy",
    název: "Atypické výrobky",
    popis: "Výrobky na míru podle vašich požadavků",
    obrázek: "/sompop-s-UeQ0yNm10C4-unsplash.jpg",
    ikona: "🎨"
  },
  {
    id: "barevne-kamenne-drti",
    název: "Barevné kamenné drti",
    popis: "Dekorativní drti pro zahrady a cesty",
    obrázek: "/engin-akyurt-uTwf8uvEAPU-unsplash.jpg",
    ikona: "🌈"
  },
  {
    id: "doplnky-do-kuchyne",
    název: "Kamenné doplňky do kuchyně",
    popis: "Praktické kamenné nádobí a náčiní",
    obrázek: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&h=600&fit=crop",
    ikona: "🍽️",
    children: [
      {
        id: "palicky",
        název: "Kamenné paličky na maso",
        popis: "Ruční paličky pro tenderování masa",
        obrázek: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop",
        ikona: "🔨",
        parent: "doplnky-do-kuchyne"
      },
      {
        id: "valecky-na-testo",
        název: "Kamenné válečky na těsto",
        popis: "Tradiční válečky z přírodního kamene",
        obrázek: "https://images.unsplash.com/photo-1574085733277-851d9d856a4a?w=800&h=600&fit=crop",
        ikona: "🍞",
        parent: "doplnky-do-kuchyne"
      },
      {
        id: "kamenne-hmozdire",
        název: "Kamenné hmoždíře",
        popis: "Hmoždíře pro mletí koření a bylinek",
        obrázek: "https://images.unsplash.com/photo-1556909114-4e90b3c6c8ae?w=800&h=600&fit=crop",
        ikona: "🌿",
        parent: "doplnky-do-kuchyne"
      },
      {
        id: "desky-pod-horke-hrnce",
        název: "Kamenné desky pod horké hrnce",
        popis: "Ochranné desky proti teplu",
        obrázek: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&h=600&fit=crop",
        ikona: "🔥",
        parent: "doplnky-do-kuchyne"
      }
    ]
  },
  {
    id: "darkove-predmety-z-prirodniho-kamene",
    název: "Dárkové předměty z přírodního kamene",
    popis: "Originální dárky z kvalitního kamene",
    obrázek: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=800&h=600&fit=crop",
    ikona: "🎁"
  },
  {
    id: "grilovaci-pecici-kameny",
    název: "Grilovací, pečící kameny",
    popis: "Kameny pro dokonalé grilování a pečení",
    obrázek: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=600&fit=crop",
    ikona: "🔥",
    children: [
      {
        id: "grilovaci-pecici-kameny-hladke",
        název: "Grilovací - pečící kameny hladké",
        popis: "Hladké kameny pro univerzální použití",
        obrázek: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=600&fit=crop",
        ikona: "⭐",
        parent: "grilovaci-pecici-kameny"
      },
      {
        id: "grilovaci-pecici-kameny-s-drazkou",
        název: "Grilovací, pečící kameny s drážkou",
        popis: "S drážkami pro lepší odvod tuků",
        obrázek: "https://images.unsplash.com/photo-1544979590-37e9b47eb705?w=800&h=600&fit=crop",
        ikona: "📏",
        parent: "grilovaci-pecici-kameny"
      },
      {
        id: "grilovaci-pecici-kameny-prohloubene",
        název: "Grilovací - pečící kameny prohloubené",
        popis: "Prohloubené pro marinády a šťávy",
        obrázek: "https://images.unsplash.com/photo-1496412705862-e0fed398c571?w=800&h=600&fit=crop",
        ikona: "🍖",
        parent: "grilovaci-pecici-kameny"
      },
      {
        id: "ramecky-stojanky-pro-grilovaci-kameny",
        název: "Rámečky/stojánky pro grilovací kameny",
        popis: "Praktické rámečky a stojánky",
        obrázek: "https://images.unsplash.com/photo-1597969964086-9f667a32ec52?w=800&h=600&fit=crop",
        ikona: "📐",
        parent: "grilovaci-pecici-kameny"
      },
      {
        id: "grilovaci-pecici-kameny-s-rameckem",
        název: "Grilovací, pečící kameny s rámečkem",
        popis: "Kompletní sada s rámečkem",
        obrázek: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop",
        ikona: "📦",
        parent: "grilovaci-pecici-kameny"
      }
    ]
  },
  {
    id: "lavove-grilovaci-kameny",
    název: "Lávové grilovací kameny",
    popis: "Speciální lávové kameny pro grilování",
    obrázek: "https://images.unsplash.com/photo-1602522287610-b9f231bd0e4b?w=800&h=600&fit=crop",
    ikona: "🌋"
  },
  {
    id: "chladici-kostky-a-puky",
    název: "Chladící kostky a puky",
    popis: "Chladící prvky pro nápoje",
    obrázek: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=600&fit=crop",
    ikona: "🧊"
  },
  {
    id: "hrbitovni-doplnky",
    název: "Hřbitovní doplňky",
    popis: "Důstojné doplňky pro hřbitovní péči",
    obrázek: "https://images.unsplash.com/photo-1603048297172-c92544798d5a?w=800&h=600&fit=crop",
    ikona: "🕊️",
    children: [
      {
        id: "hrbitovni-vazy",
        název: "Hřbitovní vázy",
        popis: "Elegantní vázy pro květiny",
    obrázek: "https://images.unsplash.com/photo-1603048297172-c92544798d5a?w=800&h=600&fit=crop",
        ikona: "🏺",
        parent: "hrbitovni-doplnky"
      },
      {
        id: "nahrobni-lampy",
        název: "Náhrobní lampy",
        popis: "Věčné světlo na památku",
        obrázek: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
        ikona: "🕯️",
        parent: "hrbitovni-doplnky"
      },
      {
        id: "hrbitovni-urny",
        název: "Hřbitovní urny",
        popis: "Důstojné urny z přírodního kamene",
    obrázek: "https://images.unsplash.com/photo-1594398901394-4e34939a4fd0?w=800&h=600&fit=crop",
        ikona: "⚱️",
        parent: "hrbitovni-doplnky"
      },
      {
        id: "skrinky-na-urny",
        název: "Skříňky na urny",
        popis: "Ochranné schránky pro urny",
        obrázek: "https://images.unsplash.com/photo-1567197573605-80d9a9c1793f?w=800&h=600&fit=crop",
        ikona: "📦",
        parent: "hrbitovni-doplnky"
      },
      {
        id: "nahrobni-fotoskrinky",
        název: "Náhrobní fotoskříňky",
        popis: "Ochrana pro památkové fotografie",
        obrázek: "https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&h=600&fit=crop",
        ikona: "📸",
        parent: "hrbitovni-doplnky"
      },
      {
        id: "hrbitovni-lucerny-a-vazy",
        název: "Hřbitovní lucerny a vázy",
        popis: "Kombinace světla a květin",
        obrázek: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=600&fit=crop",
        ikona: "🏮",
        parent: "hrbitovni-doplnky"
      },
      {
        id: "pomnikove-a-nahrobni-motivy",
        název: "Pomníkové a náhrobní motivy",
        popis: "Dekorativní prvky a ornament",
        obrázek: "https://images.unsplash.com/photo-1609743522653-52354461eb27?w=800&h=600&fit=crop",
        ikona: "🎭",
        parent: "hrbitovni-doplnky"
      },
      {
        id: "nahrobni-misy",
        název: "Náhrobní mísy",
        popis: "Praktické mísy různých velikostí",
        obrázek: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=800&h=600&fit=crop",
        ikona: "🥣",
        parent: "hrbitovni-doplnky"
      },
      {
        id: "truhliky-na-hrob",
        název: "Truhlíky na hrob",
        popis: "Kamenné truhlíky pro rostliny",
        obrázek: "https://images.unsplash.com/photo-1534330980702-011cffd4d462?w=800&h=600&fit=crop",
        ikona: "🌱",
        parent: "hrbitovni-doplnky"
      }
    ]
  },
  {
    id: "vyprodej",
    název: "Výprodej",
    popis: "Výhodné nabídky a akční zboží",
    obrázek: "/eder-pozo-perez-HEIZkJYUPeo-unsplash.jpg",
    ikona: "🏷️"
  },
  {
    id: "stipane-kamenne-obklady",
    název: "Štípané kamenné obklady",
    popis: "Přírodní obklady s rustikálním vzhledem",
    obrázek: "https://images.unsplash.com/photo-1615873968403-89e068629265?w=800&h=600&fit=crop",
    ikona: "🧱"
  },
  {
    id: "zvireci-nahrobky-a-pomnicky",
    název: "Zvířecí náhrobky a pomníčky",
    popis: "Pomníčky na památku domácích mazlíčků",
    obrázek: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&h=600&fit=crop",
    ikona: "🐾",
    children: [
      {
        id: "zvireci-nahrobky-s-obrazkem",
        název: "Zvířecí náhrobky s obrázkem",
        popis: "Personalizované s fotografií",
        obrázek: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&h=600&fit=crop",
        ikona: "🖼️",
        parent: "zvireci-nahrobky-a-pomnicky"
      },
      {
        id: "zvireci-nahrobky-bez-obrazku",
        název: "Zvířecí náhrobky bez obrázku",
        popis: "Klasické s textem a motivy",
        obrázek: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=800&h=600&fit=crop",
        ikona: "💭",
        parent: "zvireci-nahrobky-a-pomnicky"
      }
    ]
  },
  {
    id: "kamenne-truhliky",
    název: "Kamenné truhlíky",
    popis: "Dekorativní truhlíky pro zahradu",
    obrázek: "/considerate-agency-ILnSWgeGxO0-unsplash.jpg",
    ikona: "🌿"
  },
  {
    id: "udrzba-a-cisteni-kamene",
    název: "Údržba a čištění kamene",
    popis: "Produkty pro péči o kamenné výrobky",
    obrázek: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=800&h=600&fit=crop",
    ikona: "🧽"
  }
];

// 🛍️ Ukázkové produkty s bohatou galerií fotek - aktualizované pro nové kategorie
export const produkty: Produkt[] = [
  // 🎨 Atypické výrobky
  {
    id: "atypicka-zulova-deska-na-zakazku",
    název: "Atypická žulová deska na zakázku",
    cena: 15900,
    popis: "Atypická deska z žuly dle vašich rozměrů a požadavků. Možnost různých tvarů, výřezů a povrchových úprav. Ideální pro netradičí použití.",
    kategorie: "atypy",
    obrázky: [
      "/sompop-s-UeQ0yNm10C4-unsplash.jpg",
      "https://images.unsplash.com/photo-1609743522653-52354461eb27?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&h=800&fit=crop"
    ],
    naSkladě: false
  },
  // 🌈 Barevné kamenné drti  
  {
    id: "barevna-granulova-drt-cervena",
    název: "Barevná graniulová drť - červená",
    cena: 890,
    popis: "Dekorativní barevná drť z granitového kamene v červené barvě. Ideální pro zahradní cesty, okolo staveb či jako dekorativní prvek. Balení 25 kg.",
    kategorie: "barevne-kamenne-drti",
    obrázky: [
      "/engin-akyurt-uTwf8uvEAPU-unsplash.jpg",
      "https://images.unsplash.com/photo-1615873968403-89e068629265?w=800&h=800&fit=crop"
    ],
    naSkladě: true
  },
  // 🔨 Kamenné paličky na maso
  {
    id: "zulova-palicka-na-maso-premium",
    název: "Žulová palička na maso Premium",
    cena: 1290,
    popis: "Ručně vyráběná palička na maso z tvrdé žuly. Ergonomická rukojeť, hygienický povrch. Rozměry: 25x8x5 cm. Ideální pro tenderování všech druhů masa.",
    kategorie: "palicky",
    obrázky: [
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&h=800&fit=crop"
    ],
    naSkladě: true
  },
  // 🍞 Kamenné válečky na těsto
  {
    id: "mramorovy-valecek-na-testo",
    název: "Mramorový váleček na těsto",
    cena: 1890,
    popis: "Tradiční váleček na těsto z bílého mramoru. Udržuje ideální teplotu pro kynuté těsto. Rozměry: 40x8 cm. Bezpečný a hygienický.",
    kategorie: "valecky-na-testo", 
    obrázky: [
      "https://images.unsplash.com/photo-1574085733277-851d9d856a4a?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&h=800&fit=crop"
    ],
    naSkladě: true
  },
  // 🌿 Kamenné hmoždíře
  {
    id: "zulovy-hmozdyr-s-palici",
    název: "Žulový hmoždíř s palicí",
    cena: 2490,
    popis: "Masivní hmoždíř z černé žuly včetně palic. Průměr 15 cm, výška 8 cm. Ideální pro mletí koření, bylinek a ořechů. Velmi odolný a hygienický.",
    kategorie: "kamenne-hmozdire",
    obrázky: [
      "https://images.unsplash.com/photo-1556909114-4e90b3c6c8ae?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&h=800&fit=crop"
    ],
    naSkladě: true
  },
  // 🔥 Grilovací kameny hladké
  {
    id: "grilovaci-kamen-hladky-zula",
    název: "Grilovací kámen hladký - žula",
    cena: 3200,
    popis: "Hladký grilovací kámen z žuly. Rozměry: 40x30x2 cm. Rovnoměrně distribuuje teplo, snadné čištění. Ideální pro grilování masa, ryb i zeleniny.",
    kategorie: "grilovaci-pecici-kameny-hladke",
    obrázky: [
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1544979590-37e9b47eb705?w=800&h=600&fit=crop"
    ],
    naSkladě: true
  },
  // 🏺 Hřbitovní vázy
  {
    id: "mramorova-vaza-na-hrob-classic",
    název: "Mramorová váza na hrob - Classic",
    cena: 2890,
    popis: "Nádherná váza z bílého carrarského mramoru. Ideální pro umístění čerstvých nebo umělých květin na hrobě. Rozměry: 25x15x15 cm. Odolná konstrukce zajišťuje dlouhou životnost.",
    kategorie: "hrbitovni-vazy",
    obrázky: [
      "https://images.unsplash.com/photo-1603048297172-c92544798d5a?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=800&fit=crop"
    ],
    naSkladě: true
  },
  // ⚱️ Hřbitovní urny
  {
    id: "zulova-urna-pro-popel",
    název: "Žulová urna pro popel",
    cena: 12500,
    popis: "Důstojná urna z leštěné žuly. Rozměry: 30x30x30 cm. Vhodná pro standardní urny. Možnost personalizace textem nebo symbolem. Vodotěsné uzavření.",
    kategorie: "hrbitovni-urny",
    obrázky: [
      "https://images.unsplash.com/photo-1594398901394-4e34939a4fd0?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1567197573605-80d9a9c1793f?w=800&h=600&fit=crop"
    ],
    naSkladě: true
  },
  // 🧱 Štípané kamenné obklady
  {
    id: "stipany-obklad-piskovcovy",
    název: "Štípaný obklad - pískovcový",
    cena: 890,
    popis: "Přírodní štípaný obklad z pískovce s rustikálním vzhledem. Rozměry: 30x10x2 cm. Ideální pro interiér i exteriér. Mrazuvzdorný. Cena za kus.",
    kategorie: "stipane-kamenne-obklady",
    obrázky: [
      "https://images.unsplash.com/photo-1615873968403-89e068629265?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=800&fit=crop"
    ],
    naSkladě: true
  },
  // 🐾 Zvířecí náhrobky s obrázkem
  {
    id: "zulovy-nahrobek-pro-psa-s-fotkou",
    název: "Žulový náhrobek pro psa s fotkou",
    cena: 4500,
    popis: "Personalizovaný náhrobek pro zvířátka s možností aplikace fotografie. Rozměry: 30x20x5 cm. Gravírování jména a let. Odolný proti povětrnosti.",
    kategorie: "zvireci-nahrobky-s-obrazkem",
    obrázky: [
      "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=800&h=600&fit=crop"
    ],
    naSkladě: true
  },
  // 🌿 Kamenné truhlíky
  {
    id: "zulovy-zahradni-truhlik",
    název: "Žulový zahradní truhlík",
    cena: 8900,
    popis: "Elegantní truhlík z žuly pro venkovní i vnitřní použití. Rozměry: 80x30x25 cm. Drenážní otvory, odolný proti mrazu. Ideální pro květiny a byliny.",
    kategorie: "kamenne-truhliky", 
    obrázky: [
      "/considerate-agency-ILnSWgeGxO0-unsplash.jpg",
      "https://images.unsplash.com/photo-1534330980702-011cffd4d462?w=800&h=800&fit=crop"
    ],
    naSkladě: false
  },
  // 🎁 Dárkové předměty 
  {
    id: "zulove-podlozky-pod-sklenice-sada",
    název: "Žulové podložky pod sklenice - sada",
    cena: 650,
    popis: "Elegantní sada 6 podložek pod nápoje z přírodní žuly. Rozměry každé: 10x10x0.5 cm. Praktický a stylový dárek. Chrání nábytek před vlhkostí a teplem.",
    kategorie: "darkove-predmety-z-prirodniho-kamene",
    obrázky: [
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&h=800&fit=crop"
    ],
    naSkladě: true
  }
];

// 🔍 Funkce pro získání produktu podle ID
export function získatProdukt(id: string): Produkt | undefined {
  return produkty.find(p => p.id === id);
}

// 🏷️ Funkce pro získání kategorie podle ID
export function získatKategorii(id: string): Kategorie | undefined {
  // 📋 Hledáme v hlavních kategoriích i podkategoriích
  for (const kat of kategorie) {
    if (kat.id === id) {
      return kat;
    }
    if (kat.children) {
      for (const podkategorie of kat.children) {
        if (podkategorie.id === id) {
          return podkategorie;
        }
      }
    }
  }
  return undefined;
}

// 📦 Funkce pro získání produktů podle kategorie (včetně podkategorií)
export function získatProduktyPodleKategorie(kategorieId: string): Produkt[] {
  const nalezenaKategorie = získatKategorii(kategorieId);
  if (!nalezenaKategorie) return [];
  
  // 🔍 Pokud má kategorie podkategorie, vrátíme produkty ze všech podkategorií
  if (nalezenaKategorie.children && nalezenaKategorie.children.length > 0) {
    const produktyVšechPodkategorií: Produkt[] = [];
    nalezenaKategorie.children.forEach(podkategorie => {
      produktyVšechPodkategorií.push(...produkty.filter(p => p.kategorie === podkategorie.id));
    });
    return produktyVšechPodkategorií;
  }
  
  // 📱 Jinak vrátíme produkty pouze této kategorie
  return produkty.filter(p => p.kategorie === kategorieId);
}

// 🔗 Funkce pro získání rodičovské kategorie
export function získatRodičovskouKategorii(kategorieId: string): Kategorie | undefined {
  const nalezenaKategorie = získatKategorii(kategorieId);
  if (!nalezenaKategorie?.parent) return undefined;
  return získatKategorii(nalezenaKategorie.parent);
}

// ✅ Funkce pro filtrování produktů skladem
export function získatProduktyNaSkladě(): Produkt[] {
  return produkty.filter(p => p.naSkladě);
}

// 🏠 Funkce pro získání pouze hlavních kategorií (bez rodiče)
export function získatHlavníKategorie(): Kategorie[] {
  return kategorie.filter(k => !k.parent);
}



