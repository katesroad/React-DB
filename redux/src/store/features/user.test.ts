import { SET_USER, GET_USER, getUser, setUser } from './user'
import faker from 'faker'

describe('action creator', () => {
  it('getUser action creator', () => {
    expect(getUser()).toEqual({ type: GET_USER })
  })

  it('setUser action creator', () => {
    const user = {
      id: Math.floor(Math.random() * 100),
      firstName: faker.name.firstName(0),
      lastName: faker.name.lastName(0),
    }
    expect(setUser(user)).toEqual({ type: SET_USER, payload: user })
  })
})
