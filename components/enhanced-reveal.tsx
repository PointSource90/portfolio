"use client"

import { useEffect, useRef, useState } from "react"
import { useScroll, useTransform, motion } from "framer-motion"
import { cn } from "@/lib/utils"

type EnhancedRevealProps = {
  children: React.ReactNode
  className?: string
  /** Delay before animation starts */
  delay?: number
  /** Animation direction */
  direction?: "up" | "down" | "left" | "right" | "fade"
  /** Distance to travel in pixels */
  distance?: number
  /** Enable color transition */
  enableColorTransition?: boolean
  /** Color classes to transition through */
  colorClasses?: string[]
}

export function EnhancedReveal({
  children,
  className,
  delay = 0,
  direction = "up",
  distance = 50,
  enableColorTransition = false,
  colorClasses = ["text-white", "text-pink-400", "text-blue-400", "text-purple-400"],
}: EnhancedRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "start 0.3"],
  })

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])
  const [currentColor, setCurrentColor] = useState(colorClasses[0])

  // Direction-based transforms
  const getXTransform = () => {
    switch (direction) {
      case "left":
        return useTransform(scrollYProgress, [0, 1], [distance, 0])
      case "right":
        return useTransform(scrollYProgress, [0, 1], [-distance, 0])
      default:
        return useTransform(scrollYProgress, [0, 1], [0, 0])
    }
  }

  const getYTransform = () => {
    switch (direction) {
      case "up":
        return useTransform(scrollYProgress, [0, 1], [distance, 0])
      case "down":
        return useTransform(scrollYProgress, [0, 1], [-distance, 0])
      default:
        return useTransform(scrollYProgress, [0, 1], [0, 0])
    }
  }

  const x = getXTransform()
  const y = getYTransform()
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1])
  const blur = useTransform(scrollYProgress, [0, 1], [10, 0])

  // Color transition effect
  useEffect(() => {
    if (!enableColorTransition) return

    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const index = Math.floor(latest * colorClasses.length)
      setCurrentColor(colorClasses[Math.min(index, colorClasses.length - 1)])
    })

    return () => unsubscribe()
  }, [scrollYProgress, enableColorTransition, colorClasses])

  return (
    <motion.div
      ref={ref}
      className={cn(enableColorTransition && currentColor, className)}
      style={{
        opacity,
        x,
        y,
        scale,
        filter: `blur(${blur}px)`,
      }}
      transition={{ delay, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

