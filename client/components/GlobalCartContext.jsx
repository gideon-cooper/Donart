import React, { useState, createContext } from 'react'
import { getDecodedToken, isAuthenticated } from 'authenticare/client'

export const GlobalCartContext = createContext()

export const GlobalCartProvider = ({ reducer, initialState, children }) => {
  const defaultUser = {
    on: false,
  }

  const [globalcart, setGlobalCart] = useState(defaultUser)

  return (
    <GlobalCartContext.Provider value={[globalcart, setGlobalCart]}>
      {children}
    </GlobalCartContext.Provider>
  )
}
