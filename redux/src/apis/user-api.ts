import axios from 'axios'
import { IUser } from 'types'

/**
 * To fetch user data
 * @returns Promise<IUser|null>
 */
export function fetchUser(): Promise<IUser | null> {
  return axios
    .get('http://my-json-server.typicode.com/atothey/demo/user')
    .then((res) => res.data as IUser)
    .catch((e) => {
      console.warn(e)
      return null
    })
}
