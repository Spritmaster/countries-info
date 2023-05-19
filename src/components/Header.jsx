import React from 'react'
import moon from '../icon/moon.svg'

const Header = () => {
  const handleDark=()=>{
    const html =document.querySelector("html")
    html.classList.toggle("dark")
  }
  return (
    <div className=' bg-white dark:bg-[#2b3844] py-6 shadow-[0px_2px_4px_0px_#0000000E]'>
        <div className='flex container px-4 justify-between items-center mx-auto'>
        <h1 className='font-extrabold text-2xl'>Where in the world?</h1>
        <div onClick={handleDark} className='flex items-center gap-2'>
            <img src={moon} alt="moon" />
            <span>Dark Mode</span>
        </div>
        </div>
    </div>
  )
}

export default Header