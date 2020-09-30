import React from 'react'
import { HashRouter as Router } from 'react-router-dom'
import renderer from 'react-test-renderer'

import EmptyCart from '../EmptyCart'

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Router>
        <EmptyCart />
      </Router>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})