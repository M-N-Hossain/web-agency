"use client"

import { useEffect, useRef, useState } from "react"

interface UseServiceCardAnimationsProps {
  animationDelay?: number
  onHover?: (id: string | null) => void
  serviceId: string
}

export function useServiceCardAnimations({ 
  animationDelay = 0, 
  onHover,
  serviceId 
}: UseServiceCardAnimationsProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [isCardHovered, setIsCardHovered] = useState(false)

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, animationDelay)
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current)
      }
    }
  }, [animationDelay])

  // Handle mouse events
  const handleMouseEnter = () => {
    setIsCardHovered(true)
    onHover?.(serviceId)
  }

  const handleMouseLeave = () => {
    setIsCardHovered(false)
    onHover?.(null)
  }

  return {
    cardRef,
    isVisible,
    isCardHovered,
    handleMouseEnter,
    handleMouseLeave
  }
} 