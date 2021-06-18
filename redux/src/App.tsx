import React from 'react'
import Voter from 'components/Voter'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'store'
import { getUser } from 'store/features/user'

function App() {
  const voters = ['John', 'Julian', 'Kate']
  const votes = useSelector((state: RootState) => state?.counter?.count || 0)
  const user = useSelector((state: RootState) => state?.user?.user)
  const { isLoading, isSuccess } = useSelector((state: RootState) => state?.app)

  const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(getUser())
  }, [dispatch])

  return (
    <div>
      <div className="heading">
        <h2>
          Votes for
          {isLoading ? (
            <span>loading...</span>
          ) : isSuccess ? (
            <span>{' ' + user?.lastName}</span>
          ) : null}
        </h2>
        <p>
          <strong>Total votes:</strong> {votes} votes
        </p>
      </div>
      <ul>
        {voters.map((name) => (
          <li key={name}>
            <Voter name={name} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
