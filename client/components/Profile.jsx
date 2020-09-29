import React, { useState, useEffect, useContext } from 'react'

import { UserContext, updateUserContext } from './UserContext'
import { Redirect, Link } from 'react-router-dom'
import { getArtist, getUser } from '../api'

import ProfileArtListings from './ProfileArtListings'
import Footer from './Footer'

export default function Profile () {
  const [user, setUser] = useContext(UserContext)

  const [artist, setArtist] = useState({})

  useEffect(() => {
    // console.log('User ID (in component): ', user.id)
    if (user.id !== null) {
      getArtist(String(user.id))
        .then(result => {
          // console.log('user profile result: ', result)
          setArtist(result)
          return result
        })
        .catch((err) => console.log('error:', err.message))
    }
  }, [user])

  return (
    <>
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
            {(artist.artworks === undefined || artist.artworks.length === 0)
              ? <p>You have not listed any artworks</p>
              : artist.artworks.map(art => (<>
                <p>Your Artwork Listings</p>
                <ProfileArtListings key={art.id} artwork={art} bio={false} />
              </>))
            }
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
