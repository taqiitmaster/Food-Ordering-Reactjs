import React from 'react'
import one from '/image/1.jpeg'

function Nav() {
  return (
    <>
    
    <div className="nav bg-black h-28 flex justify-between pt-5">
        <div className="img pl-24">
            <img className='w-20 h-17 rounded-full' src={one} alt="" />
        </div>
        <div className="btn pt-7 pr-14">
            <button className='text-white pr-5'>Home</button>
            <button className='text-white pr-5'>Menue</button>
            <button className='text-white pr-5'>About</button>
            <button className='text-white pr-5'>Contact</button>
        </div>
    </div>
    </>
  )
}

export default Nav
