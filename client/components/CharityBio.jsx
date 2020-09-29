import React, { useState, useEffect } from 'react'

import { getCharity } from '../api'
import ArtworkItem from './ArtworkItem'
import Footer from './Footer'

function CharityBio(props) {
  // const [user, setUser] = useContext(UserContext)

  const [charity, setCharity] = useState(
    {
      username: 'loading..',
      name: '',
      isCharity: 0,
      profilePicture: 'loading...',
      about: 'loading..',
      artworks: []
    },
)

  useEffect(() => {
    console.log('params: ', props.match.params.id)
    getCharity(props.match.params.id)
      .then((res) => {
        console.log('USE EFFECT', res)
        setCharity(res)
      })
      .catch((error) => {
        console.log('error: ', error.message)
      })
  }, [])
  // console.log('CHARI', charity)

  const styles = {
    backgroundImage: `url(${charity.profilePicture})`,
    backgroundSize: 'cover',
    backgroundPosition: 'top center',
    height: '20em',
  }

  //   const artStyles = {
  //     backgroundImage: `url(${artist.artworks[0].image})`,
  //     backgroundSize: 'cover',
  //     backgroundPosition: 'top center',
  //     height: '20em'
  //   }

  // function capitalizeFirstLetter(string) {
  //     return string.charAt(0).toUpperCase() + string.slice(1);
  //   }

  return (
    <>
      <div className="columns">
        <div className="column">
          <div className="card-flex-item card pb-1" style={{ margin: '20px' }}>
            <h4 className="has-text-centered mt-3">{charity.charityName}</h4>
            <div className="mt-6 mb-6 mx-6" style={styles}></div>
          </div>
        </div>
        <div className="column">
          <h1>HEYYY</h1>
          <p>{charity.about}</p>
        </div>
      </div>
      <div className="column">
        <h1 className="has-text-centered">Listings</h1>
      </div>
      <div className="card-flex-wrapper column is-three-quarters">
      {(charity.artworks === undefined || charity.artworks.length === 0)
      ? <p>There are no artworks associate with this charity yet</p>
      : charity.artworks.map((artwork) => (
          <ArtworkItem key={artwork.id} artwork={artwork} />
        ))}
      </div>
      <Footer />
    </>
  )
}

export default CharityBio
