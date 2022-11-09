import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>This is an H1 class</h1>
      <h2>This is an H2 class</h2>
      <h3>This is an H3 class</h3>
      <h4>This is an H4 class</h4>
      <p>This is an p class</p>
    </div>
  )
}

export default App
