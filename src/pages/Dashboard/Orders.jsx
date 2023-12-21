import React from 'react'
import { motion } from 'framer-motion'

const Orders = () => {
    const orderdatas = [
        {
        name: 'Foldable Mini Drone',
        number: '748993',
        payment: 'Due',
        status: 'Pending',
        color: 'yellow'
        },
        {
          name: 'Gps 4K Drone',
          number: '748993',
          payment: 'Due',
          status: 'Declined',
          color: 'red'
        },
        {
          name: 'MX master 3',
          number: '748993',
          payment: 'Due',
          status: 'Delivered',
          color: 'blue'
        },
        {
          name: 'Ruko F11 Drone',
          number: '748993',
          payment: 'Due',
          status: 'Pending',
          color: 'yellow'
        },
        {
          name: 'Larvender Drone',
          number: '748993',
          payment: 'Due',
          status: 'Delivered',
          color: 'blue'
        },
        {
          name: 'Lozenge Drone',
          number: '748993',
          payment: 'Due',
          status: 'Pending',
          color: 'yellow'
        },
        {
          name: 'DJI Air 25',
          number: '748993',
          payment: 'Due',
          status: 'Delivered',
          color: 'blue'
        },
]

  return  (
    <motion.div initial={{ y: 40 }} whileInView={{ y: 0 }} transition={{ duration: 1 }} className='my-9 mx-4 grid '>
      <h1 className='text-2xl my-2 pt-3 pb-1 font-bold text-[#363949] dark:text-white transition-colors duration-100'>Recent Orders</h1>
    <div className='bg-white dark:bg-[#202528] transition-colors duration-100 rounded-2xl flex justify-center shadow-2xl p-[25px] hover:transition-shadow hover:shadow '>
    <div class="relative overflow-x-auto">
      <table class="table-fixed text-[13px] text-black dark:text-white max-[1300px]:w-full">
        <thead>
          <tr >
            <th class="py-1 pl-[50px] w-3/7 text-center">Product Name</th>
            <th class="py-1 pl-[50px] w-2/7 text-center">Product Number</th>
            <th class="py-1 pl-[50px] w-1/7 text-center ">Payment</th>
            <th class="py-1 pl-[50px] w-1/7 text-center ">Status</th>
            <th class=""></th>
          </tr>
        </thead>
        <tbody>
        {orderdatas.map((orderdata, index) => (<tr key={index}  >
          <td className='text-center py-3 pl-[50px]  border-b'>{orderdata.name}</td>
          <td className='text-center py-3  pl-[50px] border-b'>{orderdata.number}</td>
          <td className='text-center py-3  pl-[50px] border-b '>{orderdata.payment}</td>
          <td className={`text-${orderdata.color}-800 text-center py-3 pl-[50px]  border-b `}>{orderdata.status}</td>
          <td className='text-center py-3  pl-[50px] text-blue-400 border-b pr-[50px] '>Details</td>
        </tr>))}
        </tbody>
      </table>
    </div>
    </div>
    </motion.div>

  )
}

export default Orders