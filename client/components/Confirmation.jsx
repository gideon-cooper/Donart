import React from 'react'
import Footer from './Footer'

export default function Confirmation() {
  return (
    <>
      <div className="confirmation">
        <img
          src={'./images/icons/green-tick.png'}
          style={{ width: '2.5rem', height: '2.5rem' }}
          alt="delivery icon"
        />
        <h1 className="confirmationMessage">Thank you for purchasing, your items will soon be with you.</h1>
        <img
          src={'./images/icons/delivery-icon-grey.png'}
          style={{ width: '10rem', height: '10rem' }}
          alt="delivery icon"
        />
      </div>
      <Footer />
    </>
  )
}
