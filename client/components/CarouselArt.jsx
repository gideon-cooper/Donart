import React from "react"

export default function CarouselArt(props) {
  console.log(props)
  return (
    <div>
      <p>Art name: {props.art.artworkName}</p>
      <p>Artist: {props.art.artistName}</p>
      <p>Cause: {props.art.causeName}</p>
      <img
        src={props.art.image}
        style={{ width: "100px", height: "100px" }}
        alt=''
      />
    </div>
  )
}
