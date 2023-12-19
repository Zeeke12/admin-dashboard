import React from 'react';

const Sidebar = ({ onClose }) => {
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
    <div className='sidebar w-[250px] z-50 bg-white dark:bg-[#202528] transition-transform duration-1000 fixed top-0 h-screen drop-shadow-2xl shadow-[#4B5495] shadow-2xl'>
        <div className='flex flex-row justify-between'>
          <h1 className='text-3xl my-5 pl-3 font-extrabold text-[#363949] dark:text-white'>Zeke</h1>
          <button onClick={onClose}><span class="material-symbols-outlined">
close
</span></button>
          </div>
        <div className='flex flex-col gap-3'>{sidetexts.map((sidetext, index) => (<div key={index} className='w-[180px] h-[50px] flex flex-row pl-[30px] gap-3 pt-3 text-[#7380EC] font-semibold  hover:translate-x-3 transition-transform hover:bg-[#E2E3F0] hover:dark:bg-[#0E1012] '><span class="material-symbols-outlined">{sidetext.icon}
</span><h1 className='text-left'>{sidetext.title}</h1></div>))}</div>
        <div></div>
    </div>
  )
}


export default Sidebar;