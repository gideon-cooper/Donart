exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('artworks').del()
    .then(function () {
      // Inserts seed entries
      return knex('artworks').insert([
        { id: 1, cause_id: 'rowValue1', artwork_name: 'First Artwork', artwork_description: 'This is an artwork inspired by the artist\'s love of cats', artwork_image: 'url.here', is_available: true },
        { id: 2, cause_id: 'rowValue1', artwork_name: 'Second Artwork', artwork_description: 'This is an artwork inspired by the artist\'s passion for coding', artwork_image: 'another.url.here', is_available: true },
        { id: 3, cause_id: 'rowValue1', artwork_name: 'Third Artwork', artwork_description: 'This is an artwork inspired by the artist\'s mum', artwork_image: 'third.url.here', is_available: true }
      ])
    })
}
