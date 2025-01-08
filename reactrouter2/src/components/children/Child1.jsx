import React from 'react';

const Child1 = () => {
  return (
    
    <div 
      className="clickable-card"
      style={{
        width: '200px',
        height: '200px',
        backgroundColor: '#3dde1d',
        border: '1px solid #ccc',
        borderRadius: '10px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer'
      }}
    >
      <h2>Child 1</h2>
    </div>
  );
};
export default Child1


