import userReducer, {
  SET_USER,
  GET_USER,
  getUser,
  setUser,
  initialState,
} from './user'
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

describe('userReducer', () => {
  const user = {
    id: Math.floor(Math.random() * 100),
    firstName: faker.name.firstName(1),
    lastName: faker.name.lastName(0),
  }

  it('setUser action', () => {
    expect(userReducer(initialState, setUser(user))).toEqual({ user })
  })

  it('other action types', () => {
    const anotherUser = {
      id: Math.floor(Math.random() * 100),
      firstName: faker.name.firstName(1),
      lastName: faker.name.lastName(0),
    }
    expect(
      userReducer({ user: anotherUser }, { type: 'unknown', payload: user })
    ).toEqual({ user: anotherUser })
  })
})
