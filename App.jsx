import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'

function App() {
  const [count, setCount] = useState(0);
  useEffect(()=>{
    console.log(`Count is`,count);
  },[count])

  return (
    <>
      <center><h1>Counter app</h1>
      <h1>{count}</h1>

      <button onClick={() => {
        setCount(count + 1);
        console.log(count);
      }}>Add Value</button>

     
      <button onClick={() => {
        setCount(count - 1)
      }}>Remove value</button>

  
      <button onClick={()=>{
        setCount(0)
      }}>Reset</button></center>
    </>
  )
}

export default App
