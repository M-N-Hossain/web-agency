import Footer from "@/components/footer"
import Header from "@/components/header"
import { getDictionary } from "../dictionaries"
import { Award, Users, Lightbulb, Target, Heart, Zap } from "lucide-react"

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: "en" | "dk" }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  const values = [
    {
      icon: Award,
      title: dict.about.values.quality.title,
      description: dict.about.values.quality.description,
    },
    {
      icon: Heart,
      title: dict.about.values.client.title,
      description: dict.about.values.client.description,
    },
    {
      icon: Lightbulb,
      title: dict.about.values.innovation.title,
      description: dict.about.values.innovation.description,
    },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header dict={dict} lang={lang} />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gray-50 dark:bg-gray-900 py-24">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-light mb-8 text-gray-900 dark:text-white tracking-tight">
                {dict.about.title}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto font-light">
                {dict.about.description}
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-24">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-light mb-6 text-gray-900 dark:text-white tracking-tight">
                  {dict.about.story.title}
                </h2>
              </div>
              
              <div className="prose prose-xl dark:prose-invert mx-auto max-w-none">
                <div className="grid md:grid-cols-1 gap-8">
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-12">
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8 text-lg font-light">
                      {dict.about.story.content1}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg font-light">
                      {dict.about.story.content2}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-light mb-6 text-gray-900 dark:text-white tracking-tight">
                {dict.about.values.title}
              </h2>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
              {values.map((value, index) => (
                <div 
                  key={index} 
                  className="group text-center"
                >
                  {/* Icon Container */}
                  <div className="w-20 h-20 mx-auto mb-8 bg-white dark:bg-gray-700 rounded-3xl flex items-center justify-center shadow-sm group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                    <value.icon className="h-10 w-10 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white tracking-tight">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg font-light max-w-sm mx-auto">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats/Achievements Section */}
        <section className="py-24">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-5xl font-light text-gray-900 dark:text-white mb-4">
                  100+
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-lg font-light">
                  Projects Completed
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-light text-gray-900 dark:text-white mb-4">
                  50+
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-lg font-light">
                  Happy Clients
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-light text-gray-900 dark:text-white mb-4">
                  5+
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-lg font-light">
                  Years Experience
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gray-900 dark:bg-gray-800">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-light mb-8 text-white tracking-tight">
                Ready to work together?
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-12 font-light">
                Let's create something amazing for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`/${lang}/contact`}
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 font-medium rounded-xl hover:bg-gray-100 transition-colors duration-200 text-lg"
                >
                  Get in Touch
                </a>
                <a
                  href={`/${lang}/services`}
                  className="inline-flex items-center justify-center px-8 py-4 border border-gray-600 text-white font-medium rounded-xl hover:border-gray-500 hover:bg-gray-800 transition-colors duration-200 text-lg"
                >
                  View Services
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer dict={dict} lang={lang} />
    </div>
  )
}