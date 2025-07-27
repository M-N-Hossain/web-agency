"use client"

import { useRouter, usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Globe } from "lucide-react"

interface LanguageSwitcherProps {
  currentLang: "en" | "dk"
}

export function LanguageSwitcher({ currentLang }: LanguageSwitcherProps) {
  const router = useRouter()
  const pathname = usePathname()

  const switchLanguage = (newLang: "en" | "dk") => {
    // Remove current language from pathname and add new one
    const pathWithoutLang = pathname.replace(/^\/[a-z]{2}/, "")
    const newPath = `/${newLang}${pathWithoutLang}`
    router.push(newPath)
  }

  const languages = {
    en: { name: "English", flag: "🇺🇸" },
    dk: { name: "Dansk", flag: "🇩🇰" },
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Globe className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Switch language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {Object.entries(languages).map(([lang, { name, flag }]) => (
          <DropdownMenuItem
            key={lang}
            onClick={() => switchLanguage(lang as "en" | "dk")}
            className={currentLang === lang ? "bg-accent" : ""}
          >
            <span className="mr-2">{flag}</span>
            {name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
