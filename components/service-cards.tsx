"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, CheckCircle, Globe, Headphones, Search, Shield, Smartphone, Zap } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

interface ServiceCardsProps {
  dict: any
  lang: "en" | "dk"
}

export default function ServiceCards({ dict, lang }: ServiceCardsProps) {
  const [hoveredCardIndex, setHoveredCardIndex] = useState<number | null>(null)

  const services = [
    {
      icon: Globe,
      title: dict.services.static.title,
      description: dict.services.static.description,
      features: dict.services.static.features,
      price: dict.services.static.price,
      href: `/${lang}/services`,
      popular: false,
    },
    {
      icon: Zap,
      title: dict.services.dynamic.title,
      description: dict.services.dynamic.description,
      features: dict.services.dynamic.features,
      price: dict.services.dynamic.price,
      href: `/${lang}/services`,
      popular: true, // Mark as popular/recommended
    },
    {
      icon: Smartphone,
      title: dict.services.custom.title,
      description: dict.services.custom.description,
      features: dict.services.custom.features,
      price: dict.services.custom.price,
      href: `/${lang}/services`,
      popular: false,
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
    <section className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header Section - More refined spacing and typography */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-gray-900 dark:text-white tracking-tight">
            {dict.services.title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
            {dict.services.description}
          </p>
        </div>

        {/* Service Cards - Cleaner grid with better spacing */}
        <div className="grid lg:grid-cols-3 gap-8 mb-24">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`relative group border-0 shadow-sm hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800 rounded-2xl overflow-hidden ${
                service.popular && hoveredCardIndex === null
                  ? "ring-2 ring-blue-500 scale-105 shadow-2xl"
                  : hoveredCardIndex === index
                  ? "ring-2 ring-blue-500 scale-105 shadow-2xl"
                  : ""
              }`}
              onMouseEnter={() => setHoveredCardIndex(index)}
              onMouseLeave={() => setHoveredCardIndex(null)}
            >
              {/* Popular badge */}
              {service.popular && (
                <div className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-2 text-sm font-medium rounded-bl-xl">
                  Most Popular
                </div>
              )}
              
              <CardHeader className="text-center pb-8 pt-12">
                {/* Icon with subtle background */}
                <div className="w-16 h-16 mx-auto mb-6 bg-gray-100 dark:bg-gray-700 rounded-2xl flex items-center justify-center group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 transition-colors">
                  <service.icon className="h-8 w-8 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                </div>
                
                <CardTitle className="text-2xl font-semibold text-gray-900 dark:text-white mb-3 tracking-tight">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-500 dark:text-gray-400 text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="px-8 pb-8">
                {/* Price - More prominent */}
                <div className="text-center mb-8">
                  <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                    {service.price}
                  </div>
                </div>

                {/* Features list - Cleaner styling */}
                <ul className="space-y-4 mb-8">
                  {service.features.map((feature: string, featureIndex: number) => (
                    <li key={featureIndex} className="flex items-start text-gray-600 dark:text-gray-300">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button - More sophisticated */}
                <Button 
                  asChild 
                  className={`w-full h-12 rounded-xl font-medium transition-all duration-200 group/btn ${
                    service.popular 
                      ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl' 
                      : 'bg-gray-900 hover:bg-gray-800 dark:bg-gray-100 dark:hover:bg-white text-white dark:text-gray-900'
                  }`}
                >
                  <Link href={service.href} className="flex items-center justify-center">
                    {dict.services.learnMore}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features Section - Simplified and cleaner */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-20">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-light text-gray-900 dark:text-white tracking-tight">
              {dict.services.whyChoose}
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                {/* Icon with subtle hover effect */}
                <div className="w-14 h-14 mx-auto mb-6 bg-gray-100 dark:bg-gray-800 rounded-2xl flex items-center justify-center group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 transition-colors duration-200">
                  <feature.icon className="h-7 w-7 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                </div>
                
                <h4 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white tracking-tight">
                  {feature.title}
                </h4>
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed max-w-sm mx-auto">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}