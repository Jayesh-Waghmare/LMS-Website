import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {

  const now = new Date();
  const year = now.getFullYear();

  return (
    <footer className='flex md:flex-row flex-col-reverse items-center justify-between text-left w-full px-8 border-t'>
      <div className='flex items-center gap-4'>
        <img className='hidden md:block w-35' src={assets.LogoNavbar} alt="logo" />
        <div className='hidden md:block h-7 w-px bg-gray-500/60'></div> 
        <p className='py-4 text-center text-xs md:text-sm text-gray-500'>Copyright {year} © LearnSphere. All Rights Reserved.</p>
      </div>

      <div className='flex items-center gap-3 max-md:mt-4'>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <img src={assets.facebook_icon} alt="facebook_icon"/>
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <img className='h-10 w-10 rounded-2xl' src={assets.Twitter_logo} alt="Twitter_icon"/>
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <img src={assets.instagram_icon} alt="instagram_icon"/>
        </a>
      </div>

    </footer>
  )
}

export default Footer
