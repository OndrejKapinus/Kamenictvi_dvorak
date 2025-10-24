import Image from "next/image";
import Link from "next/link";
import { 
  Building2, 
  MapPin, 
  Wrench, 
  Target, 
  Handshake, 
  Lightbulb, 
  Zap, 
  Star, 
  Search, 
  Gem, 
  Trophy 
} from "lucide-react";

// Stránka O nás s pěkným designem a fotografií
export default function ONásPage() {
  return (
    <div className="flex flex-col">
      {/* Breadcrumbs navigace */}
      <div className="border-b bg-white">
        <div className="container px-4 py-4">
          <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">
              Domů
            </Link>
            <span>/</span>
            <span className="text-foreground">O nás</span>
          </nav>
        </div>
      </div>

      {/* Hero sekce s fotografií */}
      <section 
        className="relative py-28 md:py-40 overflow-hidden"
        style={{
          backgroundImage: `url('/eder-pozo-perez-HEIZkJYUPeo-unsplash.jpg')`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center top', 
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Overlay gradient pro lepší čitelnost textu */}
        <div className="absolute inset-0 bg-gradient-to-br from-stone-50/85 via-slate-100/90 to-stone-100/85"></div>
        
        <div className="container px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-heading font-bold tracking-tight text-stone-900 drop-shadow-sm">
                O nás
              </h1>
              <p className="text-xl md:text-2xl text-stone-700 font-medium">
                Tradiční řemeslo, moderní přístup, individuální řešení
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hlavní obsah s lepším formátováním textu */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-stone-50">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            {/* Úvodní sekce */}
            <div className="text-center mb-16">
              <p className="text-xl md:text-2xl leading-relaxed text-slate-700 font-medium mb-8">
                Vítejte na e-shopu Kamenictví Dvořák s.r.o., kde se snoubí <br className="hidden md:block"/>
                <span className="text-stone-800 font-semibold">dlouholetá rodinná tradice</span>, poctivá ruční práce a moderní technologie. <Building2 className="inline h-6 w-6 text-stone-600" />
              </p>
            </div>

            {/* Naše historie */}
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-stone-800 text-center mb-8 flex items-center justify-center gap-3">
                <MapPin className="h-7 w-7 text-stone-600" /> 
                Naše historie a sídlo
              </h2>
              <div className="bg-white rounded-lg p-8 shadow-lg border border-stone-100">
                <p className="text-lg leading-relaxed text-slate-700 text-center max-w-3xl mx-auto">
                  Naše kamenictví má sídlo v malebné <strong className="text-stone-800">Telči</strong> a na trhu působíme již řadu let. 
                  Díky bohatým zkušenostem a lásce k řemeslu nabízíme zákazníkům prvotřídní kamenické služby 
                  a produkty, které vynikají <span className="text-stone-800 font-semibold">kvalitou, precizností i estetickým zpracováním</span>.
                </p>
              </div>
            </div>

            {/* Náš sortiment */}
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-stone-800 text-center mb-8 flex items-center justify-center gap-3">
                <Wrench className="h-7 w-7 text-stone-600" /> 
                Náš sortiment
              </h2>
              <div className="bg-white rounded-lg p-8 shadow-lg border border-stone-100">
                <p className="text-lg leading-relaxed text-slate-700 text-center mb-6">
                  Specializujeme se na výrobu a prodej širokého sortimentu kamenických výrobků:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                  <div className="space-y-3">
                    <h3 className="font-semibold text-stone-800 text-lg">Hřbitovní služby</h3>
                    <ul className="text-slate-700 space-y-2">
                      <li>• Klasické pomníky</li>
                      <li>• Hřbitovní doplňky</li>
                      <li>• Urnové schránky</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="font-semibold text-stone-800 text-lg">Interiér & exteriér</h3>
                    <ul className="text-slate-700 space-y-2">
                      <li>• Kamenné obklady</li>
                      <li>• Pracovní a kuchyňské desky</li>
                      <li>• Grilovací kameny</li>
                      <li>• Dekorační prvky a dárky</li>
                    </ul>
                  </div>
                </div>
                
                <p className="text-lg leading-relaxed text-slate-700 text-center mt-6">
                  Naše výrobky jsou vhodné jak pro exteriér, tak i interiér, 
                  a vyznačují se <span className="text-stone-800 font-semibold">dlouhou životností i nadčasovým vzhledem</span>.
                </p>
              </div>
            </div>

            {/* Individuální přístup */}
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-stone-800 text-center mb-8 flex items-center justify-center gap-3">
                <Target className="h-7 w-7 text-stone-600" /> 
                Individuální přístup
              </h2>
              <div className="bg-white rounded-lg p-8 shadow-lg border border-stone-100">
                <p className="text-lg leading-relaxed text-slate-700 text-center mb-6">
                  Velký důraz klademe na <strong className="text-stone-800">individuální přístup</strong> ke každému zákazníkovi.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto text-center">
                  <div className="space-y-3">
                    <div className="flex justify-center"><Handshake className="h-12 w-12 text-stone-600" /></div>
                    <h3 className="font-semibold text-stone-800">Vstřícnost</h3>
                    <p className="text-slate-700">Vždy ochotní pomoci</p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-center"><Lightbulb className="h-12 w-12 text-stone-600" /></div>
                    <h3 className="font-semibold text-stone-800">Odborné poradenství</h3>
                    <p className="text-slate-700">Zkušenosti z praxe</p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-center"><Zap className="h-12 w-12 text-stone-600" /></div>
                    <h3 className="font-semibold text-stone-800">Rychlé dodání</h3>
                    <p className="text-slate-700">Krátké dodací lhůty</p>
                  </div>
                </div>
                
                <p className="text-lg leading-relaxed text-slate-700 text-center mt-8">
                  Rádi vám pomůžeme s výběrem materiálu, navrhneme řešení na míru 
                  a připravíme grafický návrh, aby byl výsledek přesně podle vašich přání.
                </p>
              </div>
            </div>

            {/* Kvalita a řemeslo */}
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-stone-800 text-center mb-8 flex items-center justify-center gap-3">
                <Star className="h-7 w-7 text-stone-600" /> 
                Kvalita a řemeslo
              </h2>
              <div className="bg-white rounded-lg p-8 shadow-lg border border-stone-100">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-xl font-semibold text-stone-800 mb-4">Naše záruka kvality:</h3>
                    <ul className="space-y-3 text-slate-700">
                      <li className="flex items-start space-x-3">
                        <Wrench className="h-5 w-5 text-stone-600 mt-1" />
                        <span><strong>Poctivá ruční práce</strong> - tradiční řemeslné postupy</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Search className="h-5 w-5 text-stone-600 mt-1" />
                        <span><strong>Pečlivá kontrola</strong> - každý výrobek je kontrolovaný</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Gem className="h-5 w-5 text-stone-600 mt-1" />
                        <span><strong>Maximální pečlivost</strong> - detail dělá rozdíl</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="text-center">
                    <div className="flex justify-center mb-4"><Trophy className="h-16 w-16 text-stone-600" /></div>
                    <p className="text-lg text-slate-700 font-medium">
                      Špičkový výsledek podle vašich očekávání a přání
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Závěrečná výzva */}
            <div className="text-center">
              <div className="bg-gradient-to-br from-stone-100 to-slate-100 rounded-lg p-8 shadow-lg border border-stone-200">
                <p className="text-lg leading-relaxed text-slate-700 mb-6">
                  Věříme, že v naší nabídce najdete přesně to, co hledáte. V případě jakýchkoliv dotazů 
                  či speciálních požadavků nás neváhejte kontaktovat prostřednictvím e-mailu, telefonu nebo kontaktního formuláře.
                </p>
                
                <p className="text-xl font-semibold text-stone-800 mb-2 flex items-center justify-center gap-2">
                  <Handshake className="h-6 w-6 text-stone-600" /> 
                  Těšíme se na vaši návštěvu a budoucí spolupráci!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
