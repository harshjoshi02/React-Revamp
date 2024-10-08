import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(0);

  const addValue = () => {
    if(counter < 20) {
      setCounter(prevCounter => prevCounter + 1);
      setCounter(prevCounter => prevCounter + 1);
      setCounter(prevCounter => prevCounter + 1);
      setCounter(prevCounter => prevCounter + 1);
    }
  }

  const subtractValue = () => {
    if(counter > 0) {
      setCounter(counter - 1)
    }
  }

  return (
    <>
      <h1>react revision</h1>
      <h2>counter value : {counter}</h2>

      <button
      onClick={addValue}
      >increase value</button>

      <br />

      <button
      onClick={subtractValue}
      >decrease value</button>
    </>
  )
}

export default App