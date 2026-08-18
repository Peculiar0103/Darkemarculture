export default function Footer() {
  return (
    <footer className="section-pad" style={{ 
      background: 'var(--bg-secondary)', 
      color: 'var(--text-primary)',
      marginTop: 'auto',
      borderTop: '1px solid var(--border-color)'
    }}>
      <div className="container" style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '4rem' 
      }}>
        {/* We use a wrapper div that changes flex-direction using our globals.css rules */}
        <div className="editorial-flex" style={{ gap: '3rem', alignItems: 'flex-start' }}>
          <div style={{ flex: 1 }}>
            <h3 style={{ color: 'var(--accent-color)', marginBottom: '1.5rem', fontFamily: 'var(--font-heading)', fontSize: '1.5rem' }}>Darkemar Culture</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.8' }}>Luxury African fashion that celebrates heritage, elegance, and cultural pride.</p>
          </div>
          
          <div style={{ flex: 1 }}>
            <h4 style={{ color: 'var(--text-primary)', marginBottom: '1.5rem', fontFamily: 'var(--font-heading)', fontSize: '1.2rem', letterSpacing: '0.05em' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li><a href="/shop" style={{ color: 'var(--text-secondary)', fontSize: '1rem', display: 'block', padding: '12px 0' }}>Shop</a></li>
              <li><a href="/about" style={{ color: 'var(--text-secondary)', fontSize: '1rem', display: 'block', padding: '12px 0' }}>About Us</a></li>
              <li><a href="/how-to-order" style={{ color: 'var(--text-secondary)', fontSize: '1rem', display: 'block', padding: '12px 0' }}>How to Order</a></li>
              <li><a href="/delivery-returns" style={{ color: 'var(--text-secondary)', fontSize: '1rem', display: 'block', padding: '12px 0' }}>Delivery & Returns</a></li>
            </ul>
          </div>

          <div style={{ flex: 1 }}>
            <h4 style={{ color: 'var(--text-primary)', marginBottom: '1.5rem', fontFamily: 'var(--font-heading)', fontSize: '1.2rem', letterSpacing: '0.05em' }}>Contact</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li><a href="https://wa.me/447341158348" style={{ color: 'var(--text-secondary)', fontSize: '1rem', display: 'block', padding: '12px 0' }}>WhatsApp: +44 7341 158348</a></li>
              <li><a href="https://www.instagram.com/darkemarculture" style={{ color: 'var(--text-secondary)', fontSize: '1rem', display: 'block', padding: '12px 0' }}>Instagram: @darkemarculture</a></li>
              <li><a href="https://www.tiktok.com/@darkemarculture" style={{ color: 'var(--text-secondary)', fontSize: '1rem', display: 'block', padding: '12px 0' }}>TikTok: @darkemarculture</a></li>
            </ul>
          </div>
        </div>

        <div style={{ 
          textAlign: 'center', 
          color: 'var(--text-muted)', 
          fontSize: '0.85rem', 
          borderTop: '1px solid var(--border-color)', 
          paddingTop: '2rem' 
        }}>
          &copy; {new Date().getFullYear()} Darkemar Culture. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
