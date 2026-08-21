export default function ContactPage() {
  return (
    <div style={{ padding: '100px 0', minHeight: '80vh' }}>
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '2rem', color: 'var(--accent-color)' }}>Contact Us</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '3rem' }}>
          We would love to hear from you. Reach out to us for orders, inquiries, or custom fittings.
        </p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center' }}>
          <a href="https://wa.me/447341158348" className="btn" style={{ minWidth: '250px' }}>
            Message on WhatsApp
          </a>
          <a href="https://www.instagram.com/darkemarculture" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ minWidth: '250px' }}>
            Follow on Instagram
          </a>
            <a href="https://www.tiktok.com/@darkemar.readytowear?_r=1&_t=ZS-98yLxjWxtA5" className="btn btn-solid" style={{ minWidth: '250px' }}>
              Follow on TikTok
            </a>
        </div>
      </div>
    </div>
  )
}
