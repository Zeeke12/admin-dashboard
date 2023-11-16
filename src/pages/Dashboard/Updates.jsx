import React from 'react'

const Updates = ({ image, title, time}) => {
  return (
    <div className='flex flex-row my-3 justify-between gap-3 mx-2 text-black text-sm font-light dark:text-white'>
        <img src={image} className='h-10 w-10 rounded-full' alt="" />
            <div className='flex flex-col justify-between'>
        <h1><b>{title} </b> has received his ordered drone</h1>
            <h1>{time}</h1>
            </div>
    </div>
  )
}

export default Updates