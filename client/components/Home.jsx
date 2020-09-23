import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <h1>HEYYYYY</h1>
      <Link to="./signin">Sign in</Link>
      <Link to="./register">Register</Link>
    </div>
  )
}
