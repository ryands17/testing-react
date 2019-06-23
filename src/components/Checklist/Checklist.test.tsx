import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Checklist from './Checklist'

const checklistItems = [
  {
    id: 1,
    text: 'Learn React Testing Library',
    checked: false,
  },
  {
    id: 2,
    text: 'Learn Advanced JS concepts',
    checked: false,
  },
]

describe(`check for operations on checklist`, () => {
  it(`has rendered a default of 2 items`, () => {
    const { getByTestId } = render(
      <Checklist checklistItems={checklistItems} />
    )
    let ul = getByTestId('items-list')
    expect(ul.children.length).toEqual(2)
  })

  it(`updates UI of checked item on toggling`, () => {
    const { getByLabelText } = render(
      <Checklist checklistItems={checklistItems} />
    )
    let firstItem = getByLabelText(checklistItems[0].text) as HTMLInputElement
    fireEvent.click(firstItem)
    expect(firstItem.checked).toBeTruthy()

    fireEvent.click(firstItem)
    expect(firstItem.checked).toBeFalsy()
  })

  it(`shows the checked item length`, () => {
    const { getByTestId, getByLabelText } = render(
      <Checklist checklistItems={checklistItems} />
    )
    let p = getByTestId('checked-items')

    let firstItem = getByLabelText(checklistItems[0].text) as HTMLInputElement
    fireEvent.click(firstItem)
    expect(p.textContent).toContain('1 of 2')

    let secondItem = getByLabelText(checklistItems[1].text) as HTMLInputElement
    fireEvent.click(secondItem)
    expect(p.textContent).toContain('1 of 2')
  })
})
