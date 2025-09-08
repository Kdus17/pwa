import React from 'react'
import { LogOut, Settings,Music, Calendar } from 'lucide-react'

const Myhome = () => {
  return (
    <div className='flex flex-col items-center  w-full '>
      <div className='flex justify-around bg-gradient-to-r from-blue-500 to-purple-400 w-full'>
<div className='flex flex-col p-3 gap-3'>
  <p className='text-lg'>Dashboard</p>
  <p>welcome back,john lifter</p>
</div>
<div className='flex gap-4 self-center'>
<Settings className='text-white'/>
<LogOut className='text-white'/>
</div>

      </div>
      <div className='flex flex-col bg-black w-full items-center'>
     <h1 className='text-3xl text-white'>Good morning john lifter</h1>
     <p className='text-gray-300'>ready to crush todays workout 💪</p>
     <div className='flex gap-4 p-4'>
      <div className='flex flex-col justify-center bg-white/20 p-8 items-center rounded-lg border-t-white'>
      <div className=' p-2 rounded-full w-fit bg-red-400/20 dark:bg-yellow-300/30'>
            <Calendar className='w-6 h-6 p-1 text-red-600 dark:text-yellow-400 '/>
     </div>
     <div className='flex gap-2'>
     <p className='text-white'><span className='text-2xl'>0</span> Workouts</p>
     </div>
      <p className='text-white'>this week</p>
      </div>
      <div>

      </div>

     </div>

      </div>
    </div>
    
    
  )
}

export default Myhome