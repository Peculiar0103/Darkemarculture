import Link from 'next/link'
import { Product } from '@/data/products'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const activeCurrency = 'GBP'
  const displayPrice = activeCurrency === 'GBP' ? `£${product.priceGBP}` : `₦${product.priceNGN.toLocaleString()}`

  // Use the first image as the thumbnail, or fallback if no images exist
  const thumbnail = product.images && product.images.length > 0 ? product.images[0] : null

  return (
    <div className="product-card" style={{ 
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem',
      cursor: 'pointer'
    }}>
      
      {thumbnail && (
        <Link href={`/product/${product.slug}`}>
          {/* 4:5 Portrait Ratio Container */}
          <div className="product-card-img-wrapper" style={{ width: '100%', aspectRatio: '4/5' }}>
            <img 
              src={thumbnail} 
              alt={product.name} 
              style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'bottom' }}
              className="enhanced-product-img"
              loading="lazy"
            />
          </div>
        </Link>
      )}

      {/* Product Info - Minimalist underneath */}
      <div style={{ textAlign: 'center' }}>
        <h3 style={{ 
          fontSize: '1rem', 
          marginBottom: '0.5rem', 
          fontWeight: '500',
          fontFamily: 'var(--font-body)'
        }}>
          <Link href={`/product/${product.slug}`}>{product.name}</Link>
        </h3>
        
        <p style={{ 
          fontWeight: '400', 
          color: 'var(--text-secondary)', 
          fontSize: '0.95rem',
          fontFamily: 'var(--font-body)',
          marginBottom: '0.5rem'
        }}>
          {displayPrice}
        </p>

        <Link href={`/product/${product.slug}`} style={{
          fontSize: '0.75rem',
          textTransform: 'uppercase',
          letterSpacing: '0.15em',
          color: 'var(--text-primary)',
          borderBottom: '1px solid var(--border-color)',
          paddingBottom: '2px',
          display: 'inline-block',
          padding: '10px 0'
        }}>
          Explore
        </Link>
      </div>

    </div>
  )
}
