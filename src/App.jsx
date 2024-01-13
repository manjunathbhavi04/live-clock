import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Clock from './components/Clock'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <center>
      <h1>Bharat Clock</h1>

      <p>This is the clock that shows the time in Bharat at all times</p>
      <p>This is the current time <Clock /></p>
    </center>
    </>
  )
}

export default App
