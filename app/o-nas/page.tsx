import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

// Stránka O nás s pěkným designem a fotografií
export default function ONásPage() {
  return (
    <div className="flex flex-col">
      {/* Breadcrumbs navigace */}
      <div className="border-b">
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
        className="relative bg-gradient-to-br from-stone-50 via-slate-100 to-stone-100 py-20 md:py-32 overflow-hidden"
        style={{
          backgroundImage: `url('/eder-pozo-perez-HEIZkJYUPeo-unsplash.jpg')`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center center', 
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Overlay gradient pro lepší čitelnost textu */}
        <div className="absolute inset-0 bg-gradient-to-br from-stone-50/85 via-slate-100/90 to-stone-100/85"></div>
        
        <div className="container px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Link href="/" className="inline-flex items-center text-sm text-stone-600 hover:text-stone-800 mb-8 transition-colors bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Zpět na hlavní stránku
            </Link>
            
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-heading font-bold tracking-tight text-stone-900 drop-shadow-sm">
                O nás
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Hlavní obsah */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-stone-50">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-xl max-w-none space-y-8">
              <p className="text-xl leading-relaxed text-slate-700">
                Vítejte na e-shopu Kamenictví Dvořák s.r.o., kde se snoubí dlouholetá rodinná tradice, poctivá ruční práce a moderní technologie. Naše kamenictví má sídlo v malebné Telči a na trhu působíme již řadu let. Díky bohatým zkušenostem a lásce k řemeslu nabízíme zákazníkům prvotřídní kamenické služby a produkty, které vynikají kvalitou, precizností i estetickým zpracováním.
              </p>
              
              <p className="text-xl leading-relaxed text-slate-700">
                Specializujeme se na výrobu a prodej širokého sortimentu kamenických výrobků – od klasických pomníků, hřbitovních doplňků a urnových schránek, přes kamenné obklady, pracovní a kuchyňské desky, až po grilovací kameny, dekorační prvky a originální dárky ze žuly a dalších přírodních materiálů. Naše výrobky jsou vhodné jak pro exteriér, tak i interiér, a vyznačují se dlouhou životností i nadčasovým vzhledem.
              </p>
              
              <p className="text-xl leading-relaxed text-slate-700">
                Velký důraz klademe na individuální přístup ke každému zákazníkovi. Ať už si vyberete z naší standardní nabídky, nebo máte zájem o zakázkovou výrobu dle vlastních představ, vždy se můžete spolehnout na naši vstřícnost, odborné poradenství a rychlé dodací lhůty. Rádi vám pomůžeme s výběrem materiálu, navrhneme řešení na míru a připravíme grafický návrh, aby byl výsledek přesně podle vašich přání.
              </p>
              
              <p className="text-xl leading-relaxed text-slate-700">
                Klademe důraz na kvalitu zpracování a poctivou ruční práci, která je zárukou špičkového výsledku. Každý výrobek prochází pečlivou kontrolou a je vyráběn s maximální pečlivostí, abychom naplnili vaše očekávání a přání.
              </p>
              
              <p className="text-xl leading-relaxed text-slate-700">
                Věříme, že v naší nabídce najdete přesně to, co hledáte. V případě jakýchkoliv dotazů či speciálních požadavků nás neváhejte kontaktovat prostřednictvím e-mailu, telefonu nebo kontaktního formuláře. Těšíme se na vaši návštěvu a budoucí spolupráci!
              </p>
              
              <div className="text-center mt-12 pt-8 border-t border-stone-200">
                <p className="text-2xl font-bold text-stone-800">
                  Kamenictví Dvořák s.r.o.
                </p>
                <p className="text-xl text-stone-600 mt-2">
                  tradiční řemeslo, moderní přístup, individuální řešení
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
