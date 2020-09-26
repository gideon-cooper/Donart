import React, { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { CartContext, updateCart } from './CartContext'

export default function CarouselArt(props) {
  const [cart, setCart] = useContext(CartContext)
  const [newCart, setNewCart] = useState({})
  useEffect(() => {
    if (Object.keys(newCart).length > 0) {
      console.log('LOL', newCart)
      console.log('HEYY')
      updateCart(setCart, cart, newCart)
    }
  }, [newCart])
  console.log(props)
  const handleClick = () => {
    const { artistName, causeName, image } = props.art
    setNewCart({ artistName, causeName, image })
  }
  return (
    <div className="carouselArt">
      <Link to="./Artwork/2">
        <p>Art name: {props.art.artworkName}</p>
        <p>Artist: {props.art.artistName}</p>
        <p>Cause: {props.art.causeName}</p>
        <img
          src={props.art.image}
          style={{ width: '200px', height: '200px' }}
          alt=""
        />
      </Link>
      <button onClick={handleClick}>Add to cart</button>
    </div>
  )
}
