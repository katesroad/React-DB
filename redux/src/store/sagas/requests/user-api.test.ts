import axios from 'axios'
import faker from 'faker'
import { IUser } from 'types'
import { fetchUser } from './user-api'

// Why? Please go to: https://github.com/katesroad/FE_TEST_DB/blob/main/test_react/msw/src/hooks/todo.hooks.test.tsx
jest.mock('axios', () => ({
  get: jest.fn(),
  default: jest.fn(),
}))
const mockedAxios = axios as jest.Mocked<typeof axios>

afterEach(() => jest.clearAllMocks())

test('fetchUser successfully', async () => {
  const user: IUser = {
    id: faker.datatype.number(1000000),
    firstName: faker.name.firstName(0),
    lastName: faker.name.lastName(0),
  }
  mockedAxios.get.mockResolvedValueOnce({ data: user })
  const fetchedUser = await fetchUser()
  expect(fetchedUser).toEqual(user)
})

test('fetchUser failed', async () => {
  mockedAxios.get.mockRejectedValue({
    data: { message: 'Unauthenticated operation' },
  })
  const fetchedUser = await fetchUser()
  expect(fetchedUser).toEqual(null)
})
