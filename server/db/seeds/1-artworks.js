exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('artworks')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('artworks').insert([
        {
          id: 900,
          cause_id: 7,
          artist_id: 4,
          name: 'The Birth of Venus',
          price: 15,
          description: 'This artwork is about something',
          image:
            'https://artforce.org/wp-content/uploads/2016/03/The-Birth-of-Venus.jpg',
          is_available: true
        },
        {
          id: 901,
          cause_id: 8,
          artist_id: 3,
          name: 'The Persistance of Memory',
          price: 30,
          description:
            "What is time? What is not time? Time is everywhere and nowhere. Up and down. Back to front. Sideways and wide-ways",
          image: 'https://cdn.britannica.com/10/182610-050-77811599/The-Persistence-of-Memory-canvas-collection-Salvador-1931.jpg',
          is_available: true
        },
        {
          id: 902,
          cause_id: 7,
          artist_id: 1,
          name: 'Mona Lisa',
          price: 20,
          description: "This is an artwork inspired by my mum",
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRtdZYKldcbOa8ryIDvt-hTQCPM8FklZYfZaw&usqp=CAU',
          is_available: true
        },
        {
          id: 903,
          cause_id: 9,
          artist_id: 5,
          name: 'Evelyn the acrobat',
          price: 15,
          description: 'This is an artwork inspired by Evelyn... who\'s an acrobat',
          image: '/images/Hayley_1.jpg',
          is_available: true
        },
        {
          id: 904,
          cause_id: 10,
          artist_id: 5,
          name: 'Kereru and me',
          price: 15,
          description: 'This is an artwork inspired by a Kereru and me',
          image: '/images/Hayley_2.jpg',
          is_available: true
        },
        {
          id: 905,
          cause_id: 7,
          artist_id: 5,
          name: 'Happy Hayley',
          price: 15,
          description: 'This is an artwork inspired by stuff',
          image: '/images/Hayley_3.jpg',
          is_available: true
        },
        {
          id: 906,
          cause_id: 9,
          artist_id: 5,
          name: 'Hangry Cat',
          price: 15,
          description: 'This is an artwork inspired by pumpkin',
          image: '/images/Hayley_4.jpg',
          is_available: true
        },
        {
          id: 907,
          cause_id: 8,
          artist_id: 5,
          name: 'Fire in the Heart',
          price: 15,
          description: 'This is an artwork inspired by shit going down',
          image: '/images/Hayley_5.jpg',
          is_available: true
        },
        {
          id: 908,
          cause_id: 10,
          artist_id: 6,
          name: 'Doobie',
          price: 15,
          description: 'This is an artwork inspired by weed',
          image: '/images/Ben_1.jpg',
          is_available: true
        },
        {
          id: 909,
          cause_id: 8,
          artist_id: 6,
          name: 'Russian Gangster Pumpkin',
          price: 15,
          description:
            'This is an artwork inspired by the gangster-ness of pumpkin',
          image: '/images/Ben_2.jpg',
          is_available: true
        },
        {
          id: 910,
          cause_id: 7,
          artist_id: 6,
          name: 'Sad Pizza',
          price: 15,
          description: 'This is an artwork inspired by pizza toppings',
          image: '/images/Ben_5.jpg',
          is_available: true
        },
        {
          id: 911,
          cause_id: 10,
          artist_id: 6,
          name: 'The Fall of the robots',
          price: 15,
          description: 'This is an artwork inspired by the present',
          image: '/images/Ben_4.jpg',
          is_available: true
        },
        {
          id: 912,
          cause_id: 12,
          artist_id: 11,
          name: 'Self-Portrait',
          price: 15,
          description: 'Look! It me!',
          image: 'https://uploads4.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calder%C3%B3n-de-rivera/self-portrait-with-necklace-of-thorns-1940.jpg!Portrait.jpg',
          is_available: true
        }
      ])
    })
}
