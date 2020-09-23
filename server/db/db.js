const env = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[env]
const connection = require('knex')(config)

module.exports = {
  getArtworks,
  getUserArtwork
}

function getArtworks (db = connection) {
  return db('gardens'.select()
    .catch(err => {
      console.error(err)
      throw err
    }))
}

function getUserArtwork (id, db = cconnection) {
    return db ('artworks')
        .where('artworks.id', id)
        .
}
