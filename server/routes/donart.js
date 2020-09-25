const express = require('express')

const db = require('../db/db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getArtworks()
    .then((artworks) => {
      return res.json({ artworks })
    })
    .catch((err) => {
      res.status(500).json({ error: err.message })
    })
})

// GET artwork by id
router.get('/:artwork_id', (req, res) => {
  const id = Number(req.params.id)
  db.getArtworkById(id)
    .then((singleArt) => {
      return res.json(singleArt)
    })
    .catch((err) => {
      res.status(500).json({ error: err.message })
    })
})

// POST /api/v1/donart/new-artwork
router.post('/new-artwork', (req, res) => {
  const newArtwork = req.body
  console.log(newArtwork)
  db.addNewArtwork(newArtwork)
    .then(result =>
      res.status(200).json(result))
    //   .then(newId => {      // is an array of 1 number
    //     db.getPostCommentsById(newId[0])
    //     .then(result => res.json(camelcase(result[0])))
    // })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

// GET user by id
router.get('/:user_id', (req, res) => {
  const id = Number(req.params.id)
  db.getUserById(id)
    .then((singleUser) => {
      return res.json(singleUser)
    })
    .catch((err) => {
      res.status(500).json({ error: err.message })
    })
})

module.exports = router
