import type { ComponentWithDict } from "@/lib/types";

interface SectionHeaderProps extends Partial<ComponentWithDict> {
  title: string;
  description?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function SectionHeader({ 
  title, 
  description, 
  size = 'md',
  className = '' 
}: SectionHeaderProps) {
  const titleSizes = {
    sm: 'text-xl sm:text-2xl md:text-3xl',
    md: 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl',
    lg: 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl'
  }

  return (
    <div className={`text-center mb-12 sm:mb-16 md:mb-20 ${className}`}>
      <h2 className={`${titleSizes[size]} font-light mb-4 sm:mb-6 text-gray-900 dark:text-white tracking-tight leading-tight`}>
        {title}
      </h2>
      {description && (
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed font-light px-4">
          {description}
        </p>
      )}
    </div>
  )
} 