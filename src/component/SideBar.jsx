import React from 'react'

const SideBar = () => {
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
  return (
    <div className='w-[196px] px-[30px] py-6 mx-[25px]'>
        <div className='flex flex-col  text-gray-800'>
        {sidetexts.map((sidetext, index) => <div className='text-[#7D8DA1] text-sm w-[168px] font-semibold h-[51px] px-[28px] hover:translate-x-5 hover:text-blue-700 transition-transform py-2' key={index}>{sidetext.text}</div>)}
        </div>
        <div className='text-[#7D8DA1] text-sm w-[168px] h-[51px] px-[28px] my-5 hover:translate-x-5 transition-transform py-2'>Log Out</div>
    </div>
  )
}

export default SideBar