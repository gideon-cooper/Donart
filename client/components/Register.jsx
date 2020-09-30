import React, { useState, useContext } from 'react'
import { register, isAuthenticated } from 'authenticare/client'

import { UserContext, updateUserContext } from './UserContext'
import { Link } from 'react-router-dom'

export default function Register(props) {
  const [, setUser] = useContext(UserContext)

  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    name: '',
  })
  const baseUrl = '/api/v1'
  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value,
    })
  }

  const handleClick = () => {
    const { username, password, email, name } = form
    console.log('HEY', Object.values(form))
    if (Object.values(form).filter((item) => item !== '').length === 4) {
      register(
        {
          username,
          password,
          email,
          name,
        },
        { baseUrl }
      )
        .then((token) => {
          // console.log(token)
          if (isAuthenticated()) {
            updateUserContext(setUser)
            return props.history.push('/')
          }
          return null
        })
        .catch((error) => {
          console.log('error: ', error.message)
        })
    } else {
      alert('Please fill out all forms.')
    }
  }
  return (
    <div className="register">
      <div className="card-flex-item card ">
        <div className="registerForm">
          <input
            name="name"
            value={form.name}
            placeholder="name"
            onChange={handleChange}
            type="text"
            placeholder="Name"
          />
          <input
            name="username"
            value={form.username}
            placeholder="username"
            onChange={handleChange}
            type="text"
            placeholder="Username"
          />
          <input
            name="email"
            value={form.email}
            placeholder="Email"
            onChange={handleChange}
            type="email"
            placeholder="Email"
          />
          <input
            name="password"
            value={form.password}
            placeholder="password"
            onChange={handleChange}
            type="password"
            placeholder="Password"
          />
          <button onClick={handleClick}>Register</button>
          <h1>Already have an account?</h1>
          <Link to="/signin">
            <h1 className="toSignin">Sign in</h1>
          </Link>
          <h1>By creating an account you agree to terms and services</h1>
        </div>
      </div>
    </div>
  )
}
