"use client"

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { Product } from '@/data/products'

export interface CartItem {
  id: string // combination of product.id + size + color
  productId: string
  name: string
  slug: string
  priceGBP: number
  image: string
  size: string
  color: string
  quantity: number
}

interface CartContextType {
  cart: CartItem[]
  isCartOpen: boolean
  setIsCartOpen: (open: boolean) => void
  addToCart: (product: Product, size?: string, color?: string, quantity?: number) => void
  removeFromCart: (cartItemId: string) => void
  updateQuantity: (cartItemId: string, newQty: number) => void
  clearCart: () => void
  totalItems: number
  subtotalGBP: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  // Load cart from localStorage on mount
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem('darkemar_cart')
      if (savedCart) {
        setCart(JSON.parse(savedCart))
      }
    } catch (e) {
      console.error('Failed to load cart from storage:', e)
    } finally {
      setIsLoaded(true)
    }
  }, [])

  // Save cart to localStorage on changes
  useEffect(() => {
    if (isLoaded) {
      try {
        localStorage.setItem('darkemar_cart', JSON.stringify(cart))
      } catch (e) {
        console.error('Failed to save cart to storage:', e)
      }
    }
  }, [cart, isLoaded])

  const addToCart = (
    product: Product,
    size: string = '',
    color: string = '',
    quantity: number = 1
  ) => {
    const itemSize = size || (product.sizes.length > 0 ? product.sizes[0] : 'Standard')
    const itemColor = color || (product.colors.length > 0 && product.colors[0] !== 'Default' ? product.colors[0] : 'Original')
    const cartItemId = `${product.id}-${itemSize}-${itemColor}`
    const itemImage = product.images && product.images.length > 0 ? product.images[0] : '/images/new-hero-image.jpeg'

    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex((item) => item.id === cartItemId)
      if (existingIndex > -1) {
        const updated = [...prevCart]
        updated[existingIndex].quantity += quantity
        return updated
      } else {
        return [
          ...prevCart,
          {
            id: cartItemId,
            productId: product.id,
            name: product.name,
            slug: product.slug,
            priceGBP: product.priceGBP,
            image: itemImage,
            size: itemSize,
            color: itemColor,
            quantity: Math.max(1, quantity)
          }
        ]
      }
    })

    // Automatically slide out cart drawer
    setIsCartOpen(true)
  }

  const removeFromCart = (cartItemId: string) => {
    setCart((prev) => prev.filter((item) => item.id !== cartItemId))
  }

  const updateQuantity = (cartItemId: string, newQty: number) => {
    if (newQty <= 0) {
      removeFromCart(cartItemId)
      return
    }
    setCart((prev) =>
      prev.map((item) => (item.id === cartItemId ? { ...item, quantity: newQty } : item))
    )
  }

  const clearCart = () => {
    setCart([])
  }

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0)
  const subtotalGBP = cart.reduce((total, item) => total + item.priceGBP * item.quantity, 0)

  return (
    <CartContext.Provider
      value={{
        cart,
        isCartOpen,
        setIsCartOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        subtotalGBP
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
