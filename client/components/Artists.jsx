import React from 'react'
import ArtistItem from './ArtistItem'

export default function Artists () {
  const artists = [
    {
      id: 1,
      username: 'gideon1',
      hash: 'gideonHash',
      email: 'gideon@gmail.com',
      name: 'gideon',
      profile_picture:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTrQBEpTkKYe64nSkUerucerrIhJsTbnAZ3Cg&usqp=CAU',
      about: 'Gideon is cool'
    },
    {
      id: 2,
      username: 'lewis1',
      hash: 'lewisHash',
      email: 'lewis@gmail.com',
      name: 'lewis',
      profile_picture:
        'https://content.api.news/v3/images/bin/a6923adbc7bece73803221613f410782',
      about: 'Lewis is cool'
    },
    {
      id: 3,
      username: 'marika1',
      hash: 'marikaHash',
      email: 'marika@gmail.com',
      name: 'marika',
      profile_picture:
        'https://images.fastcompany.net/image/upload/w_1280,f_auto,q_auto,fl_lossy/wp-cms/uploads/2019/12/p-1-greta-thunberg-was-just-named-time-magazines-2019-person-of-the-year.jpg',
      about: 'Marika is cool'
    },
    {
      id: 4,
      username: 'evelyn1',
      hash: 'evelynHash',
      email: 'evelyn@gmail.com',
      name: 'evelyn',
      profile_picture:
        'https://www.guinnessworldrecords.com/Images/Greta-Thunberg-youngest-time-person-of-the-yearthumbnail_tcm25-603423.jpg',
      about: 'Evelyn is cool'
    }
  ]

  return (
<>
      <div className='artworkDisplay'>
        <div className='displayTitle'>
          <hr />
          <h2>Browse Artists</h2>
          <hr />
        </div>
        <div className="card-flex-wrapper column is-three-quarters">
          {artists.map((artist) =>
            <ArtistItem key={artist.id} artist={artist}/>
          )}
          {artists.map((artist) =>
            <ArtistItem key={artist.id} artist={artist}/>
          )}
        </div>
      </div>

    </>
  )
}
