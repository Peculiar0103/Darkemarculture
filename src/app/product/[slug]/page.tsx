"use client"

import { useState, use } from 'react'
import { sampleProducts } from '@/data/products'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { useCart } from '@/context/CartContext'

export default function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params)
  const product = sampleProducts.find(p => p.slug === resolvedParams.slug)
  
  if (!product) {
    notFound()
  }

  const { addToCart } = useCart()
  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0] || 'Standard')
  const [selectedColor, setSelectedColor] = useState<string>(product.colors[0] || 'Original')
  const [quantity, setQuantity] = useState<number>(1)
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const [addedNotice, setAddedNotice] = useState(false)

  const displayPrice = `£${product.priceGBP}`

  const phoneNumber = "447341158348"
  const optionsText = [
    selectedSize && selectedSize !== 'Standard' ? `Size: ${selectedSize}` : null,
    selectedColor && selectedColor !== 'Default' && selectedColor !== 'Original' ? `Colour: ${selectedColor}` : null
  ].filter(Boolean).join('\n')

  const message = `Hello Darkemar Culture, I would like to inquire/order:
Product: ${product.name}
Price: £${product.priceGBP}
Quantity: ${quantity}
${optionsText}

Please provide the next steps for my order.`.replace(/\n\n+/g, '\n\n')
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  const handleAddToCart = () => {
    addToCart(product, selectedSize, selectedColor, quantity)
    setAddedNotice(true)
    setTimeout(() => setAddedNotice(false), 2500)
  }

  return (
    <div style={{ background: 'var(--bg-color)', minHeight: '100vh', color: 'var(--text-primary)', width: '100%', overflowX: 'hidden' }}>
      
      {/* Top Navigation */}
      <div style={{ padding: '20px 0', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container">
          <Link href="/shop" style={{ 
            fontSize: '0.72rem', 
            textTransform: 'uppercase', 
            letterSpacing: '0.12em', 
            color: 'var(--text-secondary)',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px'
          }}>
            <span>&larr;</span>
            <span>Back to Catalogue</span>
          </Link>
        </div>
      </div>

      <div className="container" style={{ display: 'flex', flexWrap: 'wrap', minHeight: 'calc(100vh - 120px)' }}>
        
        {/* Left Side - Gallery */}
        <div className="desktop-half" style={{ 
          position: 'relative', 
          background: 'var(--bg-secondary)',
          minHeight: '40vh',
          width: '100%'
        }}>
          <div style={{ 
            display: 'flex', 
            padding: '1.25rem',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center'
          }} className="product-gallery-wrapper">
            
            {/* Desktop Thumbnails (Hidden on mobile) */}
            {product.images && product.images.length > 1 && (
              <div className="mobile-hide hide-scroll" style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '0.75rem', 
                width: '70px', 
                marginRight: '1.5rem',
                overflowY: 'auto',
                paddingRight: '6px',
                flexShrink: 0
              }}>
                {product.images.map((img, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    style={{
                      border: `1px solid ${activeIndex === idx ? 'var(--color-burgundy)' : 'transparent'}`,
                      background: 'transparent',
                      padding: '2px',
                      cursor: 'pointer',
                      aspectRatio: '3/4',
                      width: '100%',
                      borderRadius: '2px',
                      overflow: 'hidden'
                    }}
                  >
                    {img.match(/\.(mp4|webm)$/i) ? (
                      <video src={img} style={{ width: '100%', height: '100%', objectFit: 'cover' }} muted />
                    ) : (
                      <img src={img} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="thumbnail" />
                    )}
                  </button>
                ))}
              </div>
            )}

            {/* Main Image Container */}
            <div style={{ 
              flex: 1, 
              position: 'relative', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              width: '100%',
              maxWidth: '520px',
              aspectRatio: '3/4',
              margin: '0 auto'
            }}>
              
              {/* Mobile Arrows (Only show on mobile if > 1 image) */}
              <style dangerouslySetInnerHTML={{__html: `
                @media (min-width: 768px) { .mobile-arrows { display: none !important; } }
              `}} />
              
              {product.images && product.images.length > 1 && (
                <button 
                  className="mobile-arrows"
                  onClick={() => setActiveIndex(prev => prev === 0 ? product.images.length - 1 : prev - 1)}
                  style={{ 
                    position: 'absolute', 
                    left: '8px', 
                    zIndex: 10, 
                    background: 'rgba(255,255,255,0.85)', 
                    border: 'none', 
                    borderRadius: '50%', 
                    width: '36px', 
                    height: '36px', 
                    cursor: 'pointer', 
                    fontSize: '1.1rem', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                  }}
                  aria-label="Previous image"
                >
                  &#8592;
                </button>
              )}
              
              {product.images && product.images.length > 0 ? (
                <div style={{ width: '100%', height: '100%', overflow: 'hidden', borderRadius: '2px' }}>
                  {product.images[activeIndex].match(/\.(mp4|webm)$/i) ? (
                    <video 
                      key={product.images[activeIndex]}
                      src={product.images[activeIndex]} 
                      autoPlay loop muted playsInline
                      style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
                      className="enhanced-product-img animate-fade-in" 
                    />
                  ) : (
                    <img 
                      key={product.images[activeIndex]}
                      src={product.images[activeIndex]} 
                      alt={product.name} 
                      style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
                      className="enhanced-product-img animate-fade-in" 
                    />
                  )}
                </div>
              ) : (
                <div style={{ 
                  width: '100%', 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  color: 'var(--text-muted)',
                  background: 'var(--bg-secondary)',
                  padding: '2rem',
                  textAlign: 'center'
                }}>
                  <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', color: 'var(--accent-color)', marginBottom: '0.5rem' }}>
                    DARKEMAR
                  </span>
                  <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
                    Photos available on request
                  </span>
                </div>
              )}

              {product.images && product.images.length > 1 && (
                <button 
                  className="mobile-arrows"
                  onClick={() => setActiveIndex(prev => (prev + 1) % product.images.length)}
                  style={{ 
                    position: 'absolute', 
                    right: '8px', 
                    zIndex: 10, 
                    background: 'rgba(255,255,255,0.85)', 
                    border: 'none', 
                    borderRadius: '50%', 
                    width: '36px', 
                    height: '36px', 
                    cursor: 'pointer', 
                    fontSize: '1.1rem', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                  }}
                  aria-label="Next image"
                >
                  &#8594;
                </button>
              )}
            </div>

          </div>
        </div>

        {/* Right Side - Details & Form */}
        <div className="desktop-half product-details-wrapper" style={{ 
          padding: '2rem 0',
          width: '100%'
        }}>
          
          <div style={{ marginBottom: '2rem' }}>
            <p style={{ 
              color: 'var(--color-burgundy, #4A0E17)', 
              textTransform: 'uppercase', 
              letterSpacing: '0.18em', 
              fontSize: '0.75rem',
              fontWeight: 600,
              marginBottom: '0.75rem'
            }}>
              {product.category}
            </p>
            <h1 style={{ 
              fontSize: 'clamp(1.8rem, 5vw, 3.2rem)', 
              marginBottom: '0.75rem', 
              lineHeight: '1.15',
              fontFamily: 'var(--font-heading)'
            }}>
              {product.name}
            </h1>
            <p style={{ 
              fontSize: 'clamp(1.4rem, 3.5vw, 1.8rem)', 
              fontWeight: 600, 
              color: 'var(--color-burgundy, #4A0E17)',
              fontFamily: 'var(--font-body)',
              marginTop: '0.5rem'
            }}>
              {displayPrice}
            </p>
          </div>

          <p style={{ 
            lineHeight: '1.75', 
            color: 'var(--text-secondary)', 
            marginBottom: '2.5rem', 
            fontSize: '0.95rem',
            fontWeight: 400
          }}>
            {product.description}
          </p>

          {/* Options */}
          <div style={{ marginBottom: '2.5rem' }}>
            
            {/* Color Selection */}
            {product.colors.length > 0 && product.colors[0] !== "Default" && (
              <div style={{ marginBottom: '2rem' }}>
                <label style={{ 
                  display: 'block', 
                  marginBottom: '0.75rem', 
                  color: 'var(--text-secondary)', 
                  textTransform: 'uppercase', 
                  fontSize: '0.72rem', 
                  letterSpacing: '0.12em',
                  fontWeight: 600
                }}>
                  Select Color: <strong style={{ color: 'var(--text-primary)' }}>{selectedColor}</strong>
                </label>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {product.colors.map(color => (
                    <button 
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      style={{
                        padding: '10px 18px',
                        border: `1px solid ${selectedColor === color ? 'var(--color-burgundy)' : 'var(--border-color)'}`,
                        background: selectedColor === color ? 'rgba(74, 14, 23, 0.05)' : 'transparent',
                        color: selectedColor === color ? 'var(--color-burgundy)' : 'var(--text-secondary)',
                        cursor: 'pointer',
                        fontSize: '0.8rem',
                        fontWeight: selectedColor === color ? 600 : 400,
                        transition: 'all 0.25s ease',
                        borderRadius: '2px',
                        minHeight: '44px'
                      }}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Size Selection */}
            {product.sizes.length > 0 && (
              <div style={{ marginBottom: '2rem' }}>
                <label style={{ 
                  display: 'block', 
                  marginBottom: '0.75rem', 
                  color: 'var(--text-secondary)', 
                  textTransform: 'uppercase', 
                  fontSize: '0.72rem', 
                  letterSpacing: '0.12em',
                  fontWeight: 600
                }}>
                  Select Size
                </label>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {product.sizes.map(size => (
                    <button 
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      style={{
                        padding: '10px 20px',
                        border: `1px solid ${selectedSize === size ? 'var(--color-burgundy)' : 'var(--border-color)'}`,
                        background: selectedSize === size ? 'rgba(74, 14, 23, 0.05)' : 'transparent',
                        color: selectedSize === size ? 'var(--color-burgundy)' : 'var(--text-secondary)',
                        cursor: 'pointer',
                        fontSize: '0.8rem',
                        fontWeight: selectedSize === size ? 600 : 400,
                        transition: 'all 0.25s ease',
                        borderRadius: '2px',
                        minHeight: '44px'
                      }}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div>
              <label style={{ 
                display: 'block', 
                marginBottom: '0.75rem', 
                color: 'var(--text-secondary)', 
                textTransform: 'uppercase', 
                fontSize: '0.72rem', 
                letterSpacing: '0.12em',
                fontWeight: 600
              }}>
                Quantity
              </label>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  style={{
                    width: '44px',
                    height: '44px',
                    border: '1px solid var(--border-color)',
                    background: 'transparent',
                    color: 'var(--text-primary)',
                    cursor: 'pointer',
                    fontSize: '1.2rem',
                    borderRadius: '2px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                  aria-label="Decrease quantity"
                >
                  -
                </button>
                <input 
                  type="number" 
                  min="1" 
                  value={quantity} 
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  style={{ 
                    padding: '10px', 
                    width: '60px', 
                    height: '44px',
                    border: '1px solid var(--border-color)', 
                    background: 'transparent', 
                    color: 'var(--text-primary)', 
                    fontSize: '1rem',
                    textAlign: 'center',
                    outline: 'none',
                    borderRadius: '2px'
                  }}
                />
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  style={{
                    width: '44px',
                    height: '44px',
                    border: '1px solid var(--border-color)',
                    background: 'transparent',
                    color: 'var(--text-primary)',
                    cursor: 'pointer',
                    fontSize: '1.2rem',
                    borderRadius: '2px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Dual Action CTAs: Direct Bag Add + WhatsApp Custom Order */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <button 
              onClick={handleAddToCart}
              className="btn btn-solid" 
              style={{ 
                width: '100%', 
                padding: '16px',
                fontSize: '0.85rem',
                minHeight: '52px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
              <span>{addedNotice ? 'Added to Bag ✓' : 'Add to Shopping Bag'}</span>
            </button>

            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-outline-burgundy" 
              style={{ 
                width: '100%', 
                padding: '14px',
                fontSize: '0.8rem',
                minHeight: '48px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              <span>Inquire / Bespoke Order on WhatsApp</span>
            </a>
          </div>

        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @media (min-width: 768px) {
          .product-gallery-wrapper {
            position: sticky;
            top: 100px;
            height: calc(100vh - 120px);
            padding: 2rem;
          }
          .product-details-wrapper {
            padding: 6% 8% !important;
          }
        }
      `}} />
    </div>
  )
}
