import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CartContext, updateCart } from './CartContext'
import { CheckoutContext, updateCheckout } from './CheckoutContext'
import CheckoutItem from './CheckoutItem'

export default function Checkout() {
  const [cart, setCart] = useContext(CartContext)
  const [checkout, setCheckout] = useContext(CheckoutContext)
  useEffect(() => {
    updateCheckout(setCheckout)
  }, [])
  return (
    <div className="checkout">
      {cart.map((item) => {
        return <CheckoutItem item={item} key={item.image} />
      })}
      <Link style={{ textDecoration: 'none' }} to="/Confirmation">
        <button>Buy now</button>
      </Link>
    </div>
  )
}
