import React from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { useSidebar } from './SideBarContext';

const SideBar = () => {
    const {  toggleSidebar } = useSidebar();

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
    <AnimatePresence>
        {toggleSidebar &&
(<motion.div initial={{ x:-30 }} whileInView={{ x:0 }} transition={{ duration: 2 }}
    className={`z-50 max-[768px]:bg-white max-[768px]:shadow-2xl max-[768px]:shadow-[#7380EC] max-[768px]:w-fit max-[768px]:px-10 max-[768px]:fixed md:flex md:flex-col  md:align-middle md:px-[50px] max-[1300px]:w-[100px] max-[1300px]:mr-[50px]  w-[250px] h-screen text-center`}>
        <div className='flex flex-row gap-20'><h1 className='text-3xl my-5 font-extrabold text-[#363949] dark:text-white'>Zeke</h1>
        <button  onClick={toggleSidebar} className='md:hidden'><span class="material-symbols-outlined">
                close
            </span></button>
        </div>
        <div className='flex flex-col gap-3'>{sidetexts.map((sidetext, index) => (<div key={index} className='w-[180px] h-[50px] flex flex-row pl-[30px] gap-3 pt-3 text-[#7B8AB0] hover:text-[#7380EC] font-semibold  hover:translate-x-3 transition-transform duration-500 hover:bg-[#E2E3F0] hover:dark:bg-[#0E1012] max-[1300px]:w-fit max-[1300px]:pr-4'><span class="material-symbols-outlined">{sidetext.icon}
</span><h1 className='text-left max-[768px]:block max-[1300px]:hidden'>{sidetext.title}</h1></div>))}</div>
        <div></div>
    </motion.div>)}
    </AnimatePresence>

  )
}

export default SideBar