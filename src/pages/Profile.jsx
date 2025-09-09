import {User,CameraIcon} from 'lucide-react'
const Profile = () => {
  return (
    <div className="flex pt-3 bg-black flex-col w-full items-center">
  <div className="flex flex-col items-center  gap-4 bg-white/20 shadow-sm w-[300px] ">
  <div>
    <div className="relative p-4 bg-gradient-to-br h-[150px] w-[150px] from-purple-300 to-purple-600 rounded-full flex justify-center  items-center">
     <User className='w-12 h-12 p-1 ' />
      <button className='flex  absolute  bottom-0 right-0 w-[40px] h-[40px] rounded-full bg-blue-700 justify-center items-center'>
<CameraIcon className='text-white  '/>
  </button>
  </div>
 
  </div>
  


  </div>
    </div>
  )
}

export default Profile