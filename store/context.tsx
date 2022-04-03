import React from 'react'
import { Action } from '../interfaces/action.interface'
import { State } from '../interfaces/state.interface'
import { reducer } from './reducer'
import { initialState } from './state'

type DispatchAction = (action: Action) => void

export const StateContext = React.createContext<State>(initialState)
export const DispatchContext = React.createContext<DispatchAction>(() => {})

export const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = React.useReducer<(state: State, action: Action) => State, State>(
    reducer,
    initialState,
    (arg: State) => arg
  )
  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>{children}</DispatchContext.Provider>
    </StateContext.Provider>
  )
}
