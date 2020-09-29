import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { getArt } from '../api'
import CarouselArt from './CarouselArt'
import { Slide } from 'react-slideshow-image'

import Footer from './Footer'
import Nav from './Nav'

export default function Home(props) {
  // console.log('TEST')
  const [artworks, setArtworks] = useState({
    artworks: []
  })
  const [shuffledArtworks, setShuffledArtworks] = useState([])
  useEffect(() => {
    getArt()
      .then((res) => {
        // console.log('res:', res)
        setArtworks(res)
      })
      .catch((error) => {
        console.log('error: ', error.message)
      })
  }, [])
  // console.log('HEA', artworks)
  console.log
  function shuffle(array) {
    var currentIndex = array.length
    var temporaryValue
    var randomIndex

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
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
      {/* <Nav /> */}
      <div className="aboutUsHome">

        <div className="aboutUsImage">

          {/* ---- Slider Section ---- */}

          <div className="sliderSection">

            <Slide duration={5000}>

              <div className="firstImage">
                <img
                  src={'images/slider_images/slider_1.jpg'} alt="slider_1"
                />
              </div>

              <div className="secondImage">
                <img
                  src={'images/slider_images/slider_2.png'} alt="slider_2"
                />
              </div>

              <div className="thirdImage">
                <img
                  src={'images/slider_images/slider_3.png'} alt="slider_3"
                />
              </div>

            </Slide>

          </div>

        </div>

      </div>

      {/* ---- Artworks Section ---- */}

      <div className="artworkDisplay">

        {/* ---- Artworks Section Title ---- */}

        <div className="displayTitle">
          <hr />
          <h2>ARTWORKS</h2>
          <hr />
        </div>

        {/* ---- Artworks Section Carousel ---- */}

        <div className="artworkCarousel">
          {artworks.artworks.slice(3, 8).map((artwork) => {
            return <CarouselArt art={artwork} key={artwork.id} />
          })}
        </div>
      </div>

      {/* ---- Charities Section Title ---- */}

      <div className="artworkDisplay">

        {/* ---- Charities Section Title ---- */}
        <div className="displayTitle">
          <hr />
          <h2>CHARITIES</h2>
          <hr />
        </div>

        {/* ---- Chairities Section Carousel ---- */}

        <div className="artworkCarousel">
          {artworks.artworks.slice(3, 8).map((artwork) => {
            return <CarouselArt art={artwork} key={artwork.id} />
          })}
        </div>
      </div>

      {/* Section - Footer */}

      <Footer />

    </div>
  )
}
