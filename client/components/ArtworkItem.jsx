import React from 'react'
import { Link } from 'react-router-dom'

export default function ArtworkItem ({ artwork }) {
  const styles = {
    backgroundImage: `url(${artwork.image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'top center',
    height: '20em'
  }
   const artworkID = String(artwork.id)
  return (
    <div className="card-flex-item card" style={{ margin: '20px' }}>
      <Link to={`/ArtworkDetails/${artworkID}`}>
      <h4 className="has-text-centered mt-3">{artwork.name}</h4>
      <div className="mt-4 mb-6 mx-6" style={styles}></div>
      </Link>
    </div>
    
  )
}
