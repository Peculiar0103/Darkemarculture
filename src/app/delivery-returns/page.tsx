export default function DeliveryReturnsPage() {
  return (
    <div style={{ padding: '100px 0', minHeight: '80vh' }}>
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '3rem', color: 'var(--accent-color)' }}>Delivery & Returns</h1>
        
        <div style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Delivery Information</h2>
          <ul style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '2', listStylePosition: 'inside' }}>
            <li><strong>Doorstep Delivery:</strong> Available for all orders.</li>
            <li><strong>Timeline:</strong> Approximately 3 working days from order confirmation.</li>
            <li><strong>Fees:</strong> Delivery fees are calculated and paid separately based on your location.</li>
          </ul>
        </div>

        <div>
          <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Returns Policy</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '2' }}>
            At Darkemar Culture, we strive for perfection. We do accept returns under specific conditions. 
            <br/><br/>
            <em>[Detailed return conditions pending confirmation from management. Please contact us via WhatsApp for any return inquiries.]</em>
          </p>
        </div>
      </div>
    </div>
  )
}
