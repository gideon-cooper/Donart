import React, { useState, createContext, useContext } from 'react'
import { checkout } from 'superagent'

export const CheckoutContext = createContext()

export const CheckoutProvider = ({ reducer, initialState, children }) => {
  const [checkout, setCheckout] = useState({ checkout: false })

  return (
    <CheckoutContext.Provider value={[checkout, setCheckout]}>
      {children}
    </CheckoutContext.Provider>
  )
}
export const updateCheckout = (setCheckout) => {
  return setCheckout({ checkout: true })
}

