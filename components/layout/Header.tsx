"use client"

import ServiceDropDown from "@/components/common/ServiceDropDown";
import "@/styles/header.css";
import { ChevronDown, ChevronUp } from "lucide-react"; // Ignoring type checks for this import
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { LanguageSwitcher } from "./Language-switcher";
import { ThemeToggle } from "./Theme-toggle";

import type { ComponentWithDict } from "@/lib/types";

export default function Header({ dict, lang }: ComponentWithDict) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

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
      // Don't close mobile menu on outside clicks if it's open - let the toggle handle it
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setIsMobileServicesOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex h-14 sm:h-16 items-center justify-between">
          <Link href={`/${lang}`} className="flex items-center space-x-2 z-10">
            <span className="text-lg sm:text-xl md:text-2xl font-bold">
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

          {/* Desktop Theme and Language Switcher */}
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

          {/* Mobile Controls */}
          <div className="md:hidden flex items-center gap-1 sm:gap-2 z-10">
            <div className="hidden xs:flex items-center gap-1">
              <ThemeToggle />
              <LanguageSwitcher currentLang={lang} />
            </div>
            <button
              className="p-2 text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors rounded-md touch-manipulation"
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
                setIsMobileServicesOpen(false);
              }}
              aria-label="Toggle menu"
            >
              <span className="sr-only">Toggle menu</span>
              {isMenuOpen ? (
                <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div 
              ref={mobileMenuRef}
              className="absolute left-0 right-0 top-14 sm:top-16 bg-background border-b border-border shadow-lg md:hidden z-50"
            >
              <div className="container mx-auto px-4 py-4">
                <div className="bg-background border border-border rounded-lg shadow-lg">
                  <div className="py-2">
                    {/* Home */}
                    <Link 
                      href={`/${lang}`} 
                      className={`block px-4 py-3 text-base font-medium transition-colors touch-manipulation ${
                        activeSection === '' 
                          ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/30' 
                          : 'text-foreground hover:bg-accent hover:text-accent-foreground'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {dict.nav.home}
                    </Link>

                    {/* About */}
                    <Link 
                      href={`/${lang}/about`} 
                      className={`block px-4 py-3 text-base font-medium transition-colors touch-manipulation ${
                        activeSection === 'about' 
                          ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/30' 
                          : 'text-foreground hover:bg-accent hover:text-accent-foreground'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {dict.nav.about}
                    </Link>

                    {/* Services with dropdown */}
                    <div className="border-t border-border/50">
                      <button
                        className={`flex items-center justify-between w-full px-4 py-3 text-base font-medium transition-colors touch-manipulation ${
                          activeSection === 'services' 
                            ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/30' 
                            : 'text-foreground hover:bg-accent hover:text-accent-foreground'
                        }`}
                        onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                      >
                        <span>{dict.nav.services}</span>
                        {isMobileServicesOpen ? (
                          <ChevronUp className="h-4 w-4" />
                        ) : (
                          <ChevronDown className="h-4 w-4" />
                        )}
                      </button>
                      
                      {isMobileServicesOpen && (
                        <div className="bg-accent/20 border-t border-border/30">
                          <Link
                            href={`/${lang}/services/web-development`}
                            className="block px-8 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/30 transition-colors touch-manipulation"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            Web Development
                          </Link>
                          <Link
                            href={`/${lang}/services/seo`}
                            className="block px-8 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/30 transition-colors touch-manipulation"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            SEO Services
                          </Link>
                          <Link
                            href={`/${lang}/services/design`}
                            className="block px-8 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/30 transition-colors touch-manipulation"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            UI/UX Design
                          </Link>
                        </div>
                      )}
                    </div>

                    {/* Contact */}
                    <Link 
                      href={`/${lang}/contact`} 
                      className={`block px-4 py-3 text-base font-medium transition-colors touch-manipulation ${
                        activeSection === 'contact' 
                          ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/30' 
                          : 'text-foreground hover:bg-accent hover:text-accent-foreground'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {dict.nav.contact}
                    </Link>

                    {/* Mobile-only controls for very small screens */}
                    <div className="xs:hidden border-t border-border/50 p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Theme & Language</span>
                        <div className="flex items-center gap-2">
                          <ThemeToggle />
                          <LanguageSwitcher currentLang={lang} />
                        </div>
                      </div>
                    </div>

                    {/* Get Started Button */}
                    <div className="p-4 border-t border-border/50">
                      <button
                        className="w-full px-4 py-3 bg-blue-600 dark:bg-blue-500 text-white hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-300 rounded-md touch-manipulation font-medium"
                        onClick={() => {
                          setIsMenuOpen(false);
                          window.location.href = `/${lang}/contact`;
                        }}
                      >
                        Get Started
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}