import React, { useState, useContext } from 'react'
import { register, isAuthenticated } from 'authenticare/client'

import { UserContext, updateUserContext } from './UserContext'

export default function Register (props) {
  const [, setUser] = useContext(UserContext)

  const [form, setForm] = useState({
    username: '',
    email: '',
    password: ''
  })
  const baseUrl = '/api/v1'
  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value
    })
  }

  const handleClick = () => {
    const { username, password, email } = form
    register(
      {
        username,
        password,
        email
      },
      { baseUrl }
    )
      .then((token) => {
        console.log(token)
        if (isAuthenticated()) {
          updateUserContext(setUser)
          return props.history.push('/')
        }
        return null
      })
      .catch((error) => {
        console.log('error: ', error.message)
      })
  }
  return (
    <div className='register'>
      <input
        name='username'
        value={form.username}
        placeholder='username'
        onChange={handleChange}
        type='text'
        placeholder='Username'
      />
      <input
        name='email'
        value={form.email}
        placeholder='Email'
        onChange={handleChange}
        type='email'
        placeholder='Email'
      />
      <input
        name='password'
        value={form.password}
        placeholder='password'
        onChange={handleChange}
        type='password'
        placeholder='Password'
      />
      <button onClick={handleClick}>Register</button>
    </div>
  )
}
