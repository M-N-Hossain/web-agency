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
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex h-14 sm:h-16 items-center justify-between">
          <Link href={`/${lang}`} className="flex items-center space-x-2">
            <span className="text-xl sm:text-2xl font-bold">
              <span className="text-blue-600 dark:text-blue-400">Web</span>
              <span className="text-blue-500 dark:text-blue-300 font-bold">Agency</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <Link
              href={`/${lang}`}
              className={`text-sm lg:text-base font-medium transition-colors text-foreground hover:text-blue-600 dark:hover:text-blue-400${activeSection === '' ? ' text-blue-600 dark:text-blue-400' : ''}`}
            >
              {dict.nav.home}
            </Link>
            <Link
              href={`/${lang}/about`}
              className={`text-sm lg:text-base font-medium transition-colors text-foreground hover:text-blue-600 dark:hover:text-blue-400${activeSection === 'about' ? ' text-blue-600 dark:text-blue-400' : ''}`}
            >
              {dict.nav.about}
            </Link>
            <div className="relative group">
              <button
                className={`flex items-center text-sm lg:text-base font-medium transition-colors text-foreground hover:text-blue-600 dark:hover:text-blue-400${activeSection === 'services' ? ' text-blue-600 dark:text-blue-400' : ''}`}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                onMouseOver={() => setIsDropdownOpen(true)}
              >
                {dict.nav.services}
                { isDropdownOpen ? 
                  <ChevronUp className="ml-1 h-3 w-3 lg:h-4 lg:w-4 text-foreground" /> : 
                  <ChevronDown className="ml-1 h-3 w-3 lg:h-4 lg:w-4 text-foreground" />
                }
              </button>
              {isDropdownOpen && (
                <ServiceDropDown dict={dict} lang={lang} dropdownRef={dropdownRef} setIsDropdownOpen={setIsDropdownOpen} />
              )}
            </div>
            <Link
              href={`/${lang}/contact`}
              className={`text-sm lg:text-base font-medium transition-colors text-foreground hover:text-blue-600 dark:hover:text-blue-400${activeSection === 'contact' ? ' text-blue-600 dark:text-blue-400' : ''}`}
            >
              {dict.nav.contact}
            </Link>
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <button
              className="p-2 text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors rounded-md touch-manipulation"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Toggle menu</span>
              {isMenuOpen ? (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
            {isMenuOpen && (
              <div className="absolute top-14 sm:top-16 left-0 right-0 mx-4 bg-background border border-border rounded-lg shadow-lg mt-2">
                <div className="py-2">
                  <Link 
                    href={`/${lang}`} 
                    className="block px-4 py-3 text-base text-foreground hover:bg-accent hover:text-accent-foreground transition-colors touch-manipulation"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {dict.nav.home}
                  </Link>
                  <Link 
                    href={`/${lang}/about`} 
                    className="block px-4 py-3 text-base text-foreground hover:bg-accent hover:text-accent-foreground transition-colors touch-manipulation"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {dict.nav.about}
                  </Link>
                  <Link 
                    href={`/${lang}/services`} 
                    className="block px-4 py-3 text-base text-foreground hover:bg-accent hover:text-accent-foreground transition-colors touch-manipulation"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {dict.nav.services}
                  </Link>
                  <Link 
                    href={`/${lang}/contact`} 
                    className="block px-4 py-3 text-base text-foreground hover:bg-accent hover:text-accent-foreground transition-colors touch-manipulation"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {dict.nav.contact}
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Theme and Language Switcher */}
          <div className="hidden sm:flex items-center gap-2 lg:gap-3">
            <ThemeToggle />
            <LanguageSwitcher currentLang={lang} />
            <button
              className="px-3 py-2 lg:px-4 text-sm lg:text-base bg-blue-600 dark:bg-blue-500 text-white hover:bg-white dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400 border border-blue-600 dark:border-blue-500 hover:border-blue-600 dark:hover:border-blue-400 transition-colors duration-300 rounded-md touch-manipulation"
              onClick={() => window.location.href = `/${lang}/contact`}
            >
              Get Started
            </button>
          </div>

          {/* Mobile Theme Toggle */}
          <div className="sm:hidden flex items-center gap-2">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}
