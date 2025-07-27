"use client"

import SectionHeader from "@/components/common/section-header"
import FeaturesSection from "@/components/features/services/features-section"
import ServiceCard from "@/components/features/services/service-card/service-card"
import { getFeatures } from "@/lib/data/features"
import { getServices } from "@/lib/data/services"
import type { ComponentWithDict } from "@/lib/types"
import { useState } from "react"

export default function ServiceCards({ dict, lang }: ComponentWithDict) {
  const [hoveredCardIndex, setHoveredCardIndex] = useState<string | null>(null)
  
  const services = getServices(dict, lang)
  const features = getFeatures(dict)

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6 max-w-7xl">
        <SectionHeader 
          title={dict.services.title}
          description={dict.services.description}
        />
        
        <div className="grid lg:grid-cols-3 gap-8 mb-24">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              variant="premium"
              onHover={setHoveredCardIndex}
              isHovered={hoveredCardIndex === service.id}
            />
          ))}
        </div>

        <FeaturesSection 
          features={features} 
          title={dict.services.whyChoose}
        />
      </div>
    </section>
  )
}