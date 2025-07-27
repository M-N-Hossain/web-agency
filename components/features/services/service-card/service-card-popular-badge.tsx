"use client"

import { VARIANT_CONFIG, type ServiceCardVariant } from "./service-card-utils"

interface PopularBadgeProps {
  variant: ServiceCardVariant
  isVisible: boolean
  isCardHovered: boolean
  animationDelay: number
}

export default function PopularBadge({ 
  variant, 
  isVisible, 
  isCardHovered, 
  animationDelay 
}: PopularBadgeProps) {
  const badgeText = VARIANT_CONFIG.popularBadgeContent[variant]

  // Simple blue badge design for all variants - positioned at top-right corner like in the image
  return (
    <div 
      className={`absolute top-0 right-0 z-20 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'} transition-all duration-500`}
      style={{ animationDelay: `${animationDelay + 300}ms` }}
    >
      <div className="bg-blue-500 text-white px-3 py-1.5 rounded-bl-lg rounded-tr-lg text-sm font-semibold shadow-lg border border-blue-400/50 backdrop-blur-sm">
        {badgeText}
      </div>
    </div>
  )
} 