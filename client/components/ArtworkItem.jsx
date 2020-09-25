import React from 'react'

export default function ArtworkItem ({ artwork }) {
  const styles = {
    backgroundImage: `url(${artwork.image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'top center',
    height: '20em'
  }
  return (
    <div className="card-flex-item card" style={{ margin: '20px' }}>
      <h4 className="has-text-centered mt-3">{artwork.name}</h4>
      <div className="mt-4 mb-6 mx-6" style={styles}></div>
      <p>
        {artwork.cause_id}
      </p>
    </div>
  )
}
