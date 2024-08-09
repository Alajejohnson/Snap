import React from 'react'
import { Close, Closex, Hamburger, Logo, Menu} from '../../assets'
import { useState } from 'react'
import Features from '../../component/Features';
import Company from '../../component/Company';

function Header() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className='header relative flex items-center justify-between text-[14px] py-6 px-6 gap-8 '>        
  

            <div className="logo flex justify-between gap-14">
                <img src={Logo} alt="logo" />          


              <div className="menu hidden md:block  ">
                <ul className='flex gap-8 
                list-none '>
                  <li><a href="#" className='text-[var(--gray)] hover:text-[var(--black)]  '> <Features />  </a></li>
                  <li><a href="#" className='text-[var(--gray)] hover:text-[var(--black)]  '> <Company /> </a></li>
                  <li><a href="#"  className='text-[var(--gray)] hover:text-[var(--black)]  '>Careers</a></li>
                  <li><a href="#"  className='text-[var(--gray)] hover:text-[var(--black)]  '>About</a></li>
                </ul>
              </div>
            </div>
            
        
        <div className="nav-btn md:flex gap-4 hidden ">
            <button className='text-[var(--gray)] bg-transparent border-0 hover:text-[var(--black)] hover:border-none '> Login </button>
            <button className='text-[var(--gray)] bg-transparent border-2 border-[var(--gray)] rounded-xl hover:border-[var(--black)]   ' >Register</button>
        </div>

       



        {/* --------- responsiveness --------- */}

        {toggle ? <img src={Close} alt="" className='block md:hidden z-10' onClick={() => setToggle(false)} /> : <img src={Menu} className='block md:hidden' alt="" onClick={() => setToggle(true)} />  }
 
        {
          toggle && <div className="menu slide-in-right  absolute top-0 bg-white h-[100vh] right-0 w-6/12 pt-[20%] px-[8%]   ">
          <ul className='flex flex-col gap-8 
          list-none '>
            <li><a href="#" className='text-[var(--gray)] hover:text-[var(--black)]  '><Features /> </a></li>
            <li><a href="#" className='text-[var(--gray)] hover:text-[var(--black)]  '> <Company /> </a></li>
            <li><a href="#"  className='text-[var(--gray)] hover:text-[var(--black)]  '>Careers</a></li>
            <li><a href="#"  className='text-[var(--gray)] hover:text-[var(--black)]  '>About</a></li>
          </ul>
          <div className="nav-btn mt-8 flex flex-col gap-4 w-full">
            <button className='text-[var(--gray)] bg-transparent border-0 hover:text-[var(--black)] hover:border-none '> Login </button>
            <button className='text-[var(--gray)] bg-transparent border-2 border-[var(--gray)] rounded-xl hover:border-[var(--black)]   ' >Register</button>
        
        </div>
        </div>
        }

      

    </div>
  )
}

export default Header
 