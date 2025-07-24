import ContactForm from "@/components/contact-form"
import Footer from "@/components/footer"
import Header from "@/components/header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MapPin, Phone } from "lucide-react"
import { getDictionary } from "../dictionaries"

export default async function ContactPage({
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
              {dict.contact.title}
            </h1>
            <p className="text-xl text-blue-600 dark:text-slate-300 max-w-2xl mx-auto">
              {dict.contact.description}
            </p>
          </section>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="border border-blue-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:shadow-lg hover:shadow-blue-100 dark:hover:shadow-slate-700 transition-shadow duration-200">
              <CardHeader>
                <CardTitle className="text-blue-700 dark:text-blue-400">
                  {dict.contact.form.title}
                </CardTitle>
                <CardDescription className="text-slate-600 dark:text-slate-300">
                  {dict.contact.form.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ContactForm dict={dict} />
              </CardContent>
            </Card>

            <div className="space-y-8">
              <Card className="border border-blue-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:shadow-lg hover:shadow-blue-100 dark:hover:shadow-slate-700 transition-shadow duration-200">
                <CardHeader>
                  <CardTitle className="text-blue-700 dark:text-blue-400">
                    {dict.contact.info.title}
                  </CardTitle>
                  <CardDescription className="text-slate-600 dark:text-slate-300">
                    {dict.contact.info.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-blue-400" />
                    <span className="text-slate-600 dark:text-slate-300">hello@webagency.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-blue-400" />
                    <span className="text-slate-600 dark:text-slate-300">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-blue-400" />
                    <span className="text-slate-600 dark:text-slate-300">123 Web Street, Digital City, DC 12345</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-blue-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:shadow-lg hover:shadow-blue-100 dark:hover:shadow-slate-700 transition-shadow duration-200">
                <CardHeader>
                  <CardTitle className="text-blue-700 dark:text-blue-400">
                    {dict.contact.info.hours}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between text-slate-600 dark:text-slate-300">
                    <span>{dict.contact.info.monday}</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between text-slate-600 dark:text-slate-300">
                    <span>{dict.contact.info.saturday}</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between text-slate-600 dark:text-slate-300">
                    <span>{dict.contact.info.sunday}</span>
                    <span>{dict.contact.info.closed}</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer dict={dict} lang={lang} />
    </div>
  )
}
