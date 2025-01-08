import React from 'react'

const Error = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f8f8f8'
    }}>
      <h1 style={{
        fontSize: '6rem',
        margin: '0',
        color: '#e74c3c'
      }}>
        404
      </h1>
      <h2 style={{
        fontSize: '2rem',
        margin: '20px 0',
        color: '#333'
      }}>
        Oops! Page Not Found
      </h2>
      <p style={{
        fontSize: '1.2rem',
        color: '#666',
        textAlign: 'center',
        maxWidth: '500px',
        lineHeight: '1.6'
      }}>
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <a href="/" style={{
        marginTop: '30px',
        padding: '10px 20px',
        backgroundColor: '#3498db',
        color: 'white',
        textDecoration: 'none',
        borderRadius: '5px',
        fontSize: '1rem',
        transition: 'background-color 0.3s'
      }}>
        Go to Homepage
      </a>
    </div>
  )
}

export default Error