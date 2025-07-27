import { ScrollIndicator } from "@/components/common/scroll-indicator";
import { Button } from "@/components/ui/button";
import "@/styles/animations.css";
import Link from "next/link";

import type { ComponentWithDict } from "@/lib/types";

export default function Hero({ dict, lang }: ComponentWithDict) {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40 hero-section bg-gradient-to-b from-blue-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 bg-cover bg-center" 
             style={{ backgroundImage: "url('/Hero.jpg')" }}>
      {/* Dark mode overlay for better text readability */}
      <div className="absolute inset-0 bg-white/40 dark:bg-black/60"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-4 sm:mb-6 hero-title text-foreground">
            {dict.hero.title}
            <span className="block text-blue-600 dark:text-blue-400 mt-2">
              {dict.hero.titleHighlight}
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-6 sm:mb-8 max-w-3xl mx-auto hero-description leading-relaxed">
            {dict.hero.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center hero-buttons max-w-md sm:max-w-none mx-auto">
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto bg-blue-600 dark:bg-blue-500 text-white border-blue-600 dark:border-blue-500 hover:bg-white dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-600 dark:hover:border-blue-400 transition-colors duration-300 min-h-[48px] px-6 sm:px-8 text-base font-semibold touch-manipulation"
              asChild
            >
              <Link href={`/${lang}/contact`}>{dict.hero.startProject}</Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="w-full sm:w-auto border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white transition-colors duration-300 min-h-[48px] px-6 sm:px-8 text-base font-semibold touch-manipulation"
              asChild
            >
              <Link href={`/${lang}/services`}>{dict.hero.viewServices}</Link>
            </Button>
          </div>
          <div className="mt-8 sm:mt-12 md:mt-16">
            <ScrollIndicator />
          </div>
        </div>
      </div>
    </section>
  )
}
