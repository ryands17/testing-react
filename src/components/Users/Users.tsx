import React, { useEffect, useState } from 'react'
import { User } from 'types/users'
import { getUsers } from 'services/users'

const Users: React.FC = () => {
  let [users, setUsers] = useState<User[]>([])
  let [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    getUsers()
      .then(users => setUsers(users))
      .catch(console.error)
      .then(() => setLoading(false))
  }, [])

  return loading ? (
    <p data-testid="loader">Loading ...</p>
  ) : (
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
