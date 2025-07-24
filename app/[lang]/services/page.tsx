import Footer from "@/components/footer"
import Header from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
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
    <div className="min-h-screen bg-blue-50 dark:bg-slate-900">
      <Header dict={dict} lang={lang} />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blue-700 dark:text-white">
              {dict.services.title}
            </h1>
            <p className="text-xl text-blue-600 dark:text-slate-300 max-w-2xl mx-auto">
              {dict.services.description}
            </p>
          </section>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border border-blue-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:shadow-lg hover:shadow-blue-100 dark:hover:shadow-slate-700 transition-shadow duration-200">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl text-slate-900 dark:text-white">
                  {dict.services.static.title}
                </CardTitle>
                <CardDescription className="text-slate-600 dark:text-slate-300">
                  {dict.services.static.description}
                </CardDescription>
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                  {dict.services.static.price}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {dict.services.static.features.map((feature: string, index: number) => (
                    <li key={index} className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                      <Check className="h-4 w-4 text-blue-400" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-blue-100 dark:border-slate-700">
                  <h4 className="font-semibold mb-2 text-slate-900 dark:text-white">
                    {dict.services.static.addons}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    {dict.services.static.management}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    {dict.services.static.support}
                  </p>
                </div>
                <Button className="w-full bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
                  {dict.services.learnMore}
                </Button>
              </CardContent>
            </Card>

            <Card className="border border-blue-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:shadow-lg hover:shadow-blue-100 dark:hover:shadow-slate-700 transition-shadow duration-200 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                  {dict.services.dynamic.popular}
                </span>
              </div>
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl text-slate-900 dark:text-white">
                  {dict.services.dynamic.title}
                </CardTitle>
                <CardDescription className="text-slate-600 dark:text-slate-300">
                  {dict.services.dynamic.description}
                </CardDescription>
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                  {dict.services.dynamic.price}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {dict.services.dynamic.features.map((feature: string, index: number) => (
                    <li key={index} className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                      <Check className="h-4 w-4 text-blue-400" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
                  {dict.services.learnMore}
                </Button>
              </CardContent>
            </Card>

            <Card className="border border-blue-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:shadow-lg hover:shadow-blue-100 dark:hover:shadow-slate-700 transition-shadow duration-200">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl text-slate-900 dark:text-white">
                  {dict.services.custom.title}
                </CardTitle>
                <CardDescription className="text-slate-600 dark:text-slate-300">
                  {dict.services.custom.description}
                </CardDescription>
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                  {dict.services.custom.price}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {dict.services.custom.features.map((feature: string, index: number) => (
                    <li key={index} className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                      <Check className="h-4 w-4 text-blue-400" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full bg-transparent border-blue-600 text-blue-600 hover:bg-blue-100 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-500">
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
