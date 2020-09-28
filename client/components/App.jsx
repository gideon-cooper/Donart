import React, { useEffect, useContext } from 'react'
import { getDecodedToken, isAuthenticated } from 'authenticare/client'
import { Route, Link } from 'react-router-dom'
import { UserContext, updateUserContext } from './UserContext'
import { getUser } from '../api'

import Home from './Home'
import Signin from './SignIn'
import Register from './Register'
import Artists from './Artists'
import Charities from './Charities'
import Artworks from './Artworks'
import AddArtwork from './AddArtwork'
import Nav from './Nav'
import Confirmation from './Confirmation'
import Footer from './Footer'
import Checkout from './Checkout'
import Profile from './Profile'
import EditProfile from './EditProfile'
import ArtistBio from './ArtistBio'
import ArtworkDetails from './ArtworkDetails'

const App = () => {
  const [user, setUser] = useContext(UserContext)

  useEffect(() => {
    if (isAuthenticated()) {
      const { id } = getDecodedToken()
      getUser(id)
        .then(result => {
          const { id, username, artistName: name, about, profilePicture: image } = result
          const userData = { id, username, name, about, image }
          // console.log('RESULT of API in APP: ', userData)
          updateUserContext(setUser, userData)
          // console.log('inside API: ', user)
          return null
        })
        .catch((err) => console.log('error:', err.message))
    }
  }, [])

  // console.log('inside app: ', user)


  return (
    <div className="App has-background-light">
      <Nav />
      <Route exact path="/" component={Home} />
      <Route path="/signin" component={Signin} />
      <Route path="/Checkout" component={Checkout} />
      <Route path="/register" component={Register} />
      <Route path="/artists" component={Artists} />
      <Route path="/Confirmation" component={Confirmation} />
      <Route path="/profile" component={Profile} />
      <Route path="/editProfile/:id" component={EditProfile} />
      <Route path="/Charities" component={Charities} />
      <Route path="/Artworks" component={Artworks} />
      <Route path="/add-artwork" component={AddArtwork} />
      <Route path="/ArtistBio/:id" component={ArtistBio} />
      <Route path="/ArtworkDetails/:id" component={ArtworkDetails} />
    </div>
  )
}

export default App
