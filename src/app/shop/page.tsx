import { sampleProducts } from '@/data/products'
import ProductCard from '@/components/ProductCard'

export default function ShopPage() {
  return (
    <div style={{ padding: '60px 0' }}>
      <div className="container">
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>The Collection</h1>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem' }}>
          Browse our exclusive range of luxury African fashion.
        </p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2.5rem' }}>
          {sampleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}
