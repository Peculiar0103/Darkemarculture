import Link from 'next/link'
import { sampleProducts } from '@/data/products'
import ProductCard from '@/components/ProductCard'

export default function Home() {
  return (
    <div style={{ background: 'var(--bg-color)' }}>
      
      {/* HERO SECTION - Visual First */}
      <section style={{ 
        height: '100vh', 
        position: 'relative',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingBottom: '10vh'
      }}>
        {/* Background Image */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0
        }}>
          <img 
            src="/images/products/aso-oke-long-dress/image-01.jpeg" 
            alt="Darkemar Culture Aso Oke" 
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 10%' }}
            className="enhanced-product-img"
          />
          {/* Gradient overlay to ensure text readability */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(12,12,12,0.9) 100%)'
          }}></div>
        </div>

        {/* Content */}
        <div className="container animate-fade-in" style={{ zIndex: 1, textAlign: 'center', width: '100%' }}>
          <h1 style={{ 
            fontSize: 'clamp(3rem, 8vw, 6rem)', 
            letterSpacing: '0.1em',
            marginBottom: '1rem',
            textTransform: 'uppercase'
          }}>
            Darkemar Culture
          </h1>
          <p style={{ 
            fontSize: '1rem', 
            letterSpacing: '5px',
            textTransform: 'uppercase',
            color: 'var(--accent-color)',
            marginBottom: '3rem'
          }}>
            Luxury African Ready-to-Wear
          </p>
          <Link href="/shop" className="btn btn-solid">
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* CULTURAL BRAND STATEMENT */}
      <section style={{ padding: '160px 0', textAlign: 'center', background: 'var(--bg-secondary)' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ 
            fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
            lineHeight: '1.3',
            fontStyle: 'italic',
            marginBottom: '3rem'
          }}>
            "Wear your roots with pride."
          </h2>
          <div style={{ width: '1px', height: '80px', background: 'var(--accent-color)', margin: '0 auto' }}></div>
        </div>
      </section>

      {/* FEATURED COLLECTION - Editorial Layout */}
      <section style={{ padding: '160px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '6rem' }}>
            <h2 style={{ fontSize: '3rem', letterSpacing: '2px' }}>Curated Selections</h2>
            <Link href="/shop" style={{ 
              fontSize: '0.85rem', 
              textTransform: 'uppercase', 
              letterSpacing: '2px',
              borderBottom: '1px solid var(--accent-color)',
              paddingBottom: '4px',
              color: 'var(--accent-color)'
            }}>
              Discover More
            </Link>
          </div>
          
          {/* Staggered Grid */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', 
            gap: '4rem 6rem' 
          }}>
            {sampleProducts.slice(0, 2).map((product, index) => (
              <div key={product.id} style={{ marginTop: index % 2 !== 0 ? '8rem' : '0' }}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EDITORIAL HIGHLIGHT - Split Section */}
      <section style={{ display: 'flex', flexWrap: 'wrap', minHeight: '80vh', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
        <div style={{ flex: '1 1 50%', minHeight: '500px', position: 'relative' }}>
          <img 
            src="/images/products/2piece-set-adire-crepe/image-01.jpeg" 
            alt="Traditional Craftsmanship" 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            className="enhanced-product-img"
          />
        </div>
        <div style={{ 
          flex: '1 1 50%', 
          padding: '10% 8%', 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center',
          background: 'var(--bg-secondary)'
        }}>
          <h2 style={{ fontSize: '3.5rem', marginBottom: '2rem' }}>Traditional Craftsmanship</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '2', marginBottom: '3rem' }}>
            Our collections celebrate the meticulous traditional craftsmanship of African textiles. From the rich textures of Aso Oke to vibrant contemporary prints, every piece tells a story. We elevate these heritage fabrics into modern, sophisticated ready-to-wear silhouettes for the global stage.
          </p>
          <div>
            <Link href="/about" className="btn">Learn Our Story</Link>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section style={{ padding: '160px 0', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '700px' }}>
          <h2 style={{ fontSize: '3.5rem', marginBottom: '2rem' }}>Experience True Luxury</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '4rem', fontWeight: 300 }}>
            Join our exclusive clientele and elevate your wardrobe with pieces crafted with precision and undeniable pride.
          </p>
          <Link href="/shop" className="btn btn-solid">Explore The Catalogue</Link>
        </div>
      </section>

    </div>
  )
}
