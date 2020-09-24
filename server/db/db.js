const env = process.env.NODE_ENV || "development"
const config = require("./knexfile")[env]
const connection = require("knex")(config)

module.exports = {
  getArtworks,
  addNewArtwork,
  artIsSold
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
        // artistName: formData.artistName,
        // causeName: formData.causeName,
        cause_id: formData.causeId
    })
}

function artIsSold (id, db = connection) {
    console.log(db('artworks'))
    return db('artworks')
        .update({ is_available: false})
        .where('id', id)
}
