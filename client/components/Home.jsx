import React from 'react'
import { Link } from 'react-router-dom'
import Artworks from './Artworks'

export default function Home() {
  return (
    <div className="home">
      <div className="aboutUsHome">
        <div className="aboutUsImage">
          <Artworks/>
          {/* <img
            src="https://cdn.britannica.com/78/43678-050-F4DC8D93/Starry-Night-canvas-Vincent-van-Gogh-New-1889.jpg"
            alt=""
          /> */}
        </div>
      </div>
    </div>
  )
}
