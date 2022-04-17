import { useCallback, useContext, useEffect, useState } from 'react'
import { ActionTypes } from '../interfaces/actionType.enum'
import User from '../interfaces/user.interface'
import UserService from '../services/user'
import { DispatchContext, StateContext } from '../store/context'

export default function useUser() {
  const [loading, setLoading] = useState<boolean>(true)
  const state = useContext(StateContext)
  const dispatch = useContext(DispatchContext)
  const getProfile = async () => {
    if (state.user) {
      setLoading(false)
      return
    }
    const response = await UserService.getProfile()
    if (response.data) {
      dispatch({ type: ActionTypes.CREATE, payload: response.data })
    }
    setLoading(false)
  }
  useEffect(() => {
    getProfile()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return { loading, getProfile }
}
