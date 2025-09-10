import React from 'react'
import { Settings,LogOut } from 'lucide-react'
const Navbar = () => {
  return (
       <div className='flex justify-around bg-gradient-to-r from-blue-500 to-purple-400 w-full'>
<div className='flex flex-col p-3 gap-3'>
  <p className='text-lg text-white'>Dashboard</p>
  <p className='text-white'>welcome back,john lifter</p>
</div>
<div className='flex gap-4 self-center'>
<Settings className='text-white'/>
<LogOut className='text-white'/>
</div>

      </div>
  )
}

export default Navbar