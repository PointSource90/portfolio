"use client"

import { useEffect, useRef, useState } from "react"
import { motion, animate } from "framer-motion"
import { cn } from "@/lib/utils"

type AnimatedGradientTextProps = {
  children: React.ReactNode
  className?: string
  /** Gradient color classes */
  gradientClasses?: string[]
  /** Auto-animate interval in ms (0 to disable) */
  autoAnimateInterval?: number
  /** Transition duration in seconds */
  transitionDuration?: number
}

// Map Tailwind gradient classes to actual color values for smooth interpolation
const gradientColors: Record<string, { from: string; via: string; to: string }> = {
  "from-white via-white to-white": {
    from: "#ffffff",
    via: "#ffffff",
    to: "#ffffff",
  },
  "from-pink-500 via-rose-500 to-orange-500": {
    from: "#ec4899",
    via: "#f43f5e",
    to: "#f97316",
  },
  "from-blue-500 via-cyan-500 to-teal-500": {
    from: "#3b82f6",
    via: "#06b6d4",
    to: "#14b8a6",
  },
  "from-purple-500 via-violet-500 to-fuchsia-500": {
    from: "#a855f7",
    via: "#8b5cf6",
    to: "#d946ef",
  },
  "from-emerald-500 via-green-500 to-lime-500": {
    from: "#10b981",
    via: "#22c55e",
    to: "#84cc16",
  },
}

export function AnimatedGradientText({
  children,
  className,
  gradientClasses = [
    "from-pink-500 via-rose-500 to-orange-500",
    "from-blue-500 via-cyan-500 to-teal-500",
    "from-purple-500 via-violet-500 to-fuchsia-500",
    "from-emerald-500 via-green-500 to-lime-500",
  ],
  autoAnimateInterval = 8000, // Augmenté à 8 secondes par défaut
  transitionDuration = 3, // 3 secondes pour la transition
}: AnimatedGradientTextProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const [currentGradient, setCurrentGradient] = useState(0)
  const [nextGradient, setNextGradient] = useState(1)
  const [progress, setProgress] = useState(0)

  // Auto-animate avec transition progressive
  useEffect(() => {
    if (autoAnimateInterval <= 0) return
    
    let progressValue = 0
    let isAnimating = false

    const startTransition = () => {
      if (isAnimating) return
      isAnimating = true
      progressValue = 0

      // Animer le progress de 0 à 1
      animate(0, 1, {
        duration: transitionDuration,
        ease: "easeInOut",
        onUpdate: (latest) => {
          progressValue = latest
          setProgress(latest)
        },
        onComplete: () => {
          // Passer à la couleur suivante
          setCurrentGradient(nextGradient)
          setNextGradient((nextGradient + 1) % gradientClasses.length)
          setProgress(0)
          isAnimating = false
        },
      })
    }

    // Démarrer la première transition après un délai
    const initialTimeout = setTimeout(() => {
      startTransition()
    }, 1000)

    // Répéter toutes les X secondes (intervalle + durée de transition)
    const interval = setInterval(() => {
      startTransition()
    }, autoAnimateInterval)

    return () => {
      clearTimeout(initialTimeout)
      clearInterval(interval)
    }
  }, [gradientClasses.length, autoAnimateInterval, transitionDuration, nextGradient])

  // Calculer les couleurs interpolées
  // Calculer les couleurs interpolées avec fallback sur la première couleur colorée
  const getGradientColors = (index: number) => {
    const gradientClass = gradientClasses[index % gradientClasses.length]
    return gradientColors[gradientClass] || gradientColors["from-pink-500 via-rose-500 to-orange-500"]
  }
  
  const currentColors = getGradientColors(currentGradient)
  const nextColors = getGradientColors(nextGradient)

  const hexToRgb = (hex: string): [number, number, number] => {
    const cleanHex = hex.replace("#", "")
    // Gérer les formats courts (#fff) et longs (#ffffff)
    if (cleanHex.length === 3) {
      const r = parseInt(cleanHex[0] + cleanHex[0], 16)
      const g = parseInt(cleanHex[1] + cleanHex[1], 16)
      const b = parseInt(cleanHex[2] + cleanHex[2], 16)
      return [r, g, b]
    }
    const r = parseInt(cleanHex.substring(0, 2), 16)
    const g = parseInt(cleanHex.substring(2, 4), 16)
    const b = parseInt(cleanHex.substring(4, 6), 16)
    return [r, g, b]
  }

  const interpolateColor = (color1: string, color2: string, t: number) => {
    const [r1, g1, b1] = hexToRgb(color1)
    const [r2, g2, b2] = hexToRgb(color2)

    const r = Math.round(r1 + (r2 - r1) * t)
    const g = Math.round(g1 + (g2 - g1) * t)
    const b = Math.round(b1 + (b2 - b1) * t)

    return `rgb(${r}, ${g}, ${b})`
  }

  const fromColor = interpolateColor(currentColors.from, nextColors.from, progress)
  const viaColor = interpolateColor(currentColors.via, nextColors.via, progress)
  const toColor = interpolateColor(currentColors.to, nextColors.to, progress)

  return (
    <span
      ref={ref}
      className={cn(
        "inline-block bg-gradient-to-r bg-clip-text text-white",
        className
      )}
      style={{
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        backgroundImage: `linear-gradient(to right, ${fromColor}, ${viaColor}, ${toColor})`,
        transition: `background-image ${transitionDuration}s ease-in-out`,
      }}
    >
      {children}
    </span>
  )
}

