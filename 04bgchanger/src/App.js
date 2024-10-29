import { useState } from "react";


function App() {
  const [color,setColor] = useState("olive")
  
  return (
    <>
      <div className="w-full h-screen duration-200" style={{backgroundColor:color}}></div>
      <div className="fixed flex  flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-5 py-3 rounded-2xl">

        <button onClick={()=>setColor("red")} className="outline-none px-4 bg-red-500 py-1 rounded-full text-white shadow-lg">Red</button>

        <button onClick={()=>setColor("Green")} className="outline-none px-4 bg-green-500 py-1 rounded-full text-white shadow-lg">Green</button>

        <button onClick={()=>setColor("Blue")} className="outline-none px-4 bg-blue-700 py-1 rounded-full text-white shadow-lg">Blue</button>

        <button onClick={()=>setColor("yellow")} className="outline-none px-4 bg-yellow-400 py-1 rounded-full text-white shadow-lg">Yellow</button>

        <button onClick={()=>setColor("pink")} className="outline-none px-4 bg-pink-400 py-1 rounded-full text-white shadow-lg">Pink</button>

        <button onClick={()=>setColor("purple")} className="outline-none px-4 bg-purple-500 py-1 rounded-full text-white shadow-lg">Purple</button>

        <button onClick={()=>setColor("cyan")} className="outline-none px-4 bg-cyan-400 py-1 rounded-full text-white shadow-lg">Cyan</button>

        <button onClick={()=>setColor("teal")} className="outline-none px-4 bg-teal-700 py-1 rounded-full text-white shadow-lg">Teal</button>

        <button onClick={()=>setColor("orange")} className="outline-none px-4 bg-orange-500 py-1 rounded-full text-white shadow-lg">Orange</button>

        <button onClick={()=>setColor("black")} className="outline-none px-4 bg-black py-1 rounded-full text-white shadow-lg">Black</button>

        <button onClick={()=>setColor("white")} className="outline-none px-4 bg-white py-1 rounded-full text-black shadow-lg">White</button>
        </div>
      </div>
    </>
  );
}

export default App;
