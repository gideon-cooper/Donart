import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from './CartContext'
import { removeArtwork } from '../api'
import CheckoutItem from './CheckoutItem'

export default function NotEmptyCart() {
  const [cart, setCart] = useContext(CartContext)
  console.log(cart)
  const handleClick = () => {
    const ids = cart.map((item) => item.id)
    console.log('IDS', ids)
    removeArtwork(ids)
    cart.length = 0
  }

  return (
    <div>
      {cart.map((item) => {
        return <CheckoutItem item={item} key={item.image} />
      })}
      <Link style={{ textDecoration: 'none' }} to="/Confirmation">
        <button onClick={handleClick}>Buy now</button>
      </Link>
    </div>
  )
}
