import React from 'react'
import { Link } from 'react-router-dom'
import AddToCart from './AddToCart'
import ArtistBio from './ArtistBio'

export default function ArtworkItem({ artwork, bio }) {

  console.log(artwork)

  const styles = {
    backgroundImage: `url(${artwork.image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'top center',
    height: '15em',
  }

  const artworkID = String(artwork.id)

  console.log('bio: ', bio)

  return (

    <>
      {artwork.isAvailable ? (

        <div className="card-flex-item card" style={{ margin: '20px' }}>

          <Link to={`/ArtworkDetails/${artworkID}`}>

            <h4 className="has-text-centered mt-3">{artwork.name}</h4>

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
