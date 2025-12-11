"use client"

import { useGradientCycle } from "@/hooks/use-gradient-cycle"

export function IntroLogo() {
    const { fromColor, viaColor, toColor } = useGradientCycle({
        gradientClasses: [
            "from-pink-500 via-rose-500 to-orange-500",
            "from-blue-500 via-cyan-500 to-teal-500",
            "from-purple-500 via-violet-500 to-fuchsia-500",
            "from-emerald-500 via-green-500 to-lime-500",
        ],
        autoAnimateInterval: 10000,
        transitionDuration: 4,
    })

    return (
        <div className="fixed top-6 left-6 z-50">
            <svg
                width="160"
                height="36"
                viewBox="0 0 360 80"
                xmlns="http://www.w3.org/2000/svg"
                className="md:w-[180px] md:h-[40px]"
            >
                {/* Define the gradient for SOURCE text */}
                <defs>
                    <linearGradient id="sourceGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor={fromColor} />
                        <stop offset="50%" stopColor={viaColor} />
                        <stop offset="100%" stopColor={toColor} />
                    </linearGradient>
                </defs>

                {/* Outer border - gradient colored */}
                <rect
                    x="1"
                    y="1"
                    width="358"
                    height="78"
                    rx="4"
                    fill="none"
                    stroke="url(#sourceGradient)"
                    strokeWidth="2"
                />

                {/* Dark gray box for POINT */}
                <rect x="12" y="12" width="145" height="56" rx="4" fill="#1a1a1a" />

                {/* POINT text in white - stays white */}
                <text
                    x="85"
                    y="50"
                    fontFamily="'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif"
                    fontSize="26"
                    fontWeight="500"
                    fill="#ffffff"
                    textAnchor="middle"
                    letterSpacing="3"
                >
                    POINT
                </text>

                {/* SOURCE text - gradient colored */}
                <text
                    x="245"
                    y="50"
                    fontFamily="'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif"
                    fontSize="26"
                    fontWeight="500"
                    fill="url(#sourceGradient)"
                    textAnchor="middle"
                    letterSpacing="3"
                >
                    SOURCE
                </text>
            </svg>
        </div>
    )
}
