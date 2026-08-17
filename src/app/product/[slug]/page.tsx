"use client"

import { useState, use, useEffect } from 'react'
import { sampleProducts } from '@/data/products'
import { notFound } from 'next/navigation'
import Link from 'next/link'

export default function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params)
  const product = sampleProducts.find(p => p.slug === resolvedParams.slug)
  
  if (!product) {
    notFound()
  }

  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0] || '')
  const [selectedColor, setSelectedColor] = useState<string>(product.colors[0] || '')
  const [quantity, setQuantity] = useState<number>(1)
  const [activeImage, setActiveImage] = useState<string>(product.images && product.images.length > 0 ? product.images[0] : '')

  const activeCurrency = 'GBP'
  const displayPrice = activeCurrency === 'GBP' ? `£${product.priceGBP}` : `₦${product.priceNGN.toLocaleString()}`

  const phoneNumber = "447341158348"
  const message = `Hello Darkemar Culture, I would like to order the ${product.name}.\nSize: ${selectedSize}\nColour: ${selectedColor}\nQuantity: ${quantity}\nPrice: ${displayPrice}`
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <div style={{ background: 'var(--bg-color)', minHeight: '100vh', color: 'var(--text-primary)' }}>
      
      {/* Top Navigation */}
      <div style={{ padding: '40px 5%', borderBottom: '1px solid var(--border-color)' }}>
        <Link href="/shop" style={{ 
          fontSize: '0.75rem', 
          textTransform: 'uppercase', 
          letterSpacing: '2px', 
          color: 'var(--text-secondary)' 
        }}>
          &larr; Back to Catalogue
        </Link>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', minHeight: 'calc(100vh - 100px)' }}>
        
        {/* Left Side - Sticky Image */}
        <div className="desktop-half" style={{ 
          position: 'relative', 
          background: 'var(--bg-secondary)',
          minHeight: '50vh'
        }}>
          <div style={{ position: 'sticky', top: '100px', height: 'calc(100vh - 100px)', padding: '2rem' }}>
            <img 
              src={activeImage} 
              alt={product.name} 
              style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
              className="enhanced-product-img" 
            />
          </div>
        </div>

        {/* Right Side - Details & Form */}
        <div className="desktop-half" style={{ padding: '8% 10%' }}>
          
          <div style={{ marginBottom: '4rem' }}>
            <p style={{ 
              color: 'var(--accent-color)', 
              textTransform: 'uppercase', 
              letterSpacing: '3px', 
              fontSize: '0.8rem',
              marginBottom: '1.5rem'
            }}>
              {product.category}
            </p>
            <h1 style={{ 
              fontSize: 'clamp(2.5rem, 4vw, 4rem)', 
              marginBottom: '1.5rem', 
              lineHeight: '1.1' 
            }}>
              {product.name}
            </h1>
            <p style={{ 
              fontSize: '1.8rem', 
              fontWeight: '300', 
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-heading)'
            }}>
              {displayPrice}
            </p>
          </div>

          <p style={{ 
            lineHeight: '2', 
            color: 'var(--text-secondary)', 
            marginBottom: '4rem', 
            fontSize: '1rem',
            fontWeight: 300
          }}>
            {product.description}
          </p>

          {/* Options */}
          <div style={{ marginBottom: '4rem' }}>
            
            {/* Color Selection */}
            {product.colors.length > 0 && product.colors[0] !== "Default" && (
              <div style={{ marginBottom: '3rem' }}>
                <label style={{ 
                  display: 'block', 
                  marginBottom: '1rem', 
                  color: 'var(--text-secondary)', 
                  textTransform: 'uppercase', 
                  fontSize: '0.75rem', 
                  letterSpacing: '2px' 
                }}>
                  Select Color
                </label>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  {product.colors.map(color => (
                    <button 
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      style={{
                        padding: '12px 24px',
                        border: `1px solid ${selectedColor === color ? 'var(--text-primary)' : 'var(--border-color)'}`,
                        background: 'transparent',
                        color: selectedColor === color ? 'var(--text-primary)' : 'var(--text-secondary)',
                        cursor: 'pointer',
                        fontSize: '0.85rem',
                        transition: 'all 0.4s ease'
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
              <div style={{ marginBottom: '3rem' }}>
                <label style={{ 
                  display: 'block', 
                  marginBottom: '1rem', 
                  color: 'var(--text-secondary)', 
                  textTransform: 'uppercase', 
                  fontSize: '0.75rem', 
                  letterSpacing: '2px' 
                }}>
                  Select Size
                </label>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  {product.sizes.map(size => (
                    <button 
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      style={{
                        padding: '12px 24px',
                        border: `1px solid ${selectedSize === size ? 'var(--text-primary)' : 'var(--border-color)'}`,
                        background: 'transparent',
                        color: selectedSize === size ? 'var(--text-primary)' : 'var(--text-secondary)',
                        cursor: 'pointer',
                        fontSize: '0.85rem',
                        transition: 'all 0.4s ease'
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
                  marginBottom: '1rem', 
                  color: 'var(--text-secondary)', 
                  textTransform: 'uppercase', 
                  fontSize: '0.75rem', 
                  letterSpacing: '2px' 
                }}>
                Quantity
              </label>
              <input 
                type="number" 
                min="1" 
                value={quantity} 
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                style={{ 
                  padding: '12px 24px', 
                  width: '100px', 
                  border: '1px solid var(--border-color)', 
                  background: 'transparent', 
                  color: 'var(--text-primary)', 
                  fontSize: '1rem',
                  outline: 'none'
                }}
              />
            </div>
          </div>

          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-solid" style={{ width: '100%', padding: '20px' }}>
            Order via WhatsApp
          </a>

          {/* Alternate Views / Thumbnails */}
          {product.images && product.images.length > 1 && (
            <div style={{ marginTop: '5rem', borderTop: '1px solid var(--border-color)', paddingTop: '3rem' }}>
              <p style={{ 
                  color: 'var(--text-secondary)', 
                  textTransform: 'uppercase', 
                  fontSize: '0.75rem', 
                  letterSpacing: '2px',
                  marginBottom: '1.5rem'
                }}>
                Alternate Views
              </p>
              <div style={{ display: 'flex', gap: '1rem', overflowX: 'auto', paddingBottom: '1rem' }}>
                {product.images.map((img, idx) => (
                  <div 
                    key={idx} 
                    onClick={() => setActiveImage(img)}
                    style={{ 
                      width: '80px', 
                      height: '100px', 
                      cursor: 'pointer',
                      border: activeImage === img ? '1px solid var(--accent-color)' : '1px solid var(--border-color)',
                      opacity: activeImage === img ? 1 : 0.4,
                      transition: 'all 0.3s ease',
                      flexShrink: 0
                    }}
                  >
                    <img src={img} alt={`View ${idx + 1}`} style={{ width: '100%', height: '100%', objectFit: 'contain' }} className="enhanced-product-img" />
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  )
}
