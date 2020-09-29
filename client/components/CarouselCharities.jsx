import React, { useState, useContext, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'

export default function CarouselCharities(props) {
  const charityId = String(props.charity.id)

  const styles = {
    backgroundImage: `url(${props.charity.profile_picture})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top center',
    height: '15rem',
    width: '15rem',
  }

  return (
    <>
        <div className="card-flex-item-carousel card">

          {/* --- Card Image --- */}

          <Link to={`/CharityBio/${charityId}`}>
            <div className="is-four-fifths" style={styles}></div>
          </Link>

          {/* --- Card Text --- */}
          <div className="homeAddToCartButton has-text-centered mt-3">
            <p className="cardText"><strong>{props.charity.name}</strong></p>
          </div>
        </div>
    </>
  )
}
