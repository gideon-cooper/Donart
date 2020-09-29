import React, { useContext } from 'react'
import { CartContext, updateCart, deleteCartItem } from './CartContext'

export default function CartItem(props) {
  const [cart, setCart] = useContext(CartContext)
  console.log(props.item, 'ASD')
  return (
    <div className="cartItem">
      <div className="leftCart">
        <p>
          {props.item.name.length > 16
            ? props.item.name.slice(0, 14) + '...'
            : props.item.name}
        </p>
        <p>${props.item.price}</p>
        <button
          className="button is-danger"
          onClick={() => deleteCartItem(setCart, cart, props.item.id)}
        >
          Remove
        </button>
      </div>
      <div className="rightCart">
        <img
          src={props.item.image}
          style={{ width: '100%', height: '100%' }}
          alt=""
        />
      </div>
    </div>
  )
}
