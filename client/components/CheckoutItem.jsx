import React, { useContext } from 'react'
import { CartContext, updateCart, deleteCartItem } from './CartContext'

export default function CheckoutItem(props) {
  const [cart, setCart] = useContext(CartContext)
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
        <button onClick={() => deleteCartItem(setCart, cart, props.item.id)}>
          Remove
        </button>
      </div>
    </div>
  )
}
