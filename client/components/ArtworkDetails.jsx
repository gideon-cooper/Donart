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
        <div className="card-flex-wrapper column is-three-quarters">
          <div className="column card-flex-item">
          <h4 className="bigHeading pb-4">{artworks.name}</h4>
          <img src={artworks.image} style={{ maxHeight: '35rem'}}/>
          </div>
          <div className="column">
            <div className="card-flex-item pb-1 pt-6"style={{ margin: '20px' }}>
              
              <div className="artworkDescription pb-1">
                <p>
                  <strong>Artist</strong>:
                </p>
                <p>{artworks.artistName}</p>
                <p>
                  <strong>Description</strong>:
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
        </div>
      </div>
      <Footer />
    </>
  )
}
