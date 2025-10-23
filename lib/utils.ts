import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

// 🔧 Sloučí CSS třídy s inteligentním řešením konfliktů
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}



