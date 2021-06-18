import { AnyAction, Dispatch } from 'redux'
import { ReduxAction } from 'types'

export const logger =
  (store: any) => (next: Dispatch<AnyAction>) => (action: ReduxAction<any>) => {
    console.log('log action:', action)
    next(action)
  }
