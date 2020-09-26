import React, { useEffect, useState, useContext } from 'react'
import { editProfile } from '../api'
import { UserContext, updateUserProfile } from './UserContext'

export default function EditProfile(props) {
  const [user, setUser] = useContext(UserContext)
  console.log(props)
  const [form, setForm] = useState({
    name: '',
    about: '',
    profile_picture: '',
  })
  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value,
    })
  }
  const handleClick = () => {
    editProfile(props.match.params.id, form)
    updateUserProfile(setUser, user, form)
    return props.history.push('/profile')
  }
  console.log(props.match.params.id)
  console.log(form)
  return (
    <div>
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        type="text"
        placeholder="name"
      />
      <input
        name="about"
        value={form.about}
        onChange={handleChange}
        type="text"
        placeholder="about"
      />
      <input
        name="image"
        value={form.image}
        onChange={handleChange}
        type="text"
        placeholder="Profile picture"
      />
      <button onClick={handleClick}>Edit</button>
    </div>
  )
}
