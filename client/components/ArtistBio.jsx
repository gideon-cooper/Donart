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
        setArtist(res)
      })
      .catch((error) => {
        console.log('error: ', error.message)
      })
  }, [])
  
  const styles = {
    backgroundImage: `url(${artist.profilePicture})`,
    backgroundSize: 'cover',
    backgroundPosition: 'top center',
    height: '35em',
    borderRadius: '10px'
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
          {/* <img src={artist.profilePicture} style={{maxHeight: '35rem', paddingTop: '25px'}} /> */}
          <div className="card-flex-item pb-1 pt-1" style={{ margin: '20px' }}>
            <div className="mt-1 mb-1 mx-1" style={styles}></div>
          </div>
        </div>
        <div className="column" style={{ paddingRight: '13rem'}}>
          <h1 className="pt-4 pb-4 bigHeading">{artist.artistName}</h1>
          <h1 className="subHeading pb-2">Bio</h1>
          <p>{artist.about}</p>
        </div>
      </div>

      <div className="column">
        <h1 className="has-text-centered bigHeading">{title}</h1>
      </div>

      <div className="card-flex-wrapper column is-three-quarters" style={{ paddingBottom: '120px'}}>
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
