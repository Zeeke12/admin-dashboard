import React from 'react'
import { LuLayoutDashboard } from "react-icons/lu";


const SideBar = () => {
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
  return (
    <div className='w-[180px] px-[30px]  mx-[25px] hidden md:block'>
      <h1 className='text-4xl text-gray-700 dark:text-white font-extrabold mb-10'>Zeke</h1>
        <div className='flex flex-col  text-gray-800'>
        {sidetexts.map((sidetext, index) => <div className='text-[#7D8DA1] flex flex-row gap-[20px] text-sm w-[168px] font-semibold h-[51px] px-[28px] hover:translate-x-5 items-center hover:text-blue-700 transition-transform py-2' key={index}> <ion-icon name={`${sidetext.logo}-outline`} className='text-blue-500' size='small'></ion-icon> <div>{sidetext.text}</div></div>)}
        </div>
        <div className='text-[#7D8DA1] text-sm w-[168px] h-[51px] px-[28px] my-5 hover:translate-x-5 transition-transform py-2'> Log Out</div>
    </div>
  )
}

export default SideBar