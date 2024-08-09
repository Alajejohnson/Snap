import React, { useState } from 'react'
import { Arrow_down, Arrow_up, Calendar, Plannig, Reminders, Todo } from '../assets'

function Features() {
    const [open, isOpen] = useState(false);

      const MouseLeave = () => {
        isOpen(false);
      }; 

  return (

        <div className='flex flex-col  md:flex-row  gap-2 relative  'onMouseLeave={MouseLeave}  >


      { open ? <p className='flex items-center gap-2 relative ' onClick={() => isOpen(false)}  >Features <img src={Arrow_down} alt="" className='' />  </p>  :         <p className='flex  items-center gap-2  ' onClick={() => isOpen(true)}  >Features <img src={Arrow_up} alt=""  />  </p>  }




      {
        open && <div className='bg-white md:shadow-md relative  md:absolute   md:top-8  rounded-xl px-6 py-7 w-fit flex flex-col gap-2 '>
    <div className='flex gap-3'> <img src={Todo} alt="" className=' '  /> <p> Todo<span className='px-1'>List</span> </p> </div>

        <div className='flex gap-3'> <img src={Calendar} alt="" className=' '  /> <p>Calendar </p> </div>

        <div className='flex gap-3'> <img src={Reminders} alt="" /> <p>Reminders </p> </div>


        <div className='flex gap-3'> <img src={Plannig} alt="" /> <p>Planning </p> </div>
    </div>
      }



    </div>
  )
}

export default Features
