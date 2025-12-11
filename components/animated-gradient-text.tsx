"use client"

import { useRef } from "react"
import { useGradientCycle } from "@/hooks/use-gradient-cycle"
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
// Gradient colors logic moved to use-gradient-cycle hook

export function AnimatedGradientText({
  children,
  className,
  gradientClasses = [
    "from-pink-500 via-rose-500 to-orange-500",
    "from-blue-500 via-cyan-500 to-teal-500",
    "from-purple-500 via-violet-500 to-fuchsia-500",
    "from-emerald-500 via-green-500 to-lime-500",
  ],
  autoAnimateInterval = 8000,
  transitionDuration = 3,
}: AnimatedGradientTextProps) {
  const { gradientStyle } = useGradientCycle({
    gradientClasses,
    autoAnimateInterval,
    transitionDuration,
  })

  return (
    <span
      className={cn(
        "inline-block bg-gradient-to-r bg-clip-text text-white",
        className
      )}
      style={{
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        backgroundImage: gradientStyle,
        transition: `background-image ${transitionDuration}s ease-in-out`,
      }}
    >
      {children}
    </span>
  )
}

