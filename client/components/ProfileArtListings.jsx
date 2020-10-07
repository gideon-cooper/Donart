import React from 'react'
import { Link } from 'react-router-dom'
import AddToCart from './AddToCart'

export default function ProfileArtListings({ artwork, bio }) {
  // console.log(artwork)
  const styles = {
    backgroundImage: `url(${artwork.image})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top center',
    height: '15em',
  }
  const artworkID = String(artwork.id)

  return (
    <>
      {artwork.isAvailable ? (
        <div className=" card-flex-item singleArtwork card">
          <Link to={`/ArtworkDetails/${artworkID}`}>
            <div className="mt-4 mb-2 mx-6" style={styles}></div>
          </Link>
          <div className="has-text-centered mb-4">
            {/* <h2>Artist: {artwork.artistName}</h2> */}
            <h2>
              <strong>{artwork.name}</strong>
            </h2>
            <h2>
              <strong>Price</strong>:
            </h2>
            <h2> ${artwork.price} NZD</h2>
            <h2>
              <strong>Cause</strong>:
            </h2>
            <h2> {artwork.causeName || artwork.username}</h2>
          </div>
        </div>
      ) : null}
    </>
  )
}
