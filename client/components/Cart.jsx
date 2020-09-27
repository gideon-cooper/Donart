import React, { useState, useContext } from "react"
import { CartContext, updateCart } from "./CartContext"
import { Link } from "react-router-dom"
import CartItem from "./CartItem"

export default function Cart(props) {
  const [cart, setCart] = useContext(CartContext)
  return (
    <div className='cart'>
      {cart.length === 0 ? (
        <p>Cart is empty :'(</p>
      ) : (
        <Link style={{ textDecoration: "none" }} to='/Checkout'>
          <button className='button is-success'>Checkout</button>
        </Link>
      )}

      {cart.map((item) => {
        return <CartItem item={item} key={item.image} />
      })}
    </div>
  )
}
