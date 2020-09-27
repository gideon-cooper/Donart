import React, { useState, createContext } from 'react'
import { getDecodedToken, isAuthenticated } from 'authenticare/client'

export const UserContext = createContext()

export const UserProvider = ({ reducer, initialState, children }) => {
  const [user, setUser] = useState({
    username: '',
    id: null,
    about: '',
    image: '',
    name: ''
  })

  return (
    <UserContext.Provider value={[user, setUser]}>
      {children}
    </UserContext.Provider>
  )
}
export const updateUserContext = (setUser) => {
  const { username, id, about, image, name } = getDecodedToken()
  return isAuthenticated()
    ? setUser({ username, id, about, image, name })
    : null
}
export const updateUserProfile = (setUser, user, form) => {
  const { name, about, image } = form
  console.log("user in context file: ", user)
  return setUser({ ...user, about, name, image })
}
