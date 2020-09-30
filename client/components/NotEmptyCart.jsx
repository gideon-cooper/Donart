import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from './CartContext'
import { removeArtwork } from '../api'
import CheckoutItem from './CheckoutItem'

export default function NotEmptyCart() {
  const [cart, setCart] = useContext(CartContext)

  const handleClick = () => {
    const ids = cart.map((item) => item.id)
    removeArtwork(ids)
    cart.length = 0
  }

  return (
    <div className="notEmptyCart">
      {cart.map((item) => {
        return <CheckoutItem item={item} key={item.image} />
      })}

      <div className="buyNow">
        <Link style={{ textDecoration: 'none' }} to="/Confirmation">
          <button className="button is-success" onClick={handleClick}>
            Buy now
          </button>
        </Link>
      </div>
    </div>
  )
}
