import React from 'react'
import Chart from './Chart'

const MainBoard = () => {
  return (
    <div className='flex-grow  px-5'>
        <div><h1 className='text-3xl my-5 mt-[100px] md:mt-5 font-extrabold text-[#363949] dark:text-white transition-colors duration-100'>Dashboard</h1></div>
        <div className='py-4'><input type='date' /></div>
        <div>
            <Chart />
        </div>
    </div>

  )
}

export default MainBoard