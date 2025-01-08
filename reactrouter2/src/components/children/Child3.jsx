import React from 'react';

const Child3 = () => {
  return (
    <div 
      className="clickable-card"
      style={{
        width: '200px',
        height: '200px',
        backgroundColor: '#f37',
        border: '1px solid #ccc',
        borderRadius: '10px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer'
      }}
    >
      <h2>Child 3</h2>
    </div>
  );
};
export default Child3


