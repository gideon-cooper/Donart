import React from 'react'
import { Link } from 'react-router-dom'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import { logOff, isAuthenticated } from 'authenticare/client'
import { UserContext, updateUserContext } from './UserContext'

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
          <IfNotAuthenticated>
            <Link style={{ textDecoration: 'none' }} to="/signin">
              <h2>Sign in</h2>
            </Link>
            <Link style={{ textDecoration: 'none' }} to="/register">
              <h2>Register</h2>
            </Link>
          </IfNotAuthenticated>
          <IfAuthenticated>
            <Link style={{ textDecoration: 'none' }} to="/profile">
              <h2>Profile</h2>
            </Link>
            <Link style={{ textDecoration: 'none' }} onClick={logOff} to="#">
              <h2>Log off</h2>
            </Link>
          </IfAuthenticated>
        </div>
      </div>
    </div>
  )
}
