import { useEffect, useState } from 'react'
import User from '../interfaces/user'
import authService from '../services/auth'

export default function useUser() {
  const [user, setUser] = useState<User | null>(null)
  const [error, setError] = useState<string | null>(null)
  useEffect(() => {
    async function getProfile() {
      const response = await authService.getProfile()
      console.log('res', response)
      if (response.data) setUser(response.data)
      if (response.error) setError(response.error)
    }
    getProfile()
  }, [])
  const loading = user === null && error === null ? true : false
  return { loading, user, error }
}
