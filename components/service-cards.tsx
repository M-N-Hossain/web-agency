import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Globe, Zap, Smartphone, Shield, Search, Headphones } from "lucide-react"
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
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{dict.services.title}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{dict.services.description}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card key={index} className="relative group hover:shadow-lg transition-shadow">
              <CardHeader>
                <service.icon className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {service.features.map((feature: string, featureIndex: number) => (
                    <li key={featureIndex} className="text-sm text-muted-foreground">
                      • {feature}
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t">
                  <div className="text-2xl font-bold text-primary mb-4">{service.price}</div>
                  <Button asChild className="w-full">
                    <Link href={service.href}>{dict.services.learnMore}</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">{dict.services.whyChoose}</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
