import { AnyAction, applyMiddleware, combineReducers, Dispatch } from 'redux'
import { createStore } from 'redux'
import counterReducer, {
  initialState as counterState,
} from './features/counter'
import userReducer, { initialState as userState } from './features/user'

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
  combineReducers({ counter: counterReducer, user: userReducer }),
  { counter: counterState, user: userState },
  applyMiddleware(myLogger)
)

export default store
