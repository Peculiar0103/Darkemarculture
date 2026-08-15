import { sampleProducts } from '@/data/products'
import ProductCard from '@/components/ProductCard'

export default function ShopPage() {
  return (
    <div style={{ padding: '120px 0', minHeight: '100vh', background: 'var(--bg-color)' }}>
      <div className="container">
        
        {/* Editorial Header */}
        <div style={{ textAlign: 'center', marginBottom: '8rem' }}>
          <p style={{ 
            color: 'var(--accent-color)', 
            textTransform: 'uppercase', 
            letterSpacing: '4px',
            fontSize: '0.8rem',
            marginBottom: '1rem'
          }}>
            Catalogue
          </p>
          <h1 style={{ 
            fontSize: 'clamp(3rem, 5vw, 4.5rem)', 
            marginBottom: '2rem',
            letterSpacing: '2px'
          }}>
            The Collection
          </h1>
          <div style={{ width: '1px', height: '60px', background: 'var(--border-color)', margin: '0 auto' }}></div>
        </div>
        
        {/* Spacious Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))', 
          gap: '6rem 4rem' 
        }}>
          {sampleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </div>
  )
}
