import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="section-pad" style={{ 
      background: 'var(--bg-secondary)', 
      color: 'var(--text-primary)',
      marginTop: 'auto',
      borderTop: '1px solid var(--border-color)',
      paddingBottom: '3rem'
    }}>
      <div className="container" style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '4rem' 
      }}>
        {/* Main Footer Columns */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '3rem 2rem'
        }}>
          {/* Brand Column */}
          <div>
            <h3 style={{ 
              color: 'var(--color-burgundy, #4A0E17)', 
              marginBottom: '1.2rem', 
              fontFamily: 'var(--font-heading)', 
              fontSize: '1.6rem',
              letterSpacing: '0.04em',
              textTransform: 'uppercase'
            }}>
              Darkemar Culture
            </h3>
            <p style={{ 
              color: 'var(--text-secondary)', 
              fontSize: '0.9rem', 
              lineHeight: '1.8',
              marginBottom: '1.5rem'
            }}>
              Luxury African Ready-to-Wear fashion celebrating heritage, elegance, and cultural pride. Crafted for special moments and timeless statements.
            </p>
            <p style={{
              fontSize: '0.8rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--accent-color)',
              fontWeight: 600
            }}>
              Wear your roots with pride.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 style={{ 
              color: 'var(--text-primary)', 
              marginBottom: '1.2rem', 
              fontFamily: 'var(--font-body)', 
              fontSize: '0.85rem', 
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              fontWeight: 600
            }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <li><Link href="/" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Home</Link></li>
              <li><Link href="/shop" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Shop Collection</Link></li>
              <li><Link href="/about" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>About Us</Link></li>
              <li><Link href="/how-to-order" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>How to Order</Link></li>
              <li><Link href="/delivery-returns" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Delivery & Returns</Link></li>
              <li><Link href="/contact" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Contact Us</Link></li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 style={{ 
              color: 'var(--text-primary)', 
              marginBottom: '1.2rem', 
              fontFamily: 'var(--font-body)', 
              fontSize: '0.85rem', 
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              fontWeight: 600
            }}>
              Customer Care
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <li><Link href="/how-to-order" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Order Information & FAQs</Link></li>
              <li><Link href="/delivery-returns" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Shipping & Worldwide Delivery</Link></li>
              <li><Link href="/delivery-returns" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Returns & Exchanges</Link></li>
              <li><Link href="/contact" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Bespoke Fit Inquiries</Link></li>
            </ul>
          </div>

          {/* Contact & Socials */}
          <div>
            <h4 style={{ 
              color: 'var(--text-primary)', 
              marginBottom: '1.2rem', 
              fontFamily: 'var(--font-body)', 
              fontSize: '0.85rem', 
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              fontWeight: 600
            }}>
              Connect With Us
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li>
                <a 
                  href="https://wa.me/447341158348" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ color: 'var(--color-burgundy, #4A0E17)', fontSize: '0.9rem', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '6px' }}
                >
                  <span>WhatsApp: +44 7341 158348</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://www.instagram.com/darkemarculture" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}
                >
                  Instagram: @darkemarculture
                </a>
              </li>
              <li>
                <a 
                  href="https://www.tiktok.com/@darkemar.readytowear?_r=1&_t=ZS-98yLxjWxtA5" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}
                >
                  TikTok: @darkemar.readytowear
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Guarantee */}
        <div style={{ 
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1rem',
          color: 'var(--text-muted)', 
          fontSize: '0.8rem', 
          borderTop: '1px solid var(--border-color)', 
          paddingTop: '2rem' 
        }}>
          <div>
            &copy; {new Date().getFullYear()} Darkemar Culture. All rights reserved.
          </div>
          <div style={{ letterSpacing: '0.05em' }}>
            Luxury African Fashion • Hand-embellished & Ready-to-Wear
          </div>
        </div>
      </div>
    </footer>
  )
}
