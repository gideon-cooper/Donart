import React, { useState, useEffect } from 'react'

export default function AddArtwork () {
  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')
  const [cause, setCause] = useState(0)

  function handleSubmit (e) {
    e.preventDefault()
    console.log(name, price, description, image, cause)
  }

    // useEffect(() => {
    //   getUserGarden(1) // hard coded user's garden id
    //     .then(result => {
    //       setGardenName(result.name)
    //       return gardenName
    //     })
    //     .catch(err => console.log(err))
    // }, [])

  return (
    <div className="form">
      <h1>List Your Artwork</h1>
      <form onSubmit={handleSubmit}>

        <h5>Artwork Name</h5>
        <input className="" type="text"
          placeholder="Artwork Name"
          name="name"
          value={name} onChange={event => setName(event.target.value)}/>

        <h5>Price</h5>
        <input className="" type="number"
          placeholder="Artwork Price"
          name="price"
          value={price} onChange={event => setPrice(event.target.value)}/>

        <h5>Description</h5>
        <textarea className="" type="text"
          placeholder="Artwork description"
          name="description"
          value={description} onChange={event => setDescription(event.target.value)}/>

        <h5>Upload Image</h5>
        <input className="" type="text"
          placeholder="Browse"
          name="image"
          value={image} onChange={event => setImage(event.target.value)}/>

        <h5>Select your Cause</h5>
        <select name="cause" id=""
          value={cause} onChange={event => setCause(event.target.value)}>
          <option value="">--Select your cause from the list--</option>
          <option value="one">Cause one</option>
          <option value="two">Cause two</option>
          <option value="three">Cause three</option>
        </select>

        <button className="button my-4 is-primary">Create Listing</button>
      </form>

    </div>
  )
}
