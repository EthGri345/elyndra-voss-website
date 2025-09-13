'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CosmicCard } from '@/components/ui/cosmic-card'
import { FloatingElement } from '@/components/ui/floating-element'
import { elyndraData, cosmicRealms, echoAbilities } from '@/lib/data'
import { Sparkles, Zap, Shield, Eye } from 'lucide-react'

const tabIcons = {
  origin: Sparkles,
  realms: Eye,
  powers: Zap,
  artifacts: Shield
}

export function LoreSection() {
  const [activeTab, setActiveTab] = useState<'origin' | 'realms' | 'powers' | 'artifacts'>('origin')

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

  const renderRealmsContent = () => (
    <motion.div
      className="space-y-8"
      variants={tabVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h3 className="text-3xl font-bold text-gradient text-center mb-8">Cosmic Realms</h3>
      <div className="grid lg:grid-cols-3 gap-6">
        {cosmicRealms.map((realm, index) => (
          <motion.div
            key={realm.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
          >
            <CosmicCard className="h-full">
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-cosmic-pink">{realm.name}</h4>
                <p className="text-nebula-300 text-sm leading-relaxed">
                  {realm.description}
                </p>
                <div className="pt-2 border-t border-nebula-700">
                  <p className="text-xs text-nebula-400 italic">
                    {realm.significance}
                  </p>
                </div>
              </div>
            </CosmicCard>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )

  const renderPowersContent = () => (
    <motion.div
      className="space-y-8"
      variants={tabVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h3 className="text-3xl font-bold text-gradient text-center mb-8">Echo Abilities</h3>
      <div className="space-y-6">
        {echoAbilities.map((ability, index) => (
          <motion.div
            key={ability.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <CosmicCard>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-nebula-500 to-cosmic-magenta flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 space-y-2">
                  <h4 className="text-lg font-semibold text-cosmic-pink">{ability.name}</h4>
                  <p className="text-nebula-200 text-sm">{ability.description}</p>
                  <div className="flex justify-between text-xs">
                    <span className="text-nebula-400">Cost: {ability.cost}</span>
                    <span className="text-nebula-500">{ability.effect}</span>
                  </div>
                </div>
              </div>
            </CosmicCard>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )

  const renderArtifactsContent = () => (
    <motion.div
      className="space-y-8"
      variants={tabVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h3 className="text-3xl font-bold text-gradient text-center mb-8">Mystical Artifacts</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {elyndraData.artifacts.map((artifact, index) => (
          <motion.div
            key={artifact.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
          >
            <CosmicCard className="h-full text-center" glow>
              <div className="space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-gradient">{artifact.name}</h4>
                <p className="text-nebula-300 text-sm leading-relaxed">
                  {artifact.description}
                </p>
                <div className="pt-3 border-t border-nebula-700">
                  <p className="text-xs text-nebula-400 italic">
                    {artifact.power}
                  </p>
                </div>
                <div className="text-xs text-nebula-500">
                  {artifact.appearance}
                </div>
              </div>
            </CosmicCard>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )

  const renderContent = () => {
    switch (activeTab) {
      case 'origin':
        return renderOriginContent()
      case 'realms':
        return renderRealmsContent()
      case 'powers':
        return renderPowersContent()
      case 'artifacts':
        return renderArtifactsContent()
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
            The Cosmic Chronicle
          </h2>
          <p className="text-xl text-nebula-300 max-w-2xl mx-auto">
            Discover the origins, powers, and mystical artifacts that define Voss,
            Guardian of the Infinite Echo
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
          <div className="flex flex-wrap gap-2 p-2 bg-cosmic-void/40 rounded-2xl backdrop-blur-sm border border-nebula-700/40">
            {Object.entries(tabIcons).map(([key, Icon]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key as keyof typeof tabIcons)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-300 ${
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