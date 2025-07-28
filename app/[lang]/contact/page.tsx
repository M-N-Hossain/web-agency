import ContactForm from "@/components/forms/Contact-form"
import Footer from "@/components/layout/Footer"
import Header from "@/components/layout/Header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card"
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
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <div className="max-w-6xl mx-auto">
          <section className="text-center mb-12 sm:mb-16">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-blue-700 dark:text-white leading-tight">
              {dict.contact.title}
            </h1>
            <p className="text-lg sm:text-xl text-blue-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              {dict.contact.description}
            </p>
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
            <Card className="border border-blue-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:shadow-lg hover:shadow-blue-100 dark:hover:shadow-slate-700 transition-shadow duration-200">
              <CardHeader>
                <CardTitle className="text-blue-700 dark:text-blue-400 text-xl sm:text-2xl">
                  {dict.contact.form.title}
                </CardTitle>
                <CardDescription className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
                  {dict.contact.form.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ContactForm dict={dict} />
              </CardContent>
            </Card>

            <div className="space-y-6 sm:space-y-8">
              <Card className="border border-blue-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:shadow-lg hover:shadow-blue-100 dark:hover:shadow-slate-700 transition-shadow duration-200">
                <CardHeader>
                  <CardTitle className="text-blue-700 dark:text-blue-400 text-xl sm:text-2xl">
                    {dict.contact.info.title}
                  </CardTitle>
                  <CardDescription className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
                    {dict.contact.info.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 sm:space-y-5">
                  <div className="flex items-center gap-3 sm:gap-4 p-2 sm:p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-50 dark:bg-blue-900/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <span className="text-slate-600 dark:text-slate-300 text-sm sm:text-base break-all">hello@webagency.com</span>
                  </div>
                  <div className="flex items-center gap-3 sm:gap-4 p-2 sm:p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-50 dark:bg-blue-900/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <span className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-start gap-3 sm:gap-4 p-2 sm:p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-50 dark:bg-blue-900/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <span className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">123 Web Street, Digital City, DC 12345</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-blue-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:shadow-lg hover:shadow-blue-100 dark:hover:shadow-slate-700 transition-shadow duration-200">
                <CardHeader>
                  <CardTitle className="text-blue-700 dark:text-blue-400 text-xl sm:text-2xl">
                    {dict.contact.info.hours}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 sm:space-y-4">
                  <div className="flex justify-between items-center text-slate-600 dark:text-slate-300 py-2 border-b border-gray-100 dark:border-slate-700">
                    <span className="text-sm sm:text-base font-medium">{dict.contact.info.monday}</span>
                    <span className="text-sm sm:text-base">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center text-slate-600 dark:text-slate-300 py-2 border-b border-gray-100 dark:border-slate-700">
                    <span className="text-sm sm:text-base font-medium">{dict.contact.info.saturday}</span>
                    <span className="text-sm sm:text-base">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center text-slate-600 dark:text-slate-300 py-2">
                    <span className="text-sm sm:text-base font-medium">{dict.contact.info.sunday}</span>
                    <span className="text-sm sm:text-base text-red-500 dark:text-red-400">{dict.contact.info.closed}</span>
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
