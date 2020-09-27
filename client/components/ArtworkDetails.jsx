import React, { useState, useEffect } from "react"
import { getOneArt } from "../api"
import AddToCart from "./AddToCart"

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
        console.log("error: ", error.message)
      })
  }, [])
  console.log(artworks)
  return (
    <>
      <div className='artName'>
        <h2>
          <strong>Art Details</strong>
        </h2>
        <br></br>
        <h2>
          <strong>{artworks.name}</strong>
        </h2>
        <h2>By {artworks.artistName}</h2>
      </div>

      <div className='artDisplay'>
        <br></br>
        <img
          src={artworks.image}
          style={{ width: "200px", height: "200px" }}
          alt=''
        />
        <br></br>

        <p>
          <strong>Description:</strong>
        </p>
        <p>{artworks.description}</p>
        <br></br>
        <p>
          <strong>Your Money Will Be Going To...</strong>
        </p>
        <p>{artworks.causeName}</p>
        <br></br>
        <p>
          <strong>Price:</strong> ${artworks.price} NZD
        </p>
        <AddToCart art={artworks} />
      </div>
    </>
  )
}
