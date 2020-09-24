import React from 'react'
import { Route } from 'react-router-dom'
import renderer from 'react-test-renderer'

import Artworks from '../Artworks'

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Route>
        <Artworks />
      </Route>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
