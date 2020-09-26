import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { getArt } from '../api'
import CarouselArt from './CarouselArt'

export default function Home(props) {
  const [artworks, setArtworks] = useState({
    artworks: [],
  })
  const [ shuffledArtworks, setShuffledArtworks ] = useState([])
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

  function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
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
      </div>
    </div>
  )
}
