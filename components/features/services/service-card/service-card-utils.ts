import type { Service } from "@/lib/types"
import styles from "./service-card.module.css"

export type ServiceCardVariant = 'compact' | 'default' | 'detailed' | 'premium'

// Helper function to build class strings
export const buildClasses = (...classes: (string | boolean | undefined)[]) => {
  return classes.filter(Boolean).join(' ')
}

// Variant configurations
export const VARIANT_CONFIG = {
  popularBadgeContent: {
    compact: "Popular",
    default: "Most Popular", 
    detailed: "Most Popular",
    premium: "Most Popular"
  },
  iconInnerSizes: {
    compact: "h-6 w-6",
    default: "h-8 w-8",
    detailed: "h-10 w-10",
    premium: "h-12 w-12"
  },
  cardTitleSizes: {
    compact: "text-base",
    default: "text-lg",
    detailed: "text-xl",
    premium: "text-2xl"
  },
  cardDescriptionSizes: {
    compact: "text-sm",
    default: "text-base",
    detailed: "text-lg",
    premium: "text-lg"
  }
}



// Enhanced card styles with 3D effects
export const getCardStyles = (
  variant: ServiceCardVariant, 
  service: Service, 
  isVisible: boolean, 
  isCardHovered: boolean, 
  isHovered?: boolean
) => {
  const baseAnimation = isVisible ? styles.animateSlideUpEnhanced : 'opacity-0 translate-y-8 scale-95'
  
  const baseStyles = {
    compact: `relative bg-white dark:bg-gray-800 rounded-xl shadow-md p-3 border border-gray-200 dark:border-gray-700 transition-colors transition-border-colors duration-300 hover:border-blue-300 dark:hover:border-blue-600 ${baseAnimation} transform-gpu ${styles.perspective1000} ${styles.hoverScaleCompact}`,
    default: `relative group border border-gray-200 dark:border-gray-700 shadow-sm bg-white dark:bg-gray-800 rounded-2xl overflow-hidden transition-colors transition-border-colors duration-300 hover:border-blue-300 dark:hover:border-blue-600 ${baseAnimation} transform-gpu ${styles.perspective1000} ${styles.card3d} ${styles.hoverScale}`,
    detailed: `relative group border border-gray-200 dark:border-gray-700 shadow-lg bg-white dark:bg-gray-800 rounded-2xl overflow-hidden transition-colors transition-border-colors duration-300 hover:border-blue-300 dark:hover:border-blue-600 ${baseAnimation} transform-gpu ${styles.perspective1000} ${styles.card3d} ${styles.hoverScale}`,
    premium: `relative group border border-purple-200 dark:border-purple-700 shadow-xl bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 dark:from-gray-800 dark:via-blue-900/20 dark:to-purple-900/20 rounded-3xl overflow-hidden transition-colors transition-border-colors duration-300 hover:border-purple-300 dark:hover:border-purple-600 ${baseAnimation} transform-gpu ${styles.perspective1000} ${styles.card3d} ${styles.backdropBlurCustom} ${styles.hoverScalePremium}`
  }
  
  return {
    compact: buildClasses(
      baseStyles.compact,
      service.popular && "ring-2 ring-blue-500 shadow-lg shadow-blue-500/20 border-blue-300 dark:border-blue-600",
      isCardHovered && styles.animateCardFloat
    ),
    default: buildClasses(
      baseStyles.default,
      service.popular && "ring-2 ring-blue-500 shadow-xl shadow-blue-500/20 border-blue-300 dark:border-blue-600",
      (isHovered || isCardHovered) && `scale-102 shadow-2xl border-blue-400 dark:border-blue-500 ${styles.hover3d}`,
      isCardHovered && styles.animateCardFloat
    ),
    detailed: buildClasses(
      baseStyles.detailed,
      service.popular && "ring-2 ring-blue-500 shadow-xl shadow-blue-500/20 border-blue-300 dark:border-blue-600",
      isCardHovered && `${styles.hover3d} ${styles.animateCardFloat} scale-102`
    ),
    premium: buildClasses(
      baseStyles.premium,
      service.popular && "ring-2 ring-purple-500 border-purple-300 dark:border-purple-600",
      // Popular card default state: scaled up
      service.popular && !isCardHovered && isHovered !== false && "scale-105 shadow-xl shadow-purple-500/30",
      // When this card is hovered
      isCardHovered && `scale-105 shadow-2xl ${styles.hover3d} ${styles.animateCardFloat}`,
      isCardHovered && service.popular && "shadow-purple-500/40",
      isCardHovered && !service.popular && "shadow-blue-500/40",
      // When other cards are hovered: scale popular back down
      service.popular && !isCardHovered && isHovered === false && "scale-102 shadow-md",
      // Non-popular card states
      !service.popular && !isCardHovered && "shadow-lg",
      !service.popular && isCardHovered && `scale-105 shadow-2xl shadow-blue-500/40 ${styles.hover3d} ${styles.animateCardFloat}`,
      !service.popular && !isCardHovered && isHovered === false && "scale-98 shadow-sm"
    )
  }
}

// Enhanced popular badge styles
export const getPopularBadgeStyles = (
  variant: ServiceCardVariant, 
  isVisible: boolean, 
  isCardHovered: boolean
) => {
  const badgeAnimation = isVisible ? styles.animateScaleInBounce : 'opacity-0 scale-50'
  
  // Premium variant uses custom medal design in the component
  if (variant === 'premium') {
    return ''
  }
  
  return buildClasses(
    "absolute -top-3 left-1/2 transform -translate-x-1/2 z-10",
    variant === 'default' ? "bg-gradient-to-r from-blue-500 to-purple-600" : "bg-blue-500",
    "text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg",
    "flex items-center gap-2",
    badgeAnimation,
    isCardHovered && styles.animateIconPulse
  )
} 