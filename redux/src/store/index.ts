import { AnyAction, applyMiddleware, combineReducers, Dispatch } from 'redux'
import { createStore } from 'redux'
import counterReducer from './features/counter'

const myLogger =
  (store: any) => (next: Dispatch<AnyAction>) => (action: any) => {
    console.log('log action:', action)
    next(action)
  }

/**
 * createStore
 * >1. reducers
 * >2. preloadState
 * >3. middlewares
 */
const store = createStore(
  combineReducers({ counter: counterReducer }),
  { counter: { count: 0 } },
  applyMiddleware(myLogger)
)

export default store
