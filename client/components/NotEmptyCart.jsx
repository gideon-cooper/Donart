import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from './CartContext'
import CheckoutItem from './CheckoutItem'

export default function NotEmptyCart() {
  const [cart] = useContext(CartContext)
  return (
    <div>
      {cart.map((item) => {
        return <CheckoutItem item={item} key={item.image} />
      })}
      <Link style={{ textDecoration: 'none' }} to="/Confirmation">
        <button>Buy now</button>
      </Link>
    </div>
  )
}
