import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer () {
  return (
    <div className='footer'>
      <Link to={'/About'}>
        <div className='firstColumn'>
          <h1>About us</h1>
        </div>
      </Link>
      <div className='secondColumn'>
        <div>
          <h1>Contact us</h1>
          <br></br>
        </div>
        <div>
          <h1 className="gideonsLineBreaks">
            Copyright © 2020 – Donart® All Rights Reserved
            <br></br>
            Terms of Use | Privacy Policy | Disclaimer
          </h1>
        </div>
      </div>
      <div className='thirdColumn'>
        <h1>Legal</h1>
      </div>
    </div>
  )
}
