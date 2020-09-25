import React from 'react'
import { Link } from 'react-router-dom'

export default function CarouselArt(props) {
  console.log(props)
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
    </div>
  )
}
