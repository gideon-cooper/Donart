import React from 'react'

export default function Artwork ({ artwork }) {
  return (
    <div className="card px-6" style={{ margin: '20px' }}>
      <h4 className="is-pulled-left column">{artwork.name}</h4>
      <div className="card-image">
        <img
          src={artwork.image}
          style={{ width: '200px', height: '200px' }}
        />
      </div>
      <p>
        {artwork.cause_id}
      </p>
    </div>
  )
}
