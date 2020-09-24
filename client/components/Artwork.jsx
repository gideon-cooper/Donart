import React from 'react'

export default function Artwork ({ artwork }) {
  return (
    <div>
      <h4 className="is-pulled-left column">{artwork.artwork_name}</h4>
      <img src={artwork.artwork_image}/>
      <p>
        {artwork.cause_id}
      </p>
    </div>
  )
}
