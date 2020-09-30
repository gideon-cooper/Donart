import React from 'react'
import { HashRouter as Router } from 'react-router-dom'
import renderer from 'react-test-renderer'

import About from '../About'

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Router>
        <About />
      </Router>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
