// snapshot failing

import React from 'react'
import renderer from 'react-test-renderer'

import ArtistBio from '../ArtistBio'

it('renders correctly', () => {
  const tree = renderer
    .create(
      <ArtistBio />
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
