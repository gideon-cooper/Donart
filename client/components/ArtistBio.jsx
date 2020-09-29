import React, { useState, useEffect } from 'react'
// import ArtistItem from './ArtworkItem'

import { getArtist } from '../api'
import ArtworkItem from './ArtworkItem'
import Footer from './Footer'

function ArtistBio(props) {
  const [artist, setArtist] = useState({
    artist: {},
  })
  useEffect(() => {
    getArtist(props.match.params.id)
      .then((res) => {
        // console.log('USE EFFECT', res)
        setArtist(res)
      })
      .catch((error) => {
        console.log('error: ', error.message)
      })
  }, [])
  console.log('artist: ', artist)
  console.log('artist.artworks: ', artist.artworks)

  const styles = {
    backgroundImage: `url(${artist.profilePicture})`,
    backgroundSize: 'cover',
    backgroundPosition: 'top center',
    height: '35em',
  }

  const title = titleName(artist.artworks)

  function titleName (array){
    if (array) {
      let title = (array.length > 0) 
      ? 'Listings'
      :'No Listings'
      return title
  } 
}
  

  return (
    <>
      <div className="columns">
        <div className="column" style={{ paddingLeft: '13rem'}} >
          <div className="card-flex-item card pb-1 pt-1" style={{ margin: '20px' }}>
            {/* <h4 className="has-text-centered mt-3">{artist.artistName}</h4> */}
            <div className="mt-6 mb-6 mx-6" style={styles}></div>
          </div>
        </div>
        <div className="column" style={{ paddingRight: '13rem'}}>
          <h1 className="pt-4 pb-4 personName">{artist.artistName}</h1>
          <h1 className="personBio pb-2">Bio</h1>
          <p>{artist.about}</p>
        </div>
      </div>

      <div className="column">
        <h1 className="has-text-centered">{title}</h1>
      </div>

      <div className="card-flex-wrapper column is-three-quarters">
        {artist.artworks
          ? artist.artworks.map((art) => (
              <ArtworkItem key={art.id} artwork={art} bio={true} />
            ))
          : null}
      </div>
      <Footer />
    </>
  )
}

export default ArtistBio
