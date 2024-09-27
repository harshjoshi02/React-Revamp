import React from "react"
import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      
      <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>

        <div className=" bg-black fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 py-2 mx-2 rounded-xl">

          <div className=" bg-white flex flex-wrap justify-center mx-2 shadow-lg px-2 py-1 rounded-xl" style={{backgroundColor:"red"}}>
            <button className=" outline-none px-2"
            onClick={() => setColor("red")}>Red</button>
          </div>
          <div className=" bg-white flex flex-wrap justify-center mx-2 shadow-lg px-2 py-1 rounded-xl" style={{backgroundColor:"grey"}}>
            <button className=" outline-none px-2"
            onClick={() => setColor("grey")}>Grey</button>
          </div>
          <div className=" bg-white flex flex-wrap justify-center mx-2 shadow-lg px-2 py-1 rounded-xl" style={{backgroundColor:"orange"}}>
            <button className=" outline-none px-2"
            onClick={() => setColor("orange")}>Orange</button>
          </div>
          <div className=" bg-white flex flex-wrap justify-center mx-2 shadow-lg px-2 py-1 rounded-xl" style={{backgroundColor:"olive"}}>
            <button className=" outline-none px-2"
            onClick={() => setColor("olive")}>Olive</button>
          </div>
          <div className=" bg-white flex flex-wrap justify-center mx-2 shadow-lg px-2 py-1 rounded-xl" style={{backgroundColor:"pink"}}>
            <button className=" outline-none px-2"
            onClick={() => setColor("pink")}>Pink</button>
          </div>
          

        </div>
      </div>
      
    </>
  )
}

export default App
