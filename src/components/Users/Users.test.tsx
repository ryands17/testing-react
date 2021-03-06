import React from 'react'
import { render } from '@testing-library/react'
import { FetchMock } from '@react-mock/fetch'
import Users from './Users'
import { IUser } from 'types/users'

const users: Partial<IUser>[] = [
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
  const { getByLabelText, findByRole } = renderUsers()
  expect(getByLabelText('loading')).toBeInTheDocument()

  let userList = await findByRole('list')
  expect(userList.children.length).toEqual(users.length)
  expect(userList.textContent).toMatchInlineSnapshot(
    `"Leanne Graham (Sincere@april.biz)Ervin Howell (Shanna@melissa.tv)"`
  )
})
