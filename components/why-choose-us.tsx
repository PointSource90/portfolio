"use client"

import React from "react"
import { motion } from "framer-motion"
import { Check, X, Zap, Sparkles, Shield, TrendingUp, Users, Globe } from "lucide-react"
import { AnimatedGradientText } from "./animated-gradient-text"

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
        description: "Payer une seule fois votre site, les changements mineurs sont pris en charges la première année. ",
        gradient: "from-teal-500 to-cyan-500",
    },
]

const comparisonData = [
    {
        feature: "Commission sur réservations",
        us: "0%",
        planity: "Jusqu'à 3%",
    },
    {
        feature: "Abonnement mensuel",
        us: "Fixe et transparent",
        planity: "Variable selon options",
    },
    {
        feature: "Votre propre marque",
        us: "100% personnalisé",
        planity: "Template Planity",
    },
    {
        feature: "SEO / Référencement",
        us: "Optimisé pour Google",
        planity: "Limité à la plateforme",
    },
    {
        feature: "Indépendance",
        us: "Vous êtes propriétaire",
        planity: "Dépendance à la plateforme",
    },
    {
        feature: "Données clients",
        us: "100% les vôtres",
        planity: "Partagées avec Planity",
    },
]

export function WhyChooseUsSection() {
    return (
        <div>
            {/* Advantages Grid */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-16">
                {advantages.map((advantage, index) => (
                    <motion.div
                        key={advantage.title}
                        initial={{ y: 40, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{
                            delay: index * 0.05,
                            duration: 0.5,
                            ease: [0.25, 0.46, 0.45, 0.94]
                        }}
                        whileHover={{ scale: 1.02, y: -4 }}
                        whileTap={{ scale: 0.98 }}
                        className="group relative overflow-hidden rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur-sm transition-colors duration-200 hover:bg-white/10 hover:ring-white/20 cursor-default"
                    >
                        <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${advantage.gradient} opacity-20 rounded-full blur-3xl group-hover:opacity-40 transition-opacity duration-200`} />

                        <div className={`relative z-10 mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${advantage.gradient} shadow-lg`}>
                            <advantage.icon className="h-7 w-7 text-white" />
                        </div>
                        <h3 className="relative z-10 text-xl font-bold text-white mb-2">{advantage.title}</h3>
                        <p className="relative z-10 text-white/60 leading-relaxed">{advantage.description}</p>
                    </motion.div>
                ))}
            </div>

            {/* Comparison Table */}
            <motion.div
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
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
                        Comparatif vs Planity
                    </AnimatedGradientText>
                </h3>

                <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
                    <div className="overflow-x-auto">
                        <table className="w-full min-w-[500px]">
                            <thead>
                                <tr className="border-b border-white/10 bg-white/5">
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-white/80">Critère</th>
                                    <th className="px-6 py-4 text-center text-sm font-semibold">
                                        <span className="inline-flex items-center gap-2">
                                            <span className="h-3 w-3 rounded-full bg-gradient-to-r from-emerald-500 to-green-500" />
                                            <AnimatedGradientText
                                                gradientClasses={[
                                                    "from-emerald-500 via-green-500 to-lime-500",
                                                    "from-pink-500 via-rose-500 to-orange-500",
                                                ]}
                                                autoAnimateInterval={10000}
                                                transitionDuration={4}
                                            >
                                                Chez Nous
                                            </AnimatedGradientText>
                                        </span>
                                    </th>
                                    <th className="px-6 py-4 text-center text-sm font-semibold text-white/50">Planity</th>
                                </tr>
                            </thead>
                            <tbody>
                                {comparisonData.map((row, index) => (
                                    <tr
                                        key={row.feature}
                                        className={`border-b border-white/5 transition-colors hover:bg-white/5 ${index % 2 === 0 ? "bg-white/[0.02]" : ""
                                            }`}
                                    >
                                        <td className="px-6 py-4 text-sm text-white/70 font-medium">{row.feature}</td>
                                        <td className="px-6 py-4 text-center">
                                            <div className="flex items-center justify-center gap-2">
                                                <Check className="h-5 w-5 text-emerald-500" />
                                                <span className="text-sm font-medium text-emerald-400">{row.us}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            <div className="flex items-center justify-center gap-2">
                                                <X className="h-5 w-5 text-red-400/60" />
                                                <span className="text-sm text-white/40">{row.planity}</span>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
