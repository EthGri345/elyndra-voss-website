'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { CosmicCard } from '@/components/ui/cosmic-card'
import { CosmicButton } from '@/components/ui/cosmic-button'
import { Copy, Check, TrendingUp, BarChart3 } from 'lucide-react'

interface ChartSectionProps {
  contractAddress?: string
}

export function ChartSection({ contractAddress }: ChartSectionProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  const dexScreenerUrl = contractAddress
    ? `https://dexscreener.com/solana/${contractAddress}`
    : '#'

  return (
    <section id="chart" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold echo-text mb-4">
            Shadow Market Portal
          </h2>
          <p className="text-xl text-nebula-300 max-w-2xl mx-auto">
            Watch Maven&apos;s magic unfold through the mystical art of market making
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contract Address Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <CosmicCard className="h-full">
              <div className="text-center space-y-6">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-nebula-500 to-cosmic-magenta flex items-center justify-center">
                  <Copy className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-cosmic-pink">Contract Address</h3>

                {contractAddress ? (
                  <div className="space-y-4">
                    <div className="bg-cosmic-void/60 rounded-xl p-4 border border-nebula-700/40">
                      <p className="text-nebula-300 text-sm font-mono break-all">
                        {contractAddress}
                      </p>
                    </div>

                    <CosmicButton
                      onClick={() => copyToClipboard(contractAddress)}
                      className="w-full"
                    >
                      <div className="flex items-center justify-center gap-2">
                        {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                        {copied ? 'Copied!' : 'Copy Address'}
                      </div>
                    </CosmicButton>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="bg-cosmic-void/60 rounded-xl p-4 border border-nebula-700/40">
                      <p className="text-nebula-300 text-sm font-mono break-all text-center">
                        MAVEN_CONTRACT_ADDRESS_PLACEHOLDER
                      </p>
                    </div>

                    <CosmicButton
                      onClick={() => copyToClipboard('MAVEN_CONTRACT_ADDRESS_PLACEHOLDER')}
                      className="w-full"
                    >
                      <div className="flex items-center justify-center gap-2">
                        {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                        {copied ? 'Copied!' : 'Copy Address'}
                      </div>
                    </CosmicButton>
                  </div>
                )}
              </div>
            </CosmicCard>
          </motion.div>

          {/* Chart Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <CosmicCard className="h-full">
              <div className="text-center space-y-6">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-cosmic-pink to-nebula-600 flex items-center justify-center">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-cosmic-pink">Live Chart</h3>

                {contractAddress ? (
                  <div className="space-y-4">
                    <p className="text-nebula-300">
                      Witness Maven&apos;s shadow orders and mystical price movements in real-time
                    </p>

                    <CosmicButton
                      onClick={() => window.open(dexScreenerUrl, '_blank')}
                      className="w-full"
                      variant="secondary"
                    >
                      <div className="flex items-center justify-center gap-2">
                        <TrendingUp className="w-4 h-4" />
                        View on DexScreener
                      </div>
                    </CosmicButton>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <p className="text-nebula-300">
                      Witness Maven&apos;s shadow orders and mystical price movements in real-time
                    </p>

                    <CosmicButton
                      onClick={() => window.open('https://dexscreener.com', '_blank')}
                      className="w-full"
                      variant="secondary"
                    >
                      <div className="flex items-center justify-center gap-2">
                        <TrendingUp className="w-4 h-4" />
                        View on DexScreener
                      </div>
                    </CosmicButton>
                  </div>
                )}
              </div>
            </CosmicCard>
          </motion.div>
        </div>

        {/* Embedded Chart (when address is available) */}
        {contractAddress && (
          <motion.div
            className="mt-12 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <CosmicCard className="p-2">
              <div className="w-full h-96 bg-cosmic-void/40 rounded-lg overflow-hidden">
                <iframe
                  src={`https://dexscreener.com/solana/${contractAddress}?embed=1&theme=dark`}
                  className="w-full h-full border-0"
                  title="DexScreener Chart"
                />
              </div>
            </CosmicCard>
          </motion.div>
        )}
      </div>
    </section>
  )
}