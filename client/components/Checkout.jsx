import React, { useContext } from 'react'
import { CartContext, updateCart } from './CartContext'
import CheckoutItem from './CheckoutItem'

export default function Checkout() {
  const [cart, setCart] = useContext(CartContext)
  return (
    <div className="checkout">
      {cart.map((item) => {
        return <CheckoutItem item={item} key={item.image} />
      })}
    </div>
  )
}
