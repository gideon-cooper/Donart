import React, { useContext } from 'react'
import { CartContext, updateCart, deleteCartItem } from './CartContext'

export default function CheckoutItem(props) {
  const [cart, setCart] = useContext(CartContext)
  return (
    <div className="checkoutItem">
      <div className="leftCheckout">
        <img
          src={props.item.image}
          style={{ width: '60%', height: '100%' }}
          alt=""
        />
      </div>
      <div className="rightCheckout">
        <p>
          <strong>Artwork name</strong>: {props.item.name}
        </p>
        <p>
          <strong>Artist</strong>: {props.item.artistName}
        </p>
        <p>
          <strong>Cause</strong>: {props.item.causeName}
        </p>
        <p>${props.item.price}</p>
        <button
          className="button is-danger"
          onClick={() => deleteCartItem(setCart, cart, props.item.id)}
        >
          Remove
        </button>
      </div>
    </div>
  )
}
