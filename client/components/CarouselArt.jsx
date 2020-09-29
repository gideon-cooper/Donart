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
    height: '15rem',
    width: '15rem',
  }

  return (
    <>
      {props.art.isAvailable ? (
        <div className="card-flex-item-carousel card">

          {/* --- Card Image --- */}

          <Link to={`/ArtworkDetails/${artworkId}`}>
            <div className="is-four-fifths" style={styles}></div>
          </Link>

          {/* --- Card Text --- */}
          <div className="homeAddToCartButton has-text-centered mt-3">
            <p className="cardText"><strong>{props.art.name}</strong></p>
            <div>
              <p className="cardText">By {props.art.artistName}</p>
            </div>
            <p className="cardText">For {props.art.causeName}</p>
            <AddToCart art={props.art} />
          </div>
        </div>
      ) : null}
    </>
  )
}
