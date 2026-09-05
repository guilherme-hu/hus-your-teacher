"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const navLinks = [
  { href: "/", label: "Início", emoji: "🏠" },
  { href: "/materiais", label: "Materiais", emoji: "📚" },
  { href: "/aulas", label: "Aulas", emoji: "💻" },
  { href: "/sobre", label: "Sobre", emoji: "🌟" },
  { href: "/membros", label: "Equipe", emoji: "👨‍👩‍👧‍👦" },
  { href: "/voluntariado", label: "Voluntariado", emoji: "💖" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  return (
    <header className="border-b border-pink-300 bg-pink-50 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 md:py-6 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3 md:gap-4 group shrink-0">
          <Logo />
          <div>
            {/* <span>, não <h1>: o h1 de cada página é o título dela, não o nome do site. */}
            <span className="block text-lg md:text-2xl vintage-heading text-gray-800 group-hover:text-pink-700 transition-colors">
              Hu&apos;s Your Teacher
            </span>
            <p className="text-xs md:text-sm text-pink-700 handwritten italic">Hu cares? We do.</p>
          </div>
        </Link>

        {/* Navegação desktop */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav-link text-gray-700 hover:text-pink-700 transition-colors retro-text"
            >
              {link.label} {link.emoji}
            </Link>
          ))}
        </nav>

        {/* Navegação mobile */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="md:hidden border-2 border-pink-400 text-pink-700 hover:bg-pink-100 shrink-0"
              aria-label="Abrir menu de navegação"
            >
              <Menu className="w-5 h-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-pink-50 border-l-2 border-pink-300 w-[280px]">
            <div className="mt-10 flex flex-col gap-2">
              {/* SheetTitle/SheetDescription em vez de <p>: o Radix Dialog exige
                  um título acessível e avisa no console sem ele. O visual é o
                  mesmo — `font-normal` anula o `font-semibold` padrão do shadcn. */}
              <SheetTitle className="text-2xl font-normal vintage-heading text-gray-800 mb-2">
                Navegar 🧭
              </SheetTitle>
              <SheetDescription className="text-sm text-pink-700 handwritten italic mb-6">
                Hu cares? We do.
              </SheetDescription>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="retro-text text-lg text-gray-800 py-3 px-4 rounded-xl border border-pink-200 bg-white hover:bg-pink-100 hover:border-pink-400 transition-colors"
                >
                  <span className="mr-2">{link.emoji}</span>
                  {link.label}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
