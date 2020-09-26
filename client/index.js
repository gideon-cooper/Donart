import React from 'react'
import ReactDOM from 'react-dom'
import '../server/public/style/main.scss'
import { HashRouter as Router } from 'react-router-dom'
import { UserProvider } from './components/UserContext'
import { CartProvider } from './components/CartContext'
import { CheckoutProvider } from './components/CheckoutContext'
import App from './components/App'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Router>
      <CheckoutProvider>
        <CartProvider>
          <UserProvider>
            <App />
          </UserProvider>
        </CartProvider>
      </CheckoutProvider>
    </Router>,
    document.getElementById('app')
  )
})
