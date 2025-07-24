"use client"

import { LanguageSwitcher } from "@/components/language-switcher";
import { ThemeToggle } from "@/components/theme-toggle";
import "@/styles/header.css";
import { ChevronDown } from "lucide-react"; // Ignoring type checks for this import
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import ServiceDropDown from "./common/ServiceDropDown";

interface HeaderProps {
  dict: any
  lang: "en" | "dk"
}

export default function Header({ dict, lang }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null);

  const pathname = usePathname();

  // Helper to get the main section (e.g., '', 'about', 'services', 'contact')
  function getActiveSection(pathname: string) {
    // Remove leading/trailing slashes and split
    const parts = pathname.replace(/^\/+|\/+$/g, '').split('/');
    // e.g. /en/about => [en, about]
    // If only /en, return '' (home)
    return parts[1] || '';
  }

  const activeSection = getActiveSection(pathname);

  console.log("Active Section:", activeSection);



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
            <span className="text-2xl font-bold"><span className="text-blue-500">Web</span><span className="text-blue-300 font-bold">Agency</span></span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href={`/${lang}`}
              className={`text-md font-medium transition-colors nav-link hover:text-blue-600${activeSection === '' ? ' active' : ''}`}
            >
              {dict.nav.home}
            </Link>
            <Link
              href={`/${lang}/about`}
              className={`text-md font-medium transition-colors nav-link hover:text-blue-600${activeSection === 'about' ? ' active' : ''}`}
            >
              {dict.nav.about}
            </Link>
            <div className="relative group"
            >
              <button
                className={`flex items-center text-md font-medium transition-colors nav-link hover:text-blue-600${activeSection === 'services' ? ' active' : ''}`}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                onMouseOver={() => setIsDropdownOpen(true)}
              >
                {dict.nav.services}
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isDropdownOpen && (
                // <div ref={dropdownRef} className="absolute mt-2 w-44 bg-popover border border-muted rounded-md shadow-md">
                //   <Link href={`/${lang}/services`} className="block px-4 py-2 text-sm text-popover-foreground hover:bg-blue-100 hover:text-blue-500">
                //     {dict.nav.allServices}
                //   </Link>
                //   <div className="block px-4 py-2 text-sm text-popover-foreground hover:bg-blue-100 hover:text-blue-500">
                //     {dict.services.static.title}
                //   </div>
                //   <div className="block px-4 py-2 text-sm text-popover-foreground hover:bg-blue-100 hover:text-blue-500">
                //     {dict.services.dynamic.title}
                //   </div>
                //   <div className="block px-4 py-2 text-sm text-popover-foreground hover:bg-blue-100 hover:text-blue-500 ">
                //     {dict.services.custom.title}
                //   </div>
                // </div>


                <ServiceDropDown dict={dict} lang={lang} dropdownRef={dropdownRef} setIsDropdownOpen={setIsDropdownOpen} />

              )}
            </div>
            <Link
              href={`/${lang}/contact`}
              className={`text-sm font-medium transition-colors nav-link hover:text-blue-600${activeSection === 'contact' ? ' active' : ''}`}
            >
              {dict.nav.contact}
            </Link>
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <button
              className="p-2 text-gray-500 hover:text-blue-500"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? "Close" : "Menu"}
            </button>
            {isMenuOpen && (
              <div className="absolute top-16 left-0 w-full bg-white border-t">
                <Link href={`/${lang}`} className="block px-4 py-2 text-sm hover:bg-blue-100">
                  {dict.nav.home}
                </Link>
                <Link href={`/${lang}/about`} className="block px-4 py-2 text-sm hover:bg-blue-100 ">
                  {dict.nav.about}
                </Link>
                <Link href={`/${lang}/services`} className="block px-4 py-2 text-sm hover:bg-blue-100">
                  {dict.nav.services}
                </Link>
                <Link href={`/${lang}/contact`} className="block px-4 py-2 text-sm hover:bg-blue-100">
                  {dict.nav.contact}
                </Link>
              </div>
            )}
          </div>

          {/* Theme and Language Switcher */}
          <div className="flex items-center relative left-14 ">
            <ThemeToggle />
            <LanguageSwitcher currentLang={lang} />
            <button
              className="ml-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-white hover:text-blue-500 border border-blue-500 transition-colors duration-300"

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
