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
      console.log(artworks)
      expect(artworks).toHaveLength(3)
      return null
    })
})
