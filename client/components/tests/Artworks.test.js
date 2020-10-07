import React from 'react'
import { HashRouter as Router } from 'react-router-dom'
import renderer from 'react-test-renderer'

import Artworks from '../Artworks'

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Router>
        <Artworks />
      </Router>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
