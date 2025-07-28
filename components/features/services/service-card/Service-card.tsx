"use client"

import { Card } from "@/components/ui/Card"
import { useServiceCardAnimations } from "@/hooks/use-service-card-animations"
import type { Service } from "@/lib/types"
import ServiceCardBackground from "./Service-card-background"
import ServiceCardCompact from "./Service-card-compact"
import ServiceCardContent from "./Service-card-content"
import ServiceCardParticles from "./Service-card-particles"
import PopularBadge from "./Service-card-popular-badge"
import { buildClasses, getCardStyles, type ServiceCardVariant } from "./service-card-utils"
import styles from "./service-card.module.css"

interface ServiceCardProps {
  service: Service
  variant?: ServiceCardVariant
  onHover?: (id: string | null) => void
  isHovered?: boolean
  className?: string
  animationDelay?: number
}

export default function ServiceCard({ 
  service, 
  variant = 'default', 
  onHover, 
  isHovered,
  className,
  animationDelay = 0
}: ServiceCardProps) {
  const { cardRef, isVisible, isCardHovered, handleMouseEnter, handleMouseLeave } = useServiceCardAnimations({
    animationDelay,
    onHover,
    serviceId: service.id
  })

  // Return compact variant as separate component
  if (variant === 'compact') {
    return (
      <ServiceCardCompact
        service={service}
        onHover={onHover}
        isHovered={isHovered}
        className={className}
        animationDelay={animationDelay}
      />
    )
  }

  const cardStyles = getCardStyles(variant, service, isVisible, isCardHovered, isHovered)

  return (
    <div className={`relative group ${styles.transformGpu}`}>
      {/* Floating Particles */}
      <ServiceCardParticles isCardHovered={isCardHovered} variant={variant} />

      <Card 
        ref={cardRef}
        className={buildClasses(cardStyles[variant], className)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ animationDelay: `${animationDelay}ms` }}
      >
        {/* Popular Badge */}
        {service.popular && (
          <PopularBadge 
            variant={variant}
            isVisible={isVisible}
            isCardHovered={isCardHovered}
            animationDelay={animationDelay}
          />
        )}

        {/* Background Pattern for Premium */}
        <ServiceCardBackground variant={variant} />

        {/* Main Card Content */}
        <ServiceCardContent 
          service={service}
          variant={variant}
          isVisible={isVisible}
          isCardHovered={isCardHovered}
          animationDelay={animationDelay}
        />
      </Card>
    </div>
  )
} 