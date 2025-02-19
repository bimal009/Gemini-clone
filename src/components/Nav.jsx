import React from 'react'
import { assets } from '../assets/assets'

const Nav = () => {
  return (
    <div className="flex justify-center flex-col w-full">

    <div className='flex items-center justify-between mt-5'>
      <div className="logo">
        {/* <img className='h-[80px] w-[100px] object-contain' src={assets.logo} alt="logo" />
         */}
         <h2 className='text-xl'>Gemini</h2>
      </div>
      <div className="icon h-[50px] w-[50px] object-cover  flex items-center justify-center">
  <img className='object-contain h-full w-full rounded-full' src={assets.user_icon} alt="user icon" />
</div>

    </div>
         </div>
  )
}

export default Nav
