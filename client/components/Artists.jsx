import React,  { useState, useEffect }  from 'react'
import ArtistItem from './ArtistItem'

import { getUsers } from '../api'

export default function Artists () {
  const [artists, setArtistProfiles] = useState([])
  useEffect(() => {
    getUsers()
      .then((res) => {
        setArtistProfiles(res)
      })
      .catch((error) => {
        console.log('error: ', error.message)
      })
  }, [])

  return (
<>
      <div className='artworkDisplay'>
        <div className='displayTitle'>
          <hr />
          <h2>Browse Artists</h2>
          <hr />
        </div>
        <div className="card-flex-wrapper column is-three-quarters">
          {artists.map((artist) =>
            <ArtistItem key={artist.id} artist={artist}/>
          )}
        </div>
      </div>
    </>
  )
}
