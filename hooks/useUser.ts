import { useContext, useEffect, useState } from 'react'
import { ActionTypes } from '../interfaces/actionType.enum'
import User from '../interfaces/user.interface'
import authService from '../services/auth'
import { DispatchContext } from '../store/context'

export default function useUser() {
  const [user, setUser] = useState<User | null>(null)
  const [error, setError] = useState<string | null>(null)
  const dispatch = useContext(DispatchContext)
  useEffect(() => {
    async function getProfile() {
      const response = await authService.getProfile()
      console.log('res', response)
      if (response.data) {
        setUser(response.data)
        dispatch({ type: ActionTypes.CREATE, payload: response.data })
      }
      if (response.error) setError(response.error)
    }
    getProfile()
  }, [])
  const loading = user === null && error === null ? true : false
  return { loading, user, error }
}
