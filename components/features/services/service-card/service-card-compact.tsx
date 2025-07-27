"use client"

import { useServiceCardAnimations } from "@/hooks/use-service-card-animations"
import type { Service } from "@/lib/types"
import { getIcon } from "@/lib/utils/icon-mapper"
import { buildClasses, getCardStyles, VARIANT_CONFIG } from "./service-card-utils"
import styles from "./service-card.module.css"

interface ServiceCardCompactProps {
  service: Service
  onHover?: (id: string | null) => void
  isHovered?: boolean
  className?: string
  animationDelay?: number
}

export default function ServiceCardCompact({ 
  service, 
  onHover, 
  isHovered,
  className,
  animationDelay = 0
}: ServiceCardCompactProps) {
  const Icon = getIcon(service.icon)
  const { cardRef, isVisible, isCardHovered, handleMouseEnter, handleMouseLeave } = useServiceCardAnimations({
    animationDelay,
    onHover,
    serviceId: service.id
  })

  const cardStyles = getCardStyles('compact', service, isVisible, isCardHovered, isHovered)

  return (
    <div 
      ref={cardRef}
      className={buildClasses(cardStyles.compact, className)}
      style={{ animationDelay: `${animationDelay}ms` }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {service.popular && (
        <div className={buildClasses(
          "absolute -top-2 -right-2 bg-blue-500 text-white px-2 py-1 rounded-full text-xs",
          styles.animateIconPulse
        )}>
          {VARIANT_CONFIG.popularBadgeContent.compact}
        </div>
      )}
      <div className="flex items-center space-x-3">
        <div className={buildClasses(
          "transition-all duration-500",
          isVisible ? styles.animateScaleInEnhanced : "opacity-0 scale-50"
        )} style={{ animationDelay: `${animationDelay + 200}ms` }}>
          <div className={buildClasses(
            "p-2 rounded-xl border transition-all duration-300",
            service.popular ? "bg-blue-50 dark:bg-blue-900/30 border-blue-200 dark:border-blue-800" : 
            "bg-gray-50 dark:bg-gray-700/30 border-gray-200 dark:border-gray-600",
            "hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-500 hover:scale-102",
            isCardHovered && styles.animateIconPulse
          )}>
            <Icon className={buildClasses(
              VARIANT_CONFIG.iconInnerSizes.compact, 
              "text-blue-500 transition-transform duration-300 drop-shadow-lg"
            )} />
          </div>
        </div>
        <div className="flex-1">
          <h3 className={buildClasses(
            VARIANT_CONFIG.cardTitleSizes.compact, 
            "font-semibold text-gray-900 dark:text-white mb-1 transition-all duration-500",
            isVisible ? styles.animateTextReveal : "opacity-0"
          )} style={{ animationDelay: `${animationDelay + 300}ms` }}>
            {service.title}
          </h3>
          <p className={buildClasses(
            VARIANT_CONFIG.cardDescriptionSizes.compact, 
            "text-gray-600 dark:text-gray-400 leading-relaxed transition-all duration-500",
            isVisible ? styles.animateTextReveal : "opacity-0"
          )} style={{ animationDelay: `${animationDelay + 400}ms` }}>
            {service.description}
          </p>
        </div>
      </div>
    </div>
  )
} 