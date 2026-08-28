"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  return (
    <div style={{ position: 'sticky', top: 0, zIndex: 100 }}>
      {/* Top Announcement Bar */}
      <div style={{ 
        backgroundColor: '#36070E', 
        color: '#F7F3EC', 
        fontSize: '0.7rem', 
        letterSpacing: '0.18em', 
        textTransform: 'uppercase', 
        textAlign: 'center', 
        padding: '8px 16px',
        fontWeight: 500,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '8px'
      }}>
        <span>Welcome to Darkemar Culture</span>
        <span style={{ opacity: 0.4 }}>•</span>
        <span>Luxury Ready-to-Wear</span>
        <span style={{ opacity: 0.4 }} className="mobile-hide">•</span>
        <span className="mobile-hide">Worldwide Delivery</span>
      </div>

      <header style={{ 
        background: 'rgba(247, 243, 236, 0.96)', 
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid var(--border-color)',
        padding: '0.85rem 0'
      }}>
        <div className="container" style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center'
        }}>
          
          {/* Left: Mobile hamburger or Desktop Nav */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <button 
              className={`hamburger-btn desktop-hide ${isOpen ? 'open' : ''}`} 
              onClick={toggleMenu}
              aria-label="Toggle navigation menu"
              style={{ padding: '6px 0', border: 'none', background: 'none' }}
            >
              <div className="hamburger-line"></div>
              <div className="hamburger-line"></div>
              <div className="hamburger-line"></div>
            </button>

            <nav className="mobile-hide" style={{ display: 'flex', gap: '2.2rem', alignItems: 'center' }}>
              <Link href="/" style={{ fontSize: '0.85rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase' }}>Home</Link>
              <Link href="/shop" style={{ fontSize: '0.85rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-burgundy, #4A0E17)' }}>Shop Collection</Link>
              <Link href="/about" style={{ fontSize: '0.85rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase' }}>About Us</Link>
              <Link href="/contact" style={{ fontSize: '0.85rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase' }}>Contact</Link>
            </nav>
          </div>

          {/* Center: Brand Logo & Title */}
          <Link href="/" onClick={closeMenu} style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '12px',
            textDecoration: 'none'
          }}>
            <Image 
              src="/logo.jpeg" 
              alt="Darkemar Culture Logo" 
              width={42} 
              height={42} 
              style={{ borderRadius: '50%', objectFit: 'cover' }} 
            />
            <span style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.35rem',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--text-primary)'
            }}>
              Darkemar Culture
            </span>
          </Link>
          
          {/* Right: Quick Action / WhatsApp link */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
            <a 
              href="https://wa.me/447341158348" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '0.75rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                fontWeight: 500,
                color: 'var(--color-burgundy, #4A0E17)',
                padding: '6px 12px',
                border: '1px solid rgba(74, 14, 23, 0.2)',
                borderRadius: '2px',
                backgroundColor: 'rgba(74, 14, 23, 0.04)'
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              <span className="mobile-hide">WhatsApp Order</span>
            </a>
          </div>

        </div>

        {/* Mobile Navigation Overlay */}
        <div className={`mobile-nav-overlay ${isOpen ? 'open' : ''} desktop-hide`}>
          <Link href="/" onClick={closeMenu}>Home</Link>
          <Link href="/shop" onClick={closeMenu} style={{ color: 'var(--color-burgundy, #4A0E17)' }}>Shop Collection</Link>
          <Link href="/about" onClick={closeMenu}>About Us</Link>
          <Link href="/how-to-order" onClick={closeMenu}>How to Order</Link>
          <Link href="/delivery-returns" onClick={closeMenu}>Delivery & Returns</Link>
          <Link href="/contact" onClick={closeMenu}>Contact</Link>
        </div>
      </header>
    </div>
  )
}
