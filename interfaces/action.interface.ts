import { ActionTypes } from './actionType.enum'
import User from './user.interface'

export interface Action {
  type: ActionTypes
  payload?: User
}
