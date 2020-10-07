import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CartContext, updateCart } from './CartContext'
import Footer from './Footer'
import { GlobalCartContext } from './GlobalCartContext'
import EmptyCart from './EmptyCart'
import NotEmptyCart from './NotEmptyCart'

export default function Checkout () {
  const [cart, setCart] = useContext(CartContext)
  const [globalcart, setGlobalCart] = useContext(GlobalCartContext)

  useEffect(() => {
    setGlobalCart({
      on: false
    })
  }, [])

  return (
    <>
      <div className="checkout">
        {cart.length === 0 ? <EmptyCart /> : <NotEmptyCart />}
      </div>
      <Footer />
    </>
  )
}
