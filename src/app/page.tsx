import Link from 'next/link'
import { sampleProducts } from '@/data/products'
import ProductCard from '@/components/ProductCard'

export default function Home() {
  return (
    <div>
      {/* Typographic Hero Section */}
      <section style={{ 
        minHeight: '85vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        background: 'var(--bg-color)',
        color: 'var(--text-primary)',
        textAlign: 'center',
        position: 'relative',
        padding: '100px 5%'
      }}>
        <div className="container animate-fade-in" style={{ zIndex: 2, maxWidth: '900px' }}>
          <p style={{ 
            color: 'var(--accent-color)', 
            fontSize: '1rem', 
            marginBottom: '1.5rem',
            textTransform: 'uppercase',
            letterSpacing: '5px'
          }}>
            Welcome to
          </p>
          <h1 style={{ 
            color: 'var(--text-primary)', 
            fontSize: '5rem', 
            marginBottom: '2rem',
            lineHeight: '1.1'
          }}>
            Darkemar Culture
          </h1>
          <p style={{ 
            fontSize: '1.3rem', 
            marginBottom: '4rem', 
            margin: '0 auto 4rem',
            color: 'var(--text-secondary)',
            fontWeight: 300,
            lineHeight: '1.8'
          }}>
            Authentic, luxury African fashion celebrating heritage, elegance, and cultural pride. Meticulously crafted for the modern visionary who demands excellence.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
            <Link href="/shop" className="btn">Discover Our Pieces</Link>
          </div>
        </div>
      </section>

      {/* Brand Ethos Section (Grid Layout) */}
      <section style={{ padding: '120px 0', background: 'var(--secondary-color)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: '3.5rem', color: 'var(--accent-color)', marginBottom: '1.5rem', lineHeight: '1.1' }}>
              The Heritage<br/>of Elegance.
            </h2>
            <div style={{ width: '60px', height: '2px', background: 'var(--accent-color)', marginBottom: '2rem' }}></div>
          </div>
          <div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', lineHeight: '2' }}>
              At Darkemar Culture, we believe that fashion is more than what you wear—it is a statement of identity, a profound connection to roots, and an expression of unparalleled elegance. Every piece in our collection is a testament to the rich tapestry of African artistry, reimagined for contemporary luxury.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Collections (Typographic Grid) */}
      <section style={{ padding: '120px 0', borderTop: '1px solid var(--border-color)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem', flexWrap: 'wrap', gap: '2rem' }}>
            <div>
              <h2 style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>Signature Pieces</h2>
              <p style={{ color: 'var(--text-secondary)', letterSpacing: '1px', textTransform: 'uppercase', fontSize: '0.9rem' }}>Exclusive Collections</p>
            </div>
            <Link href="/shop" style={{ borderBottom: '1px solid var(--accent-color)', color: 'var(--accent-color)', paddingBottom: '5px', letterSpacing: '1px', textTransform: 'uppercase', fontSize: '0.85rem' }}>View the full collection</Link>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '2.5rem' }}>
            {sampleProducts.slice(0, 3).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '100px 0', textAlign: 'center', background: 'var(--bg-color)', borderTop: '1px solid var(--border-color)' }}>
        <div className="container" style={{ maxWidth: '600px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Ready to Elevate Your Style?</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem' }}>Join our exclusive clientele and experience fashion crafted with precision and pride.</p>
          <Link href="/how-to-order" className="btn btn-secondary">Learn How To Order</Link>
        </div>
      </section>
    </div>
  )
}
