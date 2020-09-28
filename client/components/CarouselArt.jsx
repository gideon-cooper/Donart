import React, { useState, useContext, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'

import AddToCart from './AddToCart'

export default function CarouselArt(props) {
  const artworkId = String(props.art.id)

  return (
    <div className='carouselArt'>
      <Link to={`/ArtworkDetails/${artworkId}`}>
        <img
          src={props.art.image}
          style={{ width: '200px', height: '200px' }}
          alt=''
        />
        <p className="ACProperty">Artist Name:</p><p>{props.art.artworkName}</p>
        <p>Artist: {props.art.artistName}</p>
        <p>Cause: {props.art.causeName}</p>

      </Link>
      {}

      <AddToCart art={props.art} />
    </div>
  )
}
