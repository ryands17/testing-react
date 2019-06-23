import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

describe(`add basic tests for App`, () => {
  it(`renders an anchor with the required link`, () => {
    const { getByTestId } = render(<App />)
    let link = getByTestId('app-link')
    expect(link.getAttribute('href')).toEqual('https://reactjs.org')
  })
})
