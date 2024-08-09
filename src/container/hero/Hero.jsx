import React from 'react'
import { Client1, Client2, Client3, Client4, Hero_img, Hero_mobile } from '../../assets'

function Hero() {
  return (
    <div className='hero flex flex-col-reverse lg:flex-row justify-between sm:items-center md:items-center  gap-24 py-8 md:py-20 lg:px-28  '>
      <div className='w-fit md:pt-28 text-center lg:text-start lg:px-6 '>
            <h1 className='text-4xl md:text-7xl font-bold text-[var(--black)]  '>Make <span className='lg:block '>remote work</span> </h1>
            <p className='text-lg md:text-[18px] font-medium text-[var(--gray)]  sm:w-fit md:w-11/12 mt-4 lg:mt-16 ' >Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar. </p>

            <button className='text-white hover:text-[var(--black)] bg-[var(--black)] hover:bg-transparent border-0 hover:border-2   hover:border-[var(--black)] rounded-xl mt-16 px-6  '>Learn more</button>
      
      <div className='flex gap-4 md:gap-8 items-center justify-center  object-contain lg:w-fit   mt-16 lg:mt-52 lg:items-baseline '>
      <img src={Client2} alt="" className=' ' />
        <img src={Client1} alt="" className=' ' />
        <img src={Client4} alt="" className='' />
        <img src={Client3} alt="" className='' />
        
      </div>
      
      </div>
        
      <div className='w-full object-contain  '>
      <img src={Hero_img} alt="" className='w-10/12 object-contain hidden  lg:block ' />
      <img src={Hero_mobile} alt="" className='w-full object-contain block lg:hidden ' />

      </div>
    </div>
  )
}

export default Hero
