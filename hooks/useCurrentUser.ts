import { useContext } from 'react'
import { StateContext } from '../store/context'
import User from '../interfaces/user.interface'

export function useCurrentUser<strict extends true | false | undefined>(): strict extends true ? User | null : User {
  const { user } = useContext(StateContext)
  return user as strict extends true ? User | null : User
}
