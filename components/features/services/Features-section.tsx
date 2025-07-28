import type { Feature } from "@/lib/types"
import { getIcon } from "@/lib/utils/icon-mapper"

interface FeaturesSectionProps {
  features: Feature[]
  title?: string
  variant?: 'default' | 'benefits'
}

export default function FeaturesSection({ 
  features, 
  title = "Why Choose Us?",
  variant = 'default' 
}: FeaturesSectionProps) {
  if (variant === 'benefits') {
    return (
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light mb-6 text-gray-900 dark:text-white tracking-tight">
              {title}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 font-light max-w-2xl mx-auto">
              We deliver exceptional results with every project
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {features.map((feature, index) => {
              const Icon = getIcon(feature.icon)
              return (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-8 bg-white dark:bg-gray-700 rounded-2xl flex items-center justify-center shadow-sm group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                    <Icon className="h-8 w-8 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-light">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    )
  }

  return (
    <div className="border-t border-gray-200 dark:border-gray-700 pt-20">
      <div className="text-center mb-16">
        <h3 className="text-3xl md:text-4xl font-light text-gray-900 dark:text-white tracking-tight">
          {title}
        </h3>
      </div>

      <div className="grid md:grid-cols-3 gap-12">
        {features.map((feature, index) => {
          const Icon = getIcon(feature.icon)
          return (
            <div key={index} className="text-center group">
              {/* Icon with subtle hover effect */}
              <div className="w-14 h-14 mx-auto mb-6 bg-gray-100 dark:bg-gray-800 rounded-2xl flex items-center justify-center group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 transition-colors duration-200">
                <Icon className="h-7 w-7 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
              </div>
              
              <h4 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white tracking-tight">
                {feature.title}
              </h4>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed max-w-sm mx-auto">
                {feature.description}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
} 