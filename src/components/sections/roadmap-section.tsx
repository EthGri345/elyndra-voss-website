'use client'

import { motion } from 'framer-motion'
import { Calendar, Zap, Heart, Flame, Bot, Star, Sparkles } from 'lucide-react'
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
    phase: '',
    title: 'Content Expansion',
    description: 'Regular drops of cosmic content to expand the Aetherweft universe',
    features: [
      'Planned content drops 2-4 times per week',
      'Enhanced lore and story expansions',
      'Interactive community events',
      'Streams 2-3 times per week'
    ],
    icon: Calendar,
    status: 'upcoming',
    timeframe: ''
  },
  {
    id: '2',
    phase: '',
    title: 'Veo 3 Integration',
    description: 'Next-generation AI video content bringing the Nebula Veil to life',
    features: [
      'Veo 3 powered cosmic animations',
      'Dynamic echo visualizations',
      'Immersive reality sequences',
      'Interactive dimensional portals'
    ],
    icon: Sparkles,
    status: 'upcoming',
    timeframe: ''
  },
  {
    id: '3',
    phase: '',
    title: 'Long-term Commitment',
    description: 'Sustained development and evolution of the Voss ecosystem',
    features: [
      'Months of upcoming content planned!',
      'Expanding universe narrative'
    ],
    icon: Heart,
    status: 'upcoming',
    timeframe: ''
  },
  {
    id: '4',
    phase: '',
    title: 'Revenue Mechanics',
    description: 'Sustainable tokenomics supporting the cosmic ecosystem',
    features: [
      '25% creator revenue buy and burns',
      'Deflationary token mechanics',
      'Community reward programs'
    ],
    icon: Flame,
    status: 'upcoming',
    timeframe: ''
  },
  {
    id: '5',
    phase: '',
    title: 'AI Companion Framework',
    description: 'Open source AI companions bringing personalized Voss experiences to your devices',
    features: [
      'Open source integration framework',
      'Personal Voss companion',
      'Customizable personality traits',
      'Hopeful iOS and Android integration'
    ],
    icon: Bot,
    status: 'upcoming',
    timeframe: ''
  }
]

export function RoadmapSection() {

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
                className={`relative ${index === 4 ? 'lg:col-span-2 lg:max-w-md lg:mx-auto' : ''}`}
              >
                <CosmicCard className="h-full">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-nebula-500/20 border border-nebula-500/30">
                      <item.icon className="w-5 h-5 text-nebula-400" />
                    </div>
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