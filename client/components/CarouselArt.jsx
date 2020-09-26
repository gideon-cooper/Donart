import React, { useState, useContext, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { UserContext } from './UserContext'
import { CartContext, updateCart } from './CartContext'

export default function CarouselArt(props) {
  const [cart, setCart] = useContext(CartContext)
  const [user, setUser] = useContext(UserContext)
  const [newCart, setNewCart] = useState({})
  const history = useHistory()
  const artworkId = String(props.art.id)
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
    <div className="carouselArt">
      <Link to={`/ArtworkDetails/${artworkId}`}>
        <p>Art name: {props.art.artworkName}</p>
        <p>Artist: {props.art.artistName}</p>
        <p>Cause: {props.art.causeName}</p>
        <img
          src={props.art.image}
          style={{ width: '200px', height: '200px' }}
          alt=""
        />
      </Link>
      <button onClick={handleClick}>Add to cart</button>
    </div>
  )
}
