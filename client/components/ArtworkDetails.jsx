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

  // const styles = {
  //   backgroundImage: `url(${artworks.image})`,
  //   backgroundSize: 'contain',
  //   backgroundRepeat: 'no-repeat',
  //   backgroundPosition: 'top center',
  //   height: '15em',
  // }

  return (
    <>
      <div className="artworkDetails">
        <div className="card-flex-wrapper column is-three-quarters">
          <div className="column card-flex-item">
          <h4 className="bigHeading pb-4">{artworks.name}</h4>
          <img src={artworks.image} style={{ maxHeight: '35rem', borderRadius: '10px'}}/>
          </div>
          <div className="column">
            <div className="card-flex-item pb-1 pt-4"style={{ margin: '20px' }}>
              
              <div className="artworkDescription pb-1">
                <h2 className="subHeading">Artist:</h2>
                  <p className="pb-4">{artworks.artistName}</p>
                <h2 className="subHeading">Description:</h2>
                  <p className="pb-4">{artworks.description}</p>
                <h2 className="subHeading">Your money will be going to...</h2>
                  <p className="pb-4">{artworks.causeName}</p>
                <h2 className="pb-5 subHeading">Price: ${artworks.price} NZD</h2>
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
