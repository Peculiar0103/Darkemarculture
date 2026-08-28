export default function AboutPage() {
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
          Darkemar Heritage
        </span>
        <h1 className="fluid-h1" style={{ marginBottom: '1.5rem', color: 'var(--accent-color)' }}>Our Story</h1>
        <div style={{ color: 'var(--text-secondary)', fontSize: 'clamp(1rem, 2.5vw, 1.15rem)', lineHeight: '1.85' }}>
          <p style={{ marginBottom: '1.5rem' }}>
            Darkemar Culture is built on a foundation of celebrating rich African heritage through the lens of modern, luxury fashion. 
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            Our mission is to craft exquisite garments that make our clients feel elegant, proud, and deeply connected to cultural roots, without compromising on contemporary style and high-end quality.
          </p>
          <p>
            Each piece in our collection—from our meticulously woven Aso Oke to our flowing silk Bubus—is designed with intention and a commitment to timeless elegance.
          </p>
        </div>
      </div>
    </div>
  )
}
