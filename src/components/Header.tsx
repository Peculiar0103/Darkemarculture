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
    <header style={{ 
      background: 'var(--bg-color)', 
      borderBottom: '1px solid var(--border-color)',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      <div className="container" style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center'
      }}>
        <Link href="/" onClick={closeMenu} style={{ zIndex: 101 }}>
          <Image 
            src="/logo.jpeg" 
            alt="Darkemar Culture Logo" 
            width={50} 
            height={50} 
            style={{ borderRadius: '50%', objectFit: 'cover' }} 
          />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="mobile-hide" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <Link href="/" style={{ fontWeight: 500, textTransform: 'uppercase' }}>Home</Link>
          <Link href="/shop" style={{ fontWeight: 500, textTransform: 'uppercase' }}>Shop</Link>
          <Link href="/about" style={{ fontWeight: 500, textTransform: 'uppercase' }}>About</Link>
          <Link href="/contact" style={{ fontWeight: 500, textTransform: 'uppercase' }}>Contact</Link>
        </nav>

        {/* Mobile Hamburger Button */}
        <button 
          className={`hamburger-btn desktop-hide ${isOpen ? 'open' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      <div className={`mobile-nav-overlay ${isOpen ? 'open' : ''} desktop-hide`}>
        <Link href="/" onClick={closeMenu}>Home</Link>
        <Link href="/shop" onClick={closeMenu}>Shop</Link>
        <Link href="/about" onClick={closeMenu}>About Us</Link>
        <Link href="/how-to-order" onClick={closeMenu}>How to Order</Link>
        <Link href="/delivery-returns" onClick={closeMenu}>Delivery & Returns</Link>
        <Link href="/contact" onClick={closeMenu}>Contact</Link>
      </div>
    </header>
  )
}
