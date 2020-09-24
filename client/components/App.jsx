import React, { useEffect, useContext } from "react"
import { isAuthenticated } from "authenticare/client"
import { Route, Link } from "react-router-dom"
import Home from "./Home"
import Signin from "./SignIn"
import Register from "./Register"
import Nav from "./Nav"
import Footer from "./Footer"
import Artists from "./Artists"
import Charities from "./Charities"

import { UserContext, updateUserContext } from "./UserContext"

const App = () => {
  const [, setUser] = useContext(UserContext)

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
      <Route path='/register' component={Register} />
      <Route path='/artists' component={Artists} />
      <Route path='/Charities' component={Charities} />
      <Footer />
    </div>
  )
}

export default App
