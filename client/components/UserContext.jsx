import React, { useState, createContext } from 'react'
import { getDecodedToken, isAuthenticated } from 'authenticare/client'

export const UserContext = createContext()

export const UserProvider = ({ reducer, initialState, children }) => {
  let defaultUser = {
    username: '',
    id: null,
    about: '',
    image: '',
    name: ''
  }
  if (isAuthenticated()) {
    const { username, id, about, profile_picture, name } = getDecodedToken()
    defaultUser = { username, id, about, image: profile_picture, name }
  }

  const [user, setUser] = useState(defaultUser)

  return (
    <UserContext.Provider value={[user, setUser]}>
      {children}
    </UserContext.Provider>
  )
}
export const updateUserContext = (setUser) => {
  const { username, id, about, profile_picture, name } = getDecodedToken()
  return isAuthenticated()
    ? setUser({ username, id, about, image: profile_picture, name })
    : null
}
export const updateUserProfile = (setUser, user, form) => {
  const { name, about, image } = form
  // console.log("user in context file: ", user)
  return setUser({ ...user, about, name, image })
}
