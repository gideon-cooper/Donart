const env = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[env]
const connection = require('knex')(config)

module.exports = {
  getArtworks,
  getArtworkById,
  addNewArtwork,
  artIsSold,
  getAllUsers
}

function getArtworks (db = connection) {
  return db('artworks')
    .join('users as artist', 'artist.id', 'artworks.artist_id')
    .join('users as cause', 'cause.id', 'artworks.cause_id')
    .select('artworks.id as id', 'artworks.name as artworkName', 'price', 'image', 'artist.id as artistId', 'artist.name as artistName', 'cause.id as causeId', 'cause.name as causeName', 'is_available')
    .then(result => {
      return result.map(artwork => {
        return {
          id: artwork.id,
          name: artwork.artworkName,
          image: artwork.image,
          price: artwork.price,
          artistId: artwork.artistId,
          artistName: artwork.artistName,
          causeId: artwork.causeId,
          causeName: artwork.causeName,
          isAvailable: artwork.is_available
        }
      })
    })
}

function getArtworkById (id, db = connection) {
  return db('artworks')
    .join('users as artist', 'artist.id', 'artworks.artist_id')
    .join('users as cause', 'cause.id', 'artworks.cause_id')
    .select('artworks.id as id', 'artworks.name as artworkName', 'price', 'image', 'artist.id as artistId', 'artist.name as artistName', 'cause.id as causeId', 'cause.name as causeName', 'is_available')
    .where('artworks.id', id)
    .first()
    .then(artwork => {
      return {
        id: artwork.id,
        name: artwork.artworkName,
        image: artwork.image,
        price: artwork.price,
        artistId: artwork.artistId,
        artistName: artwork.artistName,
        causeId: artwork.causeId,
        causeName: artwork.causeName,
        isAvailable: artwork.is_available
      }
    })
}

function addNewArtwork (formData, db = connection) {
  return db('artworks')
    .join('users as artist', 'artist.id', 'artworks.artist_id')
    .join('users as cause', 'cause.id', 'artworks.cause_id')
    .insert({
      image: formData.image,
      name: formData.name,
      description: formData.description,
      price: formData.price,
      artist_id: formData.artistId,
      cause_id: formData.causeId
    })
    .then(id => {
      return getArtworkById(id[0])
    })
    .catch(err => console.log(err.message))
}

function artIsSold (id, db = connection) {
  return db('artworks')
    .where('id', id)
    .update({ is_available: false })
}

function getAllUsers (db = connection) {
  return db('users')
    .select()
}
