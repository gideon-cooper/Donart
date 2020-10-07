// failing snapshot

import React from 'react'
import { HashRouter as Router } from 'react-router-dom'
import renderer from 'react-test-renderer'

import ArtistBio from '../ArtistBio'

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Router>
        <ArtistBio />
      </Router>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
