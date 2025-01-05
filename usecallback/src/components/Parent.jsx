import React, { useCallback, useState } from 'react'
import Child from './Child';

const Parent = () => {
    const [count,setCount] = useState(0);

    const hamdleClick = useCallback( () =>{
        setCount(count+1);
    },[count])

    
  return (
    <>
        <div style={{textAlign:'center'}}>
            <h1>Count:{count}</h1>
            <button onClick={hamdleClick}>Increment</button>
            <div>
            <Child 
                buttonName="Clickme2"
                hamdleClick={hamdleClick}

            />
            </div>
        </div>
    </>
  )
}

export default Parent


    //in useCallback we memorize the function reference and in this the function is always rerun