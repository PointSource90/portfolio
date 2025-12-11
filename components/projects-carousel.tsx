"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"
import { toast } from "sonner"

interface SiteExample {
    name: string
    imageSrc?: string
    href: string
    isComingSoon: boolean
    gradient: string
}

const siteExamples: SiteExample[] = [
    {
        name: "Barber & Co",
        imageSrc: "/images/barber-mockup.png",
        href: "https://barber-co.vercel.app/",
        isComingSoon: false,
        gradient: "from-pink-500 via-rose-500 to-orange-500",
    },
    {
        name: "Élégance Coiffure",
        imageSrc: undefined,
        href: "#",
        isComingSoon: true,
        gradient: "from-purple-500 via-violet-500 to-fuchsia-500",
    },
    {
        name: "Studio Beauté",
        imageSrc: undefined,
        href: "#",
        isComingSoon: true,
        gradient: "from-blue-500 via-cyan-500 to-teal-500",
    },
    {
        name: "Hair Luxury",
        imageSrc: undefined,
        href: "#",
        isComingSoon: true,
        gradient: "from-emerald-500 via-green-500 to-lime-500",
    },
]

export function ProjectsCarousel() {
    const [currentIndex] = useState(0)
    const currentSite = siteExamples[currentIndex]

    const showComingSoonToast = () => {
        toast("À venir ;)", {
            description: "D'autres réalisations arrivent bientôt !",
            position: "bottom-center",
            duration: 2000,
            style: {
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                color: "white",
            },
        })
    }

    return (
        <div className="relative">
            {/* Main Carousel */}
            <div className="relative max-w-5xl mx-auto">
                {/* Navigation Arrows - Show toast on click */}
                <motion.button
                    onClick={showComingSoonToast}
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "tween", duration: 0.12 }}
                    className="absolute left-0 top-1/2 z-20 -translate-y-1/2 -translate-x-4 md:-translate-x-8 flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-white/50 ring-1 ring-white/20 backdrop-blur-xl transition-colors duration-150 hover:bg-white/15 hover:text-white/70"
                >
                    <ChevronLeft className="h-7 w-7" />
                </motion.button>
                <motion.button
                    onClick={showComingSoonToast}
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "tween", duration: 0.12 }}
                    className="absolute right-0 top-1/2 z-20 -translate-y-1/2 translate-x-4 md:translate-x-8 flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-white/50 ring-1 ring-white/20 backdrop-blur-xl transition-colors duration-150 hover:bg-white/15 hover:text-white/70"
                >
                    <ChevronRight className="h-7 w-7" />
                </motion.button>

                {/* Carousel Container */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden rounded-3xl bg-white/5 p-4 md:p-6 ring-1 ring-white/10"
                >
                    {/* Browser Chrome */}
                    <div className="mb-4 flex items-center gap-2 rounded-xl bg-white/5 px-4 py-3">
                        <div className="h-3 w-3 rounded-full bg-red-500/70" />
                        <div className="h-3 w-3 rounded-full bg-yellow-500/70" />
                        <div className="h-3 w-3 rounded-full bg-green-500/70" />
                        <div className="ml-4 flex-1">
                            <div className="h-6 w-48 rounded-full bg-white/10 flex items-center px-3">
                                <span className="text-xs text-white/40 truncate">{currentSite.name}</span>
                            </div>
                        </div>
                    </div>

                    {/* Slide Content */}
                    <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                            className="absolute inset-0"
                        >
                            {currentSite.imageSrc && !currentSite.isComingSoon ? (
                                <Image
                                    src={currentSite.imageSrc}
                                    alt={currentSite.name}
                                    fill
                                    className="object-cover object-top"
                                    sizes="(max-width: 768px) 100vw, 80vw"
                                    priority
                                />
                            ) : (
                                <div className={`h-full w-full bg-gradient-to-br ${currentSite.gradient} opacity-60`}>
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm">
                                        <div className="text-center">
                                            <span className="inline-block rounded-full bg-white/10 px-8 py-4 text-2xl font-bold text-white backdrop-blur-sm ring-1 ring-white/20">
                                                Coming Soon
                                            </span>
                                            <p className="mt-4 text-lg text-white/70">{currentSite.name}</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    </div>

                    {/* Site Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="mt-6 flex items-center justify-between"
                    >
                        <div>
                            <h3 className="text-2xl font-bold text-white">{currentSite.name}</h3>
                            <p className="text-white/50">
                                {currentSite.isComingSoon ? "Bientôt disponible" : "Site en production"}
                            </p>
                        </div>
                        {!currentSite.isComingSoon && (
                            <motion.a
                                href={currentSite.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                transition={{ type: "tween", duration: 0.12 }}
                                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-orange-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-pink-500/25 transition-shadow duration-150 hover:shadow-xl hover:shadow-pink-500/30"
                            >
                                Voir le site
                                <ExternalLink className="h-4 w-4" />
                            </motion.a>
                        )}
                    </motion.div>
                </motion.div>

                {/* Dots Indicator - Show toast on click */}
                <div className="mt-8 flex justify-center gap-3">
                    {siteExamples.map((_, index) => (
                        <motion.button
                            key={index}
                            onClick={index !== currentIndex ? showComingSoonToast : undefined}
                            whileHover={{ scale: 1.15 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ type: "tween", duration: 0.1 }}
                            className={`relative h-3 rounded-full transition-all duration-200 ${index === currentIndex
                                ? "w-12 bg-gradient-to-r from-pink-500 to-orange-500"
                                : "w-3 bg-white/30 hover:bg-white/50 cursor-pointer"
                                }`}
                        />
                    ))}
                </div>

                {/* Thumbnails Preview - Show toast on click */}
                <div className="mt-8 flex justify-center gap-4">
                    {siteExamples.map((site, index) => (
                        <motion.button
                            key={site.name}
                            onClick={index !== currentIndex ? showComingSoonToast : undefined}
                            whileHover={{ scale: 1.03, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ type: "tween", duration: 0.12 }}
                            className={`relative overflow-hidden rounded-xl transition-all duration-150 ${index === currentIndex
                                ? "ring-2 ring-pink-500 ring-offset-2 ring-offset-[#0a0a0a]"
                                : "ring-1 ring-white/10 opacity-50 hover:opacity-80 cursor-pointer"
                                }`}
                        >
                            <div className="w-24 h-16 md:w-32 md:h-20">
                                {site.imageSrc && !site.isComingSoon ? (
                                    <Image
                                        src={site.imageSrc}
                                        alt={site.name}
                                        fill
                                        className="object-cover object-top"
                                        sizes="128px"
                                    />
                                ) : (
                                    <div className={`h-full w-full bg-gradient-to-br ${site.gradient} opacity-60 flex items-center justify-center`}>
                                        <span className="text-xs text-white/80 font-medium">Soon</span>
                                    </div>
                                )}
                            </div>
                        </motion.button>
                    ))}
                </div>
            </div>
        </div>
    )
}
