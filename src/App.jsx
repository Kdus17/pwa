import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='flex flex-col justify-center items-center min-h-screen'>
      <div className='relative'>
        <button className='absolute px-2 py-1 z-100 font-black font-mono' onClick={()=>{setCount(count+1)}}>
          {count}
        </button>
        <img src={reactLogo} alt="" className='scale-1000 hover:rotate-1080 transition-all duration-1900 ease-in-out'/>
      </div>

    </div>
    </>
  )
}

export default App
