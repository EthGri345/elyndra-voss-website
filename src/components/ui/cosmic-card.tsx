'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface CosmicCardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  glow?: boolean
  onClick?: () => void
}

export function CosmicCard({
  children,
  className,
  hover = true,
  glow = false,
  onClick
}: CosmicCardProps) {
  return (
    <motion.div
      className={cn(
        'cosmic-card p-6 backdrop-blur-lg',
        hover && 'cursor-pointer',
        glow && 'glow-purple',
        className
      )}
      onClick={onClick}
      whileHover={hover ? { scale: 1.02, y: -4 } : {}}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  )
}