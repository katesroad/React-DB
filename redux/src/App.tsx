import React from 'react'
import Voter from 'components/Voter'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'store'
import { getUser } from 'store/features/user'
import './App.scss'

function App() {
  const voters = ['John', 'Julian', 'Kate']
  const votes = useSelector((state: RootState) => state?.counter?.count || 0)
  const user = useSelector((state: RootState) => state?.user?.user)
  const { isLoading, isIdle } = useSelector((state: RootState) => state?.app)

  const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(getUser())
  }, [dispatch])

  if (isLoading || isIdle) {
    return <p>Loading...</p>
  }

  return (
    <div className="App">
      <div className="heading">
        <h2>
          Votes for
          <span>{' ' + user?.lastName}</span>
        </h2>
        <p>
          <strong>Total votes:</strong>
          <span aria-label="total-votes">{votes} votes</span>
        </p>
      </div>
      <ul>
        {voters.map((name) => (
          <li key={name} aria-label={`voter-${name}`}>
            <Voter name={name} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
