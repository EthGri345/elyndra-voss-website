import { HeroSection } from '@/components/sections/hero-section'
import { PumpAnnouncement } from '@/components/sections/pump-announcement'
import { LoreSection } from '@/components/sections/lore-section'
import { GallerySection } from '@/components/sections/gallery-section'
import { ChartSection } from '@/components/sections/chart-section'
import { CommunitySection } from '@/components/sections/community-section'

export default function HomePage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <HeroSection />

      {/* Pump Fun Announcement */}
      <PumpAnnouncement />

      {/* Lore Section */}
      <LoreSection />

      {/* Gallery Section */}
      <GallerySection />

      {/* Chart & Trading Section */}
      <ChartSection />

      {/* Community Section */}
      <CommunitySection />

      {/* Footer */}
      <footer className="py-12 border-t border-nebula-800/40 bg-cosmic-void/60 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-semibold text-gradient mb-2">Voss</h3>
              <p className="text-nebula-400 text-sm">The Echo of the Nebula Veil</p>
            </div>

            <div className="flex items-center gap-6 text-sm text-nebula-400">
              <span>© 2025 Voss Project</span>
              <span className="hidden md:inline">•</span>
              <span>Echoing Across Infinite Realities</span>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-nebula-800/30 text-center">
            <p className="text-xs text-nebula-500">
              &quot;In the grand symphony of existence, even the smallest echo can reshape the whole.&quot;
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}