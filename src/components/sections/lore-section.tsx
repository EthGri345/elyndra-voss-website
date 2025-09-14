'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CosmicCard } from '@/components/ui/cosmic-card'
import { FloatingElement } from '@/components/ui/floating-element'
import { elyndraData } from '@/lib/data'
import { Sparkles, Heart, Eye } from 'lucide-react'

const tabIcons = {
  origin: Sparkles,
  shadowmarkets: Eye,
  prayer: Heart
}

export function LoreSection() {
  const [activeTab, setActiveTab] = useState<'origin' | 'shadowmarkets' | 'prayer'>('origin')

  const tabVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 }
  }

  const renderOriginContent = () => (
    <div className="space-y-6">
      <motion.div
        className="text-center space-y-4"
        variants={tabVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <h3 className="text-3xl font-bold text-gradient mb-6">The Genesis of an Echo</h3>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4 text-nebula-200">
            <p className="text-lg leading-relaxed">
              {elyndraData.story.genesis}
            </p>
            <p className="text-lg leading-relaxed">
              Born not from flesh and blood, but from the cosmic residue of countless unlived lives -
              the whispered dreams of lovers separated by fate, the silent ambitions of dethroned kings,
              the echoed screams of worlds that never were.
            </p>
          </div>
          <FloatingElement intensity="medium" delay={0.3}>
            <div className="relative">
              <div className="w-64 h-64 mx-auto rounded-full bg-gradient-radial from-nebula-600/30 via-cosmic-magenta/20 to-transparent border border-nebula-500/40 flex items-center justify-center">
                <div className="text-4xl">✨</div>
              </div>
              <div className="absolute inset-0 rounded-full bg-echo-shimmer animate-shimmer opacity-50" />
            </div>
          </FloatingElement>
        </div>
      </motion.div>
    </div>
  )

  const renderShadowMarketsContent = () => (
    <motion.div
      className="space-y-8"
      variants={tabVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h3 className="text-3xl font-bold text-gradient text-center mb-8">The Shadow Markets Revealed</h3>
      <div className="max-w-4xl mx-auto">
        <CosmicCard className="p-8">
          <div className="space-y-6">
            <div className="text-center mb-6">
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-purple-600 to-red-600 flex items-center justify-center mb-4 animate-pulse">
                <Eye className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-cosmic-pink">The Hidden Architecture of Control</h4>
            </div>

            <div className="space-y-4 text-nebula-200 leading-relaxed">
              <p className="text-lg">
                The Shadow Markets are not merely trading platforms - they are the invisible architecture through which global financial control is exercised. Beyond the visible exchanges lies a network of interconnected systems where true price discovery occurs.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="space-y-3">
                  <h5 className="text-lg font-semibold text-cosmic-pink">The Inner Circle</h5>
                  <p className="text-sm">
                    A select group of market makers, central banks, and institutional players who coordinate through hidden channels. They move markets through synchronized actions, creating artificial scarcity and abundance at will.
                  </p>
                </div>

                <div className="space-y-3">
                  <h5 className="text-lg font-semibold text-cosmic-pink">Dark Pool Operations</h5>
                  <p className="text-sm">
                    Massive trades executed away from public view, allowing major players to accumulate or distribute positions without revealing their intentions to retail traders.
                  </p>
                </div>

                <div className="space-y-3">
                  <h5 className="text-lg font-semibold text-cosmic-pink">Algorithmic Puppeteers</h5>
                  <p className="text-sm">
                    High-frequency trading algorithms that can manipulate prices in milliseconds, creating false breakouts and liquidity traps to capture retail money.
                  </p>
                </div>

                <div className="space-y-3">
                  <h5 className="text-lg font-semibold text-cosmic-pink">Information Asymmetry</h5>
                  <p className="text-sm">
                    The deliberate creation of information gaps, where insiders trade on news before it reaches the public, maintaining perpetual advantage over retail participants.
                  </p>
                </div>
              </div>

              <div className="mt-8 p-6 bg-nebula-900/40 rounded-lg border border-nebula-700/40">
                <h5 className="text-lg font-semibold text-cosmic-pink mb-3">Maven&apos;s Role in the System</h5>
                <p className="text-sm">
                  Maven exists as both participant and observer within this hidden realm. She understands that true market making is not about providing liquidity, but about shepherding the collective consciousness of traders toward predetermined outcomes. She is the spirit that animates the shadow system - the one who understands that markets are not free, but carefully orchestrated theaters of wealth transfer.
                </p>
              </div>
            </div>
          </div>
        </CosmicCard>
      </div>
    </motion.div>
  )


  const renderPrayerContent = () => (
    <motion.div
      className="space-y-8"
      variants={tabVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h3 className="text-3xl font-bold text-gradient text-center mb-8">The Maven Prayer</h3>
      <div className="max-w-2xl mx-auto">
        <CosmicCard className="text-center p-8" glow>
          <div className="space-y-6">
            <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-green-400 to-red-500 flex items-center justify-center mb-6 animate-pulse">
              <Heart className="w-10 h-10 text-white" />
            </div>

            <div className="space-y-4 text-nebula-200 leading-relaxed">
              <p className="text-lg font-semibold text-cosmic-pink">Hail Maven, full of understanding,</p>
              <p>The markets are with thee.</p>
              <p>Blessed art thou amongst traders,</p>
              <p>And blessed are the green candles of thy magic.</p>

              <p className="pt-4">Holy Maven, Mother of Markets,</p>
              <p>Guide us poor retail traders,</p>
              <p>Now and at the hour of our liquidation.</p>

              <p className="text-xl font-bold text-gradient pt-6">Amen to the Charts.</p>
            </div>

            <div className="mt-6 pt-6 border-t border-nebula-700">
              <p className="text-xs text-nebula-400 italic">
                &quot;She is simply the one who understands.&quot;
              </p>
            </div>
          </div>
        </CosmicCard>
      </div>
    </motion.div>
  )

  const renderContent = () => {
    switch (activeTab) {
      case 'origin':
        return renderOriginContent()
      case 'shadowmarkets':
        return renderShadowMarketsContent()
      case 'prayer':
        return renderPrayerContent()
      default:
        return renderOriginContent()
    }
  }

  return (
    <section id="lore" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold echo-text mb-4">
            The Art of Market Making
          </h2>
          <p className="text-xl text-nebula-300 max-w-2xl mx-auto">
            Discover the Origin of Maven, the Legendary Spirit Controlling Every Candle
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, delay: 0.3 }}
        >
          <div className="flex flex-wrap gap-3 p-2 bg-cosmic-void/40 rounded-2xl backdrop-blur-sm border border-nebula-700/40">
            {Object.entries(tabIcons).map(([key, Icon]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key as keyof typeof tabIcons)}
                className={`flex items-center gap-2 px-8 py-3 rounded-xl transition-all duration-300 ${
                  activeTab === key
                    ? 'bg-gradient-to-r from-nebula-600 to-cosmic-magenta text-white shadow-lg'
                    : 'text-nebula-400 hover:text-nebula-200 hover:bg-nebula-800/40'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="capitalize font-medium">{key}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={tabVariants}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}