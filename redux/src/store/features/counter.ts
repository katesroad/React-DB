import { ReduxAction } from 'types'

export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

export const increment = () => ({ type: INCREMENT })
export const decrement = () => ({ type: DECREMENT })

export const initialState = { count: 0 }

export default function counterReducer(
  state = initialState,
  action: ReduxAction<number>
) {
  const { type, payload = 1 } = action
  switch (type) {
    case INCREMENT:
      return { ...state, count: state.count + payload }
    case DECREMENT:
      return { ...state, count: state.count - payload }
    default:
      return state
  }
}
