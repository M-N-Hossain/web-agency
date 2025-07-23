import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { getDictionary } from "../dictionaries"

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ lang: "en" | "dk" }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  return (
    <div className="min-h-screen bg-background">
      <Header dict={dict} lang={lang} />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{dict.services.title}</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{dict.services.description}</p>
          </section>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="relative">
              <CardHeader>
                <CardTitle className="text-2xl">{dict.services.static.title}</CardTitle>
                <CardDescription>{dict.services.static.description}</CardDescription>
                <div className="text-3xl font-bold">{dict.services.static.price}</div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {dict.services.static.features.map((feature: string, index: number) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t">
                  <h4 className="font-semibold mb-2">{dict.services.static.addons}</h4>
                  <p className="text-sm text-muted-foreground">{dict.services.static.management}</p>
                  <p className="text-sm text-muted-foreground">{dict.services.static.support}</p>
                </div>
                <Button className="w-full">{dict.services.learnMore}</Button>
              </CardContent>
            </Card>

            <Card className="relative border-primary">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm">
                  {dict.services.dynamic.popular}
                </span>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">{dict.services.dynamic.title}</CardTitle>
                <CardDescription>{dict.services.dynamic.description}</CardDescription>
                <div className="text-3xl font-bold">{dict.services.dynamic.price}</div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {dict.services.dynamic.features.map((feature: string, index: number) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full">{dict.services.learnMore}</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">{dict.services.custom.title}</CardTitle>
                <CardDescription>{dict.services.custom.description}</CardDescription>
                <div className="text-3xl font-bold">{dict.services.custom.price}</div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {dict.services.custom.features.map((feature: string, index: number) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full bg-transparent">
                  {dict.services.custom.requestQuote}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer dict={dict} lang={lang} />
    </div>
  )
}
