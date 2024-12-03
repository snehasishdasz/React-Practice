
import { useState } from "react"
import  "./ToggleSwitch.css"

const ToggleSwitch = () => {
    const [isOn,setIsOn] = useState(false)

    const handleToggleSwitch = () =>{
        setIsOn(!isOn)
    }
    const checkisOn = isOn ? "on" : "off"
  return (
    <>
        <div className={`toggle-switch ${isOn ? "bg-green" : "bg-red"}`}  onClick={handleToggleSwitch}>
        <div className={`switch ${checkisOn}`}>
            <span className="switch-state">{checkisOn}</span>
        </div>
        </div>
    </>
  )
}

export default ToggleSwitch