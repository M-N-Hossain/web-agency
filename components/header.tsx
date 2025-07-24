"use client"

import { LanguageSwitcher } from "@/components/language-switcher";
import { ThemeToggle } from "@/components/theme-toggle";
import { ChevronDown } from "lucide-react"; // Ignoring type checks for this import
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

interface HeaderProps {
  dict: any
  lang: "en" | "dk"
}

export default function Header({ dict, lang }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
            <div className="relative">
              <button
                className="flex items-center text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                {dict.nav.services}
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isDropdownOpen && (
                <div ref={dropdownRef} className="absolute mt-2 w-44 bg-gray-800 border border-gray-700 rounded shadow">
                  <Link href={`/${lang}/services`} className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700">
                    {dict.nav.allServices}
                  </Link>
                  <div className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700">
                    {dict.services.static.title}
                  </div>
                  <div className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700">
                    {dict.services.dynamic.title}
                  </div>
                  <div className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700">
                    {dict.services.custom.title}
                  </div>
                </div>
              )}
            </div>
            <Link href={`/${lang}/contact`} className="text-sm font-medium hover:text-primary transition-colors">
              {dict.nav.contact}
            </Link>
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <button
              className="p-2 text-gray-500 hover:text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? "Close" : "Menu"}
            </button>
            {isMenuOpen && (
              <div className="absolute top-16 left-0 w-full bg-white border-t">
                <Link href={`/${lang}`} className="block px-4 py-2 text-sm hover:bg-gray-100">
                  {dict.nav.home}
                </Link>
                <Link href={`/${lang}/about`} className="block px-4 py-2 text-sm hover:bg-gray-100">
                  {dict.nav.about}
                </Link>
                <Link href={`/${lang}/services`} className="block px-4 py-2 text-sm hover:bg-gray-100">
                  {dict.nav.services}
                </Link>
                <Link href={`/${lang}/contact`} className="block px-4 py-2 text-sm hover:bg-gray-100">
                  {dict.nav.contact}
                </Link>
              </div>
            )}
          </div>

          {/* Theme and Language Switcher */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <LanguageSwitcher currentLang={lang} />
            <button
              className="ml-4 px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark transition-colors dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
              onClick={() => window.location.href = `/${lang}/contact`}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
