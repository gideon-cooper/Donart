import React from 'react'
import { Link } from 'react-router-dom'

export default function EmptyCart() {
  return (
    <div className="emptyCart">
      <h1>Cart is empty :'( Try adding something!</h1>
      <br></br>
      <Link to="/">Home</Link>
    </div>
  )
}
