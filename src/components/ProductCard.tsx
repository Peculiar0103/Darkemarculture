import Link from 'next/link'
import { Product } from '@/data/products'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const activeCurrency = 'GBP'
  const displayPrice = activeCurrency === 'GBP' ? `£${product.priceGBP}` : `₦${product.priceNGN.toLocaleString()}`

  const isVideo = (url: string) => url.match(/\.(mp4|webm)$/i)

  return (
    <div className="product-card" style={{ 
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem',
      cursor: 'pointer'
    }}>
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scroll::-webkit-scrollbar { display: none; }
      `}} />
      
      {product.images && product.images.length > 0 && (
        <div className="hide-scroll" style={{ 
          display: 'flex', 
          overflowX: 'auto', 
          scrollSnapType: 'x mandatory',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          width: '100%'
        }}>
          {product.images.map((media, idx) => (
            <div key={idx} style={{ 
              flex: '0 0 100%', 
              scrollSnapAlign: 'start',
              position: 'relative',
              aspectRatio: '4/5'
            }}>
              <Link href={`/product/${product.slug}`} style={{ display: 'block', width: '100%', height: '100%' }}>
                {isVideo(media) ? (
                  <video 
                    src={media}
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'bottom' }}
                    className="enhanced-product-img"
                  />
                ) : (
                  <img 
                    src={media} 
                    alt={`${product.name} view ${idx + 1}`} 
                    style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'bottom' }}
                    className="enhanced-product-img"
                    loading={idx === 0 ? "eager" : "lazy"}
                  />
                )}
              </Link>
            </div>
          ))}
        </div>
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
