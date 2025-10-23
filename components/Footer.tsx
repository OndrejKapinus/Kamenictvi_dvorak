import { Mail, Phone, MapPin } from "lucide-react";

// Patička stránky s kontakty a informacemi
export default function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* O firmě - informace o společnosti 🏢 */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Kamenictví Dvořák s.r.o.</h3>
            <p className="text-sm text-muted-foreground">
              Tradiční řemeslo, moderní přístup, individuální řešení.
            </p>
          </div>

          {/* Kontakt */}
          <div className="space-y-4">
            <h4 className="font-semibold">Kontakt</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-muted-foreground mt-0.5" />
                <div className="space-y-1">
                  <p className="text-muted-foreground">+420 567 223 840</p>
                  <p className="text-muted-foreground">+420 725 969 561</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-muted-foreground mt-0.5" />
                <div>
                  <p className="text-muted-foreground">dvorak@kamenictvi-dvorak.cz</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
                <div>
                  <p className="text-muted-foreground">Myslibořská 460</p>
                  <p className="text-muted-foreground">588 56 Telč</p>
                </div>
              </li>
            </ul>
            <div className="text-xs text-muted-foreground mt-4 space-y-1">
              <p><strong>IČ:</strong> 26949598</p>
              <p><strong>DIČ:</strong> CZ26949598</p>
            </div>
          </div>

          {/* Provozní doba */}
          <div className="space-y-4">
            <h4 className="font-semibold">Provozní doba</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex justify-between">
                <span>Pondělí:</span>
                <span className="font-medium">7:00 - 17:00</span>
              </li>
              <li className="flex justify-between">
                <span>Úterý:</span>
                <span className="font-medium">7:00 - 16:00</span>
              </li>
              <li className="flex justify-between">
                <span>Středa:</span>
                <span className="font-medium">7:00 - 16:00</span>
              </li>
              <li className="flex justify-between">
                <span>Čtvrtek:</span>
                <span className="font-medium">7:00 - 16:00</span>
              </li>
              <li className="flex justify-between">
                <span>Pátek:</span>
                <span className="font-medium">7:00 - 13:00</span>
              </li>
            </ul>
            <p className="text-xs text-muted-foreground mt-3">
              Po tel. dohodě i mimo pracovní dobu
            </p>
          </div>
        </div>

        {/* Copyright - autorská práva 📝 */}
        <div className="mt-8 pt-4 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Kamenictví Dvořák s.r.o. Všechna práva vyhrazena.</p>
        </div>
      </div>
    </footer>
  );
}



