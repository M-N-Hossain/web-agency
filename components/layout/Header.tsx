import React from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggle from "./ThemeToggle";

interface HeaderProps {
  dict: any;
  lang: string;
}

const Header: React.FC<HeaderProps> = ({ dict, lang }) => (
  <header className="w-full bg-white dark:bg-slate-900 shadow-sm sticky top-0 z-50">
    <div className="container mx-auto flex items-center justify-between py-4 px-4">
      <div className="flex items-center gap-2">
        <img src="/placeholder-logo.svg" alt="Logo" className="h-8 w-8" />
        <span className="font-bold text-xl text-blue-700 dark:text-white">Web Agency</span>
      </div>
      <nav className="flex items-center gap-6">
        <a href={`/${lang}`} className="hover:underline text-blue-700 dark:text-white font-medium">{dict.nav.home}</a>
        <a href={`/${lang}/about`} className="hover:underline text-blue-700 dark:text-white font-medium">{dict.nav.about}</a>
        <a href={`/${lang}/services`} className="hover:underline text-blue-700 dark:text-white font-medium">{dict.nav.services}</a>
        <a href={`/${lang}/contact`} className="hover:underline text-blue-700 dark:text-white font-medium">{dict.nav.contact}</a>
      </nav>
      <div className="flex items-center gap-2">
        <LanguageSwitcher lang={lang} />
        <ThemeToggle />
      </div>
    </div>
  </header>
);

export default Header; 