import './globals.css'
import type { Metadata } from 'next'
import { ReactNode } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CartDrawer from '@/components/CartDrawer'
import { CartProvider } from '@/context/CartContext'

export const metadata: Metadata = {
  title: 'Darkemar Culture | Luxury African Fashion',
  description: 'Discover luxury African fashion, heritage, elegance, and cultural pride with Darkemar Culture.',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts for luxury feel */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&family=DM+Sans:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap" rel="stylesheet" />
      </head>
      <body style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <CartProvider>
          <Header />
          <main style={{ flex: 1 }}>
            {children}
          </main>
          <Footer />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  )
}
