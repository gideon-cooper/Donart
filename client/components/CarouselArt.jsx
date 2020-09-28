import React, { useState, useContext, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'

import AddToCart from './AddToCart'

export default function CarouselArt(props) {
  const artworkId = String(props.art.id)

  return (
    <>
      {props.art.isAvailable ? (
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
          </Link>

          <AddToCart art={props.art} />
        </div>
      ) : null}
    </>
  )
}
