'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { X, Play, Pause, Volume2, VolumeX } from 'lucide-react'
import { CosmicCard } from '@/components/ui/cosmic-card'

interface MediaItem {
  id: string
  type: 'image' | 'video'
  src: string
  thumbnail?: string
  title: string
  description?: string
}

interface GallerySectionProps {
  media?: MediaItem[]
}

const defaultMedia: MediaItem[] = [
  {
    id: '1',
    type: 'image',
    src: '/voss.png',
    title: 'Maven Portrait',
    description: 'Hand drawn art of the Spirit of Market Making in her mystical form'
  },
  {
    id: '2',
    type: 'image',
    src: '/Untitled_Artwork.jpeg',
    title: 'Market Artwork I',
    description: 'Hand drawn art visions from the Shadow Markets dimensions'
  },
  {
    id: '3',
    type: 'image',
    src: '/Untitled_Artwork 1.jpeg',
    title: 'Market Artwork II',
    description: 'Hand drawn art echoes of parallel trading realities'
  },
  {
    id: '4',
    type: 'image',
    src: '/Untitled_Artwork 2.jpeg',
    title: 'Cosmic Artwork III',
    description: 'Hand drawn art fragments of the Shadow Markets'
  },
  {
    id: '5',
    type: 'image',
    src: '/Untitled_Artwork (1).jpeg',
    title: 'Cosmic Artwork IV',
    description: 'Hand drawn art dreams captured in the Shadow Market Crystal'
  },
  {
    id: '5.5',
    type: 'image',
    src: '/Untitled_Artwork (3).jpeg',
    title: 'Cosmic Artwork V',
    description: 'Whispers from the cosmic void'
  },
  {
    id: '6',
    type: 'video',
    src: '/generated_video.mp4',
    title: 'Shadow Market Motion I',
    description: 'Dynamic visions of the cosmic realm in motion'
  },
  {
    id: '7',
    type: 'video',
    src: '/generated_video (1).mp4',
    title: 'Shadow Market Motion II',
    description: 'Resonant harmonics dancing through dimensional space'
  },
  {
    id: '8',
    type: 'video',
    src: '/generated_video (3).mp4',
    title: 'Shadow Market Motion III',
    description: 'Echoes of the Elder Harmonics weaving reality'
  },
  {
    id: '9',
    type: 'video',
    src: '/generated_video (4).mp4',
    title: 'Shadow Market Motion IV',
    description: 'The Nebula Veil shifting through parallel dimensions'
  },
  {
    id: '10',
    type: 'video',
    src: '/generated_video (5).mp4',
    title: 'Shadow Market Motion V',
    description: 'Cosmic symphonies of the infinite tapestry'
  },
  {
    id: '10.5',
    type: 'video',
    src: '/generated_video (6).mp4',
    title: 'Shadow Market Motion VI',
    description: 'Dimensional harmonics in perfect resonance'
  },
  {
    id: '11',
    type: 'image',
    src: '/Untitled_Artwork (4).jpeg',
    title: 'Cosmic Artwork VI',
    description: 'Ethereal visions from the dimensional nexus'
  },
  {
    id: '12',
    type: 'video',
    src: '/generated_video (7).mp4',
    title: 'Shadow Market Motion VII',
    description: 'Latest echoes from the ever-expanding cosmic realm'
  },
  {
    id: '13',
    type: 'image',
    src: '/Untitled_Artwork (5).jpeg',
    title: 'Cosmic Artwork VII',
    description: 'Mystical energies flowing through dimensional boundaries'
  },
  {
    id: '14',
    type: 'video',
    src: '/generated_video (8).mp4',
    title: 'Shadow Market Motion VIII',
    description: 'The newest manifestations of cosmic harmony'
  }
]

