import { increment } from 'store/features/counter'
import { ReduxAction } from 'types'
import { logger } from './logger'

// test middleware of logger: https://redux.js.org/recipes/writing-tests#middleware
describe('test logger', () => {
  const create = () => {
    const store = {
      getState: jest.fn(),
      dispatch: jest.fn(),
    }
    const next = jest.fn()

    const invoke = (action: ReduxAction<any>) => logger(store)(next)(action)
    return { store, next, invoke }
  }

  test('action is an object', () => {
    const { next, invoke } = create()
    const action = increment(10)
    invoke(action)
    expect(next).toHaveBeenCalledWith(action)
    expect(next).toBeCalledTimes(1)
  })
})
