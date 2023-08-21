import React from 'react'
import jeremymobile from '../assets/image-jeremy-small.png'
import jeremytablet from '../assets/image-jeremy-small@2x.png'
import curve from '../assets/pattern-curved-line-2.svg'
const Hero = () => {
  return (
    <div>
      <div className='min-h-screen mt-32 flex flex-col lg:flex-row items-center justify-center text-white text-center lg:text-left md:min-h-[80vh] md:mx-16  bg-dark-blue rounded-card'>
          <div className='flex-1 flex flex-col lg:flex-row items-center lg:gap-3 justify-center'>
             <img className=' md:hidden relative bottom-32  ' src={jeremymobile} alt="" />
             <img className=' hidden relative md:flex bottom-32 md:bottom-2 w-[65%]  ' src={jeremytablet} alt="" />
             <img className='relative bottom-16 w-14 lg:left-8' src={curve} alt="" />
          </div>
          
          <div className='flex flex-col  flex-1 w-full gap-6 lg:gap-12 relative bottom-10 px-6 lg:px-0'>
            <h1 className='text-m md:text-l lg:text-l'>it just <span className='font-bold'>works</span> </h1>
            <p className='text-cream text-s lg:max-w-[400px] lg:text-[1.4rem] tracking-xl '>“I really like how it is an all-in-one solution that handle many of the tasks that you would normally need separate tools to do the same job. This thing is a miracle worker.”</p>
            <div className='space-y-2'>
              <h2 className='font-bold '>JEREMY ROBINSON</h2>
              <p className='text-cream text-s tracking-[3px]'>CMO, FYLO</p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Hero