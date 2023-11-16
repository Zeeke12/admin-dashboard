import React from 'react'
import DarkModeBtn from './DarkmodeBtn'

const Topbar = () => {
  return (
    <div className='flex flex-row justify-between py-5 dark:text-white'>
        <div className='flex flex-row justify-between gap-10'>
          <div className='w-[200px]'>
            <h1 className='text-2xl text-bold dark:text-white'>Zeke</h1>
          </div>
            <h1 className='text-2xl text-bold font-bold '>DASHBOARD</h1>
        </div>
        <div className='flex flex-row justify-between gap-10 py-auto'>
            <DarkModeBtn />
            <h1>Hey, Zeke</h1>
        </div>
    </div>
  )
}

export default Topbar