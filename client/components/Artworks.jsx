import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getArt } from '../api'

import Artwork from './ArtworkItem'

export default function Artworks () {
  const [artworks, setArtworks] = useState({
    artworks: []
  })
  useEffect(() => {
    getArt()
      .then((res) => {
        setArtworks(res)
      })
      .catch((error) => {
        console.log('error: ', error.message)
      })
  }, [])
  return (
    <>
      <div className='artworkDisplay'>
        <div className='displayTitle'>
          <hr />
          <h2>Browse Artworks</h2>
          <hr />
        </div>
        <div className="card-flex-wrapper column is-three-quarters">
          {artworks.artworks.map((artwork) =>
            <Artwork key={artwork.id} artwork={artwork}/>
          )}
        </div>
      </div>

    </>
  )
}

// Display picture of artwork
// Display name of artwork
// display price of artwork
// Display charity artwork is going towards
