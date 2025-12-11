"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ChevronDown, Mail, Phone, MessageSquare, ChevronLeft, ChevronRight, ExternalLink, Sparkles, Zap, Shield, TrendingUp, Users, Globe } from "lucide-react"
import { AnimatedGradientText } from "./animated-gradient-text"

interface SiteExample {
    name: string
    imageSrc?: string
    href: string
    isComingSoon: boolean
}

interface ProjectCardProps {
    title: string
    gradient: string
    imageSrc?: string
    isComingSoon?: boolean
    isExpanded: boolean
    onClick: () => void
}

interface ProjectShowcaseSectionProps {
    demos: {
        title: string
        gradient: string
        href: string
        imageSrc?: string
        isComingSoon: boolean
    }[]
}

const salonExamples: SiteExample[] = [
    {
        name: "Barber & Co",
        imageSrc: "/images/barber-mockup.png",
        href: "https://barber-co.vercel.app/",
        isComingSoon: false,
    },
    {
        name: "Élégance Coiffure",
        imageSrc: undefined,
        href: "#",
        isComingSoon: true,
    },
    {
        name: "Studio Beauté",
        imageSrc: undefined,
        href: "#",
        isComingSoon: true,
    },
    {
        name: "Hair Luxury",
        imageSrc: undefined,
        href: "#",
        isComingSoon: true,
    },
]

const advantages = [
    {
        icon: Zap,
        title: "0% Commission",
        description: "Aucune commission sur vos réservations. Planity prend jusqu'à 3% sur chaque rendez-vous.",
        gradient: "from-yellow-500 to-orange-500",
    },
    {
        icon: Sparkles,
        title: "100% Personnalisé",
        description: "Un site à votre image, pas un template générique. Votre marque, votre identité.",
        gradient: "from-pink-500 to-rose-500",
    },
    {
        icon: Globe,
        title: "SEO Optimisé",
        description: "Référencement Google optimisé pour attirer de nouveaux clients naturellement.",
        gradient: "from-blue-500 to-cyan-500",
    },
    {
        icon: Shield,
        title: "Indépendance Totale",
        description: "Vous êtes propriétaire de votre site. Aucune dépendance à une plateforme tierce.",
        gradient: "from-emerald-500 to-green-500",
    },
    {
        icon: Users,
        title: "Vos Données",
        description: "100% de vos données clients vous appartiennent. Pas de partage avec des tiers.",
        gradient: "from-purple-500 to-violet-500",
    },
    {
        icon: TrendingUp,
        title: "Prix Fixe",
        description: "Abonnement transparent et fixe. Pas de surprise, pas de coûts cachés.",
        gradient: "from-teal-500 to-cyan-500",
    },
]

// Card Component (just the trigger)
function ProjectCard({ title, gradient, imageSrc, isComingSoon = false, isExpanded, onClick }: ProjectCardProps) {
    const [rotateX, setRotateX] = useState(0)
    const [rotateY, setRotateY] = useState(0)

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (isExpanded) return
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
        <motion.div
            className={`group block cursor-pointer ${isComingSoon ? "opacity-60 cursor-not-allowed" : ""}`}
            onClick={() => !isComingSoon && onClick()}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ perspective: "1000px" }}
            whileHover={!isExpanded && !isComingSoon ? { scale: 1.02 } : {}}
            transition={{ duration: 0.2 }}
        >
            <motion.div
                className={`relative overflow-hidden rounded-xl bg-white/5 p-3 shadow-2xl ring-1 transition-shadow duration-300 ${isExpanded
                        ? "ring-pink-500/50 shadow-[0_20px_60px_-15px_rgba(236,72,153,0.3)]"
                        : "ring-white/10 group-hover:shadow-[0_20px_60px_-15px_rgba(255,255,255,0.1)]"
                    }`}
                style={{
                    transformStyle: "preserve-3d",
                    transform: !isExpanded ? `rotateX(${rotateX}deg) rotateY(${rotateY}deg)` : undefined,
                }}
            >
                <div className="mb-2 flex items-center gap-1.5 rounded-t-lg bg-white/5 px-3 py-2">
                    <div className="h-2 w-2 rounded-full bg-red-500/70" />
                    <div className="h-2 w-2 rounded-full bg-yellow-500/70" />
                    <div className="h-2 w-2 rounded-full bg-green-500/70" />
                </div>

                <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                    {imageSrc ? (
                        <Image src={imageSrc} alt={title} fill className="object-cover object-top" sizes="(max-width: 768px) 100vw, 50vw" />
                    ) : (
                        <div className={`h-full w-full bg-gradient-to-br ${gradient} opacity-80`} />
                    )}
                    <div className="absolute inset-0 bg-black/10" />

                    {isComingSoon && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm">
                            <span className="rounded-full bg-white/10 px-4 py-2 text-lg font-semibold text-white backdrop-blur-sm">
                                Coming Soon
                            </span>
                        </div>
                    )}
                </div>

                <div className="mt-4 flex items-center justify-between px-2 pb-2">
                    <h3 className="text-balance text-lg font-semibold tracking-tight text-white">{title}</h3>
                    {!isComingSoon ? (
                        <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.3 }}>
                            <ChevronDown className="h-5 w-5 text-white/60" />
                        </motion.div>
                    ) : (
                        <span className="rounded-full bg-white/10 px-2 py-0.5 text-xs text-white/60">Bientôt</span>
                    )}
                </div>
            </motion.div>
        </motion.div>
    )
}

