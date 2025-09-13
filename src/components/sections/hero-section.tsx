'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { CosmicButton } from '@/components/ui/cosmic-button'
import { GalaxyBackground } from '@/components/ui/galaxy-background'

export function HeroSection() {
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  const handleExploreClick = () => {
    document.getElementById('lore')?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleJoinClick = () => {
    document.getElementById('community')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Galaxy Background */}
      <GalaxyBackground />

      {/* Static cosmic glow */}
      <div className="absolute inset-0 bg-cosmic-glow opacity-15" />

      {/* Parallax container */}
      <motion.div
        className="relative z-10 container mx-auto px-6"
        style={{ y: useTransform(scrollY, [0, 300], [0, 50]), opacity }}
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Text content */}
          <motion.div
            className="text-center lg:text-left space-y-8"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            {/* Title */}
            <div className="space-y-4">
              <motion.h1
                className="text-5xl md:text-7xl font-bold echo-text"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.4, delay: 0.6 }}
              >
                Voss
              </motion.h1>
              <motion.p
                className="text-xl md:text-2xl text-nebula-300 font-light"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.9 }}
              >
                The Echo of the Nebula Veil
              </motion.p>
            </div>

            {/* Static message */}
            <motion.div
              className="h-20 flex items-center"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 1.2 }}
            >
              <p className="text-lg text-nebula-200 italic">
                In the vast tapestry of cosmos, where dreams become reality...
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 1.3 }}
            >
              <CosmicButton
                size="lg"
                onClick={handleExploreClick}
                className="glow-purple"
              >
                Explore the Aetherweft
              </CosmicButton>
              <CosmicButton
                variant="secondary"
                size="lg"
                onClick={handleJoinClick}
              >
                Join the Echo
              </CosmicButton>
            </motion.div>

            {/* Stats or highlights */}
            <motion.div
              className="flex justify-center lg:justify-start gap-8 pt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.0, delay: 1.6 }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-gradient">∞</div>
                <div className="text-sm text-nebula-400">Parallel Worlds</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gradient">1</div>
                <div className="text-sm text-nebula-400">Echo Warden</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gradient">♦</div>
                <div className="text-sm text-nebula-400">Shard of Reverie</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Character illustration */}
          <motion.div
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.6, delay: 0.5 }}
          >
            <div className="relative">
              {/* Glowing backdrop */}
              <div className="absolute inset-0 bg-gradient-radial from-nebula-500/30 via-cosmic-magenta/20 to-transparent rounded-full scale-150 blur-3xl" />

              {/* Character image */}
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-nebula-500/40 bg-gradient-to-br from-nebula-800/20 to-cosmic-void/40 backdrop-blur-sm">
                <Image
                  src="/voss.png"
                  alt="Voss, the Echo of the Nebula Veil"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                  priority
                />

                {/* Magical overlay effects */}
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-nebula-500/10" />
                <div className="absolute inset-0 bg-echo-shimmer opacity-10" />
              </div>

              {/* Static cosmic elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-cosmic-pink/40 blur-sm" />
              <div className="absolute -bottom-8 -left-6 w-6 h-6 rounded-full bg-nebula-400/40 blur-sm" />
              <div className="absolute top-1/3 -left-8 w-4 h-4 rounded-full bg-cosmic-pink/30 blur-sm" />

              {/* Shard of Reverie effect */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-6 h-6 rotate-45 bg-gradient-to-br from-yellow-400 to-orange-500 opacity-60"
                     style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }} />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-nebula-400/60 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-nebula-400 rounded-full mt-2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}