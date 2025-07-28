import SectionHeader from "@/components/common/Section-header"
import FeaturesSection from "@/components/features/services/Features-section"
import ServiceCard from "@/components/features/services/service-card/Service-card"
import Footer from "@/components/layout/Footer"
import Header from "@/components/layout/Header"
import { getFeatures } from "@/lib/data/features"
import { getServices } from "@/lib/data/services"
import type { PageProps } from "@/lib/types"
import { getDictionary } from "../dictionaries"

export default async function ServicesPage({ params }: PageProps) {
  const { lang } = await params
  const dict = await getDictionary(lang)
  
  const services = getServices(dict, lang)
  const features = getFeatures(dict)

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header dict={dict} lang={lang} />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gray-50 dark:bg-gray-900 py-24">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="text-center max-w-4xl mx-auto">
              <SectionHeader
                title={dict.services.title}
                description={dict.services.description}
                size="lg"
                className="mb-0"
              />
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  variant="detailed"
                />
              ))}
            </div>
          </div>
        </section>

        <FeaturesSection 
          features={features}
          title={dict.services.whyChoose || "Why Choose Us"}
          variant="benefits"
        />

        {/* CTA Section */}
        <section className="py-24 bg-gray-900 dark:bg-gray-800">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-light mb-8 text-white tracking-tight">
                Ready to get started?
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-12 font-light">
                Let's discuss your project and find the perfect solution for your needs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`/${lang}/contact`}
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 font-medium rounded-xl hover:bg-gray-100 transition-colors duration-200 text-lg"
                >
                  Start Your Project
                </a>
                <a
                  href={`/${lang}/services`}
                  className="inline-flex items-center justify-center px-8 py-4 border border-gray-600 text-white font-medium rounded-xl hover:border-gray-500 hover:bg-gray-800 transition-colors duration-200 text-lg"
                >
                  Schedule Consultation
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