// snapshot test has error

import React from 'react'
import { HashRouter as Router } from 'react-router-dom'
import renderer from 'react-test-renderer'

import ArtistItem from '../ArtistItem'

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Router>
        <ArtistItem />
      </Router>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
