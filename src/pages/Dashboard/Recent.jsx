import React from 'react'
import RecentOrders from './RecentOrders'

const Recent = () => {
    const products = [
        {
            productname: 'Foldable Mini Drone',
            productnumber: 595040,
            productpayment: 'Due',
            productStatus: 'Pending'
        },
        {
            productname: 'Foldable ',
            productnumber: 595040,
            productpayment: 'Due',
            productStatus: 'Declined'
        },
        {
            productname: 'Foldable ',
            productnumber: 595040,
            productpayment: 'Due',
            productStatus: 'Delivered'
        },
        {
            productname: 'Foldable ',
            productnumber: 595040,
            productpayment: 'Due',
            productStatus: 'Delivered'
        },
        {
            productname: 'Foldable ',
            productnumber: 595040,
            productpayment: 'Due',
            productStatus: 'Declined'
        },
        {
            productname: 'Foldable ',
            productnumber: 595040,
            productpayment: 'Due',
            productStatus: 'Pending'
        },
    ]
  return (
    <div className='w-full text-black dark:text-white text-sm my-10'>
        <div>Recent Orders</div>
        <div className='flex flex-row justify-center gap-[50px] bg-white rounded-2xl shadow-2xl hover:shadow transition-shadow dark:bg-[#202528] p-5'>
            <div><h1>Product Name</h1></div>
            <div>
                {products.map((product, index) => <RecentOrders key={index} productStatus={product.productStatus} productname={product.productname} productnumber={product.productnumber} productpayment={product.productpayment}  />)}</div>
        </div>
    </div>
  )
}

export default Recent