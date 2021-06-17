import { IUser, ReduxAction } from 'types'

export const GET_USER = 'GET_USER'
export const SET_USER = 'SET_USER'

export const getUser = () => ({ type: GET_USER })
export const setUser = (user: IUser) => ({ type: SET_USER, payload: user })

export const initialState: { user: null | IUser } = { user: null }

export default function userReducer(
  state = initialState,
  action: ReduxAction<IUser>
) {
  const { type, payload } = action
  switch (type) {
    case SET_USER:
      return { ...state, user: payload }
    default:
      return { ...state }
  }
}
