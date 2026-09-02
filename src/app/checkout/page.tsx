"use client"

import { useState } from 'react'
import Link from 'next/link'
import { useCart } from '@/context/CartContext'

export default function CheckoutPage() {
  const { cart, subtotalGBP, totalItems, clearCart } = useCart()

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    postcode: '',
    country: 'United Kingdom',
    notes: ''
  })

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [orderId, setOrderId] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault()
    if (cart.length === 0) return

    // Generate random luxury Order Reference ID
    const newOrderId = `DC-${Math.floor(100000 + Math.random() * 900000)}`
    setOrderId(newOrderId)
    setIsSubmitted(true)

    // Build Formatted WhatsApp Order Receipt
    const phoneNumber = "447341158348"
    const itemsList = cart
      .map(
        (item, idx) =>
          `• ${item.name} (${item.quantity}x)\n  Size: ${item.size} | Color: ${item.color} | £${item.priceGBP * item.quantity}`
      )
      .join('\n\n')

    const whatsappMessage = `*DARKEMAR CULTURE — NEW WEBSITE ORDER*
Order ID: *${newOrderId}*

*CUSTOMER DETAILS:*
• Name: ${formData.fullName}
• Phone/WhatsApp: ${formData.phone}
• Email: ${formData.email}

*DELIVERY ADDRESS:*
${formData.address}
${formData.city}, ${formData.postcode}
${formData.country}
${formData.notes ? `\nNotes: ${formData.notes}` : ''}

*ORDERED ITEMS:*
${itemsList}

*TOTAL AMOUNT:* £${subtotalGBP}

Please confirm order receipt and next payment/delivery steps.`.trim()

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`

    // Clear cart in background
    clearCart()

    // Automatically open WhatsApp in a new tab after 800ms
    setTimeout(() => {
      window.open(whatsappUrl, '_blank')
    }, 800)
  }

  if (isSubmitted) {
    return (
      <div className="section-pad" style={{ background: 'var(--bg-color)', minHeight: '85vh' }}>
        <div className="container" style={{ maxWidth: '640px', margin: '0 auto', textAlign: 'center' }}>
          
          <div style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            backgroundColor: 'rgba(74, 14, 23, 0.08)',
            color: 'var(--color-burgundy, #4A0E17)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.5rem',
            fontSize: '2rem'
          }}>
            ✓
          </div>

          <span style={{
            fontSize: '0.75rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--accent-color)',
            fontWeight: 600,
            display: 'block',
            marginBottom: '0.5rem'
          }}>
            Order Received
          </span>

          <h1 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            color: 'var(--text-primary)',
            marginBottom: '0.5rem'
          }}>
            Thank You, {formData.fullName.split(' ')[0]}!
          </h1>

          <p style={{
            fontSize: '1.1rem',
            color: 'var(--color-burgundy, #4A0E17)',
            fontFamily: 'var(--font-body)',
            fontWeight: 600,
            marginBottom: '1.5rem'
          }}>
            Order Reference: {orderId}
          </p>

          <p style={{
            color: 'var(--text-secondary)',
            fontSize: '0.95rem',
            lineHeight: '1.7',
            marginBottom: '2.5rem'
          }}>
            Your order details have been prepared. WhatsApp is opening automatically with your order receipt so our team can confirm dispatch and delivery steps with you directly.
          </p>

          <div style={{
            padding: '1.5rem',
            backgroundColor: 'var(--bg-secondary)',
            borderRadius: '2px',
            border: '1px solid var(--border-color)',
            marginBottom: '2.5rem',
            textAlign: 'left'
          }}>
            <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
              Delivery To:
            </h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0, lineHeight: '1.6' }}>
              {formData.fullName}<br />
              {formData.address}, {formData.city} {formData.postcode}<br />
              {formData.country}<br />
              Phone: {formData.phone}
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <a 
              href={`https://wa.me/447341158348?text=${encodeURIComponent(`Hello Darkemar Culture, this is ${formData.fullName} regarding my Order ${orderId}.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-solid"
              style={{ width: '100%', padding: '16px' }}
            >
              Open WhatsApp Order Chat &rarr;
            </a>

            <Link 
              href="/shop" 
              className="btn"
              style={{ width: '100%', padding: '14px' }}
            >
              Continue Shopping
            </Link>
          </div>

        </div>
      </div>
    )
  }

  if (cart.length === 0) {
    return (
      <div className="section-pad" style={{ background: 'var(--bg-color)', minHeight: '80vh' }}>
        <div className="container" style={{ maxWidth: '500px', margin: '0 auto', textAlign: 'center' }}>
          <h1 className="fluid-h1" style={{ marginBottom: '1rem', color: 'var(--accent-color)' }}>
            Shopping Bag
          </h1>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
            Your shopping bag is empty. Please select a product from our collection to proceed to checkout.
          </p>
          <Link href="/shop" className="btn btn-solid">
            Explore Collection &rarr;
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div style={{ background: 'var(--bg-color)', minHeight: '100vh', width: '100%', overflowX: 'hidden' }}>
      
      {/* Breadcrumb Header */}
      <div style={{ padding: '20px 0', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container">
          <p style={{
            fontSize: '0.72rem',
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            color: 'var(--text-muted)'
          }}>
            <Link href="/" style={{ color: 'var(--text-secondary)' }}>Home</Link>
            <span style={{ margin: '0 6px' }}>/</span>
            <Link href="/shop" style={{ color: 'var(--text-secondary)' }}>Shop</Link>
            <span style={{ margin: '0 6px' }}>/</span>
            <span style={{ color: 'var(--color-burgundy, #4A0E17)', fontWeight: 600 }}>Checkout</span>
          </p>
        </div>
      </div>

      <div className="section-pad" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
        <div className="container">
          
          <h1 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            color: 'var(--text-primary)',
            marginBottom: '2rem',
            textTransform: 'uppercase',
            letterSpacing: '0.02em'
          }}>
            Direct Checkout
          </h1>

          <form onSubmit={handleSubmitOrder} style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3rem'
          }} className="checkout-grid">
            
            {/* Left Column: Shipping & Contact Form */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              
              {/* Contact Information */}
              <div style={{
                backgroundColor: 'var(--bg-card)',
                padding: '2rem',
                border: '1px solid var(--border-color)',
                borderRadius: '2px'
              }}>
                <h3 style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.35rem',
                  marginBottom: '1.5rem',
                  color: 'var(--text-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <span>1.</span>
                  <span>Contact Information</span>
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.4rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
                      Full Name *
                    </label>
                    <input 
                      type="text" 
                      name="fullName"
                      required
                      placeholder="e.g. Adeola Williams"
                      value={formData.fullName}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        fontSize: '0.9rem',
                        border: '1px solid var(--border-color)',
                        backgroundColor: '#FFFFFF',
                        color: 'var(--text-primary)',
                        borderRadius: '2px',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.4rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
                        Phone / WhatsApp Number *
                      </label>
                      <input 
                        type="tel" 
                        name="phone"
                        required
                        placeholder="+44 7123 456789"
                        value={formData.phone}
                        onChange={handleChange}
                        style={{
                          width: '100%',
                          padding: '12px 14px',
                          fontSize: '0.9rem',
                          border: '1px solid var(--border-color)',
                          backgroundColor: '#FFFFFF',
                          color: 'var(--text-primary)',
                          borderRadius: '2px',
                          outline: 'none'
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.4rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
                        Email Address *
                      </label>
                      <input 
                        type="email" 
                        name="email"
                        required
                        placeholder="youremail@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        style={{
                          width: '100%',
                          padding: '12px 14px',
                          fontSize: '0.9rem',
                          border: '1px solid var(--border-color)',
                          backgroundColor: '#FFFFFF',
                          color: 'var(--text-primary)',
                          borderRadius: '2px',
                          outline: 'none'
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Delivery Address */}
              <div style={{
                backgroundColor: 'var(--bg-card)',
                padding: '2rem',
                border: '1px solid var(--border-color)',
                borderRadius: '2px'
              }}>
                <h3 style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.35rem',
                  marginBottom: '1.5rem',
                  color: 'var(--text-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <span>2.</span>
                  <span>Delivery Address</span>
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.4rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
                      Street Address *
                    </label>
                    <input 
                      type="text" 
                      name="address"
                      required
                      placeholder="e.g. 14 Highfield Crescent, Flat 3B"
                      value={formData.address}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        fontSize: '0.9rem',
                        border: '1px solid var(--border-color)',
                        backgroundColor: '#FFFFFF',
                        color: 'var(--text-primary)',
                        borderRadius: '2px',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.4rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
                        City *
                      </label>
                      <input 
                        type="text" 
                        name="city"
                        required
                        placeholder="London"
                        value={formData.city}
                        onChange={handleChange}
                        style={{
                          width: '100%',
                          padding: '12px 14px',
                          fontSize: '0.9rem',
                          border: '1px solid var(--border-color)',
                          backgroundColor: '#FFFFFF',
                          color: 'var(--text-primary)',
                          borderRadius: '2px',
                          outline: 'none'
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.4rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
                        Postcode / ZIP *
                      </label>
                      <input 
                        type="text" 
                        name="postcode"
                        required
                        placeholder="NW1 4NP"
                        value={formData.postcode}
                        onChange={handleChange}
                        style={{
                          width: '100%',
                          padding: '12px 14px',
                          fontSize: '0.9rem',
                          border: '1px solid var(--border-color)',
                          backgroundColor: '#FFFFFF',
                          color: 'var(--text-primary)',
                          borderRadius: '2px',
                          outline: 'none'
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.4rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
                        Country *
                      </label>
                      <select 
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className="luxury-select"
                        style={{
                          width: '100%',
                          padding: '12px 30px 12px 14px',
                          fontSize: '0.9rem',
                          backgroundColor: '#FFFFFF',
                          borderRadius: '2px'
                        }}
                      >
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="Nigeria">Nigeria</option>
                        <option value="United States">United States</option>
                        <option value="Canada">Canada</option>
                        <option value="Ireland">Ireland</option>
                        <option value="Other International">Other International</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.4rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
                      Special Sizing / Delivery Notes (Optional)
                    </label>
                    <textarea 
                      name="notes"
                      rows={3}
                      placeholder="e.g. Bespoke height preference, event date, or gate access code."
                      value={formData.notes}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        fontSize: '0.85rem',
                        border: '1px solid var(--border-color)',
                        backgroundColor: '#FFFFFF',
                        color: 'var(--text-primary)',
                        borderRadius: '2px',
                        outline: 'none',
                        resize: 'vertical'
                      }}
                    />
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Order Summary Sidebar */}
            <div>
              <div style={{
                backgroundColor: 'var(--bg-secondary)',
                padding: '2rem',
                border: '1px solid var(--border-color)',
                borderRadius: '2px',
                position: 'sticky',
                top: '90px'
              }}>
                <h3 style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.4rem',
                  marginBottom: '1.5rem',
                  color: 'var(--text-primary)',
                  borderBottom: '1px solid var(--border-color)',
                  paddingBottom: '0.75rem'
                }}>
                  Order Summary ({totalItems})
                </h3>

                {/* Items Mini List */}
                <div className="hide-scroll" style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  maxHeight: '280px',
                  overflowY: 'auto',
                  marginBottom: '1.5rem',
                  paddingRight: '4px'
                }}>
                  {cart.map((item) => (
                    <div key={item.id} style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        style={{ width: '48px', height: '60px', objectFit: 'cover', borderRadius: '2px', backgroundColor: 'var(--bg-card)' }}
                      />
                      <div style={{ flex: 1 }}>
                        <h5 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.95rem', margin: 0, lineHeight: '1.2' }}>
                          {item.name}
                        </h5>
                        <span style={{ fontSize: '0.72rem', color: 'var(--text-secondary)' }}>
                          Size: {item.size} | Qty: {item.quantity}
                        </span>
                      </div>
                      <span style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '0.9rem', color: 'var(--color-burgundy, #4A0E17)' }}>
                        £{item.priceGBP * item.quantity}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Pricing Calculation */}
                <div style={{
                  borderTop: '1px solid var(--border-color)',
                  paddingTop: '1rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem',
                  marginBottom: '1.5rem'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    <span>Subtotal</span>
                    <span>£{subtotalGBP}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    <span>Doorstep Delivery</span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--accent-color)', fontWeight: 600 }}>Calculated on Dispatch</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.2rem', fontWeight: 600, color: 'var(--text-primary)', borderTop: '1px solid var(--border-subtle)', paddingTop: '0.75rem', marginTop: '0.25rem' }}>
                    <span>Total</span>
                    <span style={{ color: 'var(--color-burgundy, #4A0E17)' }}>£{subtotalGBP}</span>
                  </div>
                </div>

                {/* Instant Order Submit */}
                <button
                  type="submit"
                  className="btn btn-solid"
                  style={{
                    width: '100%',
                    padding: '16px',
                    fontSize: '0.85rem',
                    minHeight: '52px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px'
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                  <span>Place Order &amp; Receive WhatsApp Receipt &rarr;</span>
                </button>

                <p style={{
                  fontSize: '0.72rem',
                  color: 'var(--text-muted)',
                  textAlign: 'center',
                  marginTop: '0.75rem',
                  marginBottom: 0
                }}>
                  🔒 Secure order processing. Instant receipt sent directly to your phone.
                </p>

              </div>
            </div>

          </form>

        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @media (min-width: 992px) {
          .checkout-grid {
            grid-template-columns: 1.4fr 1fr !important;
          }
        }
      `}} />
    </div>
  )
}
