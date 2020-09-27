import React, { useState, useEffect, useContext } from 'react'

import { UserContext, updateUserContext } from './UserContext'
import { Redirect, Link } from 'react-router-dom'

import { getArtist } from '../api'

export default function Profile () {
  const [user, setUser] = useContext(UserContext)
  const userId = String(user.id)
  const [profileData, setProfileData] = useState({})
  // const [profileId, setProfileId] = useState(0)

  console.log('User from context:', user)
  console.log('User ID from context:', userId)

  useEffect(() => {
    console.log('User ID (in component): ', userId)
    if (userId !== null) {
      //   const getId = async () => {
      //     const profileData = await useContext(UserContext)
      //     setProfileData(profileData)
      //     const newId = String(profileData.id)
      //     setProfileId(newId)
      //   }
      //   getId()
      getArtist(userId)
        .then(result => {
          console.log('user profile result: ', result)
          setProfileData(result)
          return result
        })
        .catch(err => console.log('error:', err.message))
    }
  }, [user])

  return (
    <div className="profile">
      <div className="topProfile">
        <div className="leftProfile">
          <h1>{profileData.artistName}</h1>
          <img src={profileData.profilePicture} alt="" />
          <Link to={`/editProfile/${userId}`}>
            <button>Edit Profile</button>
          </Link>
          <Link to={'/add-artwork'}>
            <button>Add Artwork</button>
          </Link>
        </div>
        <div className="rightProfile">
          <p>{profileData.about}</p>
        </div>
      </div>
    </div>
  )
}
