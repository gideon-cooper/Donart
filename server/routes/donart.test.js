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
  getArtworkById: (id) => Promise.resolve([
    {
      id: id,
      name: 'test artwork',
      image: 'https://test.jpg',
      price: 30,
      description: 'test description',
      artistId: 1,
      artistName: 'Gideon',
      causeId: 8,
      causeName: 'Red Cross',
      isAvailable: true
    }
  ])
  // artIsSold: (id) => Promise.resolve([
  //   {
  //     id: id,
  //     image: 'https://artforce.org/wp-content/uploads/2016/03/The-Birth-of-Venus.jpg',
  //     price: 15,
  //     artistId: 4,
  //     artistName: 'evelyn',
  //     causeId: 1,
  //     causeName: 'women\'s refuge',
  //     isAvailable: true
  //   }
  // ])
}))

// passes
test('GET /api/v1/donart returns all artworks', () => {
  const expected = 2
  return request(server)
    .get('/api/v1/donart')
    .expect('Content-type', /json/)
    .expect(200)
    .then(res => {
      return expect(res.body.artworks).toHaveLength(expected)
    })
    .catch(err => {
      expect(err).toBeFalsy()
    })
})

// passes
test('GET /api/v1/donart/artwork/:id returns the correct artwork', () => {
  return request(server)
    .get('/api/v1/donart/artwork/900')
    .expect('Content-type', /json/)
    .expect(200)
    .then(res => {
      return expect(res.body[0].id).toBe(900)
    })
    .catch(err => {
      expect(err).toBeFalsy()
    })
})

// passes
test('GET /api/v1/donart/artwork/:id returns the correct artwork name', () => {
  return request(server)
    .get('/api/v1/donart/artwork/900')
    .expect('Content-type', /json/)
    .expect(200)
    .then(res => {
      return expect(res.body[0].name).toBe('test artwork')
    })
    .catch(err => {
      expect(err).toBeFalsy()
    })
})

// test('PATCH /api/v1/donart/:id/buy-now returns falsy', () => {
//   const id = 900
//   return request(server)
//     .patch(`/api/v1/donart/${id}/buy-now`)
//     // .expect(200)
//     .then(result => {
//       console.log(result.body)
//       expect(result.body.isAvailable).toBeFalsy
//     })
//     // .catch(err => {
//     //   expect(err).toBeFalsy()
//     // })
// })
