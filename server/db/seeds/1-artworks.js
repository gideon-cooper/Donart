exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('artworks').del()
    .then(function () {
      // Inserts seed entries
      return knex('artworks').insert([
        { id: 900, cause_id: 1, artist_id: 4, name: 'First Artwork', price: 15, description: 'This artwork is about something', image: 'https://artforce.org/wp-content/uploads/2016/03/The-Birth-of-Venus.jpg', is_available: true },
        { id: 901, cause_id: 1, artist_id: 3, name: 'Second Artwork', price: 30, description: 'This is an artwork inspired by the artist\'s passion for coding', image: 'https://media.timeout.com/images/103166743/image.jpg', is_available: true },
        { id: 902, cause_id: 2, artist_id: 1, name: 'Third Artwork', price: 20, description: 'This is an artwork inspired by the artist\'s mum', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRtdZYKldcbOa8ryIDvt-hTQCPM8FklZYfZaw&usqp=CAU', is_available: true }
      ])
    })
}
