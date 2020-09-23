exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('artworks').del()
    .then(function () {
      // Inserts seed entries
      return knex('artworks').insert([
        { id: 1, cause_id: 'rowValue1', artwork_name: 'First Artwork', artwork_description: 'This artwork is about something', artwork_image: 'https://artforce.org/wp-content/uploads/2016/03/The-Birth-of-Venus.jpg', is_available: true },
        { id: 2, cause_id: 'rowValue1', artwork_name: 'Second Artwork', artwork_description: 'This is an artwork inspired by the artist\'s passion for coding', artwork_image: 'https://media.timeout.com/images/103166743/image.jpg', is_available: true },
        { id: 3, cause_id: 'rowValue1', artwork_name: 'Third Artwork', artwork_description: 'This is an artwork inspired by the artist\'s mum', artwork_image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRtdZYKldcbOa8ryIDvt-hTQCPM8FklZYfZaw&usqp=CAU', is_available: true }
      ])
    })
}
