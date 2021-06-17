import React from 'react'
import Voter from 'components/Voter'

function App() {
  const voters = ['John', 'Julian', 'Kate']
  return (
    <div>
      {voters.map((name) => (
        <Voter name={name} key={name} />
      ))}
    </div>
  )
}

export default App
