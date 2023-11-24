import React from 'react'
import Chart from './Chart'
import Orders from './Orders'

const MainBoard = () => {
  return (
    <div className='flex-grow pt-[40px] min-[1000px]:pt-0 px-5'>
        <div><h1 className='text-3xl my-5 font-extrabold text-[#363949] dark:text-white'>Dashboard</h1></div>
        <div className='py-4'><input type='date' /></div>
        <div>
            <Chart />
        </div>
        <div>
        <p className='text-2xl my-5 pt-3 pb-1 font-bold text-[#363949] dark:text-white'>Recent Updates</p>
            <Orders />
        </div>
        <div></div>
    </div>
  )
}

export default MainBoard