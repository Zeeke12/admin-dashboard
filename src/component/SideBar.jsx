import React from 'react'

const SideBar = ({ onClose }) => {
    const sidetexts = [
        {
            title: 'Dashboard',
            icon: 'person'
        },
        {
            title: 'Customers',
            icon: 'grid_view'
        },
        {
            title: 'Orders',
            icon: 'receipt_long'
        },
        {
            title: 'Analytics',
            icon: 'insights'
        },
        {
            title: 'Messages',
            icon: 'mail_outline'
        },
        {
            title: 'Products',
            icon: 'inventory'
        },
        {
            title: 'Reports',
            icon: 'error'
        },
        {
            title: 'Settings',
            icon: 'settings'
        },
    ]
  return (
    <div className='sidebar hidden min-[1000px]:flex min-[1000px]:flex-col  min-[1000px]:align-middle min-[1000px]:px-[50px] max-[1300px]:w-[100px] max-[1300px]:mr-[50px]  w-[250px] h-screen text-center'>
        <div><h1 className='text-3xl my-5 font-extrabold text-[#363949] dark:text-white'>Zeke</h1></div>
        <div className='flex flex-col gap-3'>{sidetexts.map((sidetext, index) => (<div key={index} className='w-[180px] h-[50px] flex flex-row pl-[30px] gap-3 pt-3 text-[#7380EC] font-semibold  hover:translate-x-3 transition-transform duration-1000 hover:bg-[#E2E3F0] hover:dark:bg-[#0E1012] max-[1300px]:w-fit max-[1300px]:pr-4'><span class="material-symbols-outlined">{sidetext.icon}
</span><h1 className='text-left max-[1300px]:hidden'>{sidetext.title}</h1></div>))}</div>
        <div></div>
    </div>
  )
}

export default SideBar