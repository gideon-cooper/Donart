const env = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[env]
const connection = require('knex')(config)

module.exports = {
  getArtworks
}

function getArtworks (db = connection) {
  return db('artworks')
    .join('users as seller', 'seller.id', 'artworks.artist_id')
    .join('users as cause', 'cause.id', 'artworks.cause_id')
    .select('artworks.id as id', 'artworks.name as artworkName', 'price', 'image', 'seller.id as sellerId', 'seller.name as sellerName', 'cause.id as causeId', 'cause.name as causeName')
    .then(result => {
      return result.map(artwork => {
        return {
          id: artwork.id,
          image: artwork.image,
          price: artwork.price,
          sellerId: artwork.sellerId,
          sellerName: artwork.sellerName,
          causeId: artwork.causeId,
          causeName: artwork.causeName
        }
      })
    })
}
