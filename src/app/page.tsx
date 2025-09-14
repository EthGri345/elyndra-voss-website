import { HeroSection } from '@/components/sections/hero-section'
import { PumpAnnouncement } from '@/components/sections/pump-announcement'
import { LoreSection } from '@/components/sections/lore-section'
import { GallerySection } from '@/components/sections/gallery-section'
import { RoadmapSection } from '@/components/sections/roadmap-section'
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

      {/* Roadmap Section */}
      <RoadmapSection />

      {/* Chart & Trading Section */}
      <ChartSection />

      {/* Community Section */}
      <CommunitySection />

      {/* Footer */}
      <footer className="py-12 border-t border-nebula-800/40 bg-cosmic-void/60 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-semibold text-gradient mb-2">Maven</h3>
              <p className="text-nebula-400 text-sm">The Spirit of Market Making, One Who Understands</p>
            </div>

            <div className="flex items-center gap-6 text-sm text-nebula-400">
              <span>© 2025 Maven Project</span>
              <span className="hidden md:inline">•</span>
              <span>Weaving Markets Across Digital Realms</span>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-nebula-800/30 text-center">
            <p className="text-xs text-nebula-500">
              &quot;She is simply the one who understands.&quot;
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}