"use client"

import styles from "./service-card.module.css"

interface ServiceCardParticlesProps {
  isCardHovered: boolean
  variant: 'compact' | 'default' | 'detailed' | 'premium'
}

export default function ServiceCardParticles({ isCardHovered, variant }: ServiceCardParticlesProps) {
  if (!isCardHovered || variant !== 'premium') {
    return null
  }

  return (
    <>
      <div 
        className={`absolute -top-4 -left-4 w-2 h-2 bg-blue-400 rounded-full opacity-60 ${styles.animateParticle}`}
        style={{ animationDelay: '0s' }}
      />
      <div 
        className={`absolute -top-2 -right-6 w-1 h-1 bg-purple-400 rounded-full opacity-80 ${styles.animateParticle}`}
        style={{ animationDelay: '0.5s' }}
      />
      <div 
        className={`absolute -bottom-4 -left-2 w-1.5 h-1.5 bg-pink-400 rounded-full opacity-70 ${styles.animateParticle}`}
        style={{ animationDelay: '1s' }}
      />
      <div 
        className={`absolute top-1/2 -left-3 w-1 h-1 bg-yellow-400 rounded-full opacity-60 ${styles.animateParticle}`}
        style={{ animationDelay: '1.5s' }}
      />
    </>
  )
} 