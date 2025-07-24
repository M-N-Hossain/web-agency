import { Button } from "@/components/ui/button";
import "@/styles/animations.css";
import Link from "next/link";
import { ScrollIndicator } from "./scroll-indicator";

interface HeroProps {
  dict: any
  lang: "en" | "dk"
}

export default function Hero({ dict, lang }: HeroProps) {
  return (
    <section
      className="relative py-20 md:py-32 lg:py-40 hero-section"
      style={{
        background: "linear-gradient(to bottom, #e0f7fa, #ffffff)",
        backgroundImage: "url('/Hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 hero-title">
            {dict.hero.title}
            <span className="block text-primary text-blue-500">
              {dict.hero.titleHighlight}
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto hero-description">
            {dict.hero.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center hero-buttons">
            <Button
              size="lg"
              className="bg-blue-500 text-white hover:bg-white hover:text-blue-500 transition-colors duration-300 "
              asChild
            >
              <Link href={`/${lang}/contact`}>{dict.hero.startProject}</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href={`/${lang}/services`}>{dict.hero.viewServices}</Link>
            </Button>
          </div>
          <ScrollIndicator />
        </div>
      </div>
    </section>
  )
}
