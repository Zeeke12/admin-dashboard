import React from 'react'

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

  return (
    <div className='flex-grow bg-white dark:bg-[#202528] transition-colors duration-1000 rounded-2xl flex justify-center shadow-2xl  hover:transition-shadow hover:duration-1000 hover:shadow p-7'>
      <table class="table-auto text-center">
  <thead>
    <tr className='flex flex-row  text-black dark:text-white transition-colors duration-1000'>
      <th className=' w-[250px]'>Product Name</th>
      <th className=' w-[180px]'>Product Number</th>
      <th className=' w-[100px] max-[850px]:hidden'>Payment</th>
      <th className=' w-[100px] max-[850px]:hidden'>Status</th>
    </tr>
  </thead>
  <tbody>
  {orderdatas.map((orderdata, index) => (<tr key={index} className='flex flex-row font-thin text-[#677486]'>
          <td className=' w-[250px] border-b'>{orderdata.name}</td>
          <td className=' w-[180px] border-b'>{orderdata.number}</td>
          <td className=' w-[100px] max-[850px]:hidden border-b'>{orderdata.payment}</td>
          <td className={`w-[100px] max-[850px]:hidden border-b text-${orderdata.color}-800`}>{orderdata.status}</td>
          <td className=' w-[70px] border-b text-blue-400'>Details</td>
        </tr>))}
  </tbody>
</table>
    </div>
  )
}

export default Orders