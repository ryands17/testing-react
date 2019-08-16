import React, { useEffect, useState } from 'react'
import { IUser } from 'types/users'
import { getUsers } from 'services/users'

const Users: React.FC = () => {
  let [users, setUsers] = useState<IUser[]>([])
  let [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    getUsers()
      .then(users => setUsers(users))
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return <p aria-label="loading">Loading ...</p>
  }

  return (
    <ul style={{ listStyle: 'none' }}>
      {users.map(user => (
        <li key={user.id}>
          {user.name} ({user.email})
        </li>
      ))}
    </ul>
  )
}

export default Users
