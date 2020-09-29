import React, { useState, useEffect } from 'react'
import { getOneArt } from '../api'
import AddToCart from './AddToCart'
import Footer from './Footer'

export default function Artworks(props) {
  const [artworks, setArtwork] = useState({
    artworks: {},
  })
  useEffect(() => {
    getOneArt(props.match.params.id)
      .then((res) => {
        // console.log(res)
        setArtwork(res)
      })
      .catch((error) => {
        console.log('error: ', error.message)
      })
  }, [])
  console.log(artworks)

  const styles = {
    backgroundImage: `url(${artworks.image})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top center',
    height: '15em',
  }

  return (
    <>
      <div className="artworkDetails">
        <div className="columns">
          <div className="column"></div>
          <div className="column">
            <div
              className="card-flex-item card pb-1"
              style={{ margin: '20px' }}
            >
              <h4 className="has-text-centered mt-3">{artworks.name}</h4>
              <div style={styles}></div>
              <div className="artworkDescription has-text-centered pb-1">
                <p>
                  <strong>Description:</strong>
                </p>
                <p>{artworks.description}</p>
                <p>
                  <strong>Your Money Will Be Going To...</strong>
                </p>
                <p>{artworks.causeName}</p>
                <p>
                  <strong>Price:</strong> ${artworks.price} NZD
                </p>
                <AddToCart art={artworks} />
              </div>
            </div>
          </div>
          <div className="column"></div>
        </div>
      </div>
      <Footer />
    </>
  )
}
