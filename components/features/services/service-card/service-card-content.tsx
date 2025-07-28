"use client"

import { Button } from "@/components/ui/Button"
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card"
import type { Service } from "@/lib/types"
import { getIcon } from "@/lib/utils/icon-mapper"
import { ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"
import { buildClasses, VARIANT_CONFIG, type ServiceCardVariant } from "./service-card-utils"
import styles from "./service-card.module.css"

interface ServiceCardContentProps {
  service: Service
  variant: ServiceCardVariant
  isVisible: boolean
  isCardHovered: boolean
  animationDelay: number
}

export default function ServiceCardContent({ 
  service, 
  variant, 
  isVisible, 
  isCardHovered, 
  animationDelay 
}: ServiceCardContentProps) {
  const Icon = getIcon(service.icon)

  return (
    <>
      <CardHeader className={buildClasses(
        variant === 'detailed' || variant === 'premium' ? "text-center pb-4 pt-6" : "text-center pb-3 pt-4",
        "relative z-10"
      )}>
        <div className={buildClasses(
          "flex justify-center mb-3 relative",
          "transition-all duration-500 group-hover:scale-105"
        )}>
          {/* Icon with enhanced entrance animation */}
          <div className={buildClasses(
            "transition-all duration-500",
            isVisible ? styles.animateScaleInEnhanced : "opacity-0 scale-50"
          )} style={{ animationDelay: `${animationDelay + (variant === 'detailed' || variant === 'premium' ? 400 : 200)}ms` }}>
            <div className={buildClasses(
              "relative p-2 rounded-full",
              service.popular && variant === 'premium' ? `bg-gradient-to-br from-blue-500/20 to-purple-600/20 ${styles.backdropBlurCustom} border border-white/30` : 
              service.popular ? "bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800" : 
              "bg-gray-50 dark:bg-gray-700/30 border border-gray-200 dark:border-gray-600",
              "transition-all duration-500 group-hover:shadow-lg group-hover:border-blue-300 dark:group-hover:border-blue-500",
              isCardHovered && styles.animateIconPulse
            )}>
              <Icon className={buildClasses(
                VARIANT_CONFIG.iconInnerSizes[variant],
                variant === 'premium' && service.popular ? "text-blue-600 dark:text-blue-400 filter drop-shadow-lg" :
                variant === 'detailed' ? "text-blue-600 dark:text-blue-400 drop-shadow-lg" : "text-blue-500",
                "transition-all duration-500"
              )} />
            </div>
          </div>
        </div>
        
        <div className={buildClasses(
          "transition-all duration-500",
          isVisible ? styles.animateTextReveal : "opacity-0"
        )} style={{ animationDelay: `${animationDelay + (variant === 'detailed' || variant === 'premium' ? 600 : 300)}ms` }}>
          <CardTitle className={buildClasses(
            VARIANT_CONFIG.cardTitleSizes[variant],
            "font-bold text-gray-900 dark:text-white mb-2",
            service.popular && variant === 'premium' && "bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent"
          )}>
            {service.title}
          </CardTitle>
        </div>
        
        <div className={buildClasses(
          "transition-all duration-500",
          isVisible ? styles.animateTextReveal : "opacity-0"
        )} style={{ animationDelay: `${animationDelay + (variant === 'detailed' || variant === 'premium' ? 750 : 400)}ms` }}>
          <CardDescription className={buildClasses(
            VARIANT_CONFIG.cardDescriptionSizes[variant],
            "text-gray-600 dark:text-gray-300 leading-relaxed"
          )}>
            {service.description}
          </CardDescription>
        </div>
      </CardHeader>

      <CardContent className="px-4 pb-4 relative z-10">
        {(variant === 'detailed' || variant === 'premium') && service.features && service.features.length > 0 && (
          <div className="mb-4">
            <div className={buildClasses(
              "transition-all duration-500",
              isVisible ? styles.animateTextReveal : "opacity-0"
            )} style={{ animationDelay: `${animationDelay + (variant === 'detailed' || variant === 'premium' ? 900 : 500)}ms` }}>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                What's Included
              </h4>
            </div>
            <ul className={`space-y-3 max-h-40 overflow-y-auto ${styles.customScrollbar}`}>
              {service.features.map((feature, featureIndex) => (
                <li 
                  key={featureIndex} 
                  className={buildClasses(
                    "flex items-start text-gray-600 dark:text-gray-300 transition-all duration-500",
                    isVisible ? styles.animateTextReveal : "opacity-0 translate-x-4"
                  )}
                  style={{ animationDelay: `${animationDelay + (variant === 'detailed' || variant === 'premium' ? 1000 + (featureIndex * 150) : 600 + (featureIndex * 100))}ms` }}
                >
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-base">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex flex-col gap-2">
          <div className={buildClasses(
            "text-center transition-all duration-500",
            isVisible ? styles.animateTextReveal : "opacity-0"
          )} style={{ animationDelay: `${animationDelay + (variant === 'detailed' || variant === 'premium' ? 1400 : 500)}ms` }}>
            <div className={buildClasses(
              "text-2xl font-bold mb-1",
              variant === 'premium' && service.popular ? "text-3xl bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent" : "text-gray-900 dark:text-white"
            )}>
              {service.price}
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              {service.priceDescription}
            </div>
          </div>
          
          {/* Enhanced CTA Button with entrance animation */}
          <div className={buildClasses(
            "transition-all duration-500",
            isVisible ? styles.animateScaleInEnhanced : "opacity-0 scale-95"
          )} style={{ animationDelay: `${animationDelay + (variant === 'detailed' || variant === 'premium' ? 1600 : 600)}ms` }}>
            <Button 
              asChild 
              className={buildClasses(
                "w-full group/btn font-semibold py-2 px-4 rounded-lg transition-all duration-500 relative overflow-hidden",
                variant === 'premium' ? (
                  service.popular ? 
                    "bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 hover:from-blue-700 hover:via-purple-700 hover:to-blue-700 text-white text-base shadow-2xl hover:shadow-3xl transform hover:scale-102" :
                    "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white text-base shadow-xl hover:shadow-2xl transform hover:scale-102"
                  ) :
                  variant === 'detailed' ? 
                    "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-base shadow-xl hover:shadow-2xl transform hover:scale-102" :
                  service.popular ?
                    "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-xl hover:shadow-2xl transform hover:scale-102" :
                    "bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transform hover:scale-102"
              )}
            >
              <Link href="/contact" className="flex items-center justify-center relative z-10">
                {/* Button overlay animation */}
                <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-500 origin-left"></div>
                <span className="relative z-10 flex items-center">
                  {service.popular && variant === 'premium' ? (
                    <>
                      🚀 Get Started Now
                      <ArrowRight className="ml-2 h-5 w-5 group-hover/btn:translate-x-2 transition-transform duration-300" />
                    </>
                  ) : (
                    <>
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </>
                  )}
                </span>
              </Link>
            </Button>
          </div>
          
          {/* Extra urgency text for popular premium cards */}
          {service.popular && variant === 'premium' && (
            <div className={buildClasses(
              "transition-all duration-500",
              isVisible ? styles.animateTextReveal : "opacity-0"
            )} style={{ animationDelay: `${animationDelay + 1800}ms` }}>
              <p className="text-center text-sm text-orange-600 dark:text-orange-400 font-medium">
                🔥 Most chosen by clients
              </p>
            </div>
          )}
        </div>
      </CardContent>
    </>
  )
} 