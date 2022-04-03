import { Action } from '../interfaces/action.interface'
import { ActionTypes } from '../interfaces/actionType.enum'
import { State } from '../interfaces/state.interface'

export const reducer = (state: State, action: Action) : State => {
  const { type, payload } = action

  const { user } = state
  switch (type) {
    case ActionTypes.CREATE:
      console.log(action);    
      return { user: { ...payload } }
    case ActionTypes.UPDATE:
      return { user: { ...user, ...payload } }
    case ActionTypes.DELETE:
      return { user: null }
    default:
      return state
  }
}
