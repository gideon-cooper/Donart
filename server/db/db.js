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
  getArtistsbyID,
  viewOwnProfileById,
  getAllCharities,
  getCharityById,
  getAllArtists
}

function capitalizeFirstLetter (string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
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
        return {
          id: artwork.id,
          name: artwork.artworkName,
          image: artwork.image,
          price: artwork.price,
          artistId: artwork.artistId,
          artistName: capitalizeFirstLetter(artwork.artistName),
          artistProfile: artwork.artistProfile,
          artistAbout: artwork.artistAbout,
          causeId: artwork.causeId,
          causeName: capitalizeFirstLetter(artwork.causeName),
          isAvailable: artwork.is_available
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
        isAvailable: artwork.is_available
      }
    })
}

function getCharityById (id, db = connection) {
  return db('users')
    .join('artworks', 'users.id', 'artworks.cause_id')
    .select(
      'users.id',
      'users.username',
      'users.name',
      'users.email',
      'users.profile_picture',
      'users.about',
      'users.is_Charity',
      'artworks.id',
      'artworks.name',
      'artworks.cause_id',
      'artworks.artist_id',
      'artworks.description',
      'artworks.image',
      'artworks.price',
      'artworks.is_available as isAvailable'
    )
    .where('users.id', id)
  // .andWhere(id, 'artworks.cause_id')
  // .then((res) => console.log('DATABASE', res))
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
      is_available: true
    })
    .then((id) => {
      return getArtworkById(id[0])
    })
    .catch((err) => console.log(err.message))
}

function artIsSold (id, db = connection) {
  console.log('IDS BEING PASSED', id)
  return db('artworks').whereIn('id', id).update({ is_available: false })
}

function getAllUsers (db = connection) {
  return db('users').select().where('is_Charity', false)
}
function getAllCharities (db = connection) {
  return db('users').select().where('is_Charity', true)
}

function getAllArtists (db = connection) {
  return db('users')
    .select()
    .where('is_artist', true)
}

// function getAllUsers (db = connection) {
//   return db('users')
//     .select()
//     .then((result) => {
//       return result.map((user) => {
//         return {
//           id: user.id,
//           username: user.username,
//           name: capitalizeFirstLetter(user.name),
//           hash: user.hash,
//           email: user.email,
//           profile_picture: user.profile_picture,
//           about: user.about
//         }
//       })
//     })
// }

function getArtistsbyID (id, db = connection) {
  return db('users')
   .select()
   .where('users.id', id)
   .then(user => {
    return db('artworks')
    .join('users as artist', 'artist.id', 'artworks.artist_id')
    .join('users as cause', 'cause.id', 'artworks.cause_id')
    .select(
      'artist.id as artistId',
      'artist.name as artistName',
      'artist.about as about',
      'artist.profile_picture as profilePicture',
      'artworks.id as artworkID',
      'artist.email as email',
      'artworks.name as artworkName',
      'artworks.image as artImage',
      'artworks.price as price',
      'cause.id as causeId',
      'cause.name as causeName',
      'is_available as isAvailable'
    )
    .where('artistId', id)
    .then((result) => {
      return {
        id: user[0].id,
        artistName: capitalizeFirstLetter(user[0].name),
        about: user[0].about,
        profilePicture: user[0].profile_picture,
        email: user[0].email,
        artworks: !result[0]? [] : result.map(art => {
          return {
            id: art.artworkID,
            name: art.artworkName,
            image: art.artImage,
            price: art.price,
            causeName: capitalizeFirstLetter(art.causeName),
            artistName: art.artistName,
            isAvailable: art.isAvailable
          }
        })
    })
}

function editProfile (id, user, db = connection) {
  // console.log('USER in DB function: ', user)
  // console.log('User name in DB function: ', user.name)
  return db('users')
    .where('users.id', Number(id))
    .first()
    .update({
      profile_picture: user.image,
      about: user.about,
      name: user.name,
      is_Charity: user.isCharity,
      is_artist: user.isArtist
    })
}

function viewOwnProfileById (id, db = connection) {
  return db('users')
    .select(
      'users.id as id',
      'users.name as artistName',
      'about',
      'profile_picture as profilePicture',
      'email',
      'username',
      'users.is_Charity as isCharity',
      'users.is_artist as isArtist'
    )
    .where('users.id', id)
    .then((result) => {
      return {
        id: result[0].id,
        username: result[0].username,
        artistName: result[0].artistName,
        about: result[0].about,
        profilePicture: result[0].profilePicture,
        email: result[0].email,
        isCharity: result[0].isCharity,
        isArtist: result[0].isArtist
      }
    })
}
