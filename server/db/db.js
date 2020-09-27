const { Profiler } = require('react')

const env = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[env]
const connection = require('knex')(config)

module.exports = {
  getArtworks,
  getArtworkById,
  addNewArtwork,
  artIsSold,
  editProfile,
  getAllUsers,
  getArtistsbyID
}

function getArtworks (db = connection) {
  return db('artworks')
    .join('users as artist', 'artist.id', 'artworks.artist_id')
    .join('users as cause', 'cause.id', 'artworks.cause_id')
    .select(
      'artworks.id as id',
      'artworks.name as artworkName',
      'price',
      'image',
      'artist.id as artistId',
      'artist.name as artistName',
      'artist.profile_picture as artistProfile',
      'artist.about as artistAbout',
      'cause.id as causeId',
      'cause.name as causeName',
      'is_available'
    )
    .then((result) => {
      return result.map((artwork) => {
        console.log(artwork)
        return {
          id: artwork.id,
          name: artwork.artworkName,
          image: artwork.image,
          price: artwork.price,
          artistId: artwork.artistId,
          artistName: artwork.artistName,
          artistProfile: artwork.artistProfile,
          artistAbout: artwork.artistAbout,
          causeId: artwork.causeId,
          causeName: artwork.causeName,
          isAvailable: artwork.is_available,
        }
      })
    })
}

function getArtworkById (id, db = connection) {
  return db('artworks')
    .join('users as artist', 'artist.id', 'artworks.artist_id')
    .join('users as cause', 'cause.id', 'artworks.cause_id')
    .select(
      'artworks.id as id',
      'artworks.name as artworkName',
      'price',
      'description',
      'image',
      'artist.id as artistId',
      'artist.name as artistName',
      'cause.id as causeId',
      'cause.name as causeName',
      'is_available'
    )
    .where('artworks.id', id)
    .first()
    .then((artwork) => {
      return {
        id: artwork.id,
        name: artwork.artworkName,
        image: artwork.image,
        price: artwork.price,
        description: artwork.description,
        artistId: artwork.artistId,
        artistName: artwork.artistName,
        causeId: artwork.causeId,
        causeName: artwork.causeName,
        isAvailable: artwork.is_available,
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
      cause_id: formData.causeId,
      is_available: true,
    })
    .then((id) => {
      return getArtworkById(id[0])
    })
    .catch((err) => console.log(err.message))
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

function getArtistsbyID (id, db = connection) {
  return db('users')
    .join('artworks', 'artworks.artist_id', 'users.id')
    .select('users.id as id', 'users.name as artistName', 'about', 'profile_picture as profilePicture', 'artworks.id as artworkID', 'email', 'artworks.name as artworkName', 'artworks.image as artImage', 'artworks.price as price')
    .where('users.id', id)
    .then(result => {
      return {
        id: result[0].id,
        artistName: result[0].artistName,
        about: result[0].about,
        profilePicture: result[0].profilePicture,
        email: result[0].email,
        artworks: !result[0].artworkID ? [] : result.map(art => {
          return {
            id: art.artworkID,
            name: art.artworkName,
            image: art.artImage,
            price: art.price
          }
        })
      }
    })
}

function editProfile (id, user, db = connection) {
  // console.log('USER in DB function: ', user)
  // console.log('User name in DB function: ', user.name)
  return db('users').where('users.id', Number(id)).first().update({
    profile_picture: user.image,
    about: user.about,
    name: user.name
  })
}

function viewOwnProfileById (id, db = connection) {
  return db('users')
    .join('artworks', 'artworks.artist_id', 'users.id')
    .select('users.id as id', 'users.name as artistName', 'about', 'profile_picture as profilePicture', 'artworks.id as artworkID', 'email', 'artworks.name as artworkName', 'artworks.image as artImage', 'artworks.price as price')
    .where('users.id', id)
    .then(result => {
      return {
        id: result[0].id,
        artistName: result[0].artistName,
        about: result[0].about,
        profilePicture: result[0].profilePicture,
        email: result[0].email,
        artworks: !result[0].artworkID ? [] : result.map(art => {
          return {
            id: art.artworkID,
            name: art.artworkName,
            image: art.artImage,
            price: art.price
          }
        })
      }
    })
}
