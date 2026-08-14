export default function AboutPage() {
  return (
    <div style={{ padding: '100px 0', minHeight: '80vh' }}>
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '2rem', color: 'var(--accent-color)' }}>Our Story</h1>
        <div style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '2' }}>
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
