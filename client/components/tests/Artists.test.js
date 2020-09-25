import React from 'react'
import { HashRouter as Router } from 'react-router-dom'
import renderer from 'react-test-renderer'

import Artists from '../Artists'

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Router>
        <Artists />
      </Router>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
