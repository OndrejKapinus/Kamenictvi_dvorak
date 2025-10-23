"use client";

import Link from "next/link";
import Image from "next/image";
import { Search, ShoppingCart, User, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

// 🎯 Hlavní navigační lišta s logem, vyhledáváním, košíkem a přihlášením
export default function Header() {
  const [otevřenéMobilníMenu, nastavitOtevřenéMobilníMenu] = useState(false); // 📱 Stav pro mobilní hamburger menu
  const [počítadloKošíku] = useState(0); // 🛒 Počet položek v košíku (zatím statické)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container h-16 px-4">
        {/* 🖥️ Desktop layout - grid se třemi sekcemi pro centruování */}
        <div className="hidden md:grid md:grid-cols-3 md:items-center h-full">
          {/* 🏢 Levá sekce - Logo s celkovým hover efektem */}
          <div className="flex items-center">
            <Link 
              href="/" 
              className="flex items-center gap-4 group transition-all duration-200 ease-out hover:opacity-95"
              style={{
                transform: 'scale(1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(0.92)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              {/* 🎨 Logo kontejner s čistým designem */}
              <div className="relative w-12 h-12 flex-shrink-0 rounded-xl overflow-hidden">
                <Image
                  src="https://www.kamenictvi-dvorak.cz/image.php?nid=16852&oid=7407913"
                  alt="Kamenictví Dvořák"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              {/* 📝 Textová část s čistým designem */}
              <div className="flex flex-col">
                <h1 className="text-2xl font-bold text-slate-900 tracking-tight font-serif">
                  Kamenictví Dvořák
                </h1>
                <p className="text-sm text-slate-500 font-medium -mt-1">
                  Tradiční řemeslo od roku 1995
                </p>
              </div>
            </Link>
          </div>

          {/* 🔍 Střední sekce - Vyhledávací pole uprostřed */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <Input
                type="search"
                placeholder="Hledat produkty..."
                className="pl-10 w-full bg-slate-100 border-slate-300 hover:bg-slate-50 focus:bg-white focus:border-slate-400 focus:ring-0 focus:outline-none transition-all duration-200"
              />
            </div>
          </div>
            
          {/* ⚡ Pravá sekce - Akční tlačítka */}
          <div className="flex items-center justify-end gap-2">
            {/* 🛒 Košík */}
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" size="icon" className="relative">
                  <ShoppingCart className="h-5 w-5" />
                  {počítadloKošíku > 0 && (
                    <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
                      {počítadloKošíku}
                    </span>
                  )}
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Váš košík</DialogTitle>
                  <DialogDescription>
                    Košík je zatím prázdný
                  </DialogDescription>
                </DialogHeader>
                <div className="py-6 text-center text-muted-foreground">
                  <ShoppingCart className="h-16 w-16 mx-auto mb-4 opacity-50" />
                  <p>Nemáte žádné položky v košíku</p>
                </div>
              </DialogContent>
            </Dialog>

            {/* 👤 Přihlášení */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Můj účet</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profil</DropdownMenuItem>
                <DropdownMenuItem>Objednávky</DropdownMenuItem>
                <DropdownMenuItem>Nastavení</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Přihlásit se</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* 📱 Mobilní layout - čistý a konzistentní design */}
        <div className="md:hidden flex h-16 items-center justify-between">
          {/* 📱 Logo pro mobil - čistý design s celkovým hover efektem */}
          <Link 
            href="/" 
            className="flex items-center gap-3 group transition-all duration-200 ease-out hover:opacity-95"
            style={{
              transform: 'scale(1)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(0.92)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <div className="relative w-10 h-10 flex-shrink-0 rounded-lg overflow-hidden">
              <Image
                src="https://www.kamenictvi-dvorak.cz/image.php?nid=16852&oid=7407913"
                alt="Kamenictví Dvořák"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-lg font-bold text-slate-900 font-serif leading-tight">
                Kamenictví Dvořák
              </h1>
              <p className="text-xs text-slate-500 font-medium -mt-0.5">
                Od roku 1995
              </p>
            </div>
          </Link>

          {/* 🎛️ Mobilní akční tlačítka */}
          <div className="flex items-center gap-2">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" size="icon" className="relative">
                  <ShoppingCart className="h-5 w-5" />
                  {počítadloKošíku > 0 && (
                    <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
                      {počítadloKošíku}
                    </span>
                  )}
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Váš košík</DialogTitle>
                  <DialogDescription>
                    Košík je zatím prázdný
                  </DialogDescription>
                </DialogHeader>
                <div className="py-6 text-center text-muted-foreground">
                  <ShoppingCart className="h-16 w-16 mx-auto mb-4 opacity-50" />
                  <p>Nemáte žádné položky v košíku</p>
                </div>
              </DialogContent>
            </Dialog>

            <Button
              variant="outline"
              size="icon"
              onClick={() => nastavitOtevřenéMobilníMenu(!otevřenéMobilníMenu)}
            >
              {otevřenéMobilníMenu ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* 📱 Mobilní menu dropdown */}
      {otevřenéMobilníMenu && (
        <div className="md:hidden border-t">
          <div className="container px-4 py-4 space-y-4">
            {/* 🔎 Vyhledávání na mobilu */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Hledat produkty..."
                className="pl-10 w-full bg-slate-100 border-slate-300 hover:bg-slate-50 focus:bg-white focus:border-slate-400 focus:ring-0 focus:outline-none transition-all duration-200"
              />
            </div>

            {/* 📋 Mobilní menu položky */}
            <div className="space-y-2">
              <Button variant="outline" className="w-full justify-start" asChild>
                <Link href="/">
                  <User className="mr-2 h-4 w-4" />
                  Přihlásit se
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}