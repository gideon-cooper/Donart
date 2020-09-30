const { generateHash } = require('authenticare/server')

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(() =>
      Promise.all([
        generateHash('gideon1'),
        generateHash('lewis1'),
        generateHash('marika1'),
        generateHash('evelyn1'),
        generateHash('hayley'),
        generateHash('ben'),
        generateHash('redCross'),
        generateHash('kidsCan'),
        generateHash('breastCancerFoundation'),
        generateHash('unicef'),
        generateHash('fridaHash')
      ])
    )
    .then(function ([
      gideonHash,
      lewisHash,
      marikaHash,
      evelynHash,
      hayleyHash,
      benHash,
      redCrossHash,
      kidsCanHash,
      breastCancerFoundationHash,
      unicefHash,
      fridaHash
    ]) {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1,
          username: 'gideon1',
          hash: gideonHash,
          email: 'gideon@gmail.com',
          name: 'Leonardo da Vinci',
          profile_picture:
            'https://media3.s-nbcnews.com/j/newscms/2014_23/485841/140603-leonardo_db77e036a4d527d408ebf82df669b334.fit-760w.jpg',
          about: 'Gideon is cool',
          is_Charity: false,
          is_artist: true
        },
        {
          id: 2,
          username: 'lewis1',
          hash: lewisHash,
          email: 'lewis@gmail.com',
          name: 'Lewis',
          profile_picture:
            'https://ca.slack-edge.com/T02SQPVAC-U015SV1D742-80ebe5b6b3e0-512',
          about: 'Lewis is cool',
          is_Charity: false,
          is_artist: false
        },
        {
          id: 3,
          username: 'marika1',
          hash: marikaHash,
          email: 'marika@gmail.com',
          name: 'Salvador Dali',
          profile_picture:
            'https://blog.artsper.com/wp-content/uploads/2019/07/Salvador-Dali-644x430.png',
          about: 'Marika is cool',
          is_Charity: false,
          is_artist: true
        },
        {
          id: 4,
          username: 'evelyn1',
          hash: evelynHash,
          email: 'evelyn@gmail.com',
          name: 'Sandro Botticelli',
          profile_picture:
            'https://www.nationalgallery.org.uk/media/30073/botticelli-sandro-c-face-half.jpg?center=0.28358208955223879,0.52960526315789469&mode=crop&width=430&bgcolor=fff&rnd=132138115430000000',
          about: 'Evelyn is cool',
          is_Charity: false,
          is_artist: true
        },
        {
          id: 5,
          username: 'hayley',
          hash: hayleyHash,
          email: 'hayley@gmail.com',
          name: 'Hayley',
          profile_picture:
            'https://images.squarespace-cdn.com/content/v1/56d3f4e222482e09ee8bc3a8/1560489433065-KY0Y5Q1PINIP6BP1A7BP/ke17ZwdGBToddI8pDm48kI7bufHhFsXXBLSb0DZCp-x7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1Ud6JRN1rcm9MmcQn8MfkOV9i7nHJvDTdyIVZ4-Yi4E11T0KIdeKoPzIh6OG9S_5jQQ/62443170_441790666604349_1565517864314601472_n.jpg?format=750w',
          about:
            'Hayley Robertson is a multi-disciplinary creative specialising in the art department at home in Auckland, New Zealand and abroad. She has been contracting full time since 2015 and has worked on a wide range of productions from TV commercials, live theatre to award winning indie short films. Dealing with all areas of the art department, Hayley is passionate about creating a rich visual context for story telling through collaborating to realise a dream. Hayley has a bachelor of Fine Arts from Auckland University and a diploma in Sculpting and Productions Design from CutAbove Academy. She also has experience in other creative fields winning awards in photography, acting and SFX makeup.',
          is_Charity: false,
          is_artist: true
        },
        {
          id: 6,
          username: 'ben',
          hash: benHash,
          email: 'ben@gmail.com',
          name: 'Ben',
          profile_picture:
            'https://www.badaboom.co.nz/images/profile-photos/ben.jpg/@@images/ef47f76b-4091-471a-a51a-e8044620ecb1.jpeg',
          about:
            'Ben Sarten Imagery is a video and photography production company operating out of THE BONE ZONE/Te iwi Koiwi Creative Space, in St Johns, Auckland. Prioritising the documentation and visibility of environmental and social/human rights activism and the New Zealand arts scene, with collaboration and community as its kaupapa.',
          is_Charity: false,
          is_artist: true
        },
        {
          id: 7,
          username: 'redCross',
          hash: redCrossHash,
          email: 'redCross@gmail.com',
          name: 'Red Cross',
          profile_picture:
            'https://media.redcross.org.nz/media/images/NZRC_Bilingual_Logo_Vert_CMYK.width-400.jpg',
          about:
            'Every day we work to help New Zealanders – whether that’s providing a hot meal, a safe drive to the hospital or education programmes at a local high school.',
          is_Charity: true,
          is_artist: false
        },
        {
          id: 8,
          username: 'kidsCan',
          hash: kidsCanHash,
          email: 'kidsCan@gmail.com',
          name: 'Kids Can',
          profile_picture:
            'https://thedailyblog.co.nz/wp-content/uploads/2017/12/kidscan-logo.png',
          about:
            'Education is a child’s ticket out of poverty. It is how we will break the cycle of hardship, and it is at the core of everything KidsCan does. Food, a warm jacket, solid shoes, feminine hygiene products - these are things we want every child to take for granted. We are levelling the playing field, giving children whose families are struggling the same opportunity to learn as anyone else.',
          is_Charity: true,
          is_artist: false
        },
        {
          id: 9,
          username: 'breastCancerFoundation',
          hash: breastCancerFoundationHash,
          email: 'breastCancerFoundation@gmail.com',
          name: 'Breast Cancer Foundation',
          profile_picture:
            'https://media-exp1.licdn.com/dms/image/C510BAQET6OVcFZVOPQ/company-logo_200_200/0?e=2159024400&v=beta&t=OET5tkxUmAAs0nbB0U6u7XnKHwNc9lMo5M0OAHsGy80',
          about:
            'Our vision: Zero deaths from breast cancer, Our mission (how well achieve that vision) Pushing for new frontiers in early detection, treatment and support.',
          is_Charity: true,
          is_artist: false
        },
        {
          id: 10,
          username: 'unicef',
          hash: unicefHash,
          email: 'unicef@gmail.com',
          name: 'UNICEF',
          profile_picture:
            'https://www.cid.org.nz/assets/Uploads/b771c952d4/UNICEF-v2.jpg',
          about:
            'UNICEF is the United Nations Childrens Fund For over 70 years, weve been working to protect the rights of children in over 190 countries and territories around the world.',
          is_Charity: true,
          is_artist: false
        },
        {
          id: 11,
          username: 'frida',
          hash: fridaHash,
          email: 'frida@gmail.com',
          name: 'Frida Kahlo',
          profile_picture:
            'https://uploads4.wikiart.org/images/magdalena-carmen-frieda-kahlo-y-calder%C3%B3n-de-rivera/self-portrait-with-necklace-of-thorns-1940.jpg!Portrait.jpg',
          about:
            'I am a Mexican painter known for my many portraits, self-portraits, and works inspired by the nature and artifacts of Mexico. Inspired by the country\'s popular culture, I use my art to explore questions of identity, postcolonialism, gender, class, and race in Mexican society',
          is_Charity: false,
          is_artist: true
        },
        {
          id: 12,
          username: 'womensrefuge',
          hash: fridaHash,
          email: 'womensrefuge@gmail.com',
          name: 'Women\'s Refuge',
          profile_picture:
            'https://s3.amazonaws.com/tc-global-prod/uploaded_images/nz/images/6972/original/Untitled_design_%285%29.png',
          about:
            'New Zealand’s largest nation-wide organisation that supports and helps women and children experiencing family violence. Our vision is for all women and children in Aotearoa to live free from domestic and family violence.',
          is_Charity: true,
          is_artist: false
        }
      ])
    })
}
