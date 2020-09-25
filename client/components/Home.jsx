import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { getArt } from '../api'
import CarouselArt from './CarouselArt'

export default function Home(props) {
  const [artworks, setArtworks] = useState({
    artworks: [],
  })
  useEffect(() => {
    getArt()
      .then((res) => {
        console.log('res:', res)
        setArtworks(res)
      })
      .catch((error) => {
        console.log('error: ', error.message)
      })
  }, [])

  function getRandomArtwork (artworks){
    const random = Math.floor(Math.random() * artworks.length)
    console.log('artworks array: ', artworks)
    console.log('random:', random)
    return artworks[random]
  }

  return (
    <div className="home">
      <div className="aboutUsHome">
        <div className="aboutUsImage">
          <img
            src="https://cdn.britannica.com/78/43678-050-F4DC8D93/Starry-Night-canvas-Vincent-van-Gogh-New-1889.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="artworkDisplay">
        <div className="displayTitle">
          <hr />
          <h2>Artworks</h2>

          <hr />
        </div>
        <div className="artworkCarousel">
          {artworks.artworks.slice(0,5).map((artwork) => {
            return <CarouselArt art={artwork} key={artwork.id} />
          })}
        </div>
        <div className="artworkCarousel">
          {getRandomArtwork(artworks)}
        </div>
      </div>
    </div>
  )
}
