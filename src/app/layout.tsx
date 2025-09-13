import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://voss.com'),
  title: 'Voss | The Echo of the Nebula Veil',
  description: 'Enter the cosmic realm of Voss, Echo Warden of the Aetherweft. Discover her story, powers, and the mystical world where parallel realities converge.',
  keywords: 'Voss, cosmic fantasy, parallel worlds, echo magic, nebula veil, aetherweft, crypto project',
  authors: [{ name: 'Voss Community' }],
  creator: 'Voss Project',
  publisher: 'Voss Project',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://voss.com',
    title: 'Voss | The Echo of the Nebula Veil',
    description: 'Enter the cosmic realm of Voss, Echo Warden of the Aetherweft.',
    siteName: 'Voss',
    images: [
      {
        url: '/voss.png',
        width: 400,
        height: 400,
        alt: 'Voss, the Echo of the Nebula Veil',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Voss | The Echo of the Nebula Veil',
    description: 'Enter the cosmic realm of Voss, Echo Warden of the Aetherweft.',
    creator: '@VossEcho',
    images: ['/voss.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#7C3AED',
  colorScheme: 'dark',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="application-name" content="Voss" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Voss" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#7C3AED" />
        <meta name="msapplication-tap-highlight" content="no" />
      </head>
      <body className={`${inter.variable} font-cosmic antialiased nebula-bg min-h-screen`}>
        <div className="relative">
          {/* Galaxy background */}
          <div className="fixed inset-0">
            <div className="absolute inset-0 bg-gradient-radial from-nebula-950 via-cosmic-deep to-black" />
          </div>

          {/* Main content */}
          <main className="relative z-10">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}