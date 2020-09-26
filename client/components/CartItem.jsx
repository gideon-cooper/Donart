import React from 'react'

export default function CartItem() {
  return (
    <div className="cartItem">
      <p>Art name: {item.artworkName}</p>
      <p>Artist: {item.artistName}</p>
      <p>Cause: {item.causeName}</p>
      <img
        src={item.image}
        style={{ width: '200px', height: '200px' }}
        alt=""
      />
    </div>
  )
}
