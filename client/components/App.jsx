import React, { useEffect, useContext } from 'react'
import { isAuthenticated } from 'authenticare/client'
import { Route, Link } from 'react-router-dom'
import { UserContext, updateUserContext } from './UserContext'

import Home from './Home'
import Signin from './SignIn'
import Register from './Register'
import Artists from './Artists'
import Charities from './Charities'
import CharityBio from './CharityBio'
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
      updateUserContext(setUser)
    }
  }, [])

  return (
    <div className='App has-background-light'>
      <Nav />
      <Route exact path='/' component={Home} />
      <Route path='/signin' component={Signin} />
      <Route path='/Checkout' component={Checkout} />
      <Route path='/register' component={Register} />
      <Route path='/artists' component={Artists} />
      <Route path='/Confirmation' component={Confirmation} />
      <Route path='/profile' component={Profile} />
      <Route path='/editProfile/:id' component={EditProfile} />
      <Route path='/Charities' component={Charities} />
      <Route path='/CharitiyBio/:id' component={CharityBio} />
      <Route path='/Artworks' component={Artworks} />
      <Route path='/add-artwork' component={AddArtwork} />
      <Route path='/ArtistBio/:id' component={ArtistBio} />
      <Route path='/ArtworkDetails/:id' component={ArtworkDetails} />
    </div>
  )
}

export default App
