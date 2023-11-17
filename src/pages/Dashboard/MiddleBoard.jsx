import React from 'react'
import Chart from './Chart'
import Recent from './Recent'

const MiddleBoard = () => {
  return (
    <div className='w-full md:w-[761px] h-full md:h-screen gap-[100px]'>
      <h1 className='text-3xl font-extrabold'>Dashboard</h1>
        <div>
        <input type='date' className='px-5 rounded-md bg-gray-500 dark:bg-slate-950 dark:text-white' />
        </div>
        <div>
            <Chart />
            <Recent />
        </div>
    </div>

  )
}

export default MiddleBoard