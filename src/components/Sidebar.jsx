import React, { useState } from 'react'
import { assets } from '../assets/assets'

const Sidebar = () => {
  
  const [Toogle, setToogle] = useState(false)
  const handleToggle=()=>{
    setToogle(!Toogle )
    console.log(Toogle)
  }
  return (
    <>
    
    {!Toogle && <div className={Toogle?"icon flex items-center sticky":"icon flex items-center sticky justify-center mt-5 mx-3"}>


    <img onClick={handleToggle} className='h-[24px] w-[20px] object-contain ' src={assets.menu_icon} alt="" />
            </div>}


    {Toogle && <div className='min-h-screen bg bg-[#F0F4F9] w-fit flex flex-col justify-between  py-9 px-8  items-center' >
      <div className="icon p flex flex-col justify-center items">
        <div className={Toogle?"icon flex items-center sticky":"icon flex items-center sticky justify-center"}>


<img onClick={handleToggle} className='h-[24px] w-[20px] object-contain ' src={assets.menu_icon} alt="" />
        </div>
        <div className="plus bg-[#E6EAF1]  rounded-full flex items-center justify-center gap-2 mt-9  text-xl px-20 ">
 
  <img className='h-[24px] w-[20px] object-contain ' src={assets.plus_icon} alt="plusicon" />
  {Toogle && <p className='font-bold text-[20px]  text-[#989CA0] font-sans '>New Chat</p>}
      </div>
      <div className="plus  flex  mt-9 items-center

">
  
  {Toogle && <p className='font-bold text-black font-sans'>Recent</p>}
      </div>
</div> 

<div className="bottom flex flex-col gap-4  ">
  <div className="help flex gap-4 ">
    <img className='h-[24px] w-[20px] object-contain ' src={assets.question_icon} alt="Help" />{ Toogle &&<p className='font-semibold  '>Help</p>}
  </div>
  <div className="Activities  flex gap-4 ">
  <img className='h-[24px] w-[20px] object-contain ' src={assets.history_icon} alt="History" />{ Toogle &&<p className='font-semibold  '>Activities</p>}

  </div>
  <div className="Settings flex  gap-4">
  <img className='h-[24px] w-[20px] object-contain'  src={assets.setting_icon} alt="setting" />{ Toogle &&<p className='font-semibold  '>Settings</p>}


  </div>
</div>
    </div>}
    </>
  )
}

export default Sidebar
