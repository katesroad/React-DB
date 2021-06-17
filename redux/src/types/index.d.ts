export interface ReduxAction<T> {
  type: string
  payload: T
}

export interface IUser {
  id: number
  firstName: string
  lastName: string
}
