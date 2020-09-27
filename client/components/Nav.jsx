import React, { useContext, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import { logOff, isAuthenticated } from 'authenticare/client'
import { UserContext, updateUserContext } from './UserContext'
import { CartContext } from './CartContext'

import Cart from './Cart'

export default function Nav(props) {
  const [, setUser] = useContext(UserContext)
  const [cart, setCart] = useContext(CartContext)
  const location = useLocation()
  const checkout = location.pathname.includes('/Checkout')
  console.log('ASD', checkout)
  const [form, setForm] = useState({
    log: false,
    cart: false
  })
  const logff = () => {
    logOff()
    setForm({ log: !form.log })
  }
  const handleClick = () => {
    setForm({ cart: !form.cart })
  }
  return (
    <div className='Nav'>
      <div className='logo'>
        <Link style={{ textDecoration: 'none' }} to='/'>
          <img
            src={'images/logo/logo-black.png'}
            style={{ padding: '0 0 0 15px' }}
            alt='donart logo'
          />
        </Link>
      </div>
      <div className='rightSide'>
        <div className='middleItems'>
          <Link style={{ textDecoration: 'none' }} to='/Artists'>
            <h2>Artists</h2>
          </Link>
          <Link style={{ textDecoration: 'none' }} to='/Artworks'>
            <h2>Artworks</h2>
          </Link>
          <Link style={{ textDecoration: 'none' }} to='/Charities'>
            <h2>Charities</h2>
          </Link>
        </div>
        <div className='rightItems'>
          <IfNotAuthenticated>
            <Link style={{ textDecoration: 'none' }} to='/signin'>
              <h2>Sign in</h2>
            </Link>
            <Link style={{ textDecoration: 'none' }} to='/register'>
              <h2>Register</h2>
            </Link>
          </IfNotAuthenticated>
          <IfAuthenticated>
            {form.cart && !checkout ? <Cart /> : null}
            <h2>{cart.length}</h2>
            <i onClick={handleClick} className='fas fa-2x fa-shopping-cart'></i>
            <Link style={{ textDecoration: 'none' }} to='/profile'>
              <h2>Profile</h2>
            </Link>
            <Link style={{ textDecoration: 'none' }} onClick={logff} to='/'>
              <h2>Log off</h2>
            </Link>
          </IfAuthenticated>
        </div>
      </div>
    </div>
  )
}
