import React from 'react'

const Updates = ({ image, title, time}) => {
  return (
    <div className='flex flex-row my-3 justify-start md:justify-between gap-0 md:gap-3 mx-2  text-sm font-light text-gray-700'>
        <img src={image} className='h-10 w-10 rounded-full' alt={title} />
            <div className='flex flex-col justify-between'>
        <h1><b className='font-semibold text-gray-700 dark:text-white'>{title} </b> has received his ordered drone</h1>
            <h1>{time}</h1>
            </div>
    </div>
  )
}

export default Updates