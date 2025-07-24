import Footer from "@/components/footer"
import Header from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Check, Globe, Headphones, Search, Shield, Smartphone, Star, Zap } from "lucide-react"
import { getDictionary } from "../dictionaries"

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ lang: "en" | "dk" }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  const services = [
    {
      icon: Globe,
      title: dict.services.static.title,
      description: dict.services.static.description,
      price: dict.services.static.price,
      features: dict.services.static.features,
      addons: {
        title: dict.services.static.addons,
        management: dict.services.static.management,
        support: dict.services.static.support,
      },
      buttonText: dict.services.learnMore,
      popular: false,
      tier: "starter"
    },
    {
      icon: Zap,
      title: dict.services.dynamic.title,
      description: dict.services.dynamic.description,
      price: dict.services.dynamic.price,
      features: dict.services.dynamic.features,
      buttonText: dict.services.learnMore,
      popular: true,
      tier: "professional"
    },
    {
      icon: Smartphone,
      title: dict.services.custom.title,
      description: dict.services.custom.description,
      price: dict.services.custom.price,
      features: dict.services.custom.features,
      buttonText: dict.services.custom.requestQuote,
      popular: false,
      tier: "enterprise"
    }
  ]

  const benefits = [
    {
      icon: Search,
      title: dict.services.seoOptimized?.title || "SEO Optimized",
      description: dict.services.seoOptimized?.description || "Built for search engines"
    },
    {
      icon: Shield,
      title: dict.services.secure?.title || "Secure & Reliable",
      description: dict.services.secure?.description || "Enterprise-grade security"
    },
    {
      icon: Headphones,
      title: dict.services.support?.title || "24/7 Support",
      description: dict.services.support?.description || "Always here to help"
    }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header dict={dict} lang={lang} />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gray-50 dark:bg-gray-900 py-24">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-light mb-8 text-gray-900 dark:text-white tracking-tight">
                {dict.services.title}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed font-light max-w-3xl mx-auto">
                {dict.services.description}
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card 
                  key={index}
                  className={`relative group border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800 rounded-2xl overflow-hidden ${
                    service.popular ? 'ring-2 ring-blue-500 scale-105' : ''
                  }`}
                >
                  {/* Popular Badge */}
                  {service.popular && (
                    <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 text-xs font-medium rounded-bl-xl flex items-center gap-1">
                      <Star className="h-3 w-3" />
                      Most Popular
                    </div>
                  )}
                  
                  <CardHeader className="text-center pb-8 pt-12">
                    {/* Service Icon */}
                    <div className="w-14 h-14 mx-auto mb-4 bg-gray-100 dark:bg-gray-700 rounded-2xl flex items-center justify-center group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 transition-colors">
                      <service.icon className="h-7 w-7 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white mb-2 tracking-tight">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed mb-8">
                      {service.description}
                    </CardDescription>
                    {/* Pricing */}
                    <div className="mb-4">
                      <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                        {service.price}
                      </div>
                      <div className="text-gray-500 dark:text-gray-400 text-xs uppercase tracking-wider">
                        {service.tier}
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="px-8 pb-8">
                    {/* Features List */}
                    <div className="mb-4">
                      <ul className="space-y-2">
                        {service.features.map((feature: string, featureIndex: number) => (
                          <li key={featureIndex} className="flex items-start text-gray-600 dark:text-gray-300">
                            <div className="w-5 h-5 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                              <Check className="h-3 w-3 text-green-600 dark:text-green-400" />
                            </div>
                            <span className="text-xs leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Add-ons (for static service) */}
                    {service.addons && (
                      <div className="mb-4 p-3 bg-gray-50 dark:bg-gray-700 rounded-xl">
                        <h4 className="font-semibold mb-2 text-gray-900 dark:text-white text-xs uppercase tracking-wider">
                          {service.addons.title}
                        </h4>
                        <div className="space-y-1 text-xs text-gray-600 dark:text-gray-300">
                          <p>{service.addons.management}</p>
                          <p>{service.addons.support}</p>
                        </div>
                      </div>
                    )}

                    {/* CTA Button */}
                    <Button 
                      className={`w-full h-10 rounded-xl font-medium transition-all duration-200 group/btn text-base ${
                        service.popular 
                          ? 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg hover:shadow-xl' 
                          : service.tier === 'enterprise'
                          ? 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600'
                          : 'bg-gray-900 hover:bg-gray-800 dark:bg-gray-100 dark:hover:bg-white text-white dark:text-gray-900'
                      }`}
                    >
                      <span className="flex items-center justify-center">
                        {service.buttonText}
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </span>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-light mb-6 text-gray-900 dark:text-white tracking-tight">
                {dict.services.whyChoose || "Why Choose Us"}
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 font-light max-w-2xl mx-auto">
                We deliver exceptional results with every project
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-12">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-8 bg-white dark:bg-gray-700 rounded-2xl flex items-center justify-center shadow-sm group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                    <benefit.icon className="h-8 w-8 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white tracking-tight">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-light">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

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