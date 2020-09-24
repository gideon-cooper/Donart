import React, { useState, useEffect, useContext } from "react"
import { Link } from "react-router-dom"
import { getArt } from "../api"
import CarouselArt from "./CarouselArt"

export default function Home() {
  const [artworks, setArtworks] = useState({
    artworks: [],
  })
  useEffect(() => {
    getArt()
      .then((res) => {
        console.log(res)
        setArtworks(res)
      })
      .catch((error) => {
        console.log("error: ", error.message)
      })
  }, [])

  return (
    <div className='home'>
      <div className='aboutUsHome'>
        <div className='aboutUsImage'>
          <img
            src='https://cdn.britannica.com/78/43678-050-F4DC8D93/Starry-Night-canvas-Vincent-van-Gogh-New-1889.jpg'
            alt=''
          />
        </div>
      </div>
      <div className='artworkDisplay'>
        <div className='displayTitle'>
          <hr />
          <h2>Artworks</h2>
          <hr />
        </div>
        <div className='artworkCarousel'>
          {artworks.artworks.map((artwork) => {
            return <CarouselArt art={artwork} key={artwork.id} />
          })}
        </div>
      </div>
    </div>

  )
}
