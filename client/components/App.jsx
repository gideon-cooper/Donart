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
import AddArtwork from './AddArtwork'
import Checkout from './Checkout'
import Profile from './Profile'
import EditProfile from './EditProfile'
import Artworks from './Artworks'
import ArtistBio from './ArtistBio'


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
      <Route path="/editProfile/:id" component={EditProfile} />
      <Route path="/Charities" component={Charities} />
      <Route path="/Artworks" component={Artworks} />
      <Route path="/add-artwork" component={AddArtwork} />
      <Route path="/ArtistBio" component={ArtistBio} />
      <Footer />
    </div>
  )
}

export default App
