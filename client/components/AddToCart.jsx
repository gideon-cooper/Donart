import React, { useState, useContext, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { UserContext } from './UserContext'
import { CartContext, updateCart } from './CartContext'

export default function AddToCart(props) {
  const [cart, setCart] = useContext(CartContext)
  const [user, setUser] = useContext(UserContext)
  const [newCart, setNewCart] = useState({})

  const history = useHistory()
  useEffect(() => {
    if (Object.keys(newCart).length > 0) {
      updateCart(setCart, cart, newCart)
    }
  }, [newCart])

  const handleClick = () => {
    const { artistName, causeName, image, id, price, name } = props.art
    console.log(props.art, 'HEYYYYYY')
    if (user.about === '') {
      history.push('/signin')
    } else {
      setNewCart({ artistName, causeName, image, id, price, name })
    }
  }
  return (
    <div className="addToCart">
      {cart.map((item) => item.id).includes(props.art.id) ? (
        <p>In Cart</p>
      ) : (
        <button className="button is-success" onClick={handleClick}>
          Add to cart
        </button>
      )}
    </div>
  )
}
