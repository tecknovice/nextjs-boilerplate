import { useContext, useEffect, useState } from 'react'
import { ActionTypes } from '../interfaces/actionType.enum'
import User from '../interfaces/user.interface'
import authService from '../services/auth'
import { DispatchContext } from '../store/context'

export default function useUser() {
  const [loading, setLoading] = useState<boolean>(true)
  const [user, setUser] = useState<User | null>(null)
  const [error, setError] = useState<string | null>(null)
  const dispatch = useContext(DispatchContext)
  useEffect(() => {
    async function getProfile() {
      const response = await authService.getProfile()
      if (response.data) {
        setLoading(false)
        setUser(response.data)
        dispatch({ type: ActionTypes.CREATE, payload: response.data })
      }
      if (response.error) {
        setLoading(false)
        setError(response.error)
      }
    }
    getProfile()
  }, [])
  return { loading, user, error }
}
