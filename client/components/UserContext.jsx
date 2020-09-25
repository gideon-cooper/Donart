import React, { useState, createContext } from 'react'
import { getDecodedToken, isAuthenticated } from 'authenticare/client'

export const UserContext = createContext()

export const UserProvider = ({ reducer, initialState, children }) => {
  const [user, setUser] = useState({
    username: '',
    id: null,
    about: '',
    profile_picture: '',
    name: '',
  })

  return (
    <UserContext.Provider value={[user, setUser]}>
      {children}
    </UserContext.Provider>
  )
}
export const updateUserContext = (setUser) => {
  const { username, id, about, profile_picture, name } = getDecodedToken()
  return isAuthenticated()
    ? setUser({ username, id, about, profile_picture, name })
    : null
}
export const updateUserProfile = (setUser, user, form) => {
  const { name, profile_picture, about } = form
  return setUser({ ...user, about, profile_picture, name })
}
