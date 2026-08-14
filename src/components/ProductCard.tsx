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
    <div style={{ 
      background: 'var(--secondary-color)', 
      border: '1px solid var(--border-color)', 
      borderRadius: '2px', 
      overflow: 'hidden',
      transition: 'all 0.4s ease',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      minHeight: '400px'
    }} className="product-card-type">
      
      {thumbnail && (
        <Link href={`/product/${product.slug}`}>
          <div style={{ width: '100%', height: '350px', background: 'transparent', overflow: 'hidden', position: 'relative' }}>
            <img 
              src={thumbnail} 
              alt={product.name} 
              style={{ width: '100%', height: '100%', objectFit: 'contain', transition: 'transform 0.5s ease' }}
              className="product-card-img enhanced-product-img"
            />
          </div>
        </Link>
      )}

      <div style={{ padding: '2rem' }}>
        <p style={{ color: 'var(--accent-color)', marginBottom: '0.5rem', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '2px' }}>
          {product.category}
        </p>
        <h3 style={{ marginBottom: '1rem', fontSize: '1.4rem', lineHeight: '1.3', fontWeight: '400' }}>
          <Link href={`/product/${product.slug}`}>{product.name}</Link>
        </h3>
        
        <p style={{ fontWeight: '400', color: 'var(--text-primary)', fontSize: '1.2rem', marginBottom: '1.5rem' }}>{displayPrice}</p>
        
        <Link href={`/product/${product.slug}`} className="btn btn-secondary" style={{ width: '100%', padding: '12px' }}>View Details</Link>
      </div>

    </div>
  )
}