// Expanded Content Component
function ExpandedContent({ gradient, href }: { gradient: string; href: string }) {
    const [currentExample, setCurrentExample] = useState(0)
    const currentSite = salonExamples[currentExample]

    const nextExample = () => {
        setCurrentExample((prev) => (prev + 1) % salonExamples.length)
    }

    const prevExample = () => {
        setCurrentExample((prev) => (prev - 1 + salonExamples.length) % salonExamples.length)
    }

    return (
        <div className="pt-8">
            {/* Decorative gradient connector */}
            <div className="h-1 w-full rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 mb-8" />

            {/* Advantages Section */}
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="mb-10"
            >
                <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
                    <AnimatedGradientText
                        gradientClasses={[
                            "from-pink-500 via-rose-500 to-orange-500",
                            "from-blue-500 via-cyan-500 to-teal-500",
                        ]}
                        autoAnimateInterval={10000}
                        transitionDuration={4}
                    >
                        Pourquoi nous choisir ?
                    </AnimatedGradientText>
                </h3>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {advantages.map((advantage, index) => (
                        <motion.div
                            key={advantage.title}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.15 + index * 0.05 }}
                            whileHover={{ scale: 1.03, y: -3 }}
                            className="group relative overflow-hidden rounded-xl bg-white/5 p-5 ring-1 ring-white/10 backdrop-blur-sm transition-all hover:bg-white/10 hover:ring-white/20"
                        >
                            <div className={`absolute -top-16 -right-16 w-32 h-32 bg-gradient-to-br ${advantage.gradient} opacity-20 rounded-full blur-2xl group-hover:opacity-40 transition-opacity`} />

                            <div className={`relative z-10 mb-3 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br ${advantage.gradient} shadow-lg`}>
                                <advantage.icon className="h-5 w-5 text-white" />
                            </div>
                            <h4 className="relative z-10 text-lg font-bold text-white mb-1.5">{advantage.title}</h4>
                            <p className="relative z-10 text-sm text-white/60 leading-relaxed">{advantage.description}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Site Examples Carousel */}
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mb-10"
            >
                <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
                    <AnimatedGradientText
                        gradientClasses={[
                            "from-emerald-500 via-green-500 to-lime-500",
                            "from-blue-500 via-cyan-500 to-teal-500",
                        ]}
                        autoAnimateInterval={10000}
                        transitionDuration={4}
                    >
                        Nos Réalisations
                    </AnimatedGradientText>
                </h3>

                <div className="relative max-w-4xl mx-auto">
                    {/* Navigation */}
                    <button
                        onClick={prevExample}
                        className="absolute left-0 top-1/2 z-10 -translate-y-1/2 -translate-x-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/20 backdrop-blur-sm transition-all hover:bg-white/20 hover:scale-110"
                    >
                        <ChevronLeft className="h-6 w-6" />
                    </button>
                    <button
                        onClick={nextExample}
                        className="absolute right-0 top-1/2 z-10 -translate-y-1/2 translate-x-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/20 backdrop-blur-sm transition-all hover:bg-white/20 hover:scale-110"
                    >
                        <ChevronRight className="h-6 w-6" />
                    </button>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentExample}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden rounded-2xl bg-white/5 p-5 ring-1 ring-white/10"
                        >
                            <div className="mb-3 flex items-center gap-2 rounded-lg bg-white/5 px-4 py-2">
                                <div className="h-3 w-3 rounded-full bg-red-500/70" />
                                <div className="h-3 w-3 rounded-full bg-yellow-500/70" />
                                <div className="h-3 w-3 rounded-full bg-green-500/70" />
                                <span className="ml-3 text-sm text-white/50">{currentSite.name}</span>
                            </div>

                            <div className="relative aspect-video overflow-hidden rounded-xl">
                                {currentSite.imageSrc && !currentSite.isComingSoon ? (
                                    <Image
                                        src={currentSite.imageSrc}
                                        alt={currentSite.name}
                                        fill
                                        className="object-cover object-top"
                                        sizes="(max-width: 768px) 100vw, 60vw"
                                    />
                                ) : (
                                    <div className={`h-full w-full bg-gradient-to-br ${gradient} opacity-60`}>
                                        <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm">
                                            <div className="text-center">
                                                <span className="rounded-full bg-white/10 px-6 py-3 text-xl font-bold text-white backdrop-blur-sm">
                                                    Coming Soon
                                                </span>
                                                <p className="mt-3 text-white/60">{currentSite.name}</p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="mt-5 flex items-center justify-between">
                                <div>
                                    <h4 className="text-xl font-bold text-white">{currentSite.name}</h4>
                                    <p className="text-sm text-white/50">
                                        {currentSite.isComingSoon ? "Bientôt disponible" : "Site en production"}
                                    </p>
                                </div>
                                {!currentSite.isComingSoon && (
                                    <a
                                        href={currentSite.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-orange-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-pink-500/25 transition-all hover:scale-105"
                                    >
                                        Voir le site
                                        <ExternalLink className="h-4 w-4" />
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Dots */}
                    <div className="mt-6 flex justify-center gap-2">
                        {salonExamples.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentExample(index)}
                                className={`h-2.5 rounded-full transition-all ${index === currentExample
                                        ? "w-10 bg-gradient-to-r from-pink-500 to-orange-500"
                                        : "w-2.5 bg-white/30 hover:bg-white/50"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Contact CTA */}
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
            >
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-blue-500/20 p-8 md:p-10 ring-1 ring-white/20 backdrop-blur-sm">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/30 rounded-full blur-[100px]" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/30 rounded-full blur-[100px]" />

                    <div className="relative z-10 text-center">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            <AnimatedGradientText
                                gradientClasses={[
                                    "from-white via-white to-white",
                                    "from-pink-500 via-rose-500 to-orange-500",
                                ]}
                                autoAnimateInterval={10000}
                                transitionDuration={4}
                            >
                                Prêt à transformer votre business ?
                            </AnimatedGradientText>
                        </h3>
                        <p className="text-white/70 mb-8 max-w-xl mx-auto">
                            Obtenez un devis gratuit et sans engagement. Réponse garantie sous 24h.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="mailto:contact@pointsource.fr"
                                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-bold text-gray-900 shadow-xl transition-all hover:scale-105"
                            >
                                <Mail className="h-5 w-5" />
                                Nous contacter
                            </a>
                            <a
                                href="tel:+33600000000"
                                className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 px-8 py-3.5 text-sm font-bold text-white ring-1 ring-white/30 backdrop-blur-sm transition-all hover:bg-white/20 hover:scale-105"
                            >
                                <Phone className="h-5 w-5" />
                                Appeler
                            </a>
                            <a
                                href="https://wa.me/33600000000"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-8 py-3.5 text-sm font-bold text-white shadow-xl shadow-emerald-500/25 transition-all hover:scale-105"
                            >
                                <MessageSquare className="h-5 w-5" />
                                WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

// Main Section Component that manages state
export function ProjectShowcaseSection({ demos }: ProjectShowcaseSectionProps) {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

    const handleCardClick = (index: number) => {
        if (demos[index].isComingSoon) return
        setExpandedIndex(expandedIndex === index ? null : index)
    }

    const expandedDemo = expandedIndex !== null ? demos[expandedIndex] : null

    return (
        <div>
            {/* Cards Grid */}
            <div className="grid gap-8 sm:grid-cols-2 max-w-4xl mx-auto">
                {demos.map((demo, index) => (
                    <ProjectCard
                        key={demo.title}
                        title={demo.title}
                        gradient={demo.gradient}
                        imageSrc={demo.imageSrc}
                        isComingSoon={demo.isComingSoon}
                        isExpanded={expandedIndex === index}
                        onClick={() => handleCardClick(index)}
                    />
                ))}
            </div>

            {/* Expanded Content - Full Width Below Grid */}
            <AnimatePresence>
                {expandedDemo && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden mt-8"
                    >
                        <ExpandedContent gradient={expandedDemo.gradient} href={expandedDemo.href} />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
