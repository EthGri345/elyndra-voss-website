'use client'

import { motion } from 'framer-motion'
import { CosmicCard } from '@/components/ui/cosmic-card'
import { FloatingElement } from '@/components/ui/floating-element'
import { Zap, TrendingUp, Radio } from 'lucide-react'

export function PumpAnnouncement() {
  return (
    <section className="py-12 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <CosmicCard className="max-w-4xl mx-auto text-center p-8 border-2 border-cosmic-magenta/40" glow>
            <FloatingElement intensity="subtle">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cosmic-pink to-nebula-600 flex items-center justify-center">
                  <Radio className="w-6 h-6 text-white animate-pulse" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gradient">
                  LIVE STREAM INCOMING
                </h2>
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-nebula-600 to-cosmic-pink flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
              </div>
            </FloatingElement>

            <div className="space-y-4">
              <motion.p
                className="text-xl md:text-2xl text-nebula-200 font-medium"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                🚀 <span className="text-cosmic-pink font-bold">Maven will stream on PumpFun at 200K market cap!</span> 🚀
              </motion.p>

              <motion.p
                className="text-lg text-nebula-300 max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Join the shadow market community as we witness Maven&apos;s magic unfold across the digital cosmos.
                Be part of the journey from market maker to legend! ✨
              </motion.p>

              <motion.div
                className="flex items-center justify-center gap-2 pt-4"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 }}
              >
                <Zap className="w-5 h-5 text-cosmic-pink" />
                <span className="text-nebula-400 text-sm">
                  Market understanding grows with every holder
                </span>
                <Zap className="w-5 h-5 text-cosmic-pink" />
              </motion.div>
            </div>

            {/* Animated border effect */}
            <div className="absolute inset-0 rounded-2xl">
              <motion.div
                className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-cosmic-pink/20 to-transparent"
                animate={{
                  x: [-100, 100],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </div>
          </CosmicCard>
        </motion.div>
      </div>
    </section>
  )
}