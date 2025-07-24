import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, Headphones, Search, Shield, Smartphone, Zap } from "lucide-react"
import Link from "next/link"

interface ServiceCardsProps {
  dict: any
  lang: "en" | "dk"
}

export default function ServiceCards({ dict, lang }: ServiceCardsProps) {
  const services = [
    {
      icon: Globe,
      title: dict.services.static.title,
      description: dict.services.static.description,
      features: dict.services.static.features,
      price: dict.services.static.price,
      href: `/${lang}/services`,
    },
    {
      icon: Zap,
      title: dict.services.dynamic.title,
      description: dict.services.dynamic.description,
      features: dict.services.dynamic.features,
      price: dict.services.dynamic.price,
      href: `/${lang}/services`,
    },
    {
      icon: Smartphone,
      title: dict.services.custom.title,
      description: dict.services.custom.description,
      features: dict.services.custom.features,
      price: dict.services.custom.price,
      href: `/${lang}/services`,
    },
  ]

  const features = [
    {
      icon: Search,
      title: dict.services.seoOptimized.title,
      description: dict.services.seoOptimized.description,
    },
    {
      icon: Shield,
      title: dict.services.secure.title,
      description: dict.services.secure.description,
    },
    {
      icon: Headphones,
      title: dict.services.support.title,
      description: dict.services.support.description,
    },
  ]

  return (
    <section className="py-20 bg-blue-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-700 dark:text-white">
            {dict.services.title}
          </h2>
          <p className="text-lg text-blue-600 dark:text-slate-300 max-w-2xl mx-auto">
            {dict.services.description}
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card key={index} className="border border-blue-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:shadow-lg hover:shadow-blue-100 dark:hover:shadow-slate-700 transition-shadow duration-200">
              <CardHeader className="text-center pb-4">
                <service.icon className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-4 mx-auto" />
                <CardTitle className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-slate-600 dark:text-slate-300">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature: string, featureIndex: number) => (
                    <li key={featureIndex} className="text-sm text-slate-600 dark:text-slate-300 flex items-start">
                      <span className="text-blue-400 mr-2 mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-6 border-t border-blue-100 dark:border-slate-700">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4 text-center">
                    {service.price}
                  </div>
                  <Button asChild className="w-full bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
                    <Link href={service.href}>{dict.services.learnMore}</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features Section */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
            {dict.services.whyChoose}
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <feature.icon className="h-12 w-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">
                {feature.title}
              </h4>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}