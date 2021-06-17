import { AnyAction, Dispatch } from 'redux'

export const logger =
  (store: any) => (next: Dispatch<AnyAction>) => (action: any) => {
    console.log('log action:', action)
    next(action)
  }
