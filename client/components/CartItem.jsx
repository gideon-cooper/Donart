import React, { useContext } from "react"
import { CartContext, updateCart, deleteCartItem } from "./CartContext"

export default function CartItem(props) {
  const [cart, setCart] = useContext(CartContext)

  return (
    <div className='cartItem'>
      <div className='leftCart'>
        <p>Artist: {props.item.artistName}</p>
        <p>Cause: {props.item.causeName}</p>
      </div>
      <div className='rightCart'>
        <img
          src={props.item.image}
          style={{ width: "30%", height: "100%" }}
          alt=''
        />
        <button onClick={() => deleteCartItem(setCart, cart, props.item.id)}>
          Remove
        </button>
      </div>
    </div>
  )
}
