import React from 'react'
import { LogOut, Settings } from 'lucide-react'

const Myhome = () => {
  return (
    <div className='flex flex-col items-center p-6 w-full'>
      <div className='flex justify-around bg-gradient-to-r from-blue-500 to-purple-400'>
<div className='flex flex-col p-3 gap-3'>
  <p className='text-lg'>Dashboard</p>
  <p>welcome back,john lifter</p>
</div>
<div className='flex gap-4'>
<Settings className='text-white'/>
<LogOut className='text-white'/>
</div>

      </div>

    </div>
  )
}

export default Myhome