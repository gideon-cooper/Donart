import React, { useState, useContext, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { UserContext } from './UserContext'
import { CartContext, updateCart } from './CartContext'

export default function AddToCart(props) {
  const [cart, setCart] = useContext(CartContext)
  const [user, setUser] = useContext(UserContext)
  const [newCart, setNewCart] = useState({})

  const history = useHistory()
  const artworkId = String(props.art.id)
  const duplicate = (item) => item.artistName === props.art.artistName
  useEffect(() => {
    if (Object.keys(newCart).length > 0) {
      console.log('LOL', newCart)
      console.log('HEYY')
      updateCart(setCart, cart, newCart)
    }
  }, [newCart])

  const handleClick = () => {
    console.log(props.art)
    console.log(props)
    console.log(user.about)
    const { artistName, causeName, image, id } = props.art
    if (user.about === '') {
      history.push('/signin')
    } else {
      setNewCart({ artistName, causeName, image, id })
    }
  }
  return (
    <div className="addToCart">
      {cart.some(duplicate) ? (
        <button>In trolley</button>
      ) : (
        <button onClick={handleClick}>Add to cart</button>
      )}
    </div>
  )
}
