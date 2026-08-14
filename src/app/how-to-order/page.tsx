import Link from 'next/link'

export default function HowToOrderPage() {
  return (
    <div style={{ padding: '100px 0', minHeight: '80vh' }}>
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '3rem', color: 'var(--accent-color)', textAlign: 'center' }}>How to Order</h1>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div style={{ background: 'var(--secondary-color)', padding: '2rem', borderRadius: '8px', borderLeft: '4px solid var(--accent-color)' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'white' }}>1. Browse the Collection</h3>
            <p style={{ color: 'var(--text-secondary)' }}>Explore our shop and find the perfect luxury African piece that speaks to you.</p>
          </div>

          <div style={{ background: 'var(--secondary-color)', padding: '2rem', borderRadius: '8px', borderLeft: '4px solid var(--accent-color)' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'white' }}>2. Select Options</h3>
            <p style={{ color: 'var(--text-secondary)' }}>Choose your desired size, color, and quantity on the product page.</p>
          </div>

          <div style={{ background: 'var(--secondary-color)', padding: '2rem', borderRadius: '8px', borderLeft: '4px solid var(--accent-color)' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'white' }}>3. Order via WhatsApp</h3>
            <p style={{ color: 'var(--text-secondary)' }}>Click the 'Order via WhatsApp' button. This will generate a pre-filled message with your order details.</p>
          </div>

          <div style={{ background: 'var(--secondary-color)', padding: '2rem', borderRadius: '8px', borderLeft: '4px solid var(--accent-color)' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'white' }}>4. Confirm & Pay</h3>
            <p style={{ color: 'var(--text-secondary)' }}>Send the message! Our team will confirm the order, arrange delivery, and process payment securely.</p>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '4rem' }}>
          <Link href="/shop" className="btn">Start Shopping</Link>
        </div>
      </div>
    </div>
  )
}
