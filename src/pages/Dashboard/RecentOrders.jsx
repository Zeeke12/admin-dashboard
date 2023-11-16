import React from 'react'

const RecentOrders = ({ productname, productStatus, productnumber, productpayment }) => {
  return (
    <div className='flex flex-row justify-between text-center border text-sm w-full'>
        <h1 className='bg-red-500 w-[150px] h-8'>{productname}</h1>
        <h1 className='bg-red-500 w-[150px] h-8'>{productnumber}</h1>
        <h1 className='bg-red-500 w-[150px] h-8'>{productpayment}</h1>
        <h1 className='bg-red-500 w-[150px] h-8'>{productStatus}</h1>
        <h1 className='bg-red-500 w-[150px] h-8'>Details</h1>
        
    </div>
  )
}

export default RecentOrders