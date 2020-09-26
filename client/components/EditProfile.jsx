import React, { useEffect, useState, useContext } from 'react'
import regeneratorRuntime from 'regenerator-runtime'

import { editProfile } from '../api'
import { UserContext, updateUserProfile } from './UserContext'


export default function EditProfile(props) {
  const [user, setUser] = useContext(UserContext)
  console.log(props)
  const [form, setForm] = useState({
    name: '',
    about: ''
  })
  const [profile_picture, setImage] = useState('')

  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value
    })
  }
  const handleClick = () => {
    editProfile(props.match.params.id, form)
    updateUserProfile(setUser, user, form, image)
    return props.history.push('/profile')
  }
  // console.log("USER: ", user)
  // console.log(props.match.params.id)
  console.log("image: ", image)

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
        value={form.name}
        onChange={handleChange}
        type="text"
        placeholder="name"
      />

      <h5>Your Bio</h5>
      <textarea
        name="about"
        value={form.about}
        onChange={handleChange}
        type="text"
        placeholder="about"
      />

      <h5>Profile Picture</h5>
      <input
        name="file"
        // value={image}
        onChange={uploadImage}
        type="file"
        placeholder="Choose profile picture"
      /> 
      <br/><br/>
      <button onClick={handleClick}>Update Profile</button>
    </div>
  )
}
