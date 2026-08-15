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
          <div className="product-card-img-wrapper" style={{ width: '100%', height: '500px' }}>
            <img 
              src={thumbnail} 
              alt={product.name} 
              style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'bottom' }}
              className="enhanced-product-img"
            />
          </div>
        </Link>
      )}

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h3 style={{ 
            fontSize: '1.2rem', 
            marginBottom: '0.25rem', 
            fontWeight: '400',
            letterSpacing: '1px'
          }}>
            <Link href={`/product/${product.slug}`}>{product.name}</Link>
          </h3>
          <p style={{ 
            color: 'var(--text-secondary)', 
            fontSize: '0.75rem', 
            textTransform: 'uppercase', 
            letterSpacing: '2px' 
          }}>
            {product.category}
          </p>
        </div>
        
        <div style={{ textAlign: 'right' }}>
          <p style={{ 
            fontWeight: '300', 
            color: 'var(--text-primary)', 
            fontSize: '1.1rem',
            fontFamily: 'var(--font-heading)'
          }}>
            {displayPrice}
          </p>
          <Link href={`/product/${product.slug}`}>
             <span className="product-card-view-text">View Details</span>
          </Link>
        </div>
      </div>

    </div>
  )
}
