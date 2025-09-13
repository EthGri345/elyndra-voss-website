'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface CosmicButtonProps {
  children: ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  disabled?: boolean
}

export function CosmicButton({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  className,
  disabled = false
}: CosmicButtonProps) {
  const variants = {
    primary: 'bg-gradient-to-r from-nebula-600 to-cosmic-magenta hover:from-nebula-500 hover:to-cosmic-pink text-white',
    secondary: 'bg-cosmic-card border border-nebula-400 hover:border-nebula-300 text-nebula-100',
    ghost: 'bg-transparent hover:bg-nebula-800/20 text-nebula-300 hover:text-nebula-100'
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        'relative rounded-xl font-medium transition-all duration-300 cosmic-glow',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        variants[variant],
        sizes[size],
        className
      )}
      whileHover={{ scale: 1.02, y: -1 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
    </motion.button>
  )
}