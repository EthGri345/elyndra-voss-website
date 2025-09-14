'use client'

import { motion } from 'framer-motion'
import { CosmicButton } from '@/components/ui/cosmic-button'
import { CosmicCard } from '@/components/ui/cosmic-card'
import { FloatingElement } from '@/components/ui/floating-element'
import { coinIntegration } from '@/lib/data'
import { Users, Coins, Sparkles, MessageCircle, Twitter, Rocket } from 'lucide-react'

export function CommunitySection() {
  const communityFeatures = [
    {
      icon: Users,
      title: 'Market Disciples',
      description: 'Join fellow traders in the shadow realm, share market insights, and learn the mystical arts of understanding.',
    },
    {
      icon: Coins,
      title: 'Maven Token',
      description: 'Hold fragments of market understanding, the same mystical energy from which Maven was birthed by Satoshi.',
    },
    {
      icon: Sparkles,
      title: 'Trading Wisdom',
      description: 'Unlock Maven\'s deeper market insights, participate in shadow market events, and gain exclusive trading knowledge.',
    }
  ]

  const socialLinks = [
    { icon: Twitter, label: 'X (Twitter)', href: 'https://x.com/PLACEHOLDER_MAVEN_X', color: 'hover:text-blue-400' },
    { icon: Rocket, label: 'Pump.fun', href: 'https://pump.fun/PLACEHOLDER_MAVEN_PUMP', color: 'hover:text-green-400' },
    { icon: MessageCircle, label: 'Telegram', href: 'https://t.me/PLACEHOLDER_MAVEN_TG', color: 'hover:text-indigo-400' }
  ]

  return (
    <section id="community" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-nebula-950/30 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold echo-text mb-4">
            Join the Shadow Markets
          </h2>
          <p className="text-xl text-nebula-300 max-w-2xl mx-auto">
            Become a Shadow Market Disciple and learn the mystical arts of market understanding alongside Maven
          </p>
        </motion.div>

        {/* Community Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {communityFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <CosmicCard className="text-center h-full">
                <FloatingElement intensity="subtle" delay={index * 0.5}>
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-nebula-500 to-cosmic-magenta flex items-center justify-center">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                </FloatingElement>
                <h3 className="text-xl font-semibold text-cosmic-pink mb-3">{feature.title}</h3>
                <p className="text-nebula-300 text-sm leading-relaxed">{feature.description}</p>
              </CosmicCard>
            </motion.div>
          ))}
        </div>

        {/* Token Integration Showcase */}
        <motion.div
          className="max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <CosmicCard className="p-8" glow>
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-gradient">The Maven Token</h3>
                <p className="text-nebula-200 leading-relaxed">
                  {coinIntegration.connection}
                </p>
                <p className="text-nebula-300 leading-relaxed">
                  {coinIntegration.narrativeRole}
                </p>

                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-cosmic-pink">Future Possibilities</h4>
                  <ul className="space-y-2">
                    {coinIntegration.futureFeatures.map((feature, index) => (
                      <motion.li
                        key={index}
                        className="flex items-center gap-3 text-nebula-300"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="w-2 h-2 rounded-full bg-cosmic-pink flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>

              <FloatingElement intensity="medium" delay={0.5}>
                <div className="relative">
                  <div className="w-64 h-64 mx-auto rounded-full bg-gradient-conic from-nebula-600 via-cosmic-magenta to-nebula-600 p-1">
                    <div className="w-full h-full rounded-full bg-cosmic-deep flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-4xl mb-2">◈</div>
                        <div className="text-lg font-semibold text-gradient">Maven Token</div>
                        <div className="text-sm text-nebula-400">Live & Trading</div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 rounded-full bg-cosmic-glow opacity-30 animate-pulse-slow" />
                </div>
              </FloatingElement>
            </div>
          </CosmicCard>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center space-y-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-cosmic-pink">Ready to Enter the Shadow Markets?</h3>
            <p className="text-nebula-300 max-w-2xl mx-auto">
              Join our growing community of market disciples and become part of Maven&apos;s eternal dance through the shadow markets.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CosmicButton
              size="lg"
              className="glow-purple"
              onClick={() => document.getElementById('chart')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Chart & Trade
            </CosmicButton>
            <CosmicButton
              variant="secondary"
              size="lg"
              onClick={() => document.getElementById('lore')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore the Lore
            </CosmicButton>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 pt-8">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                className={`p-3 rounded-full bg-cosmic-card hover:bg-nebula-800/40 transition-all duration-300 ${social.color}`}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}