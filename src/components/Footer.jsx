import React from 'react'
import logo from '../assets/logo.svg'
import facebook from '../assets/icon-facebook.svg'
import twitter from '../assets/icon-twitter.svg'
import instagram from '../assets/icon-instagram.svg'
const Footer = () => {
  return (
    <div>
        <div className='p-4 md:p-12 flex pt-10 flex-col min-h-[40vh]  md:flex-row items-center md:items-end  bg-cream justify-between'>
          <img src={logo} alt="" />
          <p className='text-gray text-s md:text-body'>Copyright - Suite</p>
          <div className='flex items-center gap-8'>
            <img src={facebook} alt="" />
            <img src={twitter} alt="" />
            <img src={instagram} alt="" />
          </div>

        </div>
    </div>
  )
}

export default Footer