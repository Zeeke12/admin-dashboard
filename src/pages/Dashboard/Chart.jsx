import React from 'react'

const Chart = props => {
  return (
    <div className='flex flex-col md:flex-row gap-5 mt-3 mx-auto   dark:text-white'>
        <div className='w-full md:w-[240px] h-[228px] p-[25px] rounded-2xl bg-white dark:bg-[#202528] shadow-2xl hover:shadow transition-shadow'>
        <span class="material-symbols-outlined bg-blue-500 text-white text-[28px] p-[7px] h-[42px] w-[42px] rounded-full"> analytics</span> 
        <div className='flex flex-row gap-4'>
          <div className='text-gray-700 dark:text-white'>
          <h1 className='text-[14px]  font-semibold my-3'>Total Sales </h1>
          <h1 className='text-[24px]  font-extrabold my-3'>$37,085</h1>
          <h1 className='text-[12px] mt-7 '>Last 24 hours</h1>
          </div>
          <div>
          <svg>
              <circle cx='38' cy='38' r='36'></circle>
          </svg>
          </div>
        </div>
        </div>
        <div className='w-full md:w-[240px] h-[228px] p-[25px] rounded-2xl mr-3 bg-white dark:bg-[#202528] shadow-2xl hover:shadow transition-shadow'>
        <span class="material-symbols-outlined bg-red-500 text-white text-[28px] p-[7px] h-[42px] w-[42px] rounded-full"> bar_chart</span> 
        <div className='flex flex-row gap-4 '>
          <div className='text-gray-700 dark:text-white'>
          <h1 className='text-[14px] font-semibold my-3'>Total Expenses </h1>
          <h1 className='text-[24px]  font-extrabold my-3'>$37,085</h1>
          <h1 className='text-[12px] mt-7 text-gray-400'>Last 24 hours</h1>
          </div>
          <div>
          <svg>
              <circle cx='38' cy='38' r='36'></circle>
          </svg>
          </div>
        </div>
        </div>
        <div className='w-full md:w-[240px] h-[228px] p-[25px] rounded-2xl mr-3 bg-white dark:bg-[#202528] shadow-2xl hover:shadow transition-shadow'>
        <span class="material-symbols-outlined bg-green-500 text-white text-[28px] p-[7px] h-[42px] w-[42px] rounded-full">stacked_line_chart</span> 
        <div className='flex flex-row gap-4'>
          <div className='text-gray-700 dark:text-white'>
          <h1 className='text-[14px]  font-semibold my-3'>Total Income </h1>
          <h1 className='text-[24px]  font-extrabold my-3'>$37,085</h1>
          <h1 className='text-[12px] mt-7 text-gray-400'>Last 24 hours</h1>
          </div>
          <div>
          <svg>
              <circle cx='38' cy='38' r='36'></circle>
          </svg>
          </div>
        </div>
        </div>
    </div>
  )
}


export default Chart