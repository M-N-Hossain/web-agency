import { ScrollIndicator } from "@/components/common/scroll-indicator";
import { Button } from "@/components/ui/button";
import "@/styles/animations.css";
import Link from "next/link";

import type { ComponentWithDict } from "@/lib/types";

export default function Hero({ dict, lang }: ComponentWithDict) {
  return (
    <section className="relative py-20 md:py-32 lg:py-40 hero-section bg-gradient-to-b from-blue-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 bg-cover bg-center" 
             style={{ backgroundImage: "url('/Hero.jpg')" }}>
      {/* Dark mode overlay for better text readability */}
      <div className="absolute inset-0 bg-white/40 dark:bg-black/60"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 hero-title text-foreground">
            {dict.hero.title}
            <span className="block text-blue-600 dark:text-blue-400">
              {dict.hero.titleHighlight}
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto hero-description">
            {dict.hero.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center hero-buttons">
            <Button
              size="lg"
              variant="outline"
              className="bg-blue-600 dark:bg-blue-500 text-white border-blue-600 dark:border-blue-500 hover:bg-white dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-600 dark:hover:border-blue-400 transition-colors duration-300"
              asChild
            >
              <Link href={`/${lang}/contact`}>{dict.hero.startProject}</Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white transition-colors duration-300"
              asChild
            >
              <Link href={`/${lang}/services`}>{dict.hero.viewServices}</Link>
            </Button>
          </div>
          <ScrollIndicator />
        </div>
      </div>
    </section>
  )
}
