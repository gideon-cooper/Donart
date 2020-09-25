import React, { useState, useEffect, useContext } from 'react'
import { getArt } from '../api'

import Artwork from './ArtworkItem'

export default function Artworks () {
  const [artworks, setArtworks] = useState({
    artworks: []
  })
  useEffect(() => {
    getArt()
      .then((res) => {
        console.log(res)
        setArtworks(res)
      })
      .catch((error) => {
        console.log('error: ', error.message)
      })
  }, [])

  // const artworks = [
  //   { id: 900, cause_id: 1, artist_id: 4, artwork_name: 'First Artwork', artwork_description: 'This artwork is about something', artwork_image: 'https://artforce.org/wp-content/uploads/2016/03/The-Birth-of-Venus.jpg', is_available: true },
  //   { id: 901, cause_id: 1, artist_id: 3, artwork_name: 'Second Artwork', artwork_description: 'This is an artwork inspired by the artist\'s passion for coding', artwork_image: 'https://media.timeout.com/images/103166743/image.jpg', is_available: true },
  //   { id: 902, cause_id: 2, artist_id: 1, artwork_name: 'Third Artwork', artwork_description: 'This is an artwork inspired by the artist\'s mum', artwork_image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRtdZYKldcbOa8ryIDvt-hTQCPM8FklZYfZaw&usqp=CAU', is_available: true },
  //   { id: 903, cause_id: 1, artist_id: 4, artwork_name: 'First Artwork', artwork_description: 'This artwork is about something', artwork_image: 'https://artforce.org/wp-content/uploads/2016/03/The-Birth-of-Venus.jpg', is_available: true },
  //   { id: 904, cause_id: 1, artist_id: 4, artwork_name: 'First Artwork', artwork_description: 'This artwork is about something', artwork_image: 'https://artforce.org/wp-content/uploads/2016/03/The-Birth-of-Venus.jpg', is_available: true },
  //   { id: 905, cause_id: 1, artist_id: 4, artwork_name: 'First Artwork', artwork_description: 'This artwork is about something', artwork_image: 'https://artforce.org/wp-content/uploads/2016/03/The-Birth-of-Venus.jpg', is_available: true },
  //   { id: 906, cause_id: 1, artist_id: 4, artwork_name: 'First Artwork', artwork_description: 'This artwork is about something', artwork_image: 'https://artforce.org/wp-content/uploads/2016/03/The-Birth-of-Venus.jpg', is_available: true },
  //   { id: 907, cause_id: 1, artist_id: 4, artwork_name: 'First Artwork', artwork_description: 'This artwork is about something', artwork_image: 'https://artforce.org/wp-content/uploads/2016/03/The-Birth-of-Venus.jpg', is_available: true }
  // ]

  return (
    // 4 artworks per row
    // dynamically spilling over into x amount of rows
    <>
      <div className='artworkDisplay'>
        <div className='displayTitle'>
          <hr />
          <h2>Browse Artworks</h2>
          <hr />
        </div>
        <div className="card-flex-wrapper column is-three-quarters">

          {artworks.artworks.map((artwork) =>
            <Artwork key={artwork.id} artwork={artwork}/>
          )}
          {artworks.artworks.map((artwork) =>
            <Artwork key={artwork.id} artwork={artwork}/>
          )}
          {artworks.artworks.map((artwork) =>
            <Artwork key={artwork.id} artwork={artwork}/>
          )}
          {artworks.artworks.map((artwork) =>
            <Artwork key={artwork.id} artwork={artwork}/>
          )}
          {artworks.artworks.map((artwork) =>
            <Artwork key={artwork.id} artwork={artwork}/>
          )}

        </div>
      </div>

    </>
  )
}

// Display picture of artwork
// Display name of artwork
// display price of artwork
// Display charity artwork is going towards
