import React from 'react'

import Artwork from './Artwork'

export default function Artworks () {
  const artworks = [
    { id: 900, cause_id: 1, artist_id: 4, artwork_name: 'First Artwork', artwork_description: 'This artwork is about something', artwork_image: 'https://artforce.org/wp-content/uploads/2016/03/The-Birth-of-Venus.jpg', is_available: true },
    { id: 901, cause_id: 1, artist_id: 3, artwork_name: 'Second Artwork', artwork_description: 'This is an artwork inspired by the artist\'s passion for coding', artwork_image: 'https://media.timeout.com/images/103166743/image.jpg', is_available: true },
    { id: 902, cause_id: 2, artist_id: 1, artwork_name: 'Third Artwork', artwork_description: 'This is an artwork inspired by the artist\'s mum', artwork_image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRtdZYKldcbOa8ryIDvt-hTQCPM8FklZYfZaw&usqp=CAU', is_available: true }
  ]

  return (
    <>
    <h1>Browse Artworks</h1>
      <div className="columns">
        {artworks.map((artwork, index) =>
          <Artwork key={index} artwork={artwork}/>
        )}
      </div>
    </>
  )
}

// Display picture of artwork
// Display name of artwork
// display price of artwork
// Display charity artwork is going towards
