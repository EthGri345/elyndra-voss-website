'use client'

import { motion } from 'framer-motion'
import { Calendar, Zap, Heart, Flame, Bot, Plus, Star, Sparkles } from 'lucide-react'
import { CosmicCard } from '@/components/ui/cosmic-card'

interface RoadmapItem {
  id: string
  phase: string
  title: string
  description: string
  features: string[]
  icon: React.ComponentType<{ className?: string }>
  status: 'completed' | 'in-progress' | 'upcoming'
  timeframe?: string
}

const roadmapItems: RoadmapItem[] = [
  {
    id: '1',
    phase: 'Phase I',
    title: 'Content Expansion',
    description: 'Regular drops of cosmic content to expand the Aetherweft universe',
    features: [
      'Planned content drops 2-4 times per week',
      'Enhanced lore and story expansions',
      'Interactive community events',
      'Exclusive echo fragments collection'
    ],
    icon: Calendar,
    status: 'in-progress',
    timeframe: 'Ongoing'
  },
  {
    id: '2',
    phase: 'Phase II',
    title: 'Veo 3 Integration',
    description: 'Next-generation AI video content bringing the Nebula Veil to life',
    features: [
      'Veo 3 powered cosmic animations',
      'Dynamic echo visualizations',
      'Immersive reality sequences',
      'Interactive dimensional portals'
    ],
    icon: Sparkles,
    status: 'in-progress',
    timeframe: 'Q1 2025'
  },
  {
    id: '3',
    phase: 'Phase III',
    title: 'Long-term Commitment',
    description: 'Sustained development and evolution of the Voss ecosystem',
    features: [
      'Multi-year development roadmap',
      'Community-driven governance',
      'Expanding universe narrative',
      'Cross-platform integration'
    ],
    icon: Heart,
    status: 'upcoming',
    timeframe: 'Ongoing'
  },
  {
    id: '4',
    phase: 'Phase IV',
    title: 'Revenue Mechanics',
    description: 'Sustainable tokenomics supporting the cosmic ecosystem',
    features: [
      '25% creator revenue buy and burns',
      'Deflationary token mechanics',
      'Community reward programs',
      'Staking and yield opportunities'
    ],
    icon: Flame,
    status: 'upcoming',
    timeframe: 'Q2 2025'
  },
  {
    id: '5',
    phase: 'Phase V',
    title: 'AI Companion Framework',
    description: 'Interactive AI companions within the Aetherweft realm',
    features: [
      'Personal Echo Warden companions',
      'AI-driven narrative experiences',
      'Customizable companion abilities',
      'Cross-reality communication'
    ],
    icon: Bot,
    status: 'upcoming',
    timeframe: 'Q3 2025'
  },
  {
    id: '6',
    phase: 'Beyond',
    title: 'Infinite Possibilities',
    description: 'The cosmos holds endless potential for expansion and innovation',
    features: [
      'Community-suggested features',
      'Emerging technology integration',
      'Cross-chain compatibility',
      'Metaverse presence expansion'
    ],
    icon: Plus,
    status: 'upcoming',
    timeframe: 'Future'
  }
]

export function RoadmapSection() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'text-green-400 bg-green-400/10 border-green-400/30'
      case 'in-progress':
        return 'text-cosmic-pink bg-cosmic-magenta/10 border-cosmic-magenta/30'
      case 'upcoming':
        return 'text-nebula-400 bg-nebula-400/10 border-nebula-400/30'
      default:
        return 'text-nebula-400 bg-nebula-400/10 border-nebula-400/30'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed':
        return 'Complete'
      case 'in-progress':
        return 'In Progress'
      case 'upcoming':
        return 'Upcoming'
      default:
        return 'Planned'
    }
  }

  return (
    <section id="roadmap" className="relative py-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-cosmic-void/20 via-nebula-950/30 to-cosmic-void/20" />

      {/* Floating cosmic elements */}
      <div className="absolute top-32 left-16 w-2 h-2 rounded-full bg-cosmic-pink/40 animate-float" />
      <div className="absolute top-80 right-20 w-1.5 h-1.5 rounded-full bg-nebula-400/50 animate-pulse-slow" />
      <div className="absolute bottom-40 left-32 w-3 h-3 rounded-full bg-cosmic-pink/30 animate-float" />
      <div className="absolute top-60 right-40 w-2 h-2 rounded-full bg-nebula-500/40 animate-pulse-slow" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          className="text-center max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            The Cosmic Roadmap
          </h2>
          <p className="text-lg text-nebula-300 mb-4">
            Journey through the phases of evolution as Voss expands her influence across
            the infinite dimensions of the Aetherweft, weaving new realities and possibilities.
          </p>
          <div className="flex items-center justify-center gap-2 text-cosmic-pink">
            <Star className="w-4 h-4" />
            <span className="text-sm uppercase tracking-wide font-semibold">
              Echoing Across Infinite Timelines
            </span>
            <Star className="w-4 h-4" />
          </div>
        </motion.div>

        {/* Roadmap timeline */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {roadmapItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <CosmicCard className="h-full">
                  {/* Phase header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-nebula-500/20 border border-nebula-500/30">
                        <item.icon className="w-5 h-5 text-nebula-400" />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-nebula-400 uppercase tracking-wide">
                          {item.phase}
                        </h3>
                        {item.timeframe && (
                          <p className="text-xs text-nebula-500">{item.timeframe}</p>
                        )}
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(item.status)}`}>
                      {getStatusText(item.status)}
                    </span>
                  </div>

                  {/* Content */}
                  <h4 className="text-xl font-bold text-gradient mb-3">
                    {item.title}
                  </h4>
                  <p className="text-nebula-300 mb-4 text-sm leading-relaxed">
                    {item.description}
                  </p>

                  {/* Features list */}
                  <div className="space-y-2">
                    {item.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Zap className="w-3 h-3 text-cosmic-pink mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-nebula-200">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Status indicator glow */}
                  {item.status === 'in-progress' && (
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-cosmic-magenta/20 to-cosmic-pink/20 rounded-lg blur opacity-30 animate-pulse-slow" />
                  )}
                </CosmicCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <motion.div
          className="text-center mt-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <CosmicCard className="bg-gradient-to-r from-nebula-900/40 to-cosmic-void/40">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-cosmic-pink/20 border border-cosmic-pink/30 flex items-center justify-center">
                <Star className="w-6 h-6 text-cosmic-pink" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gradient mb-3">
              Join the Cosmic Journey
            </h3>
            <p className="text-nebula-300 mb-6">
              Be part of Voss&apos;s evolving story as we expand across infinite realities.
              Every echo matters, every voice shapes the Aetherweft.
            </p>
            <div className="text-sm text-nebula-400 italic">
              &quot;In the grand symphony of existence, even the smallest echo can reshape the whole.&quot;
            </div>
          </CosmicCard>
        </motion.div>
      </div>
    </section>
  )
}