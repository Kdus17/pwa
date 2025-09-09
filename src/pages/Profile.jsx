import {User,CameraIcon, Settings, Globe,Bell, Shield, LogOut} from 'lucide-react'
import { useState } from 'react'
const Profile = () => {
    const[on,seton]=useState(true)
  return (
    <div className="flex pt-3 bg-black flex-col w-full items-center">
  <div className="flex flex-col items-center  border border-gray-500 rounded-lg   gap-4 bg-white/20 shadow-sm w-[300px] ">
  <div>
    <div className="relative p-4 bg-gradient-to-br h-[150px] w-[150px] from-purple-300 to-purple-600 rounded-full flex justify-center  items-center">
     <User className='w-12 h-12 p-1 ' />
      <button className='flex  absolute  bottom-0 right-0 w-[40px] h-[40px] rounded-full bg-blue-700 justify-center items-center'>
<CameraIcon className='text-white  '/>
  </button>
  </div>
 
  </div>
  </div>
  <div className='flex flex-col gap-3 justify-between bg-white/20 border border-gray-500 mt-4 p-4 rounded-lg shadow-sm w-[300px]'>
    <p className='font-bold text-white self-start'>Your Stats</p>

    <div className='flex justify-between'>
    <div className='flex flex-col items-center gap-2'>
        <p className='text-3xl text-green-400 font-bold'>47</p>
        <p className='text-gray-200'>Total Workouts</p>
    </div>
    <div className='flex flex-col items-center gap-2'>
        <p className='text-3xl text-green-400 font-bold'>5</p>
        <p className='text-gray-200'>Current Streak</p>
    </div>

    </div>

    <div className='flex justify-between gap-5'>
    <div className='flex flex-col items-center gap-2'>
        <p className='text-3xl text-green-400 font-bold'>12</p>
        <p className='text-gray-200'>Longest Streak</p>
    </div>
    <div className='flex flex-col items-center gap-2'>
        <p className='text-3xl text-green-400 font-bold'>125K</p>
        <p className='text-gray-200 '>Total Volume</p>
    </div>

    </div>

  </div>
  <div className='mt-4 flex flex-col gap-4  bg-white/20 border border-gray-500 p-4 rounded-lg shadow-sm w-[400px]'>
<p className='flex  gap-4 text-white font-bold'>
    <Settings className='text-blue-500'/> Settings
</p>
<div className='flex justify-around '>
    <div className='flex gap-3'>
     <Globe/>   
    <div className='flex flex-col text-white'>
     <p className='font-bold'>Unit</p>
     <p>imperial(lbs) or Metric(kg)</p>
    </div>
    </div>
<select name="" id="">
    <option value="kg">Metric</option>
    <option value="lbs">imperial</option>
</select>
</div>
<div className='flex justify-around'>
    <div className='flex gap-3'>
     <Bell/>   
    <div className='flex flex-col text-white w-[200px]'>
     <p className='font-bold'>Notification</p>
     <p className='text-wrap'>Without reminders and achievement </p>
    </div>
    </div>
<div onClick={ ()=>{seton(!on)}} className={`w-[70px] h-[30px] relative  rounded-full ${on ? 'bg-gray-200':'bg-blue-400'}`}>
<div className={` p-4 rounded-full absolute  ${on ?'right-0 bg-black':'left-0 bg-gray-100'}`}>

</div>

</div>
</div>
  </div>

  <div  className='flex flex-col gap-3 justify-between bg-white/20 border border-gray-500 mt-4 p-4 rounded-lg shadow-sm w-[300px]'>
 <div className='flex justify-between gap-4'>
   <p className='flex gap-2 text-white'><Shield/> Privacy & Security</p>  <p>&gt;</p>
 </div>
 <div className='flex justify-between gap-4'>
   <p className='flex gap-2 text-red-500'><LogOut/> signout</p>  <p>&gt;</p>
 </div>
  </div>
    </div>
  )
}

export default Profile