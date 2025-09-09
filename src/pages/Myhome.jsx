import React from 'react'
import { LogOut,Clock5, Settings,Music, Calendar, AlarmClock, ClockAlert, TrendingUp, Siren, LucideCloudLightning, Zap, Plus, Target, Activity, PlusIcon } from 'lucide-react'
import Navbar from '../components/Navbar'
const Myhome = () => {
  return (
<>
<Navbar/>
    <div className='flex flex-col items-center  w-full bg-black '>
   

     {/*  good morning mr x */}
      <div className='flex flex-col  items-center'>

     <h1 className='text-3xl text-white'>Good morning john lifter</h1>

     <p className='text-gray-300'>ready to crush todays workout 💪</p>

{/* the two rows of squares */}
     <div className='flex gap-4 p-4 '>

  {/*    first row */}

      <div className='flex flex-col gap-4'>

       {/*  first square */}

<div className='flex flex-col justify-center bg-white/20 p-8 items-center rounded-lg border-t-white shadow-sm'>
      <div className=' p-2 rounded-full w-fit bg-blue-400/20 '>
            <Calendar className='w-8 h-8 p-1 text-blue-600  '/>
     </div>
     <div className='flex gap-2'>
     <p className='text-gray-400'><span className='text-2xl font-bold text-white'>0</span> Workouts</p>
     </div>
      <p className='text-gray-400 text-sm'>this week</p>
      </div>
             
      {/*   second square */}

<div className='flex flex-col justify-center bg-white/20 p-8 items-center rounded-lg border-t-white shadow-sm'>
      <div className=' p-2 rounded-full w-fit bg-orange-400/20 '>
            <Siren className='w-8 h-8 p-1 text-orange-600  '/>
     </div>
     <div className='flex gap-2'>
     <p className='text-gray-400'><span className='text-2xl font-bold text-white'>0</span> Days</p>
     </div>
      <p className='text-gray-400 text-sm'>Current streak</p>
      </div>
      </div>
     
     {/*  second row */}

      <div className='flex flex-col gap-4'>

{/*    first square */}

<div className='flex flex-col justify-center bg-white/20 p-8 items-center rounded-lg  shadow-sm'>
      <div className=' p-2 rounded-full w-fit bg-green-400/20 '>
            <Clock5 className='w-8 h-8 p-1 text-green-600  '/>
     </div>
     <div className='flex gap-2'>
     <p className='text-gray-400'><span className='text-2xl font-bold text-white'>0</span> hours</p>
     </div>
      <p className='text-gray-400 text-sm'>Avg duration</p>
      </div>

{/*   second square */}
<div className='flex flex-col justify-center bg-white/20 p-8 items-center rounded-lg border-t-white shadow-sm'>
      <div className=' p-2 rounded-full w-fit bg-purple-400/20 '>
            <TrendingUp className='w-8 h-8 p-1 text-purple-600  '/>
     </div>
     <div className='flex gap-2'>
     <p className='text-gray-400'><span className='text-2xl font-bold text-white'>0</span> K lbs</p>
     </div>
      <p className='text-gray-400 text-sm'>Total volume</p>
      </div>
      </div>
      
      
     </div>
<div className='p-4 flex flex-col items-center gap-4 bg-white/20 rounded-lg shadow-sm'>
        <p className='flex gap-3 items-start text-white'> <Zap className='text-yellow-300 font-bold'/> <span>Quick actions</span></p>
<div className='flex justify-center gap-2'>
<div className='flex justify-center gap-3  border-blue-500 border rounded-lg hover:bg-blue-500 hover:scale-102 transition-all duration-400 ease-in-out '>
  <div className='flex justify-center gap-3  p-4 w-[140px]'>
<Plus/>  <p>span workout</p>
  </div>

</div>
<div className='flex justify-center gap-3  border-blue-500 border rounded-lg hover:bg-blue-500 hover:scale-102 transition-all duration-400 ease-in-out '>
  <div className='flex justify-center gap-3  p-4 w-[140px]'>
<Target/>  <p>set goal</p>
  </div>

</div>
</div>
<div className='flex flex-col gap-4 items-center '>
      <div className='flex justify-center gap-4'>
       <div className='flex justify-center gap-2'>
            <Activity className='text-green-500'/>
             <p className='text-white font-bold'>Recents Workout</p>
       </div>
   <a href="/" className='text-gray-200'>&gt; View All </a>
      </div>
           <Activity className='w-20 h-20 p-1 text-gray-500'/>
           <p className='text-gray-400'>no workouts yet</p>
           <button className='flex justify-center gap-4 bg-blue-500 p-4 rounded-lg'>
            <PlusIcon /> start your first workout</button>
</div>

      </div>
      </div>
    </div>
    </>
    
  )
}

export default Myhome