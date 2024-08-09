import React from 'react'
import { useState } from 'react'
import { Arrow_down, Arrow_up } from '../assets'

function Company() {
    const [open, isOpen] = useState(false);

    const MouseEnter = () => {
        isOpen(true);
      };
      const MouseLeave = () => {
        isOpen(false);
      }; 

  return (
        <div className='flex flex-col  md:flex-row gap-2 relative' onMouseLeave={MouseLeave}  >
{/* onMouseEnter={MouseEnter}  */}

{ open ?         <p className='flex  items-center gap-2 relative ' onClick={() => isOpen(false)}  >Company <img src={Arrow_down} alt="" className='' />  </p>  :         <p className='flex  items-center gap-2  ' onClick={() => isOpen(true)}  >Company <img src={Arrow_up} alt=""  />  </p>  }



{
  open && <div className='bg-white md:shadow-md md:absolute top-0 md:top-8  rounded-xl px-7 py-4 w-fit flex flex-col gap-2 '>
  <div className='flex gap-3'>  <p>History </p> </div>

  <div className='flex gap-3'>  <p>Our Team </p> </div>

  <div className='flex gap-3'> <p>Blog</p> </div>


</div>
}

    </div>
  )
}

export default Company
