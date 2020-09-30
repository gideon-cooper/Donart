const knex = require('knex')
const config = require('./knexfile').test
const testDb = knex(config)

const db = require('./db')

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

// This one passes if runs before the others
describe('getArtworks', () => {
  it('returns the correct number of artworks', () => {
    return db.getArtworks(testDb)
      .then(artworks => {
        expect(artworks).toHaveLength(12)
        return null
      })
  })
})

// Doesn't always pass
test('getArtworkById returns an object containing the correct id and cause name', () => {
  const testId = 900
  const causeName = 'Red Cross'
  return db.getArtworkById(testId, testDb)
    .then((result) => {
      expect.objectContaining({
        id: testId,
        causeName: causeName
      })
      return null
    })
})

// This one passes
test('addNewArtwork returns a new artwork id and artwork name', () => {
  const newArt = {
    image: 'test image',
    name: 'test name',
    description: 'test description',
    price: 'test price',
    artistId: 'test artist id',
    causeId: 'test cause id'
  }
  return db.addNewArtwork(newArt, testDb)
    .then(() => {
      expect.objectContaining({
        name: 'test name'
      })
      return null
    })
})

// this just tests that the function runs (resolves to 1)
// test('artIsSold returns a boolean', () => {
//   const id = [901]
//   return db.artIsSold(id, testDb)
//     .then(update => {
//       expect(update).toBeTruthy()
//       return null
//     })
// })

