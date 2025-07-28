"use client"

import SectionHeader from "@/components/common/Section-header"
import FeaturesSection from "@/components/features/services/Features-section"
import ServiceCard from "@/components/features/services/service-card/Service-card"
import { getFeatures } from "@/lib/data/features"
import { getServices } from "@/lib/data/services"
import type { ComponentWithDict } from "@/lib/types"
import { useState } from "react"

export default function ServiceCards({ dict, lang }: ComponentWithDict) {
  const [hoveredCardIndex, setHoveredCardIndex] = useState<string | null>(null)
  
  const services = getServices(dict, lang)
  const features = getFeatures(dict)

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <SectionHeader 
          title={dict.services.title}
          description={dict.services.description}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16 sm:mb-20 md:mb-24">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              variant="premium"
              onHover={setHoveredCardIndex}
              isHovered={hoveredCardIndex === service.id}
              animationDelay={index * 100}
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