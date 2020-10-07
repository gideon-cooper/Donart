import React, { useState, useContext } from 'react'
import { CartContext, updateCart } from './CartContext'
import { Link } from 'react-router-dom'
import CartItem from './CartItem'

export default function Cart(props) {
  const [cart, setCart] = useContext(CartContext)

  return (
    <div className="cart">
      <div className="cartItemContainer">
        {cart.length === 0 ? (
          <div className="emptyText">
            <p>Cart is empty :'(</p>
            <p>Try adding something!</p>
          </div>
        ) : null}
        {cart.map((item) => {
          return <CartItem item={item} key={item.image} />
        })}
      </div>
      {cart.length > 0 ? (
        <div className="checkoutButtonDiv">
          <Link style={{ textDecoration: 'none' }} to="/Checkout">
            <button className="button checkoutButton is-success">
              Checkout
            </button>
          </Link>
        </div>
      ) : null}
    </div>
  )
}
