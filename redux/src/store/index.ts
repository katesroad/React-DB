import { applyMiddleware, combineReducers } from 'redux'
import { createStore } from 'redux'
import counterReducer, {
  initialState as counterState,
} from './features/counter'
import userReducer, { initialState as userState } from './features/user'
import { logger } from './middlewares/logger'

const middlewares = [logger]

/**
 * createStore
 * >1. reducers
 * >2. preloadState
 * >3. middlewares
 */
const store = createStore(
  combineReducers({ counter: counterReducer, user: userReducer }),
  { counter: counterState, user: userState },
  applyMiddleware(...middlewares)
)

export default store
