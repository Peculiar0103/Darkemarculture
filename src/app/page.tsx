import Link from 'next/link'
import { sampleProducts } from '@/data/products'
import ProductCard from '@/components/ProductCard'

export default function Home() {
  return (
    <div style={{ background: 'var(--bg-color)' }}>
      
      {/* 1. HERO SECTION - Editorial Campaign Style */}
      <section style={{ background: 'var(--bg-color)' }}>
        <div className="container editorial-flex hero-flex" style={{ 
          minHeight: '85vh',
          paddingTop: '2rem',
          paddingBottom: '2rem',
          gap: '2rem'
        }}>
          <style dangerouslySetInnerHTML={{__html: `
            .hero-flex { flex-direction: column-reverse; align-items: center; }
            @media (min-width: 768px) { .hero-flex { flex-direction: row; } }
          `}} />
          
          {/* Left: Typography */}
          <div className="animate-fade-in" style={{ 
            flex: '1 1 50%', 
            zIndex: 1, 
            padding: '20px 0', 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center'
          }}>
            <h1 className="fluid-h1" style={{ 
              letterSpacing: '0.02em',
              marginBottom: '1rem',
              lineHeight: '1',
              textTransform: 'uppercase'
            }}>
              Darkemar<br />Culture
            </h1>
            <h2 className="fluid-h3" style={{ 
              fontStyle: 'italic',
              marginBottom: '2rem',
              fontWeight: 400,
              color: 'var(--text-secondary)'
            }}>
              Wear your roots with pride.
            </h2>
            <p style={{ 
              fontSize: '0.85rem', 
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              fontFamily: 'var(--font-body)',
              marginBottom: '4rem',
              color: 'var(--accent-color)'
            }}>
              Luxury African Ready-to-Wear
            </p>
            <div>
              <Link href="/shop" className="btn btn-solid">
                Shop the Collection
              </Link>
            </div>
          </div>

          {/* Right: Immersive Product Image */}
          <div style={{ 
            flex: '1 1 50%', 
            width: '100%',
            display: 'flex',
            justifyContent: 'center'
          }}>
            <div style={{ width: '100%', maxWidth: '600px', aspectRatio: '4/5', overflow: 'hidden' }}>
              <img 
                src="/images/new-hero-image.jpeg" 
                alt="Darkemar Culture Aso Oke" 
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }}
                className="enhanced-product-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. CULTURAL BRAND STATEMENT */}
      <section className="section-pad" style={{ background: 'var(--bg-color)' }}>
        <div className="container editorial-flex" style={{ gap: '4rem' }}>
          <div style={{ flex: 1 }}>
            <h2 className="fluid-h2" style={{ 
              lineHeight: '1.2',
              marginBottom: '2.5rem'
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
          
          {/* LARGE FASHION IMAGE */}
          <div style={{ flex: '1 1 500px', width: '100%' }}>
            <div style={{ aspectRatio: '3/4', width: '100%', overflow: 'hidden' }}>
              <img 
                src="/images/culture-heritage.jpeg" 
                alt="Darkemar Culture Heritage"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                className="enhanced-product-img"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. EDITORIAL COLLECTION - Asymmetrical Magazine Layout */}
      <section className="section-pad" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          
          <div className="responsive-grid" style={{ gap: '4rem 2rem' }}>
            {sampleProducts.slice(0, 3).map((product, index) => (
              <div key={product.id} className={index === 2 ? "collection-dominant" : ""}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <Link href="/shop" className="btn btn-solid">
              Explore Collection
            </Link>
          </div>
        </div>
        <style dangerouslySetInnerHTML={{__html: `
          @media (min-width: 768px) {
            .collection-dominant {
              grid-column: 1 / -1;
              padding: 0 15%;
              margin-top: 4rem;
            }
          }
        `}} />
      </section>

      {/* 4. WHY DARKEMAR CULTURE */}
      <section className="section-pad" style={{ background: 'var(--bg-color)' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 className="fluid-h2" style={{ 
            marginBottom: '4rem', 
            textAlign: 'left' // Mobile friendly reading
          }}>
            Why Darkemar Culture
          </h2>
          <ul style={{ 
            fontSize: '1.15rem', 
            lineHeight: '1.8', 
            color: 'var(--text-secondary)',
            display: 'flex',
            flexDirection: 'column',
            gap: '2.5rem',
            listStyle: 'none',
            fontFamily: 'var(--font-heading)'
          }}>
            <li style={{ paddingLeft: '1.5rem', borderLeft: '1px solid var(--border-color)' }}>A deep love for African culture and tradition.</li>
            <li style={{ paddingLeft: '1.5rem', borderLeft: '1px solid var(--border-color)' }}>A desire to help Africans in the diaspora stay connected to their roots.</li>
            <li style={{ paddingLeft: '1.5rem', borderLeft: '1px solid var(--border-color)' }}>A passion for beautiful, high-quality Aso Oke and traditional attire.</li>
            <li style={{ paddingLeft: '1.5rem', borderLeft: '1px solid var(--border-color)' }}>The belief that culture should be celebrated and proudly represented through fashion.</li>
            <li style={{ paddingLeft: '1.5rem', borderLeft: '1px solid var(--border-color)' }}>A desire to make luxury African fashion more accessible for special occasions.</li>
          </ul>
        </div>
      </section>

      {/* 5. FULL-WIDTH FASHION IMAGE BRAND MOMENT */}
      <section className="section-pad" style={{ 
        textAlign: 'center', 
        background: 'var(--bg-secondary)',
      }}>
        <div className="container">
          <h2 className="fluid-h2" style={{ 
            lineHeight: '1.1',
            textTransform: 'uppercase',
            letterSpacing: '0.02em',
            marginBottom: '4rem'
          }}>
            Wear your roots with pride.
          </h2>
          <div style={{ aspectRatio: '4/5', width: '100%', overflow: 'hidden' }} className="brand-moment-img">
            <img 
              src="/images/brand-moment.jpeg" 
              alt="Brand Moment"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%' }}
              className="enhanced-product-img"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* 6. FINAL CALL TO ACTION */}
      <section className="section-pad" style={{ textAlign: 'center', background: 'var(--bg-color)' }}>
        <div className="container">
          <h2 className="fluid-h2" style={{ 
            marginBottom: '2.5rem',
            lineHeight: '1.3'
          }}>
            YOUR ROOTS.<br />
            YOUR CULTURE.<br />
            YOUR STYLE.
          </h2>
          <p style={{ 
            color: 'var(--text-secondary)', 
            fontSize: '1rem', 
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
