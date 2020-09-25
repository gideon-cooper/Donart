import React from 'react'
import { Link } from 'react-router-dom'

export default function Cart(props) {
  console.log(props)
  return (
    <div className="cart">
      <Link style={{ textDecoration: 'none' }} to="/Checkout">
        <button>Checkout</button>
      </Link>
    </div>
  )
}
