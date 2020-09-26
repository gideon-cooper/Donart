import React from 'react'

export default function CheckoutItem(props) {
  return (
    <div className="checkoutItem">
      <div className="leftCheckout">
        <p>Artist: {props.item.artistName}</p>
        <p>Cause: {props.item.causeName}</p>
        <img
          src={props.item.image}
          style={{ width: '200px', height: '200px' }}
          alt=""
        />
      </div>
      <div className="rightCheckout">
        <p>PRICE</p>
      </div>
    </div>
  )
}
