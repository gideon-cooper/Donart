import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getArt } from '../api'
import Footer from './Footer'
import ArtworkItem from './ArtworkItem'

export default function Artworks() {
  const [artworks, setArtworks] = useState({
    artworks: [],
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
      <div className="artworkDisplay">
        <div className="categoryTitle">
          <hr />
          <h2>Browse Artworks</h2>
          <hr />
        </div>
        <div className="card-flex-wrapper column is-three-quarters">
          {artworks.artworks.map((artwork) => (
            <ArtworkItem key={artwork.id} artwork={artwork} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  )
}

// Display picture of artwork
// Display name of artwork
// display price of artwork
// Display charity artwork is going towards
