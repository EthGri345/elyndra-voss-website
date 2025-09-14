'use client'

import { useEffect, useState } from 'react'

export function GalaxyBackground() {
  const [stars, setStars] = useState<Array<{ x: number; y: number; size: number; delay: number }>>([])

  useEffect(() => {
    const generateStars = () => {
      const newStars = []
      for (let i = 0; i < 200; i++) {
        newStars.push({
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1,
          delay: Math.random() * 3
        })
      }
      setStars(newStars)
    }

    generateStars()
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Galaxy spiral background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `
            radial-gradient(ellipse at 20% 50%, rgba(139, 69, 19, 0.1) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 20%, rgba(75, 0, 130, 0.15) 0%, transparent 50%),
            radial-gradient(ellipse at 40% 80%, rgba(138, 43, 226, 0.1) 0%, transparent 50%),
            radial-gradient(ellipse at 60% 30%, rgba(186, 85, 211, 0.08) 0%, transparent 50%),
            linear-gradient(135deg, rgba(25, 25, 112, 0.1) 0%, rgba(72, 61, 139, 0.05) 50%, transparent 100%)
          `
        }}
      />

      {/* Static galaxy arms */}
      <div
        className="absolute inset-0 opacity-15"
        style={{
          background: `
            radial-gradient(ellipse 200% 100% at 50% 50%,
              transparent 20%,
              rgba(138, 43, 226, 0.03) 25%,
              transparent 30%,
              transparent 70%,
              rgba(75, 0, 130, 0.03) 75%,
              transparent 80%
            )
          `
        }}
      />

      {/* Static stars */}
      {stars.map((star, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white opacity-60"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
        />
      ))}

      {/* Static nebula clouds */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: `
            radial-gradient(circle at 30% 20%, rgba(147, 0, 211, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 70% 80%, rgba(138, 43, 226, 0.06) 0%, transparent 40%),
            radial-gradient(circle at 20% 70%, rgba(72, 61, 139, 0.04) 0%, transparent 45%),
            radial-gradient(circle at 80% 30%, rgba(186, 85, 211, 0.03) 0%, transparent 35%)
          `
        }}
      />

      {/* Supernova effect */}
      <div
        className="absolute top-1/4 right-1/3 w-8 h-8 animate-ping"
        style={{
          background: `radial-gradient(circle,
            rgba(255, 255, 255, 0.9) 0%,
            rgba(255, 215, 0, 0.7) 20%,
            rgba(255, 69, 0, 0.5) 40%,
            rgba(255, 20, 147, 0.3) 60%,
            transparent 80%
          )`
        }}
      />

      {/* Secondary supernova glow */}
      <div
        className="absolute top-1/4 right-1/3 w-16 h-16 animate-pulse opacity-40"
        style={{
          background: `radial-gradient(circle,
            transparent 30%,
            rgba(255, 215, 0, 0.1) 40%,
            rgba(255, 69, 0, 0.05) 60%,
            transparent 80%
          )`
        }}
      />
    </div>
  )
}