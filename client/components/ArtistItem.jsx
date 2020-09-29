import React from 'react'
import { Link } from 'react-router-dom'

export default function ArtistItem({ artist }) {
  const styles = {
    backgroundImage: `url(${artist.profile_picture})`,
    backgroundSize: 'cover',
    backgroundPosition: 'top center',
    height: '20em',
  }

  const artistID = String(artist.id)

  return (
    <div className="card-flex-item card" style={{ margin: '20px' }}>
      <Link to={`/ArtistBio/${artistID}`}>
        <h4 className="has-text-centered has-text-weight-semibold is-size-5 mt-3">
          {artist.name}
        </h4>
        <div className="mt-4 mb-6 mx-6" style={styles}></div>
        <p>{artist.cause_id}</p>
      </Link>
    </div>
  )
}
