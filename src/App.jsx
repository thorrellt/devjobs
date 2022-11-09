import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const onFormChange = () => {
    console.log('hello world')
  }

  return (
    <div className="App">
      <div className="light">
        <h1>This is an H1 class</h1>
        <h2>This is an H2 class</h2>
        <h3>This is an H3 class</h3>
        <h4>This is an H4 class</h4>
        <h5>This is an H5 class</h5>
        <p>This is an p class</p>
        <button className="prim-btn">Button 1</button>
        <button className="sec-btn-light">Button 2</button>
        <form className="flex-container test-form">
          <div className="input-container flex-container">
            <i className="bi bi-search icon" />
            <input
              onChange={onFormChange}
              type="text"
              id="name"
              name="name"
              placeholder="Enter desired job..."
            />
          </div>
        </form>
      </div>
      <div className="dark dark-container">
        <h1 className="dark-font">This is an H1 class</h1>
        <h2 className="dark-font">This is an H2 class</h2>
        <h3 className="dark-font">This is an H3 class</h3>
        <h4>This is an H4 class</h4>
        <h5>This is an H5 class</h5>
        <p>This is an p class</p>
        <button className="sec-btn-dark">Button 2</button>
        <form className="flex-container test-form">
          <div className="input-container dark-container flex-container">
            <i className="bi bi-search icon dark-font" />
            <input
              onChange={onFormChange}
              type="text"
              id="name"
              name="name"
              placeholder="Enter desired job..."
              className="dark-font"
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default App
