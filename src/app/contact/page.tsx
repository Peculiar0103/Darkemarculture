export default function ContactPage() {
  return (
    <div className="section-pad" style={{ minHeight: '80vh', width: '100%', overflowX: 'hidden' }}>
      <div className="container" style={{ maxWidth: '640px', margin: '0 auto', textAlign: 'center' }}>
        <span style={{
          fontSize: '0.75rem',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'var(--color-burgundy, #4A0E17)',
          fontWeight: 600,
          display: 'block',
          marginBottom: '0.5rem'
        }}>
          Customer Concierge
        </span>
        <h1 className="fluid-h1" style={{ marginBottom: '1.25rem', color: 'var(--accent-color)' }}>Contact Us</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: 'clamp(0.95rem, 2.5vw, 1.15rem)', marginBottom: '2.5rem', lineHeight: '1.7' }}>
          We would love to hear from you. Reach out to us for orders, inquiries, or custom fittings.
        </p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center', width: '100%' }}>
          <a href="https://wa.me/447341158348" className="btn btn-solid" style={{ width: '100%', maxWidth: '320px' }}>
            Message on WhatsApp
          </a>
          <a href="https://www.instagram.com/darkemarculture" target="_blank" rel="noopener noreferrer" className="btn" style={{ width: '100%', maxWidth: '320px' }}>
            Follow on Instagram
          </a>
          <a href="https://www.tiktok.com/@darkemar.readytowear?_r=1&_t=ZS-98yLxjWxtA5" target="_blank" rel="noopener noreferrer" className="btn" style={{ width: '100%', maxWidth: '320px' }}>
            Follow on TikTok
          </a>
        </div>
      </div>
    </div>
  )
}
