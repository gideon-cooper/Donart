import React, { useEffect, useState, useContext } from 'react'

import { editProfile } from '../api'
import { UserContext, updateUserContext } from './UserContext'

function capitalizeFirstLetter (string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export default function EditProfile (props) {
  const [user, setUser] = useContext(UserContext)
  // console.log(props)
  const [form, setForm] = useState({
    name: user.name,
    about: user.about
  })
  const [image, setImage] = useState(user.image)
  const [isCharity, setCharityBoolean] = useState(0)

  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value
    })
  }

  const handleClick = () => {
    const updatedInfo = { name: form.name, about: form.about, image, isCharity }
    console.log("is charity in handleclick: ", isCharity)
    editProfile(props.match.params.id, updatedInfo)
    updateUserContext(setUser, { ...user, ...updatedInfo })
    return props.history.push('/profile')
  }

  // console.log('image: ', image)

  const uploadImage = async e => {
    const files = e.target.files
    const data = new FormData()
    data.append('file', files[0])
    data.append('upload_preset', 'donart')
    setLoading(true)
    const res = await fetch(
      'https://api.cloudinary.com/v1_1/marikajf/image/upload', // why /image/upload?
      {
        method: 'POST',
        body: data
      }
    )
    const file = await res.json()
    // console.log(file)

    setImage(file.secure_url)
    // console.log("secure URL: ", image)
    setLoading(false)
  }

  return (
    <div>
      <h1>Update your profile details</h1>

      <h5>Name</h5>
      <input
        name="name"
        value={form.name ? capitalizeFirstLetter(form.name) : 'enter your name'}
        onChange={handleChange}
        type="text"
        placeholder="Name"
      />

      <h5>Your Bio</h5>
      <textarea
        name="about"
        value={form.about}
        onChange={handleChange}
        type="text"
        placeholder="About"
      />
      <br/>

      <h5>Is this profile for a charity organisation?</h5>
      {/* <input type="checkbox" id="subscribeNews" name="subscribe" value="newsletter"/>
      <label for="subscribeNews">Check this box if you are listing as a charity</label> */}

      <select name="isCharity" onChange={event => setCharityBoolean(event.target.value)}>
        <option value={isCharity}>--Select from the list--</option>
        <option key="is-charity" name="charity" value={1} >Yes, I&apos;m a charity</option>
        <option key="is-not-charity" name="not-charity" value={0} >Not a charity</option>
      </select>

      <h5>Profile Picture</h5>
      <input
        name="file"
        // value={image}
        onChange={uploadImage}
        type="file"
        placeholder="Choose profile picture"
      />
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <img src={image} alt="" style={{ width: '300px' }}/>
      )}
      <br/><br/>
      <button onClick={handleClick}>Update Profile</button>
    </div>
  )
}
