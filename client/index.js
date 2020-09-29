import React from 'react'
import ReactDOM from 'react-dom'
import '../server/public/style/main.scss'
import { HashRouter as Router } from 'react-router-dom'
import { UserProvider } from './components/UserContext'
import { CartProvider } from './components/CartContext'
import { GlobalCartProvider } from './components/GlobalCartContext'

import App from './components/App'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Router>
      <GlobalCartProvider>
        <CartProvider>
          <UserProvider>
            <App />
          </UserProvider>
        </CartProvider>
      </GlobalCartProvider>
    </Router>,
    document.getElementById('app')
  )
})
