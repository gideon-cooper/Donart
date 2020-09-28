import React, { useState, useEffect } from 'react'
import { getCharities } from '../api'

import SingleCharity from './SingleCharity'

export default function Charities() {
  const [charities, setCharities] = useState([])
  console.log('CHARITIES', charities)
  useEffect(() => {
    getCharities()
      .then((res) => {
        setCharities(res)
      })
      .catch((error) => {
        console.log('error: HERE', error.message)
      })
  }, [])

  return (
    <>
      <div className="artworkDisplay">
        <div className="displayTitle">
          <hr />
          <h2>Browse Charities</h2>
          <hr />
        </div>
        <div className="card-flex-wrapper column is-three-quarters">
          {charities.map((charity) => (
            <SingleCharity key={charity.id} charity={charity} />
          ))}
        </div>
      </div>
    </>
  )
}
