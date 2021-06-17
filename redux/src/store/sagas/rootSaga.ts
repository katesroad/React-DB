import { takeLatest } from '@redux-saga/core/effects'
import { GET_USER } from 'store/features/user'
import { handleGetUser } from './handlers/user-handler'

export function* watcherSaga() {
  // Connect the GET_USER action to handleGetUser
  yield takeLatest(GET_USER, handleGetUser)
}
