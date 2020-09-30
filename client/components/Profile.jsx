import React, { useState, useEffect, useContext } from 'react'

import { UserContext, updateUserContext } from './UserContext'
import { Redirect, Link } from 'react-router-dom'
import { getArtist, getUser } from '../api'

import ProfileArtListings from './ProfileArtListings'
import Footer from './Footer'

export default function Profile() {
  const [user, setUser] = useContext(UserContext)

  const [artist, setArtist] = useState({})

  useEffect(() => {
    // console.log('User ID (in component): ', user.id)
    if (user.id !== null) {
      getArtist(String(user.id))
        .then((result) => {
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
          <div className="columns">
            <div className="column left card-flex-item is-one-third card ">
              {user.name ? (
                <h1>{user.name}</h1>
              ) : (
                <h1>Please update your profile details</h1>
              )}

              <img src={user.image} alt="" />

              <p className="email">
                <strong>Email</strong>: {user.email}
              </p>
              <p>
                <strong>User Status</strong>:
              </p>
              {user.isCharity ? (
                <p>
                  <em>You are listed as a charity</em>
                </p>
              ) : (
                <p>
                  You are <em>not</em> listed as a charity
                </p>
              )}
              {user.isArtist ? (
                <p>
                  <em>You are listed as an artist</em>
                </p>
              ) : (
                <p>
                  You are <em>not</em> listed as an artist
                </p>
              )}

              <p className="bio">
                <strong>Bio</strong>:{' '}
              </p>
              <p>{user.about}</p>
              <Link to={`/editProfile/${user.id}`}>
                <button className="button is-warning">Edit Profile</button>
              </Link>
            </div>
            <div className=" column is-one-quarter  rightProfile">
              {artist.artworks === undefined || artist.artworks.length === 0 ? (
                <p>You have not listed any artworks</p>
              ) : (
                artist.artworks.map((art) => (
                  <>
                    <h1>Your Listings</h1>
                    <ProfileArtListings
                      key={art.id}
                      artwork={art}
                      bio={false}
                    />
                  </>
                ))
              )}
              <Link to={'/add-artwork'}>
                <button className="button is-warning">Add Artwork</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
