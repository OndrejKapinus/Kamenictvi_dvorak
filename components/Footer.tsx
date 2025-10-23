import { Mail, Phone, MapPin, Globe, ExternalLink, Clock, Users } from "lucide-react";
import Link from "next/link";

// Patička stránky s kompletními kontakty a informacemi 📋
export default function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container px-4 py-8 md:py-12">
        {/* Hlavní nadpis firmy - bez ikony jako hlavní název 🏢 */}
        <div className="text-center mb-8">
          <h3 className="text-xl font-bold">Kamenictví Dvořák s.r.o.</h3>
        </div>

        {/* Tři hlavní sekce v samostatných boxech 📦 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          
          {/* Adresa - místo kde se nacházíme 📍 */}
          <div className="space-y-4 bg-muted/30 p-4 rounded-lg">
            <h4 className="font-semibold flex items-center justify-center gap-2">
              <MapPin className="h-4 w-4" />
              Adresa
            </h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Myslibořská 460, 588 56 Telč</p>
              <p className="text-xs"><strong>GPS:</strong> 49°11'15.103"N, 15°28'11.077"E</p>
            </div>
            
            {/* Úřední informace - registrace firmy 📋 */}
            <div className="text-xs text-muted-foreground space-y-1 pt-2 border-t border-muted">
              <p><strong>IČ:</strong> 26949598</p>
              <p><strong>DIČ:</strong> CZ26949598</p>
              <p><strong>Evidující úřad:</strong> 370703 - Městský úřad Telč</p>
            </div>
          </div>

          {/* Kontaktní informace - jak nás zastihnout 📞 */}
          <div className="space-y-4 bg-muted/30 p-4 rounded-lg">
            <h4 className="font-semibold flex items-center justify-center gap-2">
              <Users className="h-4 w-4" />
              Kontaktní informace
            </h4>
            
            <div className="space-y-3 text-sm">
              {/* Telefony - pevná linka a mobil 📱 */}
              <div className="space-y-2">
                <div className="flex items-center justify-center space-x-2">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">+420 567 223 840</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">+420 725 969 561</span>
                </div>
              </div>

              {/* Email - elektronická pošta 📧 */}
              <div className="flex items-center justify-center space-x-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">dvorak@kamenictvi-dvorak.cz</span>
              </div>

              {/* E-shop - online obchod 🛒 */}
              <div className="flex items-center justify-center space-x-2">
                <Globe className="h-4 w-4 text-muted-foreground" />
                <Link 
                  href="https://www.ekamenictvi-dvorak.cz" 
                  className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.ekamenictvi-dvorak.cz
                  <ExternalLink className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </div>

          {/* Provozní doba - kdy máme otevřeno ⏰ */}
          <div className="space-y-4 bg-muted/30 p-4 rounded-lg">
            <h4 className="font-semibold flex items-center justify-center gap-2">
              <Clock className="h-4 w-4" />
              Provozní doba
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex justify-center gap-3">
                <span className="w-16 text-left">Pondělí:</span>
                <span className="font-medium">7:00 - 17:00</span>
              </li>
              <li className="flex justify-center gap-3">
                <span className="w-16 text-left">Úterý:</span>
                <span className="font-medium">7:00 - 16:00</span>
              </li>
              <li className="flex justify-center gap-3">
                <span className="w-16 text-left">Středa:</span>
                <span className="font-medium">7:00 - 16:00</span>
              </li>
              <li className="flex justify-center gap-3">
                <span className="w-16 text-left">Čtvrtek:</span>
                <span className="font-medium">7:00 - 16:00</span>
              </li>
              <li className="flex justify-center gap-3">
                <span className="w-16 text-left">Pátek:</span>
                <span className="font-medium">7:00 - 13:00</span>
              </li>
            </ul>
            <p className="text-xs text-muted-foreground mt-4 pt-2 border-t border-muted">
              Po tel. dohodě i mimo pracovní dobu
            </p>
          </div>
        </div>

        {/* Copyright - autorská práva vycentrovaná mezi čárou a spodkem 📝 */}
        <div className="mt-6 pt-4 border-t">
          <p className="text-sm text-muted-foreground text-center">
            &copy; {new Date().getFullYear()} Kamenictví Dvořák s.r.o. Všechna práva vyhrazena.
          </p>
        </div>
      </div>
    </footer>
  );
}



