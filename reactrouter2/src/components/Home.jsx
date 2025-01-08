import React from 'react'
import { Link, NavLink, useNavigate } from "react-router-dom";

const Home = () => {

  
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/about')
    }
  return (
    <div>
        <h1 style={{textAlign:'center'}}>Home Page</h1>
        <button onClick={handleClick}>Move to ABOUT Page</button>
        {/* instead of navigate we can use Link tag */}
    </div>
  )
}

export default Home
