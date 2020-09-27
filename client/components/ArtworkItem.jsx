import React from "react"
import { Link } from "react-router-dom"
import AddToCart from "./AddToCart"

export default function ArtworkItem({ artwork }) {
  const styles = {
    backgroundImage: `url(${artwork.image})`,
    backgroundSize: "cover",
    backgroundPosition: "top center",
    height: "20em",
  }
  const artworkID = String(artwork.id)

  return (
    <div className='card-flex-item card' style={{ margin: "20px" }}>
      <Link to={`/ArtworkDetails/${artworkID}`}>
        <h4 className='has-text-centered mt-3'>{artwork.name}</h4>
        <div className='mt-4 mb-2 mx-6' style={styles}></div>
      </Link>
      <div className='has-text-centered mb-4'>
        <h2>Artist: {artwork.artistName}</h2>
        <h2>Price: ${artwork.price}</h2>
        <h2>Cause: {artwork.causeName}</h2>
        <AddToCart art={artwork} />
      </div>
    </div>
  )
}
