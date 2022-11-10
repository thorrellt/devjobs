import { useState } from 'react'
import './App.css'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)
  const onFormChange = () => {
    console.log('hello world')
  }

  return (
    <div className="App">
      <Home />
    </div>
  )
}

export default App
