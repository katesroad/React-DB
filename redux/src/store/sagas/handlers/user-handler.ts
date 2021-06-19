import { call, put } from '@redux-saga/core/effects'
import { setIsError, setIsLoading, setIsSuccess } from 'store/features/app'
import { setUser } from 'store/features/user'
import { IUser } from 'types'
import { fetchUser } from '../requests/user-api'

export function* handleGetUser() {
  try {
    yield put(setIsLoading())
    const user: IUser | null = yield call(fetchUser)
    yield put(setIsSuccess())
    if (user) {
      // dispatch a Redux action
      yield put(setUser(user))
    }
  } catch (e) {
    yield put(setIsError(e))
  }
}
