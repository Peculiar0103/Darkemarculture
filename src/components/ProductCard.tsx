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
        width: '100%',
        minWidth: 0
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
          borderRadius: '2px'
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
                objectPosition: 'top center'
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
                transition: 'transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1), opacity 0.3s ease'
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
            padding: '1rem',
            textAlign: 'center',
            background: 'linear-gradient(135deg, #EFE9DF 0%, #E2D7C7 100%)',
            color: 'var(--text-secondary)'
          }}>
            <span style={{ 
              fontFamily: 'var(--font-heading)', 
              fontSize: 'clamp(1.2rem, 4vw, 1.8rem)', 
              color: 'var(--accent-color)', 
              marginBottom: '0.3rem',
              letterSpacing: '0.1em'
            }}>
              DARKEMAR
            </span>
            <span style={{ 
              fontSize: '0.68rem', 
              textTransform: 'uppercase', 
              letterSpacing: '0.15em', 
              color: 'var(--text-muted)' 
            }}>
              Crafted to Order
            </span>
            <span style={{ 
              fontSize: '0.65rem', 
              marginTop: '0.4rem', 
              color: 'var(--color-burgundy, #4A0E17)', 
              fontWeight: 500 
            }}>
              Inquire on WhatsApp
            </span>
          </div>
        )}

        {/* Multi-image indicator badge */}
        {hasMultipleImages && (
          <div style={{
            position: 'absolute',
            bottom: '8px',
            right: '8px',
            backgroundColor: 'rgba(23, 21, 19, 0.72)',
            backdropFilter: 'blur(4px)',
            color: '#FFFFFF',
            fontSize: 'clamp(0.55rem, 1.8vw, 0.65rem)',
            letterSpacing: '0.06em',
            padding: '2px 6px',
            borderRadius: '2px',
            display: 'flex',
            alignItems: 'center',
            gap: '3px',
            pointerEvents: 'none'
          }}>
            <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
          top: '8px',
          left: '8px',
          backgroundColor: 'rgba(247, 243, 236, 0.94)',
          backdropFilter: 'blur(4px)',
          color: 'var(--text-primary)',
          fontSize: 'clamp(0.55rem, 1.8vw, 0.65rem)',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          padding: '2px 6px',
          fontWeight: 600,
          border: '1px solid rgba(23, 21, 19, 0.08)'
        }}>
          {product.category}
        </div>
      </Link>

      {/* 2. PRODUCT DETAILS */}
      <div style={{
        paddingTop: '0.75rem',
        paddingBottom: '0.4rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.3rem',
        flexGrow: 1,
        minWidth: 0
      }}>
        {/* Product Name */}
        <h3 style={{
          fontSize: 'clamp(0.9rem, 2.8vw, 1.15rem)',
          fontWeight: 500,
          fontFamily: 'var(--font-heading)',
          color: 'var(--text-primary)',
          letterSpacing: '0.01em',
          lineHeight: '1.25',
          margin: 0,
          overflow: 'hidden',
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical'
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
          marginTop: '0.1rem'
        }}>
          <span style={{
            fontSize: 'clamp(0.95rem, 3vw, 1.15rem)',
            fontWeight: 600,
            color: 'var(--color-burgundy, #4A0E17)',
            fontFamily: 'var(--font-body)'
          }}>
            £{product.priceGBP}
          </span>
        </div>

        {/* Colorway note if available */}
        {product.colors && product.colors.length > 0 && product.colors[0] !== 'Default' && (
          <p style={{
            fontSize: '0.7rem',
            color: 'var(--text-secondary)',
            margin: '0.1rem 0 0 0',
            fontStyle: 'italic',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          }}>
            {product.colors.length} colorways
          </p>
        )}

        {/* Subtle Action Link */}
        <div style={{ marginTop: 'auto', paddingTop: '0.5rem' }}>
          <Link 
            href={`/product/${product.slug}`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              fontSize: 'clamp(0.68rem, 2vw, 0.75rem)',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              fontWeight: 500,
              color: 'var(--text-primary)',
              borderBottom: '1px solid var(--border-color)',
              paddingBottom: '2px',
              transition: 'all 0.3s ease'
            }}
            className="product-card-link"
          >
            <span>Discover More</span>
            <span style={{ fontSize: '0.8rem' }}>&rarr;</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
