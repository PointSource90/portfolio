import { useEffect, useState } from "react"
import { animate } from "framer-motion"

// Map Tailwind gradient classes to actual color values for smooth interpolation
// Copied from AnimatedGradientText to ensure sync
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

const hexToRgb = (hex: string): [number, number, number] => {
    const cleanHex = hex.replace("#", "")
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

type UseGradientCycleProps = {
    gradientClasses: string[]
    autoAnimateInterval?: number
    transitionDuration?: number
}

export function useGradientCycle({
    gradientClasses,
    autoAnimateInterval = 8000,
    transitionDuration = 3,
}: UseGradientCycleProps) {
    const [currentGradient, setCurrentGradient] = useState(0)
    const [nextGradient, setNextGradient] = useState(1)
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        if (autoAnimateInterval <= 0) return

        // Ensure we start consistent
        let progressValue = 0
        let isAnimating = false

        const startTransition = () => {
            if (isAnimating) return
            isAnimating = true
            progressValue = 0

            animate(0, 1, {
                duration: transitionDuration,
                ease: "easeInOut",
                onUpdate: (latest) => {
                    progressValue = latest
                    setProgress(latest)
                },
                onComplete: () => {
                    setCurrentGradient((prev) => (prev + 1) % gradientClasses.length)
                    setNextGradient((prev) => (prev + 1) % gradientClasses.length)
                    setProgress(0)
                    isAnimating = false
                },
            })
        }

        // Sync start: Start strictly after 1000ms to match the original component's logic if we want exact phase sync
        // Or we can just start immediately. The original component had `setTimeout` 1000ms.
        // We will keep the timeout to match standard behavior or allow it to be configured.
        // For now, let's keep the timeout to match the original implementation's "phase".
        const initialTimeout = setTimeout(() => {
            startTransition()
        }, 1000)

        const interval = setInterval(() => {
            startTransition()
        }, autoAnimateInterval)

        return () => {
            clearTimeout(initialTimeout)
            clearInterval(interval)
        }
    }, [gradientClasses.length, autoAnimateInterval, transitionDuration])

    // Compute styles
    const getGradientColors = (index: number) => {
        const gradientClass = gradientClasses[index % gradientClasses.length]
        return gradientColors[gradientClass] || gradientColors["from-pink-500 via-rose-500 to-orange-500"]
    }

    const currentColors = getGradientColors(currentGradient)
    const nextColors = getGradientColors(nextGradient)

    const fromColor = interpolateColor(currentColors.from, nextColors.from, progress)
    const viaColor = interpolateColor(currentColors.via, nextColors.via, progress)
    const toColor = interpolateColor(currentColors.to, nextColors.to, progress)

    const gradientStyle = `linear-gradient(to right, ${fromColor}, ${viaColor}, ${toColor})`

    return {
        gradientStyle,
        fromColor,
        viaColor,
        toColor,
        currentColors, // exposing these if needed for other uses
    }
}
