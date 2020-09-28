import React, { useState, useContext } from 'react'
import { CartContext, updateCart } from './CartContext'
import { Link } from 'react-router-dom'
import CartItem from './CartItem'

export default function Cart(props) {
  const [cart, setCart] = useContext(CartContext)
  return (
    <div className="cart">
      <div className="cartItemContainer">
        {cart.map((item) => {
          return <CartItem item={item} key={item.image} />
        })}
      </div>
      {cart.length === 0 ? (
        <p>Cart is empty :'(</p>
      ) : (
        <div className="checkoutButtonDiv">
          <Link style={{ textDecoration: 'none' }} to="/Checkout">
            <button className="button checkoutButton is-success">
              Checkout
            </button>
          </Link>
        </div>
      )}
    </div>
  )
}
