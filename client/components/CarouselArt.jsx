import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'

import { CartContext, updateCart } from './CartContext'

export default function CarouselArt(props) {
  const [, setCart] = useContext(CartContext)
  const [cart, setNewCart] = useState({
    cartItem: {}
  })
  const artworkId = String(props.art.id)

  console.log(props)
  const handleClick = () => {
    setNewCart()
    updateCart(setCart, cart.cartItem)
  }
  return (
    <div className="carouselArt">
      <Link to={`/ArtworkDetails/${artworkId}`}>
        <p>Art name: {props.art.artworkName}</p>
        <p>Artist: {props.art.artistName}</p>
        <p>Cause: {props.art.causeName}</p>
        <img
          src={props.art.image}
          style={{ width: '200px', height: '200px' }}
          alt=""
        />
        <button onClick={handleClick}>Add to cart</button>
      </Link>
    </div >
  )
}
