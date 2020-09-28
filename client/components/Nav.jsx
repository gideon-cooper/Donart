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
  // console.log('ASD', checkout)
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

    // ---- Nav/Site Logo ----//

    <div className='Nav'>
      <div className='logo'>
        <Link style={{ textDecoration: 'none' }} to='/'>
          <img
            src={'images/logo/logo-grey.png'}
            style={{ padding: '0 0 0 15px' }}
            alt="donart logo"
          />
        </Link>
      </div>

      {/* ---- Menu List ---- */}

      <div className='rightSide'>

        {/* ---- Menu List Items ---- */}

        <div className='middleItems'>

          <Link style={{ textDecoration: 'none' }} to='/Artists'>
            <h2 className="navMenuItems">ARTIST</h2>
          </Link>

          <Link style={{ textDecoration: 'none' }} to='/Artworks'>
            <h2 className="navMenuItems">ARTWORKS</h2>
          </Link>

          <Link style={{ textDecoration: 'none' }} to='/Charities'>
            <h2 className="navMenuItems">CHARITIES</h2>
          </Link>

        </div>

        {/* ---- Auth Menu Items ---- */}

        <div className='rightItems'>

          <IfNotAuthenticated>
            <Link style={{ textDecoration: 'none' }} to='/signin'>
              <h2 className="navMenuItems">SIGN IN</h2>
            </Link>
            <Link style={{ textDecoration: 'none' }} to='/register'>
              <h2 className="navMenuItems">REGISTER</h2>
            </Link>
          </IfNotAuthenticated>

          <IfAuthenticated>
            {form.cart ? <Cart /> : null}
            <h2 className="navMenuCounter">{cart.length}</h2>
            <i onClick={handleClick} className="fas fa-2x fa-shopping-cart"></i>
            <Link style={{ textDecoration: 'none' }} to="/profile">
              <h2 className="navMenuItems">PROFILE</h2>
            </Link>
            <Link style={{ textDecoration: 'none' }} onClick={logff} to="/">
              <h2 className="navMenuItems">LOG OFF</h2>
            </Link>
          </IfAuthenticated>
        </div>

      </div>
    </div>
  )
}
