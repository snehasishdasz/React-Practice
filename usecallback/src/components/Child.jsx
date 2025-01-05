import React, { memo } from 'react'

const Child = ({buttonName,hamdleClick}) => {
    console.log('child component is running');
  return (
    <div>
    <button onClick={hamdleClick}>{buttonName}</button>
    </div>
  )
}

export default memo(Child)


//reactMemo rerender tabhi hoga jab props changes honge , warna nahi honge
//If u r sending function then React.memo will not be able to save from re rendering