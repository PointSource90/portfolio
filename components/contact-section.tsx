"use client"

import React from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MessageSquare, MapPin, Clock } from "lucide-react"
import { AnimatedGradientText } from "./animated-gradient-text"

export function ContactSection() {
    return (
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-blue-500/20 p-8 md:p-12 lg:p-16 ring-1 ring-white/20 backdrop-blur-sm">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-pink-500/30 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/30 rounded-full blur-[120px]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/20 rounded-full blur-[150px]" />

            <div className="relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
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
                    </h2>
                    <p className="text-lg text-white/70 max-w-2xl mx-auto">
                        Obtenez un devis gratuit et sans engagement. Notre équipe vous répond sous 24h.
                    </p>
                </motion.div>

                {/* Contact Cards */}
                <div className="grid gap-6 sm:grid-cols-3 mb-12">
                    <motion.a
                        href="mailto:contact@pointsource.fr"
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 0.3 }}
                        whileHover={{ scale: 1.02, y: -3 }}
                        whileTap={{ scale: 0.98 }}
                        style={{ willChange: "transform" }}
                        className="group flex flex-col items-center gap-4 rounded-2xl bg-white/10 p-6 ring-1 ring-white/20 backdrop-blur-sm transition-colors duration-150 hover:bg-white/15"
                    >
                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 to-rose-500 shadow-lg shadow-pink-500/25">
                            <Mail className="h-8 w-8 text-white" />
                        </div>
                        <div className="text-center">
                            <h3 className="text-lg font-bold text-white mb-1">Email</h3>
                            <p className="text-sm text-white/60">contact@pointsource.fr</p>
                        </div>
                    </motion.a>

                    <motion.a
                        href="tel:+33600000000"
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15, duration: 0.3 }}
                        whileHover={{ scale: 1.02, y: -3 }}
                        whileTap={{ scale: 0.98 }}
                        style={{ willChange: "transform" }}
                        className="group flex flex-col items-center gap-4 rounded-2xl bg-white/10 p-6 ring-1 ring-white/20 backdrop-blur-sm transition-colors duration-150 hover:bg-white/15"
                    >
                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg shadow-blue-500/25">
                            <Phone className="h-8 w-8 text-white" />
                        </div>
                        <div className="text-center">
                            <h3 className="text-lg font-bold text-white mb-1">Téléphone</h3>
                            <p className="text-sm text-white/60">+33 6 00 00 00 00</p>
                        </div>
                    </motion.a>

                    <motion.a
                        href="https://wa.me/33600000000"
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.3 }}
                        whileHover={{ scale: 1.02, y: -3 }}
                        whileTap={{ scale: 0.98 }}
                        style={{ willChange: "transform" }}
                        className="group flex flex-col items-center gap-4 rounded-2xl bg-white/10 p-6 ring-1 ring-white/20 backdrop-blur-sm transition-colors duration-150 hover:bg-white/15"
                    >
                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-green-500 shadow-lg shadow-emerald-500/25">
                            <MessageSquare className="h-8 w-8 text-white" />
                        </div>
                        <div className="text-center">
                            <h3 className="text-lg font-bold text-white mb-1">WhatsApp</h3>
                            <p className="text-sm text-white/60">Réponse instantanée</p>
                        </div>
                    </motion.a>
                </div>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.25, duration: 0.4 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <motion.a
                        href="mailto:contact@pointsource.fr"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ type: "tween", duration: 0.15 }}
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-10 py-4 text-base font-bold text-gray-900 shadow-2xl transition-shadow duration-150 hover:shadow-white/25"
                    >
                        <Mail className="h-5 w-5" />
                        Demander un devis gratuit
                    </motion.a>
                    <motion.a
                        href="https://wa.me/33600000000"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ type: "tween", duration: 0.15 }}
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-10 py-4 text-base font-bold text-white shadow-2xl shadow-emerald-500/25 transition-shadow duration-150 hover:shadow-emerald-500/40"
                    >
                        <MessageSquare className="h-5 w-5" />
                        Discuter sur WhatsApp
                    </motion.a>
                </motion.div>

                {/* Trust Badges */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-white/50"
                >
                    <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>Réponse sous 24h</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-white/30" />
                    </div>
                    <div className="flex items-center gap-2">
                        <span>Devis gratuit</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-white/30" />
                    </div>
                    <div className="flex items-center gap-2">
                        <span>Sans engagement</span>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
