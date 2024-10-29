import { useState } from 'react'
import './App.css'

function App() {

  const [counter,setCounter] = useState(0)

  // let counter = 6
  const addValue = () =>{
    console.log("Value added",Math.random())
    // counter = counter + 1;
    if(counter<=20){

      setCounter(counter + 1)
    }
    console.log(counter)
  }
  const removeValue = () =>{
    if (counter > 0) {
      setCounter(counter - 1)
    }

  }
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value</button> 
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
