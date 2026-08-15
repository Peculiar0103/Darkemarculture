import Link from 'next/link'
import { sampleProducts } from '@/data/products'
import ProductCard from '@/components/ProductCard'

export default function Home() {
  return (
    <div style={{ background: 'var(--bg-color)' }}>
      
      {/* 1. HERO SECTION */}
      <section style={{ 
        height: '95vh', 
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
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
          {/* Subtle gradient for text readability */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(to bottom, rgba(23,21,19,0.3) 0%, rgba(23,21,19,0.7) 100%)'
          }}></div>
        </div>

        <div className="container animate-fade-in" style={{ zIndex: 1, textAlign: 'center', width: '100%', color: 'var(--bg-color)' }}>
          <h1 style={{ 
            fontSize: 'clamp(2.5rem, 6vw, 5rem)', 
            letterSpacing: '0.05em',
            marginBottom: '1rem',
            textTransform: 'uppercase'
          }}>
            Darkemar Culture
          </h1>
          <h2 style={{ 
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            fontStyle: 'italic',
            marginBottom: '1rem',
            fontWeight: 400
          }}>
            Wear your roots with pride.
          </h2>
          <p style={{ 
            fontSize: '0.9rem', 
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            fontFamily: 'var(--font-body)',
            marginBottom: '3rem'
          }}>
            Luxury African Ready-to-Wear
          </p>
          <Link href="/shop" className="btn" style={{ 
            borderColor: 'var(--bg-color)', 
            color: 'var(--bg-color)'
          }}>
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* 2. CULTURAL BRAND STATEMENT */}
      <section style={{ padding: '160px 0', background: 'var(--bg-color)' }}>
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '4rem' }}>
          <div style={{ flex: '1 1 400px' }}>
            <h2 style={{ 
              fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', 
              lineHeight: '1.2',
              marginBottom: '2rem'
            }}>
              CULTURE.<br />
              HERITAGE.<br />
              IDENTITY.
            </h2>
            <p style={{ 
              fontSize: '1.2rem', 
              color: 'var(--text-secondary)',
              lineHeight: '1.8'
            }}>
              At Darkemar Culture, fashion is more than clothing. It is a celebration of culture, heritage and identity, creating styles that allow you to wear your roots with pride.
            </p>
          </div>
          <div style={{ flex: '1 1 500px' }}>
            <div style={{ aspectRatio: '3/4', width: '100%', overflow: 'hidden' }}>
              <img 
                src="/images/products/2piece-set-adire-crepe/image-01.jpeg" 
                alt="Darkemar Culture Heritage"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                className="enhanced-product-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. EDITORIAL COLLECTION */}
      <section style={{ padding: '120px 0', background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div style={{ marginBottom: '6rem', textAlign: 'center' }}>
            <h2 style={{ fontSize: '3rem' }}>Editorial Collection</h2>
          </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '4rem 6rem' 
          }}>
            {sampleProducts.slice(0, 3).map((product, index) => (
              <div key={product.id} style={{ marginTop: index === 1 ? '4rem' : '0' }}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. DARKEMAR CULTURE BRAND MOMENT */}
      <section style={{ 
        padding: '200px 0', 
        textAlign: 'center', 
        background: 'var(--bg-color)',
        borderBottom: '1px solid var(--border-color)'
      }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          <h2 style={{ 
            fontSize: 'clamp(3rem, 7vw, 6rem)', 
            lineHeight: '1.1',
            textTransform: 'uppercase',
            letterSpacing: '0.02em',
            marginBottom: '4rem'
          }}>
            Wear your roots<br />with pride.
          </h2>
          <div style={{ aspectRatio: '16/9', width: '100%', overflow: 'hidden', margin: '0 auto' }}>
            <img 
              src="/images/products/ankara-with-stone/image-01.jpeg" 
              alt="Brand Moment"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%' }}
              className="enhanced-product-img"
            />
          </div>
        </div>
      </section>

      {/* 5. AFRICAN HERITAGE SECTION */}
      <section style={{ padding: '160px 0', background: 'var(--bg-secondary)' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '3rem' }}>Our Heritage</h2>
          <div style={{ 
            fontSize: '1.15rem', 
            lineHeight: '2', 
            color: 'var(--text-secondary)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem'
          }}>
            <p>
              Darkemar Culture was born from a deep love for African culture and tradition, and a passionate desire to help Africans in the diaspora stay connected to their roots.
            </p>
            <p>
              We believe that culture should be celebrated and proudly represented through fashion. Our focus is on creating beautiful, high-quality Aso Oke and traditional attire that makes luxury African fashion accessible for your most special occasions.
            </p>
          </div>
        </div>
      </section>

      {/* 6. FINAL CALL TO ACTION */}
      <section style={{ padding: '200px 0', textAlign: 'center', background: 'var(--bg-color)' }}>
        <div className="container">
          <h2 style={{ 
            fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
            marginBottom: '2rem',
            lineHeight: '1.3'
          }}>
            YOUR ROOTS.<br />
            YOUR CULTURE.<br />
            YOUR STYLE.
          </h2>
          <p style={{ 
            color: 'var(--text-secondary)', 
            fontSize: '1.1rem', 
            marginBottom: '4rem', 
            fontFamily: 'var(--font-body)'
          }}>
            Explore the Darkemar Culture collection.
          </p>
          <Link href="/shop" className="btn btn-solid">
            Shop the Collection
          </Link>
        </div>
      </section>

    </div>
  )
}
