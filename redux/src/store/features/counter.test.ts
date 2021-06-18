import { decrement, DECREMENT, INCREMENT, increment } from './counter'

describe('action creator', () => {
  it('increment action creator', () => {
    expect(increment()).toEqual({ type: INCREMENT })
  })
  it('decrement action creator', () => {
    expect(decrement()).toEqual({ type: DECREMENT })
  })
})
