import React from 'react'
import { Cat } from 'components/Cat'
import './App.css'

function App() {
  const cat = {
    name: 'Kiddo',
    age: 8,
    breed: 'Chinese Lihua',
  }
  return (
    <div className="App">
      <Cat {...cat} />
    </div>
  )
}

export default App
