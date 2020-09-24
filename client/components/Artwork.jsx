import React from 'react'

export default function Artwork ({ artwork }) {
  return (
    <div className="column">
      <h4 className="is-pulled-left">{artwork.artwork_name}</h4>
      <img src={artwork.artwork_image}/>
      <p>
        {artwork.cause_id}
      </p>
    </div>
  )
}
