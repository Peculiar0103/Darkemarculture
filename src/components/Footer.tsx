export default function Footer() {
  return (
    <footer style={{ 
      background: 'var(--primary-color)', 
      color: 'white', 
      padding: '40px 0',
      marginTop: 'auto'
    }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
        <div>
          <h3 style={{ color: 'var(--accent-color)', marginBottom: '1rem' }}>Darkemar Culture</h3>
          <p style={{ color: '#ccc', fontSize: '0.9rem' }}>Luxury African fashion that celebrates heritage, elegance, and cultural pride.</p>
        </div>
        <div>
          <h4 style={{ color: 'white', marginBottom: '1rem' }}>Quick Links</h4>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li><a href="/shop" style={{ color: '#ccc' }}>Shop</a></li>
            <li><a href="/about" style={{ color: '#ccc' }}>About Us</a></li>
            <li><a href="/how-to-order" style={{ color: '#ccc' }}>How to Order</a></li>
            <li><a href="/delivery-returns" style={{ color: '#ccc' }}>Delivery & Returns</a></li>
          </ul>
        </div>
        <div>
          <h4 style={{ color: 'white', marginBottom: '1rem' }}>Contact</h4>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li><a href="https://wa.me/447341158348" style={{ color: '#ccc' }}>WhatsApp: +44 7341 158348</a></li>
            <li><a href="https://www.instagram.com/darkemarculture" style={{ color: '#ccc' }}>Instagram: @darkemarculture</a></li>
            <li><a href="#" style={{ color: '#ccc' }}>TikTok: @darkemarculture</a></li>
          </ul>
        </div>
      </div>
      <div style={{ textAlign: 'center', color: '#888', marginTop: '3rem', fontSize: '0.8rem', borderTop: '1px solid #444', paddingTop: '1.5rem' }}>
        &copy; {new Date().getFullYear()} Darkemar Culture. All rights reserved.
      </div>
    </footer>
  )
}
