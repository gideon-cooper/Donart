import React, { useState, useEffect } from 'react'

import { getCharity } from '../api'
import ArtworkItem from './ArtworkItem'
import Footer from './Footer'

function CharityBio(props) {
  const [charity, setCharity] = useState([
    {
      username: 'loading..',
      profile_picture: 'loading...',
      about: 'loading..',
    },
  ])

  useEffect(() => {
    getCharity(props.match.params.id)
      .then((res) => {
        console.log('USE EFFECT', res)
        setCharity(res)
      })
      .catch((error) => {
        console.log('error: ', error.message)
      })
  }, [])
  console.log('CHARI', charity)

  const styles = {
    backgroundImage: `url(${charity[0].profile_picture})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
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
        <div className="column"></div>
        <div className="column ">
          <div className="card-flex-item card pb-1 " style={{ margin: '10px' }}>
            <div style={styles}></div>
          </div>
        </div>
        <div className="column">
          <p>{charity[0].about}</p>
        </div>
        <div className="column"></div>
      </div>

      <div className="column">
        <h1 className="has-text-centered">Listings supporting this charity</h1>
      </div>
      <div className="card-flex-wrapper column is-three-quarters">
        {charity.map((charity) => (
          <ArtworkItem key={charity.id} artwork={charity} />
        ))}
      </div>
      <Footer />
    </>
  )
}

export default CharityBio
