import React, { useState } from 'react'

const App = () => {

  const [color, setColor] = useState("olive")
  return (

    <div className='w-full h-screen flex justify-center items-end p-5 rounded-sm'
    style={{backgroundColor : color}}>
      
      <div className=' bg-white p-4 flex gap-2.5'>
        <button className='px-4 bg-red-600 text-white rounded-md' 
        onClick={()=> setColor("red")}>red</button>
        <button className='px-4 bg-blue-600 text-white rounded-md' 
        onClick={() => setColor("blue")}>blue</button>
        <button className='px-4 bg-green-600 text-white rounded-md'
        onClick={() => setColor("green")} >green</button>
        <button className='px-4 bg-black text-white rounded-md' 
        onClick={() => setColor("black")}>black</button>
        <button className='px-4 bg-white text-black rounded-md border-2'
        onClick={() => setColor("white")} >white</button>
        <button className='px-4 bg-purple-600 text-white rounded-md' 
        onClick={() => setColor("purple")}>purple</button>
        <button className='px-4 bg-orange-600 text-white rounded-md'
        onClick={() => setColor("orange")} >orange</button>
        <button className='px-4 bg-yellow-600 text-white rounded-md'
        onClick={() => setColor("yellow")} >yellow</button>
      </div>
    </div>
  )
}

export default App
