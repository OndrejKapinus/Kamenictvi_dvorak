import Image from "next/image";
import Link from "next/link";

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

      {/* Hlavní obsah */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-stone-50">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8 text-center">
              <div className="space-y-6">
                <p className="text-lg md:text-xl leading-relaxed text-slate-700 max-w-3xl mx-auto">
                  Vítejte na e-shopu Kamenictví Dvořák s.r.o., kde se snoubí dlouholetá rodinná tradice, poctivá ruční práce a moderní technologie.
                </p>
                
                <p className="text-lg md:text-xl leading-relaxed text-slate-700 max-w-3xl mx-auto">
                  Naše kamenictví má sídlo v malebné <strong>Telči</strong> a na trhu působíme již řadu let. Díky bohatým zkušenostem a lásce k řemeslu nabízíme zákazníkům prvotřídní kamenické služby a produkty, které vynikají kvalitou, precizností i estetickým zpracováním.
                </p>
              </div>
              
              <div className="space-y-6">
                <p className="text-lg md:text-xl leading-relaxed text-slate-700 max-w-3xl mx-auto">
                  Specializujeme se na výrobu a prodej širokého sortimentu kamenických výrobků – od klasických pomníků, hřbitovních doplňků a urnových schránek, přes kamenné obklady, pracovní a kuchyňské desky, až po grilovací kameny, dekorační prvky a originální dárky ze žuly a dalších přírodních materiálů.
                </p>
                
                <p className="text-lg md:text-xl leading-relaxed text-slate-700 max-w-3xl mx-auto">
                  Naše výrobky jsou vhodné jak pro exteriér, tak i interiér, a vyznačují se dlouhou životností i nadčasovým vzhledem.
                </p>
              </div>
              
              <div className="space-y-6">
                <p className="text-lg md:text-xl leading-relaxed text-slate-700 max-w-3xl mx-auto">
                  Velký důraz klademe na <strong>individuální přístup</strong> ke každému zákazníkovi. Ať už si vyberete z naší standardní nabídky, nebo máte zájem o zakázkovou výrobu dle vlastních představ, vždy se můžete spolehnout na naši vstřícnost, odborné poradenství a rychlé dodací lhůty.
                </p>
                
                <p className="text-lg md:text-xl leading-relaxed text-slate-700 max-w-3xl mx-auto">
                  Rádi vám pomůžeme s výběrem materiálu, navrhneme řešení na míru a připravíme grafický návrh, aby byl výsledek přesně podle vašich přání.
                </p>
              </div>
              
              <div className="space-y-6">
                <p className="text-lg md:text-xl leading-relaxed text-slate-700 max-w-3xl mx-auto">
                  Klademe důraz na <strong>kvalitu zpracování</strong> a <strong>poctivou ruční práci</strong>, která je zárukou špičkového výsledku. Každý výrobek prochází pečlivou kontrolou a je vyráběn s maximální pečlivostí, abychom naplnili vaše očekávání a přání.
                </p>
                
                <p className="text-lg md:text-xl leading-relaxed text-slate-700 max-w-3xl mx-auto">
                  Věříme, že v naší nabídce najdete přesně to, co hledáte. V případě jakýchkoliv dotazů či speciálních požadavků nás neváhejte kontaktovat prostřednictvím e-mailu, telefonu nebo kontaktního formuláře.
                </p>
                
                <p className="text-lg md:text-xl leading-relaxed text-slate-700 max-w-3xl mx-auto font-medium">
                  Těšíme se na vaši návštěvu a budoucí spolupráci!
                </p>
              </div>
              
              <div className="mt-16 pt-8 border-t border-stone-200">
                <p className="text-2xl md:text-3xl font-bold text-stone-800 mb-3">
                  Kamenictví Dvořák s.r.o.
                </p>
                <p className="text-xl md:text-2xl text-stone-600">
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
