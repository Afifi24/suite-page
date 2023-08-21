import React from 'react'
import logo from '../assets/logo.svg'
import curveline from '../assets/pattern-curved-line-1.svg'
// import mobile from '../assets/image-hero-landscape.png'
import mobile from '../assets/image-hero-landscape@2x.png'
import tablet from '../assets/image-hero-portrait.png'
import desktop from '../assets/image-hero-portrait@2x.png'
const Header = () => {
  return (
    <div className='min-h-screen  bg-creme-white '>
        <div className='p-4 md:p-12'>
             <div className='flex items-center justify-between'>
                 <img  src={logo} alt="" />
                 <button className='py-3 px-4 rounded-btn border border-dark-blue duration-300 font-bold hover:bg-dark-blue hover:text-white   '>Request Beta Access</button>
             </div>
             <div className='mt-14  gap-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                   <div>
                        <div className='flex items-center justify-center'>
                        <img className='w-36' src={curveline} alt="" />
                        </div>
                        <div className='flex flex-col gap-5'>
                              <h1 className='text-m md:text-l lg:text-xl leading-m md:leading-l lg:leading-xl lg:min-w-[700px] z-10'>A <span className='text-dark-blue font-bold'>super solution</span> for your <span className='text-dark-blue font-bold'>business</span>.</h1>
                              <p className='text-s  text-gray'>Our marketing and sales automations help you scale your outreach to get more leads for your company.  </p>
                              <button className='py-4 px-10 rounded-btn duration-200 font-bold bg-dark-blue text-white w-fit hover:bg-gradient-purple-pink-orange  '>Request Beta Access</button>
                        </div>
                   </div>
                   <div>
                      <img className='md:hidden' src={mobile} alt="" />
                      <img className='hidden md:flex lg:hidden' src={tablet} alt="" />
                      <img className='hidden lg:flex' src={desktop} alt="" />
                   </div>
                   <div className='flex flex-col md:flex-row md:justify-around md:col-span-2 lg:col-auto md:gap-0 lg:flex-col gap-4 text-center '>
                     <div className='flex  flex-col'>
                       <h1 className='text-l md:text-l lg:text-l text-dark-blue font-bold'>2K+</h1>
                       <p className='text-s  text-gray'>COMPANIES</p>
                     </div>
                     <div className='flex  flex-col'>
                       <h1 className='text-l md:text-l lg:text-l text-dark-blue font-bold'>8</h1>
                       <p className='text-s  text-gray'>LANGUAGES</p>
                     </div>
                     <div className='flex flex-col'>
                       <h1 className='text-l md:text-l lg:text-l text-dark-blue font-bold'>1.2M</h1>
                       <p className='text-s  text-gray'>LEADS</p>
                     </div>
                   </div>
             </div>

        </div>
    </div>
  )
}

export default Header