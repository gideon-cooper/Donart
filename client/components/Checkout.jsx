import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CartContext, updateCart } from './CartContext'
import Footer from './Footer'

import EmptyCart from './EmptyCart'
import NotEmptyCart from './NotEmptyCart'

export default function Checkout() {
  const [cart, setCart] = useContext(CartContext)

  console.log(cart)
  return (
    <div className="checkout">
      {cart.length === 0 ? <EmptyCart /> : <NotEmptyCart />}
      <Footer />
    </div>
  )
}
