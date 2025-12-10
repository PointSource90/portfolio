"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"

interface BrowserMockupCardProps {
  title: string
  gradient: string
  href: string
}

export function BrowserMockupCard({ title, gradient, href }: BrowserMockupCardProps) {
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateXValue = ((y - centerY) / centerY) * -10
    const rotateYValue = ((x - centerX) / centerX) * 10

    setRotateX(rotateXValue)
    setRotateY(rotateYValue)
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
  }

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: "1000px",
      }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        className="relative overflow-hidden rounded-xl bg-white/5 p-3 shadow-2xl ring-1 ring-white/10 transition-shadow duration-300 group-hover:shadow-[0_20px_60px_-15px_rgba(255,255,255,0.1)]"
        style={{
          transformStyle: "preserve-3d",
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        }}
        transition={{ duration: 0.2 }}
      >
        {/* Browser Chrome */}
        <div className="mb-2 flex items-center gap-1.5 rounded-t-lg bg-white/5 px-3 py-2">
          <div className="h-2 w-2 rounded-full bg-red-500/70" />
          <div className="h-2 w-2 rounded-full bg-yellow-500/70" />
          <div className="h-2 w-2 rounded-full bg-green-500/70" />
        </div>

        {/* Content - Gradient Rectangle */}
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
          <div className={`h-full w-full bg-gradient-to-br ${gradient} opacity-80`} />
          <div className="absolute inset-0 bg-black/10" />
        </div>

        {/* Title */}
        <div className="mt-4 px-2 pb-2">
          <h3 className="text-balance text-lg font-semibold tracking-tight text-white">{title}</h3>
        </div>
      </motion.div>
    </motion.a>
  )
}
