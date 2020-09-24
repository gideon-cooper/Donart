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
    .select()
}

console.log(getArtworks())
