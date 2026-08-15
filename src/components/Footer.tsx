export default function Footer() {
  return (
    <footer style={{ 
      background: 'var(--bg-secondary)', 
      color: 'var(--text-primary)', 
      padding: '60px 0 40px 0',
      marginTop: 'auto',
      borderTop: '1px solid var(--border-color)'
    }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem' }}>
        <div>
          <h3 style={{ color: 'var(--accent-color)', marginBottom: '1.5rem', fontFamily: 'var(--font-heading)', fontSize: '1.5rem' }}>Darkemar Culture</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.8' }}>Luxury African fashion that celebrates heritage, elegance, and cultural pride.</p>
        </div>
        <div>
          <h4 style={{ color: 'var(--text-primary)', marginBottom: '1.5rem', fontFamily: 'var(--font-heading)', fontSize: '1.2rem', letterSpacing: '0.05em' }}>Quick Links</h4>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <li><a href="/shop" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Shop</a></li>
            <li><a href="/about" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>About Us</a></li>
            <li><a href="/how-to-order" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>How to Order</a></li>
            <li><a href="/delivery-returns" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Delivery & Returns</a></li>
          </ul>
        </div>
        <div>
          <h4 style={{ color: 'var(--text-primary)', marginBottom: '1.5rem', fontFamily: 'var(--font-heading)', fontSize: '1.2rem', letterSpacing: '0.05em' }}>Contact</h4>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <li><a href="https://wa.me/447341158348" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>WhatsApp: +44 7341 158348</a></li>
            <li><a href="https://www.instagram.com/darkemarculture" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Instagram: @darkemarculture</a></li>
            <li><a href="#" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>TikTok: @darkemarculture</a></li>
          </ul>
        </div>
      </div>
      <div style={{ textAlign: 'center', color: 'var(--text-muted)', marginTop: '4rem', fontSize: '0.8rem', borderTop: '1px solid var(--border-color)', paddingTop: '2rem' }}>
        &copy; {new Date().getFullYear()} Darkemar Culture. All rights reserved.
      </div>
    </footer>
  )
}
