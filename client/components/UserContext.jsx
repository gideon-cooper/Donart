import React, { useState, createContext } from 'react'
import { getDecodedToken, isAuthenticated } from 'authenticare/client'

export const UserContext = createContext()

export const UserProvider = ({ reducer, initialState, children }) => {
  const defaultUser = {
    username: '',
    id: null,
    about: '',
    image: '',
    name: ''
  }

  const [user, setUser] = useState(defaultUser)

  return (
    <UserContext.Provider value={[user, setUser]}>
      {children}
    </UserContext.Provider>
  )
}
export const updateUserContext = (setUser, user) => {
  // user will only be provided when called from App
  const { username, id, about, profile_picture, name } = getDecodedToken()
  const userFromToken = { username, id, about, image: profile_picture, name }
  setUser(user || userFromToken)
}
