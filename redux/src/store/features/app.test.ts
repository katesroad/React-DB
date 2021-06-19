import appReducer, {
  IS_LOADING,
  IS_ERROR,
  IS_SUCCESS,
  setIsLoading,
  setIsError,
  setIsSuccess,
  initialState,
} from './app'

describe('app action creators', () => {
  it('setIsLoading', () => {
    expect(setIsLoading()).toEqual({ type: IS_LOADING })
  })
  it('isError', () => {
    const error = new Error('Unknown error')
    expect(setIsError(error)).toEqual({ type: IS_ERROR, payload: error })
  })
  it('isSuccess', () => {
    expect(setIsSuccess()).toEqual({ type: IS_SUCCESS })
  })
})

describe('appReducer', () => {
  it('IS_LOADING action', () => {
    expect(appReducer(initialState, setIsLoading())).toEqual({
      ...initialState,
      isLoading: true,
      isIdle: false,
    })
  })

  it('IS_SUCCESS action', () => {
    expect(appReducer(initialState, setIsSuccess())).toEqual({
      ...initialState,
      isIdle: false,
      isSuccess: true,
    })
  })

  it('IS_ERROR action', () => {
    const error = new Error('Unknown error')
    expect(appReducer(initialState, setIsError(error))).toEqual({
      ...initialState,
      isIdle: false,
      isError: true,
      error,
    })
  })
})
