

interface SectionHeaderProps {
  title: string
  description?: string
  size?: 'sm' | 'md' | 'lg'
  centered?: boolean
  className?: string
}

export default function SectionHeader({ 
  title, 
  description, 
  size = 'md', 
  centered = true,
  className 
}: SectionHeaderProps) {
  const titleSizes = {
    sm: 'text-2xl md:text-3xl',
    md: 'text-4xl md:text-5xl',
    lg: 'text-5xl md:text-6xl'
  }

  return (
    <div className={`mb-20${centered ? ' text-center' : ''}${className ? ` ${className}` : ''}`}>
      <h2 className={`${titleSizes[size]} font-light mb-6 text-gray-900 dark:text-white tracking-tight`}>
        {title}
      </h2>
      {description && (
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
          {description}
        </p>
      )}
    </div>
  )
} 