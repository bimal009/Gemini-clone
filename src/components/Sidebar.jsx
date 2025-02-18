import React from 'react'
import { assets } from '../assets/assets'

const Sidebar = () => {
  return (
    <div className='text-black bg-amber-600 w-fit mx-20 px-20 justify-center flex'>
      


     <img className=" sticky w-[20px] h-[24px]" src={assets.menu_icon} alt="menu icon" />
     
      
    </div>
  )
}

export default Sidebar
