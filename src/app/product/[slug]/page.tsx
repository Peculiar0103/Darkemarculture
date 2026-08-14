"use client"

import { useState, use } from 'react'
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
    <div style={{ padding: '80px 0', minHeight: '85vh' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        <Link href="/shop" style={{ display: 'inline-block', marginBottom: '3rem', color: 'var(--text-secondary)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
          &larr; Back to Shop
        </Link>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem' }}>
          
          {/* Image Gallery */}
          <div>
            {product.images && product.images.length > 0 ? (
              <>
                {/* Main Image */}
                <div style={{ width: '100%', height: '600px', background: 'transparent', marginBottom: '1rem', position: 'relative' }}>
                  <img src={activeImage} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} className="enhanced-product-img" />
                </div>
                
                {/* Thumbnails */}
                {product.images.length > 1 && (
                  <div style={{ display: 'flex', gap: '1rem', overflowX: 'auto', paddingBottom: '1rem' }}>
                    {product.images.map((img, idx) => (
                      <div 
                        key={idx} 
                        onClick={() => setActiveImage(img)}
                        style={{ 
                          width: '80px', 
                          height: '100px', 
                          cursor: 'pointer',
                          border: activeImage === img ? '2px solid var(--accent-color)' : '2px solid transparent',
                          opacity: activeImage === img ? 1 : 0.6,
                          transition: 'all 0.3s ease',
                          flexShrink: 0
                        }}
                      >
                        <img src={img} alt={`${product.name} view ${idx + 1}`} style={{ width: '100%', height: '100%', objectFit: 'contain' }} className="enhanced-product-img" />
                      </div>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <div style={{ width: '100%', height: '600px', background: 'var(--secondary-color)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <p style={{ color: 'var(--text-secondary)' }}>No images available</p>
              </div>
            )}
          </div>

          {/* Product Details */}
          <div>
            <div style={{ marginBottom: '2rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '2rem' }}>
              <p style={{ color: 'var(--accent-color)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>
                {product.category}
              </p>
              <h1 style={{ fontSize: '3rem', marginBottom: '1rem', lineHeight: '1.2' }}>{product.name}</h1>
              <p style={{ fontSize: '2rem', fontWeight: '400', color: 'var(--text-primary)' }}>{displayPrice}</p>
            </div>

            <p style={{ lineHeight: '1.8', color: 'var(--text-secondary)', marginBottom: '3rem', fontSize: '1.1rem' }}>
              {product.description}
            </p>

            {/* Options */}
            <div style={{ marginBottom: '3rem' }}>
              {product.colors.length > 0 && product.colors[0] !== "Default" && (
                <div style={{ marginBottom: '2rem' }}>
                  <label style={{ display: 'block', marginBottom: '1rem', fontWeight: '500', color: 'var(--text-primary)', textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '1px' }}>Color</label>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {product.colors.map(color => (
                      <button 
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        style={{
                          padding: '10px 20px',
                          border: `1px solid ${selectedColor === color ? 'var(--accent-color)' : 'var(--border-color)'}`,
                          background: selectedColor === color ? 'var(--accent-color)' : 'transparent',
                          color: selectedColor === color ? 'var(--primary-color)' : 'var(--text-primary)',
                          cursor: 'pointer',
                          borderRadius: '2px',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {product.sizes.length > 0 && (
                <div style={{ marginBottom: '2rem' }}>
                  <label style={{ display: 'block', marginBottom: '1rem', fontWeight: '500', color: 'var(--text-primary)', textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '1px' }}>Size</label>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {product.sizes.map(size => (
                      <button 
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        style={{
                          padding: '10px 20px',
                          border: `1px solid ${selectedSize === size ? 'var(--accent-color)' : 'var(--border-color)'}`,
                          background: selectedSize === size ? 'var(--accent-color)' : 'transparent',
                          color: selectedSize === size ? 'var(--primary-color)' : 'var(--text-primary)',
                          cursor: 'pointer',
                          borderRadius: '2px',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <label style={{ display: 'block', marginBottom: '1rem', fontWeight: '500', color: 'var(--text-primary)', textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '1px' }}>Quantity</label>
                <input 
                  type="number" 
                  min="1" 
                  value={quantity} 
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  style={{ padding: '12px 20px', width: '100px', border: '1px solid var(--border-color)', borderRadius: '2px', background: 'transparent', color: 'var(--text-primary)', fontSize: '1.1rem' }}
                />
              </div>
            </div>

            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn" style={{ width: '100%', padding: '18px', fontSize: '1.1rem', display: 'block', textAlign: 'center' }}>
              Order via WhatsApp
            </a>

          </div>
        </div>
      </div>
    </div>
  )
}
