import React, { useState, useEffect } from 'react'
import { getOneArt } from '../api'

export default function Artworks(props) {
  const [artworks, setArtwork] = useState({
    artworks: {}
  })
  useEffect(() => {
    getOneArt(props.match.params.id)
      .then((res) => {
        // console.log(res)
        setArtwork(res)
      })
      .catch((error) => {
        console.log('error: ', error.message)
      })
  }, [])
  console.log(artworks)
  return (
    <>
      <div className='artName'>
        <h2>Art Details</h2>
        <h2>{artworks.name}</h2>
        <h2>By {artworks.artistName}</h2>
      </div>

      <div className='artDisplay'>
        <img
          src={artworks.image}
          style={{ width: '200px', height: '200px' }}
          alt=""
        />
        <p>Description</p>
        <p>{artworks.description}</p>
        <p>Price: ${artworks.price} NZD</p>
        <button>Add to cart</button>
      </div>
    </>
  )
}
