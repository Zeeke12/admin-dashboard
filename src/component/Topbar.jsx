import React from 'react'
import DarkModeBtn from './DarkmodeBtn'
import { useState } from 'react'
import image from '../assets/profile-1.jpg'

const Topbar = () => {
  const sidetexts = [
    {
      text: "Dashboard"
    },
    {
      text: "Customer"
    },
    {
        text: "Order"
      },
    {
        text: "Analytics"
    },
    {
        text: "Messages"
      },
    {
        text: "Products"
    },
    {
        text: "Report"
    },
    {
        text: "Settings"
    },
    {
        text: "Add Product"
    },
]

    const [open, setOpen] = useState(false)

  return (
    <div className=' w-screen '>
    <div className='bg-white fixed md:bg-[#f6f6f9] dark:bg-[#181A1E] flex items-center right-0 top-0 flex-row justify-between md:justify-end w-screen md:w-fit py-5 pr-5 dark:text-white'>
      <button className='block md:hidden text-left' onClick={() => setOpen(!open)}><ion-icon name='menu-outline}'></ion-icon>ncncnc</button>
        <div className='flex flex-row justify-between gap-10 py-auto'>
            <DarkModeBtn />
            <button>Hey, Zeke</button>
            <img src={image} className='h-10 w-10 rounded-full' alt='Zeke'/>
        </div>
    </div>
    <div className={`h-screen absolute shadow-blue-700 drop-shadow-2xl shadow-2xl left-0 top-0 px-[30px] py-10 bg-white ${open ? 'block' : 'hidden'} transition-transform`}>
        <button className='fixed top-3 right-0 ' onClick={() => setOpen(!open)}><ion-icon name='close-outline}'></ion-icon>nbnbn</button>
        <div className='flex flex-col  text-gray-800'>
        {sidetexts.map((sidetext, index) => <div className='text-[#7D8DA1] text-sm w-[168px] font-semibold h-[51px] px-[28px] hover:translate-x-5 hover:text-blue-700 transition-transform py-2' key={index}>{sidetext.text}</div>)}
        </div>
        <div className='text-[#7D8DA1] text-sm w-[168px] h-[51px] px-[28px] my-16 md:my-5 hover:translate-x-5 transition-transform py-2'>Log Out</div>
    </div>
    </div>
  )
}

export default Topbar