import React, { useState } from 'react';
import Usememo from './Usememo';

const MainRender = () => {
    const [count, setCount] = useState(0);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', textAlign: 'center', backgroundColor: '#f0f0f0', padding: '20px' }}>
            <Usememo />
            <button 
                onClick={() => setCount(count + 1)} 
                style={{ padding: '10px 20px', margin: '10px', fontSize: '16px', cursor: 'pointer', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px' }}
            >
                Increase
            </button>
            <h1 style={{ fontSize: '24px', color: '#333' }}>{count}</h1>
        </div>
    );
};

export default MainRender;