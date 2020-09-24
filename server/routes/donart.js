const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getArtworks()
    .then(artworks => {
      return res.json({ artworks })
    })
    .catch(err => {
      res.status(500).json({ error: err.message })
    })
})

router.get('/:id', (req, res) => {
  const id = Number(req.params.id)
  db.getUserArtwork(id)
    .then(singleArt => {
      return res.json(singleArt)
    })
    .catch(err => {
      res.status(500).json({ error: err.message })
    })
})

module.exports = router
