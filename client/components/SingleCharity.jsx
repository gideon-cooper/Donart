import React from 'react'
import { Link } from 'react-router-dom'

export default function SingleCharity({ charity }) {
  const styles = {
    backgroundImage: `url(${charity.profile_picture})`,
    backgroundSize: 'cover',
    backgroundPosition: 'top center',
    height: '20em',
  }

  const charityID = String(charity.id)
  // console.log(charity)

  return (
    <div className='card-flex-item card' style={{ margin: '20px' }}>
      <Link to={`/CharityBio/${charityID}`}>
        <h4 className='has-text-centered mt-3'>{charity.name}</h4>
        <div className='mt-4 mb-6 mx-6' style={styles}></div>
        <p>{charity.id}</p>
      </Link>
    </div>
  )
}
