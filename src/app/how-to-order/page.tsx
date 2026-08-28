import Link from 'next/link'

export default function HowToOrderPage() {
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
          marginBottom: '0.5rem',
          textAlign: 'center'
        }}>
          Simple &amp; Direct
        </span>
        <h1 className="fluid-h1" style={{ marginBottom: '2.5rem', color: 'var(--accent-color)', textAlign: 'center' }}>
          How to Order
        </h1>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div style={{ background: 'var(--bg-secondary)', padding: '1.5rem', borderRadius: '2px', borderLeft: '4px solid var(--accent-color)' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.4rem', color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}>1. Browse the Collection</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.6' }}>Explore our shop and find the perfect luxury African piece that speaks to you.</p>
          </div>

          <div style={{ background: 'var(--bg-secondary)', padding: '1.5rem', borderRadius: '2px', borderLeft: '4px solid var(--accent-color)' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.4rem', color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}>2. Select Options</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.6' }}>Choose your desired size, color, and quantity on the product page.</p>
          </div>

          <div style={{ background: 'var(--bg-secondary)', padding: '1.5rem', borderRadius: '2px', borderLeft: '4px solid var(--accent-color)' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.4rem', color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}>3. Order via WhatsApp</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.6' }}>Click the &lsquo;Order via WhatsApp&rsquo; button. This will generate a pre-filled message with your exact order details.</p>
          </div>

          <div style={{ background: 'var(--bg-secondary)', padding: '1.5rem', borderRadius: '2px', borderLeft: '4px solid var(--accent-color)' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.4rem', color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}>4. Confirm &amp; Pay</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.6' }}>Send the message! Our team will confirm the order, arrange delivery, and process payment securely.</p>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link href="/shop" className="btn btn-solid" style={{ minWidth: '220px' }}>Start Shopping</Link>
        </div>
      </div>
    </div>
  )
}
