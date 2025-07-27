"use client"

interface ServiceCardBackgroundProps {
  variant: 'compact' | 'default' | 'detailed' | 'premium'
}

export default function ServiceCardBackground({ variant }: ServiceCardBackgroundProps) {
  if (variant !== 'premium') {
    return null
  }

  return (
    <>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/10"></div>
        <div className="absolute top-0 left-0 w-full h-full 
                      bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
      </div>
      <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-white/5 to-transparent rounded-full"></div>
      <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-tl from-white/5 to-transparent rounded-full"></div>
    </>
  )
} 