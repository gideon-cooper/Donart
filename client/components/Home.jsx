import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { getArt, getCharities } from '../api'
import CarouselArt from './CarouselArt'
import { Slide } from 'react-slideshow-image'

import Footer from './Footer'
import Nav from './Nav'
import CarouselCharities from './CarouselCharities'

export default function Home (props) {
  const [artworks, setArtworks] = useState({
    artworks: []
  })
  const [charities, setCharities] = useState([])
  // const [shuffledArtworks, setShuffledArtworks] = useState([])

  useEffect(() => {
    getCharities()
      .then((res) => {
        setCharities(res)
      })
      .catch((error) => {
        console.log('error: HERE', error.message)
      })
  }, [])

  useEffect(() => {
    getArt()
      .then((res) => {
        const availableWorks = { artworks: res.artworks.filter(work => work.isAvailable) }
        setArtworks(availableWorks)
      })
      .catch((error) => {
        console.log('error: ', error.message)
      })
  }, [])

  // function shuffle (array) {
  //   var currentIndex = array.length
  //   var temporaryValue
  //   var randomIndex

  //   // While there remain elements to shuffle...
  //   while (currentIndex !== 0) {
  //     // Pick a remaining element...
  //     randomIndex = Math.floor(Math.random() * currentIndex)
  //     currentIndex -= 1

  //     // And swap it with the current element.
  //     temporaryValue = array[currentIndex]
  //     array[currentIndex] = array[randomIndex]
  //     array[randomIndex] = temporaryValue
  //   }

  //   return array
  // }

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

        { (artworks.artworks === undefined || artworks.artworks.length === 0)
          ? <div className="no-art-available ml-6"><p>There are currently no artworks available</p></div>
          : <div className="artworkCarousel">
            {(artworks.artworks.length <= 4)
              ? artworks.artworks.map((artwork) => <CarouselArt art={artwork} key={artwork.id} />
              )
              : artworks.artworks.slice(3, 8).map((artwork) => <CarouselArt art={artwork} key={artwork.id} />
              )}
          </div> }
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

        <div className="artworkCarousel" style={{paddingBottom: "120px"}}>
          {charities.slice(0, 5).map((charity) => {
            return <CarouselCharities charity={charity} key={charity.id} />
          })}
        </div>
      </div>

      {/* Section - Footer */}

      <Footer />

    </div>
  )
}
