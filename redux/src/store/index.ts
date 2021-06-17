import { applyMiddleware, combineReducers } from 'redux'
import { createStore } from 'redux'
import createSagaMiddleWare from 'redux-saga'
import counterReducer, {
  initialState as counterState,
} from './features/counter'
import userReducer, { initialState as userState } from './features/user'
import { logger } from './middlewares/logger'
import { watcherSaga } from './sagas/rootSaga'

const sagaMiddleware = createSagaMiddleWare()
const middlewares = [logger, sagaMiddleware]

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

sagaMiddleware.run(watcherSaga)

/**
 * Define the RootState type
 * Doc: https://redux.js.org/recipes/usage-with-typescript#define-root-state-and-dispatch-types
 */
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
