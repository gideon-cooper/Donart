const knex = require('knex')
const config = require('./knexfile').test
const testDb = knex(config)

let db = require('./db')

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

test('getArtworks returns the correct number of artworks', () => {
  return db.getArtworks(testDb)
    .then(artworks => {
      // console.log(artworks)
      expect(artworks).toHaveLength(3)
      return null
    })
})

// test('addNewArtwork returns a new artwork', () => {
//   const newArt = {
//     image: '12345.com',
//     name: 'A test artwork',
//     description: 'Test description',
//     price: 1000,
//     artist_id: 1,
//     cause_id: 3
//   }
//   return db.addNewArtwork(newArt, testDb)
//     .then(artwork => {  // is an id at this stage
//       expect(artwork.name).toBe('A test artwork')
//     })
// })

test('artIsSold returns a boolean', () => {
  const id = 2
  return db.artIsSold(id, testDb)
    .then(update => {
      console.log(update)
      expect(update).toBeFalsy()
    })
})
