import React from 'react';

const Child2 = () => {

  return (
    <div 
      className="clickable-card"
      style={{
        width: '200px',
        height: '200px',
        backgroundColor: '#f0f345',
        border: '1px solid #ccc',
        borderRadius: '10px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer'
      }}
    >
      <h2>Child 2</h2>
    </div>
  );
};
export default Child2


