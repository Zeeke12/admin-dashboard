import React from 'react'
import DarkModeBtn from './DarkmodeBtn'
import { useState } from 'react'
import image from '../assets/profile-1.jpg'


const Topbar = () => {
  const sidetexts = [
    {
      text: "Dashboard",
      logo: 'grid'
    },
    {
      text: "Customer",
      logo: 'person'
    },
    {
        text: "Order",
        logo: 'newspaper'
      },
    {
        text: "Analytics",
        logo: 'analytics'
    },
    {
        text: "Messages",
        logo: 'chatbox-ellipses'
      },
      {
        text: "Products",
        logo: 'print'
    },
    {
        text: "Report",
        logo: 'alert-circle'
    },
    {
        text: "Settings",
        logo: 'settings'
    },
    {
        text: "Add Product",
        logo: 'add'
    },
]

    const [open, setOpen] = useState(false)

  return (
    <div className=' w-screen '>
    <div className='bg-white fixed md:bg-[#f6f6f9] dark:bg-[#181A1E] flex items-center right-0 top-0 flex-row justify-between md:justify-end w-screen md:w-fit py-5 px-5 dark:text-white'>
      <button className='block md:hidden text-left' onClick={() => setOpen(!open)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>
</button>
        <div className='flex flex-row justify-between gap-10 py-auto'>
            <DarkModeBtn />
            <button>Hey, Zeke</button>
            <img src={image} className='h-10 w-10 rounded-full' alt='Zeke'/>
        </div>
    </div>
    <div className={`h-screen  fixed shadow-blue-700 drop-shadow-2xl shadow-2xl left-0 top-0 px-[30px] py-10 bg-white dark:bg-[#181A1E] ${open ? 'block' : 'hidden'} transition-transform`}>
        <button className='fixed top-3 right-0 ' onClick={() => setOpen(!open)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>
</button>
        <div className='flex flex-col  text-gray-800'>
        {sidetexts.map((sidetext, index) => <div className='text-[#7D8DA1] text-sm w-[168px] flex flex-row gap-[20px] font-semibold h-[51px] px-[28px] hover:translate-x-5 hover:text-blue-700 transition-transform py-2' key={index}><ion-icon name={`${sidetext.logo}-outline`} className='text-blue-500' size='small'></ion-icon> <div>{sidetext.text}</div></div>)}
        </div>
        <div className='text-[#7D8DA1] text-sm w-[168px] h-[51px] px-[28px] my-16 md:my-5 hover:translate-x-5 transition-transform py-2'>Log Out</div>
    </div>
    </div>
  )
}

export default Topbar