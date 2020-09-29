import React from 'react'
import { Link } from 'react-router-dom'
import AddToCart from './AddToCart'
import ArtistBio from './ArtistBio'

export default function ArtworkItem({ artwork, bio }) {
  const styles = {
    backgroundImage: `url(${
      artwork.image ||
      'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
    })`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top center',
    height: '15em',
  }

  const artworkID = String(artwork.id)

  return (
    <>
      {artwork.isAvailable ? (
        <div className="card-flex-item card" style={{ margin: '20px' }}>

          <Link to={`/ArtworkDetails/${artworkID}`}>
            <h4 className="has-text-centered mt-3">{artwork.name || 'not'}</h4>
            <div className="mt-4 mb-2 mx-6" style={styles}></div>
          </Link>

          <div className="has-text-centered mb-4">
            {/* <h2>Artist: {artwork.artistName}</h2> */}
            {!bio ? <h2>Artist: {artwork.artistName}</h2> : null}

            <h2>Price: ${artwork.price}</h2>

            <h2>Cause: {artwork.causeName || artwork.username}</h2>

            <AddToCart art={artwork} />

          </div>
        </div>
      ) : null}
    </>

  )
}