export function GallerySection({ media = defaultMedia }: GallerySectionProps) {
  const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)

  const handleItemClick = (item: MediaItem) => {
    setSelectedItem(item)
    if (item.type === 'video') {
      setIsPlaying(true)
    }
  }

  const handleCloseModal = () => {
    setSelectedItem(null)
    setIsPlaying(false)
  }

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
    const video = document.getElementById('modal-video') as HTMLVideoElement
    if (video) {
      if (isPlaying) {
        video.pause()
      } else {
        video.play()
      }
    }
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
    const video = document.getElementById('modal-video') as HTMLVideoElement
    if (video) {
      video.muted = !isMuted
    }
  }

  return (
    <section id="gallery" className="relative py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-nebula-950/20 to-transparent" />

      {/* Floating cosmic elements */}
      <div className="absolute top-20 left-10 w-2 h-2 rounded-full bg-cosmic-pink/40 animate-float" />
      <div className="absolute top-40 right-20 w-3 h-3 rounded-full bg-nebula-400/30 animate-pulse-slow" />
      <div className="absolute bottom-32 left-20 w-1.5 h-1.5 rounded-full bg-cosmic-pink/50 animate-float" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Echoes of the Shadow Markets
          </h2>
          <p className="text-lg text-nebula-300">
            Glimpses into the mystical realm where Maven weaves her market magic,
            captured through the mystical lens of the Shadow Market Crystal.
          </p>
        </motion.div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {media.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <CosmicCard
                className="group cursor-pointer overflow-hidden p-0 aspect-square"
                onClick={() => handleItemClick(item)}
              >
                <div className="relative w-full h-full">
                  {item.type === 'image' ? (
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="relative w-full h-full">
                      <video
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        poster={item.thumbnail}
                        autoPlay
                        muted
                        loop
                        playsInline
                        onMouseEnter={(e) => {
                          const video = e.target as HTMLVideoElement;
                          video.play().catch(() => {});
                        }}
                      >
                        <source src={item.src} type="video/mp4" />
                      </video>
                      {/* Subtle play indicator */}
                      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-black/40 backdrop-blur-sm rounded-full p-2">
                          <Play className="w-4 h-4 text-white/90" />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-cosmic-void/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Content overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-lg font-semibold text-white mb-1 drop-shadow-lg">
                      {item.title}
                    </h3>
                    {item.description && (
                      <p className="text-sm text-nebula-200 opacity-90 drop-shadow">
                        {item.description}
                      </p>
                    )}
                  </div>

                  {/* Cosmic glow effect */}
                  <div className="absolute inset-0 ring-2 ring-transparent group-hover:ring-nebula-400/50 rounded-lg transition-all duration-300" />
                </div>
              </CosmicCard>
            </motion.div>
          ))}
        </div>

        {/* Add more button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="text-nebula-400 italic">
            More echoes from across the dimensional tapestry coming soon...
          </p>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseModal}
          >
            <motion.div
              className="relative max-w-4xl max-h-[90vh] w-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={handleCloseModal}
                className="absolute -top-12 right-0 z-10 p-2 rounded-full bg-cosmic-void/60 backdrop-blur-sm text-nebula-200 hover:text-white hover:bg-cosmic-void/80 transition-all"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Media content */}
              <div className="relative bg-cosmic-void/20 backdrop-blur-sm rounded-xl border border-nebula-500/30 overflow-hidden">
                {selectedItem.type === 'image' ? (
                  <div className="relative">
                    <Image
                      src={selectedItem.src}
                      alt={selectedItem.title}
                      width={800}
                      height={600}
                      className="w-full h-auto max-h-[70vh] object-contain"
                    />
                  </div>
                ) : (
                  <div className="relative">
                    <video
                      id="modal-video"
                      className="w-full h-auto max-h-[70vh]"
                      controls
                      autoPlay={isPlaying}
                      muted={isMuted}
                      onPlay={() => setIsPlaying(true)}
                      onPause={() => setIsPlaying(false)}
                    >
                      <source src={selectedItem.src} type="video/mp4" />
                    </video>

                    {/* Custom video controls overlay */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between bg-black/40 backdrop-blur-sm rounded-lg p-3">
                      <button
                        onClick={togglePlayPause}
                        className="text-white/80 hover:text-white transition-colors"
                      >
                        {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                      </button>
                      <button
                        onClick={toggleMute}
                        className="text-white/80 hover:text-white transition-colors"
                      >
                        {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
                      </button>
                    </div>
                  </div>
                )}

                {/* Info panel */}
                <div className="p-6 bg-cosmic-void/40 backdrop-blur-sm">
                  <h3 className="text-2xl font-bold text-gradient mb-2">
                    {selectedItem.title}
                  </h3>
                  {selectedItem.description && (
                    <p className="text-nebula-300">
                      {selectedItem.description}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}