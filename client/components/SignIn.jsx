import React, { useState, useContext } from 'react'
import { isAuthenticated, signIn } from 'authenticare/client'
import { Link } from 'react-router-dom'
import { UserContext, updateUserContext } from './UserContext'
import Footer from './Footer'

export default function SignIn(props) {
  const [, setUser] = useContext(UserContext)
  const [form, setForm] = useState({
    username: '',
    password: '',
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
    const { username, password } = form
    if (Object.values(form).filter((item) => item !== '').length === 2) {
      return signIn({ username, password }, { baseUrl }).then((token) => {
        // console.log(token)
        if (isAuthenticated()) {
          updateUserContext(setUser)
          return props.history.push('/')
        }
        return null
      })
    } else {
      alert('Please out all forms.')
    }
  }
  return (
    <div className="container">
      <div className="signIn">
        <div className="card-flex-item card ">
          <div className="signInForm">
            <input
              name="username"
              value={form.username}
              onChange={handleChange}
              type="text"
              placeholder="Username"
            />
            <input
              name="password"
              value={form.password}
              onChange={handleChange}
              type="password"
              placeholder="Password"
            />
            <button onClick={handleClick}>Sign in</button>
            <Link to="/register">
              <h4>Register</h4>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
