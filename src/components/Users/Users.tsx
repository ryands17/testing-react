import React, { useEffect, useState } from 'react'
import { User } from 'types/users'

const Users: React.FC = () => {
  let [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => setUsers(users))
  }, [])

  return (
    <ul data-testid="user-list" style={{ listStyle: 'none' }}>
      {users.map(user => (
        <li key={user.id}>
          {user.name} ({user.email})
        </li>
      ))}
    </ul>
  )
}

export default Users
