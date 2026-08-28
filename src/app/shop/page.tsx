"use client"

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { sampleProducts, Product } from '@/data/products'
import ProductCard from '@/components/ProductCard'

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [sortBy, setSortBy] = useState<string>('featured')
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false)

  // Dynamic categories list based on all products in catalog
  const categories = useMemo(() => {
    const cats = Array.from(new Set(sampleProducts.map((p) => p.category).filter(Boolean)))
    return ['All', ...cats]
  }, [])

  // Filtered & Sorted Products
  const filteredProducts = useMemo(() => {
    let result = [...sampleProducts]

    // Category filter
    if (selectedCategory !== 'All') {
      result = result.filter(
        (p) => p.category.toLowerCase() === selectedCategory.toLowerCase()
      )
    }

    // Sorting
    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.priceGBP - b.priceGBP)
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.priceGBP - a.priceGBP)
    } else if (sortBy === 'name-asc') {
      result.sort((a, b) => a.name.localeCompare(b.name))
    }

    return result
  }, [selectedCategory, sortBy])

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (newsletterEmail) {
      setNewsletterSubmitted(true)
      setNewsletterEmail('')
    }
  }

  return (
    <div style={{ background: 'var(--bg-color)', minHeight: '100vh', width: '100%', overflowX: 'hidden' }}>
      
      {/* 1. EDITORIAL HERO SECTION */}
      <section style={{ 
        borderBottom: '1px solid var(--border-color)',
        backgroundColor: 'var(--bg-color)',
        paddingTop: '1.25rem',
        paddingBottom: '2.5rem'
      }}>
        <div className="container">
          
          {/* Breadcrumbs */}
          <div style={{ marginBottom: '1rem' }}>
            <p style={{
              fontSize: '0.72rem',
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              color: 'var(--text-muted)'
            }}>
              <Link href="/" style={{ color: 'var(--text-secondary)' }}>Home</Link>
              <span style={{ margin: '0 6px' }}>/</span>
              <span style={{ color: 'var(--color-burgundy, #4A0E17)', fontWeight: 500 }}>The Collection</span>
            </p>
          </div>

          {/* Hero Content: Horizontal split on Desktop, Stacked on Mobile */}
          <div className="editorial-flex" style={{ alignItems: 'center', gap: '2rem' }}>
            
            {/* Left Column: Typography */}
            <div style={{ flex: '1 1 50%', maxWidth: '640px', width: '100%' }} className="animate-fade-in">
              <span style={{
                display: 'inline-block',
                color: 'var(--color-burgundy, #4A0E17)',
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                fontSize: '0.75rem',
                fontWeight: 600,
                marginBottom: '0.75rem',
                borderLeft: '2px solid var(--color-burgundy, #4A0E17)',
                paddingLeft: '8px'
              }}>
                OUR COLLECTION
              </span>
              
              <h1 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.9rem, 6.5vw, 3.8rem)',
                lineHeight: '1.1',
                letterSpacing: '0.01em',
                textTransform: 'uppercase',
                color: 'var(--text-primary)',
                marginBottom: '1rem',
                fontWeight: 500
              }}>
                TIMELESS STYLES.<br />
                <span style={{ color: 'var(--color-burgundy, #4A0E17)', fontStyle: 'italic' }}>
                  ROOTED IN CULTURE.
                </span>
              </h1>

              <p style={{
                fontSize: 'clamp(0.9rem, 2.2vw, 1.1rem)',
                lineHeight: '1.65',
                color: 'var(--text-secondary)',
                marginBottom: '1.5rem',
                maxWidth: '520px',
                fontWeight: 400
              }}>
                Discover pieces that celebrate African heritage with elegance, confidence and pride.
              </p>

              {/* Badges / Highlights */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem 1rem',
                alignItems: 'center',
                paddingTop: '0.25rem'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.72rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--text-primary)',
                  fontWeight: 500
                }}>
                  <span style={{ 
                    width: '6px', 
                    height: '6px', 
                    borderRadius: '50%', 
                    backgroundColor: 'var(--accent-color)',
                    flexShrink: 0
                  }}></span>
                  <span>{sampleProducts.length} Signature Designs</span>
                </div>
                <span style={{ color: 'var(--border-color)' }}>•</span>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.72rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--text-secondary)'
                }}>
                  <span>Handcrafted Embellishments</span>
                </div>
                <span style={{ color: 'var(--border-color)' }}>•</span>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.72rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--text-secondary)'
                }}>
                  <span>Worldwide Delivery</span>
                </div>
              </div>

            </div>

            {/* Right Column: Hero Fashion Photography */}
            <div style={{ flex: '1 1 50%', width: '100%', display: 'flex', justifyContent: 'center' }}>
              <div style={{
                position: 'relative',
                width: '100%',
                maxWidth: '460px',
                aspectRatio: '4/5',
                overflow: 'hidden',
                borderRadius: '2px',
                backgroundColor: 'var(--bg-secondary)',
                boxShadow: '0 12px 30px -10px rgba(23, 21, 19, 0.08)'
              }}>
                <img 
                  src="/images/new-hero-image.jpeg" 
                  alt="Darkemar Culture Collection Showcase" 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'top center'
                  }}
                  className="enhanced-product-img"
                  loading="eager"
                />
                
                {/* Floating Heritage Badge */}
                <div style={{
                  position: 'absolute',
                  bottom: '12px',
                  left: '12px',
                  backgroundColor: 'rgba(23, 21, 19, 0.85)',
                  backdropFilter: 'blur(6px)',
                  color: '#FFFFFF',
                  padding: '6px 12px',
                  borderRadius: '2px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '2px'
                }}>
                  <span style={{ 
                    fontSize: '0.62rem', 
                    letterSpacing: '0.12em', 
                    textTransform: 'uppercase',
                    color: 'var(--accent-color)',
                    fontWeight: 600
                  }}>
                    Featured Piece
                  </span>
                  <span style={{ 
                    fontFamily: 'var(--font-heading)', 
                    fontSize: '0.92rem',
                    letterSpacing: '0.02em'
                  }}>
                    Aso Oke Bubu Stoned
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2. COLLECTION CONTROLS SECTION */}
      <section style={{
        position: 'sticky',
        top: '56px',
        zIndex: 40,
        backgroundColor: 'rgba(247, 243, 236, 0.96)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--border-color)',
        padding: '0.65rem 0'
      }}>
        <div className="container" style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.65rem'
        }}>
          
          {/* Row 1: Category Filter Pills (Smooth scroll on mobile) */}
          <div className="hide-scroll" style={{
            display: 'flex',
            gap: '0.4rem',
            overflowX: 'auto',
            paddingBottom: '2px',
            width: '100%',
            WebkitOverflowScrolling: 'touch'
          }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`filter-pill ${selectedCategory === cat ? 'active' : ''}`}
                aria-pressed={selectedCategory === cat}
                style={{ flexShrink: 0 }}
              >
                {cat === 'All' ? 'All Categories' : cat}
              </button>
            ))}
          </div>

          {/* Row 2: Live Count & Sort Dropdown */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '0.5rem',
            width: '100%'
          }}>
            {/* Product Count Display */}
            <span style={{
              fontSize: '0.72rem',
              color: 'var(--text-secondary)',
              letterSpacing: '0.04em',
              fontFamily: 'var(--font-body)',
              whiteSpace: 'nowrap'
            }}>
              Showing <strong style={{ color: 'var(--text-primary)' }}>{filteredProducts.length}</strong> of {sampleProducts.length}
            </span>

            {/* Sort Dropdown */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <label htmlFor="sort-select" style={{
                fontSize: '0.7rem',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'var(--text-muted)'
              }} className="mobile-hide">
                Sort:
              </label>
              <select
                id="sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="luxury-select"
                aria-label="Sort products"
                style={{
                  fontSize: '0.72rem',
                  padding: '6px 26px 6px 10px'
                }}
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="name-asc">Alphabetical</option>
              </select>
            </div>

          </div>

        </div>
      </section>

      {/* 3. PRODUCT GRID */}
      <section className="section-pad" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
        <div className="container">
          
          {filteredProducts.length > 0 ? (
            <div className="collection-grid-2">
              {filteredProducts.map((product, index) => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  priority={index < 4}
                />
              ))}
            </div>
          ) : (
            <div style={{
              textAlign: 'center',
              padding: '4rem 1.5rem',
              backgroundColor: 'var(--bg-secondary)',
              borderRadius: '2px'
            }}>
              <h3 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.5rem',
                marginBottom: '0.75rem',
                color: 'var(--text-primary)'
              }}>
                No pieces found in this category
              </h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.88rem' }}>
                Try selecting &ldquo;All Categories&rdquo; to browse the complete Darkemar Culture collection.
              </p>
              <button
                onClick={() => setSelectedCategory('All')}
                className="btn btn-solid"
              >
                View All Pieces
              </button>
            </div>
          )}

          {/* Need Bespoke Sizing / Custom Order Banner */}
          <div style={{
            marginTop: '3.5rem',
            padding: '2rem 1.5rem',
            backgroundColor: 'var(--bg-secondary)',
            border: '1px solid var(--border-color)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
            borderRadius: '2px'
          }} className="bespoke-banner">
            <div>
              <span style={{
                fontSize: '0.68rem',
                textTransform: 'uppercase',
                letterSpacing: '0.18em',
                color: 'var(--color-burgundy, #4A0E17)',
                fontWeight: 600,
                display: 'block',
                marginBottom: '0.3rem'
              }}>
                Custom Tailoring & Inquiries
              </span>
              <h3 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.3rem, 4vw, 1.6rem)',
                color: 'var(--text-primary)',
                margin: 0,
                lineHeight: '1.2'
              }}>
                Looking for a custom size or special event styling?
              </h3>
              <p style={{
                color: 'var(--text-secondary)',
                fontSize: '0.85rem',
                marginTop: '0.4rem',
                marginBottom: 0,
                lineHeight: '1.5'
              }}>
                Speak directly with our design consultants on WhatsApp for bespoke orders and size consultations.
              </p>
            </div>

            <div>
              <a 
                href="https://wa.me/447341158348?text=Hello%20Darkemar%20Culture%2C%20I%20am%20interested%20in%20a%20custom%20order%20%2F%20bespoke%20inquiry."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-solid"
                style={{ 
                  padding: '12px 24px', 
                  width: '100%', 
                  maxWidth: '320px',
                  textAlign: 'center',
                  display: 'inline-flex'
                }}
              >
                Consult on WhatsApp &rarr;
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* 4. COLLECTION BENEFITS SECTION */}
      <section style={{
        backgroundColor: '#EFE9DF',
        borderTop: '1px solid var(--border-color)',
        borderBottom: '1px solid var(--border-color)',
        padding: '3rem 0'
      }}>
        <div className="container">
          <div className="benefits-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '1.5rem 1rem'
          }}>
            
            {/* Benefit 1 */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <div style={{
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-burgundy, #4A0E17)',
                backgroundColor: 'rgba(74, 14, 23, 0.06)',
                borderRadius: '2px',
                flexShrink: 0
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </div>
              <h4 style={{
                fontSize: '0.78rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                fontWeight: 600,
                color: 'var(--text-primary)',
                margin: 0
              }}>
                AUTHENTIC &amp; QUALITY
              </h4>
              <p style={{
                fontSize: '0.72rem',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                color: 'var(--text-secondary)',
                lineHeight: '1.5',
                margin: 0
              }}>
                PREMIUM FABRICS AND ATTENTION TO DETAIL IN EVERY PIECE.
              </p>
            </div>

            {/* Benefit 2 */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <div style={{
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-burgundy, #4A0E17)',
                backgroundColor: 'rgba(74, 14, 23, 0.06)',
                borderRadius: '2px',
                flexShrink: 0
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
              </div>
              <h4 style={{
                fontSize: '0.78rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                fontWeight: 600,
                color: 'var(--text-primary)',
                margin: 0
              }}>
                PROUDLY AFRICAN
              </h4>
              <p style={{
                fontSize: '0.72rem',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                color: 'var(--text-secondary)',
                lineHeight: '1.5',
                margin: 0
              }}>
                CELEBRATING AFRICAN HERITAGE THROUGH TIMELESS FASHION.
              </p>
            </div>

            {/* Benefit 3 */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <div style={{
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-burgundy, #4A0E17)',
                backgroundColor: 'rgba(74, 14, 23, 0.06)',
                borderRadius: '2px',
                flexShrink: 0
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
              </div>
              <h4 style={{
                fontSize: '0.78rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                fontWeight: 600,
                color: 'var(--text-primary)',
                margin: 0
              }}>
                WORLDWIDE DELIVERY
              </h4>
              <p style={{
                fontSize: '0.72rem',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                color: 'var(--text-secondary)',
                lineHeight: '1.5',
                margin: 0
              }}>
                DELIVERING OUR COLLECTION TO CUSTOMERS WHEREVER THEY ARE.
              </p>
            </div>

            {/* Benefit 4 */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <div style={{
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-burgundy, #4A0E17)',
                backgroundColor: 'rgba(74, 14, 23, 0.06)',
                borderRadius: '2px',
                flexShrink: 0
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
              </div>
              <h4 style={{
                fontSize: '0.78rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                fontWeight: 600,
                color: 'var(--text-primary)',
                margin: 0
              }}>
                SECURE SHOPPING
              </h4>
              <p style={{
                fontSize: '0.72rem',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                color: 'var(--text-secondary)',
                lineHeight: '1.5',
                margin: 0
              }}>
                A SIMPLE AND TRUSTWORTHY SHOPPING EXPERIENCE.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 5. NEWSLETTER SIGNUP SECTION */}
      <section className="section-pad" style={{
        backgroundColor: 'var(--bg-color)',
        textAlign: 'center',
        padding: '3.5rem 0'
      }}>
        <div className="container" style={{ maxWidth: '640px' }}>
          
          <span style={{
            fontSize: '0.72rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--accent-color)',
            fontWeight: 600,
            display: 'block',
            marginBottom: '0.75rem'
          }}>
            Privilege Club
          </span>

          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(1.6rem, 5vw, 2.6rem)',
            color: 'var(--text-primary)',
            letterSpacing: '0.02em',
            textTransform: 'uppercase',
            marginBottom: '1rem',
            lineHeight: '1.15'
          }}>
            JOIN THE DARKEMAR CULTURE FAMILY
          </h2>

          <p style={{
            color: 'var(--text-secondary)',
            fontSize: '0.88rem',
            lineHeight: '1.6',
            marginBottom: '2rem'
          }}>
            Be the first to know about new collections, exclusive offers and style inspiration.
          </p>

          {newsletterSubmitted ? (
            <div style={{
              padding: '1.25rem',
              backgroundColor: 'rgba(74, 14, 23, 0.08)',
              border: '1px solid var(--color-burgundy, #4A0E17)',
              color: 'var(--color-burgundy, #4A0E17)',
              borderRadius: '2px',
              fontSize: '0.85rem',
              letterSpacing: '0.04em'
            }}>
              Thank you for subscribing to Darkemar Culture. Welcome to the family!
            </div>
          ) : (
            <form onSubmit={handleNewsletterSubmit} style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.6rem',
              maxWidth: '460px',
              margin: '0 auto'
            }}>
              <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                gap: '0.5rem',
                width: '100%'
              }}>
                <input 
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  style={{
                    flex: '1 1 200px',
                    padding: '12px 16px',
                    fontSize: '0.85rem',
                    border: '1px solid var(--border-color)',
                    backgroundColor: '#FFFFFF',
                    color: 'var(--text-primary)',
                    borderRadius: '2px',
                    outline: 'none',
                    fontFamily: 'var(--font-body)'
                  }}
                />
                <button
                  type="submit"
                  className="btn btn-solid"
                  style={{
                    flex: '1 1 auto',
                    padding: '12px 24px',
                    whiteSpace: 'nowrap',
                    minHeight: '44px'
                  }}
                >
                  Subscribe
                </button>
              </div>
              <span style={{
                fontSize: '0.68rem',
                color: 'var(--text-muted)',
                letterSpacing: '0.02em',
                textAlign: 'left'
              }}>
                We respect your privacy. Unsubscribe at any time.
              </span>
            </form>
          )}

        </div>
      </section>

    </div>
  )
}
