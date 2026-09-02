"use client"

import { useEffect } from 'react'
import Link from 'next/link'
import { useCart } from '@/context/CartContext'

export default function CartDrawer() {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, totalItems, subtotalGBP } = useCart()

  // Prevent background scrolling when cart is open
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isCartOpen])

  // Format WhatsApp Bag message
  const phoneNumber = "447341158348"
  const itemsText = cart
    .map(
      (item, idx) =>
        `${idx + 1}. ${item.name} (${item.quantity}x) - £${item.priceGBP * item.quantity}\n   Size: ${item.size} | Color: ${item.color}`
    )
    .join('\n\n')

  const whatsappBagMessage = `Hello Darkemar Culture, I would like to order my shopping bag:

${itemsText}

Subtotal: £${subtotalGBP}

Please confirm availability and provide delivery steps.`.trim()

  const whatsappBagUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappBagMessage)}`

  return (
    <>
      {/* Backdrop */}
      <div 
        onClick={() => setIsCartOpen(false)}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: 'rgba(23, 21, 19, 0.5)',
          backdropFilter: 'blur(4px)',
          WebkitBackdropFilter: 'blur(4px)',
          zIndex: 200,
          opacity: isCartOpen ? 1 : 0,
          visibility: isCartOpen ? 'visible' : 'hidden',
          transition: 'all 0.35s ease'
        }}
      />

      {/* Slide-out Drawer */}
      <aside 
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          width: '100%',
          maxWidth: '440px',
          height: '100vh',
          backgroundColor: 'var(--bg-color)',
          zIndex: 201,
          boxShadow: '-10px 0 40px rgba(0, 0, 0, 0.15)',
          display: 'flex',
          flexDirection: 'column',
          transform: isCartOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
        aria-label="Shopping Bag"
      >
        {/* Drawer Header */}
        <div style={{
          padding: '1.25rem 1.5rem',
          borderBottom: '1px solid var(--border-color)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: 'var(--bg-color)'
        }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.4rem',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              margin: 0,
              color: 'var(--text-primary)'
            }}>
              Shopping Bag
            </h2>
            <span style={{
              fontSize: '0.8rem',
              color: 'var(--text-muted)',
              fontFamily: 'var(--font-body)'
            }}>
              ({totalItems} {totalItems === 1 ? 'item' : 'items'})
            </span>
          </div>

          <button
            onClick={() => setIsCartOpen(false)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '6px',
              color: 'var(--text-primary)',
              fontSize: '1.4rem',
              lineHeight: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            aria-label="Close Shopping Bag"
          >
            &times;
          </button>
        </div>

        {/* Drawer Body / Items List */}
        <div className="hide-scroll" style={{
          flex: 1,
          overflowY: 'auto',
          padding: '1.25rem 1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.25rem'
        }}>
          {cart.length === 0 ? (
            <div style={{
              margin: 'auto 0',
              textAlign: 'center',
              padding: '3rem 1rem'
            }}>
              <span style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '2rem',
                color: 'var(--accent-color)',
                display: 'block',
                marginBottom: '0.5rem'
              }}>
                DARKEMAR
              </span>
              <p style={{
                color: 'var(--text-secondary)',
                fontSize: '0.95rem',
                marginBottom: '1.5rem'
              }}>
                Your luxury shopping bag is currently empty.
              </p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="btn btn-solid"
                style={{ padding: '12px 28px' }}
              >
                Explore Collection
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div 
                key={item.id}
                style={{
                  display: 'flex',
                  gap: '1rem',
                  paddingBottom: '1.25rem',
                  borderBottom: '1px solid var(--border-subtle)'
                }}
              >
                {/* Thumbnail */}
                <div style={{
                  width: '80px',
                  height: '105px',
                  backgroundColor: 'var(--bg-secondary)',
                  borderRadius: '2px',
                  overflow: 'hidden',
                  flexShrink: 0
                }}>
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>

                {/* Details */}
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.5rem' }}>
                    <h4 style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.1rem',
                      color: 'var(--text-primary)',
                      margin: 0,
                      lineHeight: '1.2'
                    }}>
                      <Link 
                        href={`/product/${item.slug}`} 
                        onClick={() => setIsCartOpen(false)}
                        style={{ color: 'inherit' }}
                      >
                        {item.name}
                      </Link>
                    </h4>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: 'var(--text-muted)',
                        cursor: 'pointer',
                        fontSize: '1.1rem',
                        padding: '0 4px'
                      }}
                      title="Remove item"
                      aria-label={`Remove ${item.name} from bag`}
                    >
                      &times;
                    </button>
                  </div>

                  <p style={{
                    fontSize: '0.75rem',
                    color: 'var(--text-secondary)',
                    margin: '0.3rem 0 0 0'
                  }}>
                    Size: <strong>{item.size}</strong> {item.color !== 'Original' && `| Color: ${item.color}`}
                  </p>

                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: 'auto',
                    paddingTop: '0.5rem'
                  }}>
                    {/* Quantity Stepper */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      border: '1px solid var(--border-color)',
                      borderRadius: '2px',
                      height: '32px'
                    }}>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        style={{
                          width: '28px',
                          height: '100%',
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          color: 'var(--text-primary)',
                          fontSize: '1rem',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                        aria-label="Decrease quantity"
                      >
                        -
                      </button>
                      <span style={{
                        padding: '0 8px',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        fontFamily: 'var(--font-body)'
                      }}>
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        style={{
                          width: '28px',
                          height: '100%',
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          color: 'var(--text-primary)',
                          fontSize: '1rem',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>

                    {/* Price */}
                    <span style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '1rem',
                      fontWeight: 600,
                      color: 'var(--color-burgundy, #4A0E17)'
                    }}>
                      £{item.priceGBP * item.quantity}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Drawer Footer */}
        {cart.length > 0 && (
          <div style={{
            padding: '1.25rem 1.5rem',
            borderTop: '1px solid var(--border-color)',
            backgroundColor: 'var(--bg-secondary)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}>
            {/* Subtotal */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline'
            }}>
              <span style={{
                fontSize: '0.85rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: 'var(--text-secondary)',
                fontWeight: 500
              }}>
                Estimated Subtotal
              </span>
              <span style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.5rem',
                fontWeight: 600,
                color: 'var(--color-burgundy, #4A0E17)'
              }}>
                £{subtotalGBP}
              </span>
            </div>

            <p style={{
              fontSize: '0.72rem',
              color: 'var(--text-muted)',
              margin: 0,
              lineHeight: 1.4
            }}>
              Shipping &amp; delivery calculated at checkout. Worldwide doorstep delivery available.
            </p>

            {/* Actions */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <Link
                href="/checkout"
                onClick={() => setIsCartOpen(false)}
                className="btn btn-solid"
                style={{
                  width: '100%',
                  padding: '14px',
                  fontSize: '0.82rem',
                  textAlign: 'center'
                }}
              >
                Proceed to Checkout &rarr;
              </Link>

              <a
                href={whatsappBagUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-burgundy"
                style={{
                  width: '100%',
                  padding: '12px',
                  fontSize: '0.78rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px'
                }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                <span>Send Bag to WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </aside>
    </>
  )
}
