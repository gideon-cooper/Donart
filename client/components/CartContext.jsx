import React, { useState, createContext, useContext } from "react"

export const CartContext = createContext()

export const CartProvider = ({ reducer, initialState, children }) => {
  const [cart, setCart] = useState([])

  return (
    <CartContext.Provider value={[cart, setCart]}>
      {children}
    </CartContext.Provider>
  )
}
export const updateCart = (setCart, cart, cartItem) => {
  return setCart([...cart, cartItem])
}
export const deleteCartItem = (setCart, cart, id) => {
  return setCart(cart.filter((item) => item.id !== id))
}
