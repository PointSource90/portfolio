"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AnimatedGradientText } from "@/components/animated-gradient-text"
import { EnhancedReveal } from "@/components/enhanced-reveal"
import { ParallaxSection } from "@/components/parallax-section"
import { WhyChooseUsSection } from "@/components/why-choose-us"
import { ProjectsCarousel } from "@/components/projects-carousel"
import { ContactSection } from "@/components/contact-section"
import { motion } from "framer-motion"

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden pb-[50vh]">
      {/* Hero Section */}
      <section className="flex min-h-screen flex-col items-center justify-center px-4 py-20 relative">
        <ParallaxSection speed={0.3} className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-transparent to-blue-500/10 blur-3xl" />
        </ParallaxSection>

        <div className="mx-auto max-w-4xl text-center relative z-10">
          <EnhancedReveal direction="fade" delay={0.2}>
            <h1 className="mb-6 text-balance font-sans text-6xl font-black leading-[0.95] tracking-tighter md:text-7xl lg:text-8xl text-white">
              <AnimatedGradientText
                gradientClasses={[
                  "from-pink-500 via-rose-500 to-orange-500",
                  "from-blue-500 via-cyan-500 to-teal-500",
                  "from-purple-500 via-violet-500 to-fuchsia-500",
                  "from-emerald-500 via-green-500 to-lime-500",
                ]}
                autoAnimateInterval={10000}
                transitionDuration={4}
                className="block"
              >
                Des sites web qui remplissent votre agenda.
              </AnimatedGradientText>
            </h1>
          </EnhancedReveal>

          <EnhancedReveal direction="up" delay={0.4} distance={30}>
            <p className="mb-10 text-balance text-lg text-white/60 md:text-xl">
              Transformez votre présence en ligne avec des sites modernes, performants et optimisés pour la conversion.
            </p>
          </EnhancedReveal>

          <EnhancedReveal direction="up" delay={0.6} distance={30}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Button
                asChild
                size="lg"
                className="group relative rounded-full bg-white px-8 text-base font-semibold text-black transition-all duration-300 overflow-hidden"
              >
                <a href="#galerie" className="relative z-10 block">
                  <motion.span
                    className="relative z-10"
                    initial={{ color: "#000000" }}
                    whileHover={{ color: "#ffffff" }}
                    transition={{ duration: 0.3 }}
                  >
                    Voir les démos
                  </motion.span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-pink-500 via-rose-500 to-orange-500 rounded-full"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-white rounded-full"
                    initial={{ opacity: 1 }}
                    whileHover={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div
                    className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-rose-500 to-orange-500 rounded-full blur-lg opacity-0 group-hover:opacity-50"
                    transition={{ duration: 0.3 }}
                  />
                </a>
              </Button>
            </motion.div>
          </EnhancedReveal>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="px-4 py-20 relative">
        <ParallaxSection speed={0.15} className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-emerald-500/5 blur-3xl" />
        </ParallaxSection>

        <div className="mx-auto max-w-6xl relative z-10">
          <EnhancedReveal direction="up" delay={0.1}>
            <h2 className="mb-12 text-center text-4xl font-bold md:text-5xl text-white">
              <AnimatedGradientText
                gradientClasses={[
                  "from-emerald-500 via-green-500 to-lime-500",
                  "from-blue-500 via-cyan-500 to-teal-500",
                  "from-purple-500 via-violet-500 to-fuchsia-500",
                ]}
                autoAnimateInterval={10000}
                transitionDuration={4}
              >
                Pourquoi nous choisir ?
              </AnimatedGradientText>
            </h2>
          </EnhancedReveal>

          <WhyChooseUsSection />
        </div>
      </section>

      {/* Gallery Section - Carousel */}
      <section id="galerie" className="px-4 py-20 relative">
        <ParallaxSection speed={0.2} className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-t from-purple-500/5 via-transparent to-pink-500/5 blur-3xl" />
        </ParallaxSection>

        <div className="mx-auto max-w-6xl relative z-10">
          <EnhancedReveal direction="up" delay={0.1}>
            <h2 className="mb-16 text-center text-4xl font-bold md:text-5xl text-white">
              <AnimatedGradientText
                gradientClasses={[
                  "from-pink-500 via-rose-500 to-orange-500",
                  "from-blue-500 via-cyan-500 to-teal-500",
                ]}
                autoAnimateInterval={10000}
                transitionDuration={4}
              >
                Nos réalisations
              </AnimatedGradientText>
            </h2>
          </EnhancedReveal>

          <ProjectsCarousel />
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-4 py-20 relative">
        <ParallaxSection speed={0.1} className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-t from-pink-500/5 via-transparent to-blue-500/5 blur-3xl" />
        </ParallaxSection>

        <div className="mx-auto max-w-5xl relative z-10">
          <ContactSection />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-4 py-12 relative">
        <ParallaxSection speed={0.1}>
          <div className="mx-auto max-w-6xl text-center">
            <EnhancedReveal direction="fade" delay={0.1}>
              <p className="mb-2 text-sm text-white/90">
                Réalisé par{" "}
                <Link href="mailto:contact@pointsource.fr" className="hover:underline transition-colors inline-block">
                  <AnimatedGradientText
                    gradientClasses={[
                      "from-pink-500 via-rose-500 to-orange-500",
                      "from-blue-500 via-cyan-500 to-teal-500",
                    ]}
                    autoAnimateInterval={10000}
                    transitionDuration={4}
                  >
                    PointSource
                  </AnimatedGradientText>
                </Link>
              </p>
            </EnhancedReveal>
            <EnhancedReveal direction="fade" delay={0.2}>
              <Link href="mailto:contact@pointsource.fr" className="text-sm text-white/80 hover:text-white hover:underline transition-colors">
                contact@pointsource.fr
              </Link>
            </EnhancedReveal>
          </div>
        </ParallaxSection>
      </footer>
    </main>
  )
}
