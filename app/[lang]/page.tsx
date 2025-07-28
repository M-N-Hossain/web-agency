import Hero from "@/components/features/Hero"
import ServiceCards from "@/components/features/services/Service-cards"
import Footer from "@/components/layout/Footer"
import Header from "@/components/layout/Header"
import { getDictionary } from "./dictionaries"

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: "en" | "dk" }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  return (
    <div className="min-h-screen bg-background">
      <Header dict={dict} lang={lang} />
      <main>
        <Hero dict={dict} lang={lang} />
        <ServiceCards dict={dict} lang={lang} />
      </main>
      <Footer dict={dict} lang={lang} />
    </div>
  )
}
