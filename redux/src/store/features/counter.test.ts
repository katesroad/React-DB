import counterReducer, {
  decrement,
  DECREMENT,
  INCREMENT,
  increment,
  initialState,
} from './counter'

const count = Math.floor(Math.random() * 1000)

describe('action creator', () => {
  it('increment action creator', () => {
    expect(increment(count)).toEqual({ type: INCREMENT, payload: count })
  })
  it('decrement action creator', () => {
    expect(decrement(count)).toEqual({ type: DECREMENT, payload: count })
  })
})

/**
 * Test counterReducer
 * Doc: https://redux.js.org/recipes/writing-tests#reducers
 */
describe('counterReducer', () => {
  it('INCREMENT action', () => {
    expect(counterReducer(initialState, increment(count))).toEqual({ count })
  })
  it('DECRENT ACTION', () => {
    expect(counterReducer(initialState, decrement(count))).toEqual({
      count: -count,
    })
  })
})
