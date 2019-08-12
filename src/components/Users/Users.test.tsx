import React from 'react'
import { render, waitForElement } from '@testing-library/react'
import { FetchMock } from '@react-mock/fetch'
import Users from './Users'
import { User } from 'types/users'

const users: Partial<User>[] = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
  },
]

const renderUsers = () => {
  return render(
    <FetchMock
      matcher="https://jsonplaceholder.typicode.com/users"
      response={users}
    >
      <Users />
    </FetchMock>
  )
}

test(`should render the users list`, async () => {
  const { getByTestId } = renderUsers()
  expect(getByTestId('loader')).toBeInTheDocument()
  let userList = await waitForElement(() => getByTestId('user-list'))
  expect(userList.children.length).toEqual(users.length)
})
