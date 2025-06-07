import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { AppContext } from '../../context/AppContext';

const CallToAction = () => {

  const {navigate} = useContext(AppContext);

  return (
    <div className='flex flex-col items-center gap-4 pt-10 pb-24 px-8 md:px-0'>
      <h1 className='text-xl md:text-4xl text-gray-800 font-semibold'>Learn anything, anytime, anywhere</h1>
      <p className='text-gray-500 sm:text-sm px-35'>Access high-quality courses anytime, anywhere—whether at home or on the go. Explore topics from technology to creative arts and personal growth. Learn at your own pace, on your own schedule!</p>
      <div className='flex items-center font-medium gap-6 mt-4'>
        <button className='px-10 py-3 rounded-md text-white bg-blue-600 cursor-pointer' onClick={()=>{navigate('/course-list')}}>Get started</button>
        <button className='flex items-center gap-2'>Learn more <img src={assets.arrow_icon} alt="right arrow"/></button>
      </div>
    </div>
  )
}

export default CallToAction
