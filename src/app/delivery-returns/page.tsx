export default function DeliveryReturnsPage() {
  return (
    <div className="section-pad" style={{ minHeight: '80vh', width: '100%', overflowX: 'hidden' }}>
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <span style={{
          fontSize: '0.75rem',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'var(--color-burgundy, #4A0E17)',
          fontWeight: 600,
          display: 'block',
          marginBottom: '0.5rem'
        }}>
          Customer Information
        </span>
        <h1 className="fluid-h1" style={{ marginBottom: '2.5rem', color: 'var(--accent-color)' }}>
          Delivery &amp; Returns
        </h1>
        
        <div style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: 'clamp(1.4rem, 3.5vw, 1.8rem)', marginBottom: '1rem', color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}>
            Delivery Information
          </h2>
          <ul style={{ color: 'var(--text-secondary)', fontSize: 'clamp(0.95rem, 2.5vw, 1.05rem)', lineHeight: '1.85', paddingLeft: '1.25rem' }}>
            <li style={{ marginBottom: '0.5rem' }}><strong>Doorstep Delivery:</strong> Available for UK &amp; International orders.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>Timeline:</strong> Orders are prepared with meticulous care and dispatched promptly.</li>
            <li><strong>Fees:</strong> Delivery fees are calculated and confirmed directly based on your destination.</li>
          </ul>
        </div>

        <div>
          <h2 style={{ fontSize: 'clamp(1.4rem, 3.5vw, 1.8rem)', marginBottom: '1rem', color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}>
            Returns &amp; Exchange Policy
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: 'clamp(0.95rem, 2.5vw, 1.05rem)', lineHeight: '1.85' }}>
            At Darkemar Culture, every garment is inspected to meet the highest standards of luxury African craftsmanship. If you have any questions regarding sizing or exchanges, please reach out to our concierge team directly on WhatsApp for dedicated support.
          </p>
        </div>
      </div>
    </div>
  )
}
