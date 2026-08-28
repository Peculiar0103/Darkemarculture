"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Product } from '@/data/products'

interface ProductCardProps {
  product: Product
  priority?: boolean
}

export default function ProductCard({ product, priority = false }: ProductCardProps) {
  const [hoverIndex, setHoverIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const hasMultipleImages = product.images && product.images.length > 1
  const displayImage = product.images && product.images.length > 0 
    ? (isHovered && hasMultipleImages ? product.images[hoverIndex] : product.images[0])
    : null

  const isVideo = (url: string) => url?.match(/\.(mp4|webm)$/i)

  return (
    <div 
      className="product-card group"
      onMouseEnter={() => {
        setIsHovered(true)
        if (hasMultipleImages) setHoverIndex(1)
      }}
      onMouseLeave={() => {
        setIsHovered(false)
        setHoverIndex(0)
      }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        position: 'relative',
        transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
      }}
    >
      {/* 1. IMAGE CONTAINER */}
      <Link 
        href={`/product/${product.slug}`}
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '3/4',
          backgroundColor: 'var(--bg-secondary)',
          overflow: 'hidden',
          display: 'block',
          borderRadius: '1px'
        }}
      >
        {displayImage ? (
          isVideo(displayImage) ? (
            <video 
              src={displayImage}
              autoPlay
              loop
              muted
              playsInline
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'top center',
                transition: 'transform 0.7s cubic-bezier(0.2, 0.8, 0.2, 1)'
              }}
              className="enhanced-product-img"
            />
          ) : (
            <img 
              src={displayImage} 
              alt={product.name}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'top center',
                transform: isHovered ? 'scale(1.04)' : 'scale(1)',
                transition: 'transform 0.7s cubic-bezier(0.2, 0.8, 0.2, 1), opacity 0.4s ease'
              }}
              className="enhanced-product-img"
              loading={priority ? 'eager' : 'lazy'}
            />
          )
        ) : (
          /* Elegant Fallback for products awaiting photos */
          <div style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            textAlign: 'center',
            background: 'linear-gradient(135deg, #EFE9DF 0%, #E2D7C7 100%)',
            color: 'var(--text-secondary)'
          }}>
            <span style={{ 
              fontFamily: 'var(--font-heading)', 
              fontSize: '2rem', 
              color: 'var(--accent-color)', 
              marginBottom: '0.5rem',
              letterSpacing: '0.1em'
            }}>
              DARKEMAR
            </span>
            <span style={{ 
              fontSize: '0.75rem', 
              textTransform: 'uppercase', 
              letterSpacing: '0.2em', 
              color: 'var(--text-muted)' 
            }}>
              Crafted to Order
            </span>
            <span style={{ 
              fontSize: '0.7rem', 
              marginTop: '0.5rem', 
              color: 'var(--color-burgundy, #4A0E17)', 
              fontWeight: 500 
            }}>
              Inquire for Views
            </span>
          </div>
        )}

        {/* Multi-image indicator badge */}
        {hasMultipleImages && (
          <div style={{
            position: 'absolute',
            bottom: '12px',
            right: '12px',
            backgroundColor: 'rgba(23, 21, 19, 0.65)',
            backdropFilter: 'blur(6px)',
            color: '#FFFFFF',
            fontSize: '0.65rem',
            letterSpacing: '0.08em',
            padding: '4px 8px',
            borderRadius: '2px',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            pointerEvents: 'none'
          }}>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <circle cx="8.5" cy="8.5" r="1.5"></circle>
              <polyline points="21 15 16 10 5 21"></polyline>
            </svg>
            <span>{product.images.length} views</span>
          </div>
        )}

        {/* Category Pill on Image */}
        <div style={{
          position: 'absolute',
          top: '12px',
          left: '12px',
          backgroundColor: 'rgba(247, 243, 236, 0.92)',
          backdropFilter: 'blur(6px)',
          color: 'var(--text-primary)',
          fontSize: '0.65rem',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          padding: '4px 10px',
          fontWeight: 600,
          border: '1px solid rgba(23, 21, 19, 0.08)'
        }}>
          {product.category}
        </div>
      </Link>

      {/* 2. PRODUCT DETAILS */}
      <div style={{
        paddingTop: '1.25rem',
        paddingBottom: '0.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.4rem',
        flexGrow: 1
      }}>
        {/* Product Name */}
        <h3 style={{
          fontSize: '1.1rem',
          fontWeight: 500,
          fontFamily: 'var(--font-heading)',
          color: 'var(--text-primary)',
          letterSpacing: '0.02em',
          lineHeight: '1.3',
          margin: 0
        }}>
          <Link 
            href={`/product/${product.slug}`}
            style={{ color: 'inherit', textDecoration: 'none' }}
          >
            {product.name}
          </Link>
        </h3>

        {/* Price Section */}
        <div style={{
          display: 'flex',
          alignItems: 'baseline',
          gap: '0.6rem',
          marginTop: '0.2rem'
        }}>
          <span style={{
            fontSize: '1.05rem',
            fontWeight: 600,
            color: 'var(--color-burgundy, #4A0E17)',
            fontFamily: 'var(--font-body)'
          }}>
            £{product.priceGBP}
          </span>
        </div>

        {/* Colorway / Options note if available */}
        {product.colors && product.colors.length > 0 && product.colors[0] !== 'Default' && (
          <p style={{
            fontSize: '0.75rem',
            color: 'var(--text-secondary)',
            margin: '0.2rem 0 0 0',
            fontStyle: 'italic'
          }}>
            {product.colors.length} color combinations available
          </p>
        )}

        {/* Subtle Action Link */}
        <div style={{ marginTop: 'auto', paddingTop: '0.8rem' }}>
          <Link 
            href={`/product/${product.slug}`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.75rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              fontWeight: 500,
              color: 'var(--text-primary)',
              borderBottom: '1px solid var(--border-color)',
              paddingBottom: '3px',
              transition: 'all 0.3s ease'
            }}
            className="product-card-link"
          >
            <span>Discover More</span>
            <span style={{ fontSize: '0.85rem' }}>&rarr;</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
