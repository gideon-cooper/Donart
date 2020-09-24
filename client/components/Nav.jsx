import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <div className="Nav">
      <div className="logo">
        <Link style={{ textDecoration: 'none' }} to="/">
          <h1>Donart</h1>
        </Link>
      </div>
      <div className="rightSide">
        <div className="middleItems">
          <Link style={{ textDecoration: 'none' }} to="/">
            <h2>Artists</h2>
          </Link>
          <Link style={{ textDecoration: 'none' }} to="/">
            <h2>Charities</h2>
          </Link>
        </div>
        <div className="rightItems">
          <Link style={{ textDecoration: 'none' }} to="/signin">
            <h2>Sign in</h2>
          </Link>
          <Link style={{ textDecoration: 'none' }} to="/register">
            <h2>Register</h2>
          </Link>
        </div>
      </div>
    </div>
  )
}
