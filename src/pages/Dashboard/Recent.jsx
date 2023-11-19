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
        <div className='text-2xl font-bold text-gray-700 dark:text-white mb-2'>Recent Orders</div>
        <div className='-[50px] bg-white rounded-2xl shadow-2xl hover:shadow transition-shadow dark:bg-[#202528] p-5'>
            <div>
                <table className='w-full text-center'>
                    <tr className='text-gray-700 dark:text-white'>
                        <th>Product Name</th>
                        <th>Product Number</th>
                        <th>Payment</th>
                        <th className='hidden md:block '>Status</th>
                    </tr>
                {products.map((product, index) => <tr className='border-b-[1px] border-gray-700 px-[120px] text-blue-300  h-9 font-light font-sans' key={index}>
                    <td>
                        {product.productname}
                    </td>
                    <td>
                        {product.productnumber}
                    </td>
                    <td>
                        {product.productpayment}
                    </td>
                    <td className='hidden md:block '>
                        {product.productStatus}
                    </td>
                    <td className='text-blue-400'>Details</td>
                </tr>)}
                </table>
                </div>
        </div>
    </div>
  )
}

export default Recent