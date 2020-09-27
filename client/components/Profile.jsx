import React, { useState, useContext } from 'react'

import { UserContext, updateUserContext } from './UserContext'
import { Redirect, Link } from 'react-router-dom'

export default function Profile () {
  const [user, setUser] = useContext(UserContext)
  const userId = String(user.id)
  return (
    <div className="profile">
      <div className="topProfile">
        <div className="leftProfile">
          <h1>{user.name}</h1>
          <img src={user.image} alt="" />
          <Link to={`/editProfile/${userId}`}>
            <button>Edit Profile</button>
          </Link>
          <Link to={'/add-artwork'}>
            <button>Add Artwork</button>
          </Link>
        </div>
        <div className="rightProfile">
          <p>{user.about}</p>
        </div>
      </div>
    </div>
  )
}
