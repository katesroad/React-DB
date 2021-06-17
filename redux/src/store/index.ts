import { combineReducers } from 'redux'
import { createStore } from 'redux'
import counterReducer from './features/counter'

const reducers = combineReducers(counterReducer)

const store = createStore(reducers, { counter: { count: 0 } })

export default store
