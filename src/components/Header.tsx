import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header style={{ 
      background: 'var(--bg-color)', 
      borderBottom: '1px solid var(--border-color)',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      <div className="container" style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        padding: '15px 20px' 
      }}>
        <Link href="/">
          <Image src="/logo.jpeg" alt="Darkemar Culture Logo" width={60} height={60} style={{ borderRadius: '50%', objectFit: 'cover' }} />
        </Link>
        <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <Link href="/" style={{ fontWeight: 500 }}>Home</Link>
          <Link href="/shop" style={{ fontWeight: 500 }}>Shop</Link>
          <Link href="/about" style={{ fontWeight: 500 }}>About</Link>
          <Link href="/contact" style={{ fontWeight: 500 }}>Contact</Link>
        </nav>
      </div>
    </header>
  )
}
