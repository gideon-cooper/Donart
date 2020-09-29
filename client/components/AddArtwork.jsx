import React, { useState, useEffect, useContext } from 'react'
import { Link, Redirect } from 'react-router-dom'

import Footer from './Footer'
import { getCharities, getUsers, saveArtwork } from '../api'

import { UserContext, updateUserContext } from './UserContext'

export default function AddArtwork (props) {
  const [user, setUser] = useContext(UserContext)

  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')
  const [causes, setCauses] = useState([])
  const [cause, setCause] = useState(0)

  const [loading, setLoading] = useState(false)

  // console.log("user from Artwork context:", user)

  const uploadImage = async (e) => {
    const files = e.target.files
    const data = new FormData()
    data.append('file', files[0])
    data.append('upload_preset', 'donart')
    setLoading(true)
    const res = await fetch(
      'https://api.cloudinary.com/v1_1/marikajf/image/upload', // why /image/upload?
      {
        method: 'POST',
        body: data,
      }
    )
    const file = await res.json()

    setImage(file.secure_url)
    setLoading(false)
  }

  function handleSubmit(e) {
    e.preventDefault()
    // console.log(name, price, description, image, cause)
    // console.log('user: ', user)
    const newArtwork = {
      image: image,
      name: name,
      description: description,
      price: price,
      causeId: cause,
      artistId: user.id,
      artistName: user.name,
    }
    saveArtwork(newArtwork)
    return props.history.push('/profile')
  }

  useEffect(() => {
    getCharities()
      .then((result) => {
        setCauses(result)
        return causes
      })
      .catch((err) => console.log('error:', err.message))
  }, [])

  return (
    <>
      <div className="addArtworkForm">
        <h1>List Your Artwork</h1>
        <form onSubmit={handleSubmit}>
          <h5>Artwork Name</h5>
          <input
            className=""
            type="text"
            placeholder="Artwork Name"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />

          <h5>Price</h5>
          <input
            className=""
            type="number"
            placeholder="Artwork Price"
            name="price"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />

          <h5>Description</h5>
          <textarea
            className=""
            type="text"
            placeholder="Artwork description"
            name="description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />

          <h5>Upload Image</h5>
          <input
            className=""
            type="file"
            placeholder="Browse"
            name="file"
            onChange={uploadImage}
          />
          {loading ? (
            <h3>Loading...</h3>
          ) : (
            <img src={image} alt="" style={{ width: '300px' }} />
          )}

          <h5>Select your Cause</h5>
          <select
            name="cause"
            onChange={(event) => setCause(event.target.value)}
          >
            <option value="">--Select your cause from the list--</option>
            {causes.map((cause) => {
              return (
                <option key={cause.id} name="singleCause" value={cause.id}>
                  {cause.name}
                </option>
              )
            })}
          </select>
          <button className="button my-4 is-primary" type="submit">
            Create Listing
          </button>
          {/* Wrapping button in a link breaks the submit function */}
        </form>
      </div>
      <Footer />
    </>
  )
}
