import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { Context } from '../context/context'
import { useContext, useEffect} from 'react'


const Sidebar = () => {


  
  
 const{previous,
  
  previousPrompt,
  setPreviousPrompt,
  onSent,
  setRecentPrompt,
  recentPrompt,
  input,
  setInput,
  showResult,
  setShowResult,
  Loading,
  setLoading,
  resultData,
  setResultData}=useContext(Context)


  const [Toogle, setToogle] = useState(false)
  

  
  const handleToggle = () => {
    setToogle(!Toogle)
  }

  
  return (
    <div className={`min-h-screen max-h-screen bg-[#F0F4F9] flex flex-col justify-between py-9 px-4 items-center transition-all duration-300 
      ${Toogle ? 'w-[250px]' : 'w-[80px]'} `}>
      
      {/* Top Section */}
      <div className="w-full flex flex-col items-center">
        {/* Menu Icon */}
        <div className="w-full flex justify-start ">
          <img 
            onClick={handleToggle} 
            className='h-6 w-5 object-contain cursor-pointer' 
            src={assets.menu_icon} 
            alt="menu" 
          />
        </div>

        {/* New Chat Button */}
        <div className={`bg-[#E6EAF1] rounded-full flex items-center mt-9 transition-all duration-300 
          ${Toogle ? 'p-3 gap-3' : 'p-3'} md:p-3 `}>
          <img 
            className='h-[24px] w-[30px] object-contain' 
            src={assets.plus_icon} 
            alt="new chat" 
          />
          { Toogle && <p className={`font-bold text-[#989CA0] truncate ${Toogle && 'hidden'} md:inline`}>
            New Chat
          </p>}
        </div>

        {/* Recent Chats Title */}
        <div className="w-full mt-9 ">
          {Toogle && <p className={`font-bold text-black ${!Toogle && 'hidden'} md:inline`}>
            Recent
          </p>}
          <div className={`flex items-center mt-3 ${!Toogle && 'hidden'}` }  >
          <img className='w-[24px] h-[28px] object-contain font-sans text-xl' src={assets.message_icon} alt="" />
          <p>{recentPrompt}</p>
          </div>
        </div>
      </div>

     


      {/* Bottom Section */}
      <div className="w-full flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <img className='h-6 w-5 object-contain' src={assets.question_icon} alt="help" />
          {Toogle && <p className={`font-semibold ${!Toogle && 'hidden'} md:inline`}>Help</p>}
        </div>
        
        <div className="flex items-center gap-3">
          <img className='h-6 w-5 object-contain' src={assets.history_icon} alt="history" />
         {Toogle &&  <p className={`font-semibold ${!Toogle && 'hidden'} md:inline`}>Activities</p>}
        </div>
        
        <div className="flex items-center gap-3">
          <img className='h-6 w-5 object-contain' src={assets.setting_icon} alt="settings" />
         { Toogle && <p className={`font-semibold ${!Toogle && 'hidden'} md:inline`}>Settings</p>}
        </div>
      </div>
    </div>
  )
}

export default Sidebar