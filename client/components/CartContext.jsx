import React, { useState, createContext } from 'react'

export const CartContext = createContext()

export const CartProvider = ({ reducer, initialState, children }) => {
  const [cart, setCart] = useState({
    cart: [],
  })

  return (
    <CartContext.Provider value={[cart, setCart]}>
      {children}
    </CartContext.Provider>
  )
}
export const updateCart = (setCart, cart, cartItem) => {
  return setCart({ ...cart, cartItem })
}
