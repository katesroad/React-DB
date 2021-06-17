import { call, put } from '@redux-saga/core/effects'
import { setUser } from 'store/features/user'
import { IUser } from 'types'
import { fetchUser } from '../requests/user-api'

export function* handleGetUser() {
  try {
    const user: IUser | null = yield call(fetchUser)
    if (user) {
      // dispatch a Redux action
      yield put(setUser(user))
    }
  } catch (e) {}
}
