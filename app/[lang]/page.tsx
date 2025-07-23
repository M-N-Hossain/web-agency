import Header from "@/components/header"
import Hero from "@/components/hero"
import ServiceCards from "@/components/service-cards"
import Footer from "@/components/footer"
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
