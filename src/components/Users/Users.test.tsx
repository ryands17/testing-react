import React from 'react'
import { render } from '@testing-library/react'
import Users from './Users'

describe(`testing the 'User' component`, () => {
  it(`should render the component correctly`, () => {
    const { getByTestId } = render(<Users />)
    expect(getByTestId('user-list')).toBeInTheDocument()
  })
})
