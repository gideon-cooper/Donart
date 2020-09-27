import React, { useState, useEffect, useContext } from "react"

import { UserContext, updateUserContext } from "./UserContext"
import { Redirect, Link } from "react-router-dom"

import { getArtist } from "../api"

export default function Profile() {
  const [user, setUser] = useContext(UserContext)
  const userId = String(user.id)
  const [profileData, setProfileData] = useState({})
  // const [profileId, setProfileId] = useState(0)

  // console.log('User from context:', user)
  // console.log('User ID from context:', userId)

  useEffect(() => {
    // console.log('User ID (in component): ', userId)
    if (userId !== null) {
      getArtist(userId)
        .then((result) => {
          console.log("user profile result: ", result)
          setProfileData(result)
          return result
        })
        .catch((err) => console.log("error:", err.message))
    }
  }, [user])

  return (
    <div className='profile'>
      <div className='topProfile'>
        <div className='leftProfile'>
          <div className='profileTitle'>
            <h1>Name: {profileData.artistName}</h1>
          </div>

          <img src={profileData.profilePicture} alt='' />
          <div className='profileButtons'>
            <div className='button1'>
              <Link to={`/editProfile/${userId}`}>
                <button className='button is-link'>Edit Profile</button>
              </Link>
            </div>
            <div className='button2'>
              <Link to={"/add-artwork"}>
                <button className='button is-link'>Add Artwork</button>
              </Link>
            </div>
          </div>
        </div>
        <div className='rightProfile'>
          <p>About: {profileData.about}</p>
        </div>
      </div>
    </div>
  )
}
