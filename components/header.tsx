"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageSwitcher } from "@/components/language-switcher"
import { Menu, X, ChevronDown } from "lucide-react"

interface HeaderProps {
  dict: any
  lang: "en" | "dk"
}

export default function Header({ dict, lang }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href={`/${lang}`} className="flex items-center space-x-2">
            <span className="text-2xl font-bold">WebAgency</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href={`/${lang}`} className="text-sm font-medium hover:text-primary transition-colors">
              {dict.nav.home}
            </Link>
            <Link href={`/${lang}/about`} className="text-sm font-medium hover:text-primary transition-colors">
              {dict.nav.about}
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-sm font-medium hover:text-primary transition-colors">
                {dict.nav.services}
                <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-44 mt-2">
                <DropdownMenuItem asChild>
                  <Link href={`/${lang}/services`}>{dict.nav.allServices}</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>{dict.services.static.title}</DropdownMenuItem>
                <DropdownMenuItem>{dict.services.dynamic.title}</DropdownMenuItem>
                <DropdownMenuItem>{dict.services.custom.title}</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link href={`/${lang}/contact`} className="text-sm font-medium hover:text-primary transition-colors">
              {dict.nav.contact}
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitcher currentLang={lang} />
            <ThemeToggle />
            <Button asChild>
              <Link href={`/${lang}/contact`}>{dict.nav.getStarted}</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <LanguageSwitcher currentLang={lang} />
            <ThemeToggle />
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t py-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href={`/${lang}`}
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {dict.nav.home}
              </Link>
              <Link
                href={`/${lang}/about`}
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {dict.nav.about}
              </Link>
              <Link
                href={`/${lang}/services`}
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {dict.nav.services}
              </Link>
              <Link
                href={`/${lang}/contact`}
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {dict.nav.contact}
              </Link>
              <Button asChild className="w-fit">
                <Link href={`/${lang}/contact`} onClick={() => setIsMenuOpen(false)}>
                  {dict.nav.getStarted}
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
