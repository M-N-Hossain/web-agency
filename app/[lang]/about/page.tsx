import Footer from "@/components/footer"
import Header from "@/components/header"
import { getDictionary } from "../dictionaries"

export default async function AboutPage({
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
        <div className="max-w-4xl mx-auto">
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blue-700 dark:text-white">
              {dict.about.title}
            </h1>
            <p className="text-xl text-blue-600 dark:text-slate-300 max-w-2xl mx-auto">
              {dict.about.description}
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-blue-700 dark:text-white">
              {dict.about.story.title}
            </h2>
            <div className="prose prose-lg dark:prose-invert mx-auto">
              <p className="text-slate-600 dark:text-slate-300">{dict.about.story.content1}</p>
              <p className="text-slate-600 dark:text-slate-300">{dict.about.story.content2}</p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-8 text-center text-blue-700 dark:text-white">
              {dict.about.values.title}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center bg-white dark:bg-slate-800 border border-blue-200 dark:border-slate-700 p-6 rounded-lg hover:shadow-lg hover:shadow-blue-100 dark:hover:shadow-slate-700 transition-shadow duration-200">
                <h3 className="text-xl font-semibold mb-4 text-blue-700 dark:text-blue-400">
                  {dict.about.values.quality.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  {dict.about.values.quality.description}
                </p>
              </div>
              <div className="text-center bg-white dark:bg-slate-800 border border-blue-200 dark:border-slate-700 p-6 rounded-lg hover:shadow-lg hover:shadow-blue-100 dark:hover:shadow-slate-700 transition-shadow duration-200">
                <h3 className="text-xl font-semibold mb-4 text-blue-700 dark:text-blue-400">
                  {dict.about.values.client.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  {dict.about.values.client.description}
                </p>
              </div>
              <div className="text-center bg-white dark:bg-slate-800 border border-blue-200 dark:border-slate-700 p-6 rounded-lg hover:shadow-lg hover:shadow-blue-100 dark:hover:shadow-slate-700 transition-shadow duration-200">
                <h3 className="text-xl font-semibold mb-4 text-blue-700 dark:text-blue-400">
                  {dict.about.values.innovation.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  {dict.about.values.innovation.description}
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer dict={dict} lang={lang} />
    </div>
  )
}
