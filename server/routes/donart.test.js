const request = require('supertest')
const { artIsSold } = require('../db/db')

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
      causeName: 'gideon',
      isAvailable: true
    },
    {
      id: 901,
      image: 'https://media.timeout.com/images/103166743/image.jpg',
      price: 30,
      artistId: 3,
      artistName: 'marika',
      causeId: 1,
      causeName: 'gideon',
      isAvailable: true
    }
  ]),
  artIsSold: (id) => Promise.resolve([
    {
      id: 900,
      image: 'https://artforce.org/wp-content/uploads/2016/03/The-Birth-of-Venus.jpg',
      price: 15,
      artistId: 4,
      artistName: 'evelyn',
      causeId: 1,
      causeName: 'women\'s refuge',
      isAvailable: true
    },
    {
      id: 901,
      image: 'https://media.timeout.com/images/103166743/image.jpg',
      price: 30,
      artistId: 3,
      artistName: 'marika',
      causeId: 1,
      causeName: 'women\'s refuge',
      isAvailable: true
    }
  ])
}))

test('GET /api/v1/donart returns all artworks', () => {
  const expected = 2
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

// test('PATCH /api/v1/donart/:id/buy-now returns falsy', () => {
//   const id = 900
//   return request(server)
//     .patch(`/api/v1/donart/${id}/buy-now`)
//     .expect(200)
//     .then(result => {
//       console.log(result.body)
//       expect(result.body.isAvailable).toBe(0)
//     })
//     // .catch(err => {
//     //   expect(err).toBeFalsy()
//     // })
// })