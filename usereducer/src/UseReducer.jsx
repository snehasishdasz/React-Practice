import React, { useReducer } from "react";

const UseReducer = () => {

   
  const reducer = (state, action) => {
    console.log(state,action)
    if(action.type === "INCRREMENT"){
      return state+1;
    }if(action.type === "DECREMENT"){
      return state-1;
    }
  };
  const [count, dispatch] = useReducer(reducer, 0);


  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
      }}
    >
      <h1>useReducer Hook</h1>
      <h2>Count:{count} </h2>
      <div style={{ padding: "8px" }}>
        <button
          style={{ margin: "0 8px", padding: "8px 16px", fontSize: "16px" }}
          onClick={()=>dispatch({ type: "INCRREMENT"})}
        >
          Increment
        </button>
        <button
          style={{ margin: "0 8px", padding:  "8px 16px", fontSize: "16px" }}
          onClick={()=>dispatch({ type: "DECREMENT"})}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default UseReducer;
