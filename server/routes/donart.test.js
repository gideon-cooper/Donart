const request = require('supertest')

const server = require('../server')

jest.mock('../db/db', () => ({
  getArtworks: () => Promise.resolve([
    {
      id: 900,
      image: 'https://artforce.org/wp-content/uploads/2016/03/The-Birth-of-Venus.jpg',
      price: 15,
      artistId: 4,
      artistName: 'evelyn',
      causeId: 1,
      causeName: 'gideon'
    },
    {
      id: 901,
      image: 'https://media.timeout.com/images/103166743/image.jpg',
      price: 30,
      artistId: 3,
      artistName: 'marika',
      causeId: 1,
      causeName: 'gideon'
    },
    {
      id: 902,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRtdZYKldcbOa8ryIDvt-hTQCPM8FklZYfZaw&usqp=CAU',
      price: 20,
      artistId: 1,
      artistName: 'gideon',
      causeId: 2,
      causeName: 'lewis'

    }
  ])
}))

test('GET /api/v1/donart returns all artworks', () => {
  const expected = 3
  return request(server)
    .get('/api/v1/donart')
    .expect('Content-type', /json/)
    .expect(200)
    .then(res => {
      expect(res.body.length).toBe(expected)
    })
    .catch(err => {
      expect(err).toBeFalsy()
    })
})
