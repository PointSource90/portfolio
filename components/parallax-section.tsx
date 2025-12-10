"use client"

import { useRef } from "react"
import { useScroll, useTransform, motion } from "framer-motion"
import { cn } from "@/lib/utils"

type ParallaxSectionProps = {
  children: React.ReactNode
  className?: string
  /** Parallax speed multiplier (negative for reverse) */
  speed?: number
  /** Additional offset in pixels */
  offset?: number
}

export function ParallaxSection({
  children,
  className,
  speed = 0.5,
  offset = 0,
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [offset, offset - 200 * speed])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95])

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      style={{ y, opacity, scale }}
    >
      {children}
    </motion.div>
  )
}

