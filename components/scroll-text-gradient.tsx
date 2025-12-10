"use client"

import { useEffect, useRef, useState } from "react"
import { useScroll, useTransform, motion } from "framer-motion"
import { cn } from "@/lib/utils"

type ScrollTextGradientProps = {
  children: React.ReactNode
  className?: string
  /** Gradient colors to cycle through */
  gradients?: string[]
  /** Scroll progress threshold to start animation (0-1) */
  startOffset?: number
  /** Scroll progress threshold to end animation (0-1) */
  endOffset?: number
}

export function ScrollTextGradient({
  children,
  className,
  gradients = [
    "from-white via-white to-white",
    "from-pink-400 via-rose-400 to-orange-400",
    "from-blue-400 via-cyan-400 to-teal-400",
    "from-purple-400 via-violet-400 to-fuchsia-400",
    "from-emerald-400 via-green-400 to-lime-400",
  ],
  startOffset = 0,
  endOffset = 1,
}: ScrollTextGradientProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  // Map scroll progress to gradient index
  const gradientIndex = useTransform(
    scrollYProgress,
    [startOffset, endOffset],
    [0, gradients.length - 1]
  )

  // Create animated gradient class
  const [currentGradient, setCurrentGradient] = useState(gradients[0])

  useEffect(() => {
    const unsubscribe = gradientIndex.on("change", (latest) => {
      const index = Math.floor(latest)
      const nextIndex = Math.min(index + 1, gradients.length - 1)
      const progress = latest - index
      
      // Interpolate between two gradients
      if (progress < 0.5) {
        setCurrentGradient(gradients[index])
      } else {
        setCurrentGradient(gradients[nextIndex])
      }
    })

    return () => unsubscribe()
  }, [gradientIndex, gradients])

  return (
    <motion.div
      ref={ref}
      className={cn("relative", className)}
      style={{
        backgroundImage: `linear-gradient(to right, ${currentGradient})`,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
    >
      {children}
    </motion.div>
  )
}

