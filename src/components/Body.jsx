import React from 'react'
import { assets } from '../assets/assets'

const Body = () => {
  return (
    <div className="w-full flex flex-col justify-between items-center min-h-screen p-4">
        {/* Navigation */}
        <div className="w-full max-w-6xl">
            <div className='flex justify-between items-center w-full mt-5 md:mx-10 mx-4'>
                <div className="logo">
                    <h2 className='text-xl'>Gemini</h2>
                </div>
                <div className="icon h-10 w-10 md:h-12 md:w-12">
                    <img className='object-contain rounded-full' src={assets.user_icon} alt="user icon" />
                </div>
            </div>
        </div>

    
            <div className="text-center">
                <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 font-bold text-3xl md:text-4xl lg:text-5xl">
                    Welcome To Gemini Clone
                </h1>
            </div>
        <div className="w-full max-w-4xl flex flex-col items-center space-y-8">
            <div className="w-full px-4">
                <div className="relative flex items-center w-full max-w-3xl mx-auto rounded-full border-2 border-gray-300 focus-within:border-black transition-all">
                    <button className="hover:bg-gray-100 rounded-full p-2 m-1">
                        <img className='h-[17px] w-[15px] object-contain md:h-[24px] md:w-[20px] md:object-contain' src={assets.plus_icon} alt="Add" />
                    </button>
                    <input 
                        type="text" 
                        placeholder='Ask Gemini' 
                        className='flex-1 py-3 md:py-4 px-4 bg-transparent focus:outline-none text-sm md:text-base' 
                    />
                    <button className="bg-gray-100 hover:bg-gray-200 rounded-full p-2 m-2 transition-colors">
                        <img className='h-[24px] w-[20px] object-contain md:h-[24px] md:w-[20px] md:object-contain' src={assets.send_icon} alt="Send" />
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Body