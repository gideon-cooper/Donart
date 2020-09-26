import React from 'react'

export default function CartItem(props) {
  return (
    <div className="cartItem">
      <div className="leftCart">
        <p>Artist: {props.item.artistName}</p>
        <p>Cause: {props.item.causeName}</p>
      </div>
      <div className="rightCart">
        <img
          src={props.item.image}
          style={{ width: '30%', height: '100%' }}
          alt=""
        />
      </div>
    </div>
  )
}
