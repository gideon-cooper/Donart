const express = require("express")

const db = require("../db/db")

const router = express.Router()

router.get("/", (req, res) => {
  db.getArtworks()
    .then((artworks) => {
      return res.json({ artworks })
    })
    .catch((err) => {
      res.status(500).json({ error: err.message })
    })
})

// router.get('/:id', (req, res) => {
//   const id = Number(req.params.id)
//   db.getUserArtwork(id)
//     .then((singleArt) => {
//       return res.json(singleArt)
//     })
//     .catch((err) => {
//       res.status(500).json({ error: err.message })
//     })
// })

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

module.exports = router
