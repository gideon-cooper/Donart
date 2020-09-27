import React, { useState, useEffect, useContext } from "react"

import { UserContext, updateUserContext } from "./UserContext"
import { Redirect, Link } from "react-router-dom"

import { getArtist, getUser } from '../api'

export default function Profile() {
  const [user, setUser] = useContext(UserContext)
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
          <h1>{user.name}</h1>
          <img src={user.image} alt="" />
          <p>{user.about}</p>
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
