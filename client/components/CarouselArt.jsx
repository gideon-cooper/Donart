import React, { useState, useContext, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { CartContext } from './CartContext'

import AddToCart from './AddToCart'

export default function CarouselArt(props) {
  console.log(props)

  const [cart, setCart] = useContext(CartContext)
  const artworkId = String(props.art.id)

  const styles = {
    backgroundImage: `url(${props.art.image})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top center',
    height: '10em',
  }

  return (
    <>
      {props.art.isAvailable ? (
        <div className="card-flex-item-carousel card">

          <Link to={`/ArtworkDetails/${artworkId}`}>
            <div className="mt-5" style={styles}></div>
          </Link>

          <div className="has-text-centered mt-3">
            <p>{props.art.name}</p>
            <p>Artist: {props.art.artistName}</p>
            <p>Cause: {props.art.causeName}</p>
            <AddToCart art={props.art} />
          </div>
        </div>
      ) : null}
    </>
  )
}
