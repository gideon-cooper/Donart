const env = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[env]
const connection = require('knex')(config)

module.exports = {
  getArtworks
}

function getArtworks (db = connection) {
  return db('artworks')
    .join('users as artist', 'artist.id', 'artworks.artist_id')
    .join('users as cause', 'cause.id', 'artworks.cause_id')
    .select('artworks.id as id', 'artworks.name as artworkName', 'price', 'image', 'artist.id as artistId', 'artist.name as artistName', 'cause.id as causeId', 'cause.name as causeName')
    .then(result => {
      return result.map(artwork => {
        return {
          id: artwork.id,
          image: artwork.image,
          price: artwork.price,
          artistId: artwork.artistId,
          artistName: artwork.artistName,
          causeId: artwork.causeId,
          causeName: artwork.causeName
        }
      })
    })
}
