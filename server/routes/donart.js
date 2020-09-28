const express = require('express')

// const { cloudinary } = require('../cloudinaryConfig')
const db = require('../db/db')

const router = express.Router()

// GET /api/v1/donart
router.get('/', (req, res) => {
  db.getArtworks()
    .then((artworks) => {
      return res.json({ artworks })
    })
    .catch((err) => {
      res.status(500).json({ error: err.message })
    })
})

// GET /api/v1/donart/artwork/:id
router.get('/artwork/:id', (req, res) => {
  const id = Number(req.params.id)
  db.getArtworkById(id)
    .then((singleArt) => {
      return res.json(singleArt)
    })
    .catch((err) => {
      res.status(500).json({ error: err.message })
    })
})

// GET /api/v1/donart/user/:id
router.get('/user/:id', (req, res) => {
  // console.log('PARAMS', req.params.id)
  const id = Number(req.params.id)
  db.getArtistsbyID(id)
    .then((artist) => {
      return res.json(artist)
    })
    .catch((err) => {
      res.status(500).json({ error: err.message })
    })
})
router.get('/CharityBio/:id', (req, res) => {
  // console.log('PARAMS', req.params.id)
  const id = Number(req.params.id)
  db.getCharityById(id)
    .then((charity) => {
      // console.log('DBB!!!!', charity)
      return res.json(charity)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ error: err.message })
    })
})

// POST /api/v1/donart/new-artwork
router.post('/new-artwork', (req, res) => {
  const newArtwork = req.body
  console.log(newArtwork)
  db.addNewArtwork(newArtwork)
    .then((result) => {
      console.log('/new-artwork route result: ', result)
      res.json(result)
    })
    .catch((err) => res.status(500).send(err.message))
})

// PATCH /api/v1/donart/:id/buy-now
router.patch('/:id/buy-now', (req, res) => {
  const id = req.params.id
  db.artIsSold(id)
    .then((result) => {
      console.log(result)
      res.status(200).send(`Artwork ${id} has sold`)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

router.post('/editProfile/:id', (req, res) => {
  // console.log('req.body in donart route: ', req.body)
  // console.log('D', req.params.id)
  const id = Number(req.params.id)
  const user = req.body
  db.editProfile(id, user)
    .then((result) => {
      // console.log('DB result: ', result)
      res.json(result)
    })

    .catch((err) => {
      res.status(500).send(err.message)
    })
})
// GET /api/v1/donart/users
router.get('/users', (req, res) => {
  db.getAllUsers()
    .then((users) => {
      return res.json({ users })
    })
    .catch((err) => {
      res.status(500).json({ error: err.message })
    })
})
// GET /api/v1/donart/Charities
router.get('/Charities', (req, res) => {
  db.getAllCharities()
    .then((charity) => {
      // console.log('DONART', charity)
      res.json(charity)
    })
    .catch((err) => {
      res.status(500).json({ error: err.message })
    })
})

// GET /api/v1/donart/profile/:id
router.get('/profile/:id', (req, res) => {
  const id = Number(req.params.id)
  db.viewOwnProfileById(id)
    .then((user) => {
      console.log('Route: user: ', user)
      return res.json(user)
    })
    .catch((err) => {
      res.status(500).json({ error: err.message })
    })
})

// POST /api/v1/donart/upload
// router.post('/upload', (req, res) => {
//   try {
//     const fileStr = req.body.data
//     console.log(fileStr)
//   } catch (error) {
//     console.error(error)
//   }
// })

module.exports = router
