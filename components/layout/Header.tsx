"use client"

import { LanguageSwitcher } from "./language-switcher";
import { ThemeToggle } from "./theme-toggle";
import "@/styles/header.css";
import { ChevronDown, ChevronUp } from "lucide-react"; // Ignoring type checks for this import
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import ServiceDropDown from "@/components/common/ServiceDropDown";

import type { ComponentWithDict } from "@/lib/types";

export default function Header({ dict, lang }: ComponentWithDict) {
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
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href={`/${lang}`} className="flex items-center space-x-2">
            <span className="text-2xl font-bold">
              <span className="text-blue-600 dark:text-blue-400">Web</span>
              <span className="text-blue-500 dark:text-blue-300 font-bold">Agency</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href={`/${lang}`}
              className={`text-md font-medium transition-colors text-foreground hover:text-blue-600 dark:hover:text-blue-400${activeSection === '' ? ' text-blue-600 dark:text-blue-400' : ''}`}
            >
              {dict.nav.home}
            </Link>
            <Link
              href={`/${lang}/about`}
              className={`text-md font-medium transition-colors text-foreground hover:text-blue-600 dark:hover:text-blue-400${activeSection === 'about' ? ' text-blue-600 dark:text-blue-400' : ''}`}
            >
              {dict.nav.about}
            </Link>
            <div className="relative group">
              <button
                className={`flex items-center text-md font-medium transition-colors text-foreground hover:text-blue-600 dark:hover:text-blue-400${activeSection === 'services' ? ' text-blue-600 dark:text-blue-400' : ''}`}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                onMouseOver={() => setIsDropdownOpen(true)}
              >
                {dict.nav.services}
                { isDropdownOpen ? 
                  <ChevronUp className="ml-1 h-4 w-4 text-foreground" /> : 
                  <ChevronDown className="ml-1 h-4 w-4 text-foreground" />
                }
              </button>
              {isDropdownOpen && (
                <ServiceDropDown dict={dict} lang={lang} dropdownRef={dropdownRef} setIsDropdownOpen={setIsDropdownOpen} />
              )}
            </div>
            <Link
              href={`/${lang}/contact`}
              className={`text-sm font-medium transition-colors text-foreground hover:text-blue-600 dark:hover:text-blue-400${activeSection === 'contact' ? ' text-blue-600 dark:text-blue-400' : ''}`}
            >
              {dict.nav.contact}
            </Link>
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <button
              className="p-2 text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? "Close" : "Menu"}
            </button>
            {isMenuOpen && (
              <div className="absolute top-16 left-0 w-full bg-background border-t border-border shadow-lg">
                <Link 
                  href={`/${lang}`} 
                  className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  {dict.nav.home}
                </Link>
                <Link 
                  href={`/${lang}/about`} 
                  className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  {dict.nav.about}
                </Link>
                <Link 
                  href={`/${lang}/services`} 
                  className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  {dict.nav.services}
                </Link>
                <Link 
                  href={`/${lang}/contact`} 
                  className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  {dict.nav.contact}
                </Link>
              </div>
            )}
          </div>

          {/* Theme and Language Switcher */}
          <div className="flex items-center relative left-14">
            <ThemeToggle />
            <LanguageSwitcher currentLang={lang} />
            <button
              className="ml-4 px-4 py-2 bg-blue-600 dark:bg-blue-500 text-white hover:bg-white dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400 border border-blue-600 dark:border-blue-500 hover:border-blue-600 dark:hover:border-blue-400 transition-colors duration-300 rounded-md"
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
