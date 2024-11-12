import React from 'react'
import { useState } from 'react'

function App() {
    const [inputlist,setinputlist] = useState("")
    const[items,setItems]=useState([])

    const itemEvent = (e) =>{
        setinputlist(e.target.value)
    }
    const listOfItems=()=>{
        // setItems(olditems)
        // setItems([...olditems,inputlist]);
        setItems((oldItems)=>{
            return [...oldItems,inputlist];
        })
        setinputlist("")
    }
  return (
    <>
         <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2 style={{ fontSize: "24px" }}>Todo App</h2>
      <div style={{ marginBottom: "10px" }}>
        <input
        value={inputlist}
        onChange={itemEvent}
          type="text"
          placeholder="Enter a task"
          style={{
            padding: "10px",
            width: "200px",
            marginRight: "5px",
            fontSize: "16px",
          }}
        />
        <button
        onClick={listOfItems}
          style={{
            padding: "10px 15px",
            fontSize: "16px",
            cursor: "pointer",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Add Task
        </button>
      </div>
      <ul style={{ listStyleType: "none", padding: "0" }}>
      {
        items.map((itemval)=>(
            <li
            style={{
              padding: "10px",
              backgroundColor: "#f0f0f0",
              marginBottom: "5px",
              borderRadius: "5px",
              fontSize: "16px",
            }}
          >
            {itemval}
          </li>
        )
      )}
      </ul>
    </div>
    </>
  )
}

export default App