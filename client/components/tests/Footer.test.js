import React from 'react'
import { HashRouter as Router } from 'react-router-dom'
import renderer from 'react-test-renderer'

import Footer from '../Footer'

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Router>
        <Footer />
      </Router>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
