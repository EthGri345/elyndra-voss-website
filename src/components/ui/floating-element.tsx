'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface FloatingElementProps {
  children: ReactNode
  className?: string
  delay?: number
  intensity?: 'subtle' | 'medium' | 'strong'
}

export function FloatingElement({
  children,
  className,
  delay = 0,
  intensity = 'medium'
}: FloatingElementProps) {
  const intensities = {
    subtle: { y: [-3, 3, -3], duration: 8 },
    medium: { y: [-6, 6, -6], duration: 12 },
    strong: { y: [-10, 10, -10], duration: 16 }
  }

  const config = intensities[intensity]

  return (
    <motion.div
      className={cn('', className)}
      animate={{
        y: config.y,
        transition: {
          duration: config.duration,
          repeat: Infinity,
          ease: "easeInOut",
          delay
        }
      }}
    >
      {children}
    </motion.div>
  )
}