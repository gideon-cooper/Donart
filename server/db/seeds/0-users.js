const { generateHash } = require('authenticare/server')

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(() => Promise.all([
      generateHash('gideon1'),
      generateHash('lewis1'),
      generateHash('marika1'),
      generateHash('evelyn1')
    ]))
    .then(function ([gideonHash, lewisHash, marikaHash, evelynHash]) {
      // Inserts seed entries
      return knex('users').insert([
        { id: 1, artwork_id: 'rowValue1', username: 'gideon1', hash: 'gideonHash', email: 'gideon@gmail.com', name: 'gideon', profile_picture: 'url.string.1', about_info: 'Gideon is cool' },
        { id: 2, artwork_id: 'rowValue1', username: 'lewis1', hash: 'lewisHash', email: 'lewis@gmail.com', name: 'lewis', profile_picture: 'url.string.2', about_info: 'Lewis is cool' },
        { id: 3, artwork_id: 'rowValue1', username: 'marika1', hash: 'marikaHash', email: 'marika@gmail.com', name: 'marika', profile_picture: 'url.string.3', about_info: 'Marika is cool' },
        { id: 4, artwork_id: 'rowValue1', username: 'evelyn1', hash: 'evelynHash', email: 'evelyn@gmail.com', name: 'evelyn', profile_picture: 'url.string.4', about_info: 'Evelyn is cool' }
      ])
    })
}
