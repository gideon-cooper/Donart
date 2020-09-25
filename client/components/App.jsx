import React, { useEffect, useContext } from 'react'

import { isAuthenticated } from 'authenticare/client'
import { Route, Link } from 'react-router-dom'
import { UserContext, updateUserContext } from './UserContext'

import Home from './Home'
import Signin from './SignIn'
import Register from './Register'
import Nav from './Nav'
import Footer from './Footer'
import Artists from './Artists'
import Charities from './Charities'
import Profile from './Profile'
import editProfile from './EditProfile'
import Checkout from './Checkout'
import Artworks from './Artworks'
import AddArtwork from "./AddArtwork"

const App = () => {
  const [, setUser] = useContext(UserContext)

  useEffect(() => {
    if (isAuthenticated()) {
      updateUserContext(setUser)
    }
  }, [])
  return (
    <div className="App has-background-light">
      <Nav />
      <Route exact path="/" component={Home} />
      <Route path="/signin" component={Signin} />
      <Route path="./Checkout" component={Checkout} />
      <Route path="/register" component={Register} />
      <Route path="/artists" component={Artists} />
      <Route path="/profile" component={Profile} />
      <Route path="/editProfile/:id" component={editProfile} />
      <Route path="/charities" component={Charities} />
      <Route path="/artworks" component={Artworks} />
      <Route path="/add-artwork" component={AddArtwork} />
      <Footer />
    </div>
  )
}

export default App
