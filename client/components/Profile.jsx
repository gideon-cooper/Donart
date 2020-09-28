import React, { useState, useEffect, useContext } from 'react'

import { UserContext, updateUserContext } from './UserContext'
import { Redirect, Link } from 'react-router-dom'

import { getArtist, getUser } from '../api'

export default function Profile () {
  const [user, setUser] = useContext(UserContext)
  // Kept these comments Just In Case something breaks... delete later
  // const userId = String(user.id)
  // const [profileData, setProfileData] = useState({})

  // console.log('User from context:', user)
  // console.log('User ID from context:', userId)

  // useEffect(() => {
  //   console.log('User ID (in component): ', userId)
  //   if (userId !== null) {
  //     getUser(userId)
  //       .then(result => {
  //         console.log('user profile result: ', result)
  //         setProfileData(result)
  //         return result
  //       })
  //       .catch((err) => console.log("error:", err.message))
  //   }
  // }, [user])

  return (
    <div className="profile">
      <div className="topProfile">
        <div className="leftProfile">
          {user.name ? <h1>{user.name}</h1> : <h1>Please update your profile details</h1>}
          
          <img src={user.image} alt="" />
          <p>Your bio: {user.about}</p>
          <p>Current email address: {user.email}</p>
          {user.isCharity ? <p>You are listed as a charity</p> : <p>You are not listed as a charity</p>}
          {user.isArtist ? <p>You are listed as an artist</p> : <p>You are not listed as an artist</p>}
          <div className="profileButtons">
            <Link to={`/editProfile/${user.id}`}>
              <button>Edit Profile</button>
            </Link>
            <Link to={'/add-artwork'}>
              <button>Add Artwork</button>
            </Link>
          </div>
        </div>
        <div className="rightProfile">
        </div>
      </div>
    </div>
  )
}
