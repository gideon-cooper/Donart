import React from 'react'
import GridLayout from 'react-grid-layout'

import Artwork from './Artwork'

export default function Artworks () {
  const artworks = [
    { id: 900, cause_id: 1, artist_id: 4, artwork_name: 'First Artwork', artwork_description: 'This artwork is about something', artwork_image: 'https://artforce.org/wp-content/uploads/2016/03/The-Birth-of-Venus.jpg', is_available: true },
    { id: 901, cause_id: 1, artist_id: 3, artwork_name: 'Second Artwork', artwork_description: 'This is an artwork inspired by the artist\'s passion for coding', artwork_image: 'https://media.timeout.com/images/103166743/image.jpg', is_available: true },
    { id: 902, cause_id: 2, artist_id: 1, artwork_name: 'Third Artwork', artwork_description: 'This is an artwork inspired by the artist\'s mum', artwork_image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRtdZYKldcbOa8ryIDvt-hTQCPM8FklZYfZaw&usqp=CAU', is_available: true },
    { id: 903, cause_id: 1, artist_id: 4, artwork_name: 'First Artwork', artwork_description: 'This artwork is about something', artwork_image: 'https://artforce.org/wp-content/uploads/2016/03/The-Birth-of-Venus.jpg', is_available: true },
    { id: 904, cause_id: 1, artist_id: 4, artwork_name: 'First Artwork', artwork_description: 'This artwork is about something', artwork_image: 'https://artforce.org/wp-content/uploads/2016/03/The-Birth-of-Venus.jpg', is_available: true },
    { id: 905, cause_id: 1, artist_id: 4, artwork_name: 'First Artwork', artwork_description: 'This artwork is about something', artwork_image: 'https://artforce.org/wp-content/uploads/2016/03/The-Birth-of-Venus.jpg', is_available: true },
    { id: 906, cause_id: 1, artist_id: 4, artwork_name: 'First Artwork', artwork_description: 'This artwork is about something', artwork_image: 'https://artforce.org/wp-content/uploads/2016/03/The-Birth-of-Venus.jpg', is_available: true },
    { id: 907, cause_id: 1, artist_id: 4, artwork_name: 'First Artwork', artwork_description: 'This artwork is about something', artwork_image: 'https://artforce.org/wp-content/uploads/2016/03/The-Birth-of-Venus.jpg', is_available: true }
  ]

  return (
    // 4 artworks per row
    // dynamically spilling over into x amount of rows
    <>
    <h1>Browse Artworks</h1>
    <GridLayout className="layout" layout={artworks} cols={4} rowHeight={5} width={1200}>
      {/* <div key="900">900</div>
      <div key="901">901</div>
      <div key="902">902</div>
      <div key="903">903</div>
      <div key="904">904</div>
      <div key="905">905</div> */}
      {/* <div className="flex-wrap container columns is-multiline"> */}
      {artworks.map((artwork, index) =>
        <Artwork key={index.id} artwork={artwork}/>
      )}
      {/* </div> */}
    </GridLayout>

    </>
  )
}

// Display picture of artwork
// Display name of artwork
// display price of artwork
// Display charity artwork is going towards
