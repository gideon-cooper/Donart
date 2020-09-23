import React from 'react'
import { Route, Link } from 'react-router-dom'
import Home from './Home'
import Signin from './SignIn'
import Register from './Register'

import '../main.scss'
const App = () => {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route path="/signin" component={Signin} />
      <Route path="/register" component={Register} />
      <Link to="/">HOME</Link>
    </>
  )
}

export default App
