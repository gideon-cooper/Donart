import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "./CartContext"
import CheckoutItem from "./CheckoutItem"

export default function NotEmptyCart() {
  const [cart, setCart] = useContext(CartContext)

  const handleClick = () => {
    cart.length = 0
  }
  return (
    <div>
      {cart.map((item) => {
        return <CheckoutItem item={item} key={item.image} />
      })}
      <Link style={{ textDecoration: "none" }} to='/Confirmation'>
        <button onClick={handleClick}>Buy now</button>
      </Link>
    </div>
  )
}
