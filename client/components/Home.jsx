import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { getArt } from '../api'
import CarouselArt from './CarouselArt'
import { Slide } from 'react-slideshow-image'

export default function Home(props) {
  const [artworks, setArtworks] = useState({
    artworks: [],
  })
  const [shuffledArtworks, setShuffledArtworks] = useState([])
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
  console.log('HEA', artworks)
  console.log
  function shuffle(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex -= 1

      // And swap it with the current element.
      temporaryValue = array[currentIndex]
      array[currentIndex] = array[randomIndex]
      array[randomIndex] = temporaryValue
    }

    return array
  }

  return (
    <div className="home">
      <div className="aboutUsHome">
        <div className="aboutUsImage">
          <Slide>
            <img
              src="https://cdn.britannica.com/78/43678-050-F4DC8D93/Starry-Night-canvas-Vincent-van-Gogh-New-1889.jpg"
              alt=""
            />
            <img
              src="https://www.artfindnz.co.nz/wp-content/uploads/2017/03/SEABED-FINAL-SIG.jpg"
              alt=""
            />
          </Slide>
        </div>
      </div>
      <div className="artworkDisplay">
        <div className="displayTitle">
          <hr />
          <h2>Artworks</h2>

          <hr />
        </div>
        <div className="artworkCarousel">
          {artworks.artworks.slice(3, 8).map((artwork) => {
            return <CarouselArt art={artwork} key={artwork.id} />
          })}
        </div>
        <div className="artworkDisplay">
          <div className="displayTitle">
            <hr />
            <h2>Success stories</h2>
            <hr />
          </div>
        </div>
      </div>
    </div>
  )
}
