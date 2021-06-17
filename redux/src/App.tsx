import React from 'react'
import Voter from 'components/Voter'
import { useSelector } from 'react-redux'
import { RootState } from 'store'

function App() {
  const voters = ['John', 'Julian', 'Kate']
  const votes = useSelector((state: RootState) => {
    return state?.counter?.count || 0
  })
  return (
    <div>
      <h2>Total votes: {votes}</h2>
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
