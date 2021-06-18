import { ReduxAction } from 'types'

export const IS_LOADING = 'IS_LOADING'
export const IS_ERROR = 'IS_ERROR'
export const IS_SUCCESS = 'IS_SUCCESS'

export const setIsLoading = () => ({ type: IS_LOADING })

export const setIsError = (error: { message: string }) => ({
  type: IS_ERROR,
  payload: error,
})

export const setIsSuccess = () => ({ type: IS_SUCCESS })

export const initialState = {
  error: null,
  isIdle: true,
  isError: false,
  isLoading: false,
  isSuccess: false,
}

interface AppAction extends Partial<ReduxAction<any>> {
  type: string
}

export default function appReducer(state = initialState, action: AppAction) {
  const { type, payload } = action
  switch (type) {
    case IS_LOADING: {
      return { ...initialState, isLoading: true, isIdle: false }
    }
    case IS_ERROR: {
      return { ...initialState, isError: true, isIdle: false, error: payload }
    }
    case IS_SUCCESS: {
      return { ...initialState, isSuccess: true, isIdle: false }
    }
    default:
      return { ...state }
  }
}
