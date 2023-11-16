import React from 'react'
import Chart from './Chart'
import Recent from './Recent'

const MiddleBoard = () => {
  return (
    <div className='w-[761px] h-screen'>
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