import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cosmic: {
          deep: '#0B0715',
          purple: '#4C1D95',
          magenta: '#BE185D',
          pink: '#EC4899',
          lavender: '#C084FC',
          void: '#1E1B4B',
          shimmer: '#F3E8FF',
        },
        nebula: {
          50: '#FAF5FF',
          100: '#F3E8FF',
          200: '#E9D5FF',
          300: '#D8B4FE',
          400: '#C084FC',
          500: '#A855F7',
          600: '#9333EA',
          700: '#7C3AED',
          800: '#6B21A8',
          900: '#581C87',
          950: '#3B0764',
        }
      },
      fontFamily: {
        'cosmic': ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'nebula-gradient': 'radial-gradient(ellipse at top, #581C87, #3B0764, #0B0715)',
        'cosmic-glow': 'radial-gradient(circle at center, rgba(196, 132, 252, 0.3), transparent)',
        'echo-shimmer': 'linear-gradient(45deg, transparent, rgba(236, 72, 153, 0.1), transparent)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'echo-ripple': 'echo-ripple 2s ease-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'echo-ripple': {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(4)', opacity: '0' },
        },
      },
      blur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}
export default config