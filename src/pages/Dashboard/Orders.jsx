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
    <div className='flex-grow bg-white dark:bg-[#202528] rounded-2xl flex justify-center shadow-2xl hover:shadow'>
      <table class="table-auto text-center">
  <thead>
    <tr className='flex flex-row'>
      <th className='px-10'>Product Name</th>
      <th className='px-10'>Product Number</th>
      <th className='px-10'>Payment</th>
      <th className='px-10'>Status</th>
    </tr>
  </thead>
  <tbody>
  {orderdatas.map((orderdata, index) => (<tr key={index} className='flex flex-row'>
          <td className='px-10 w-[250px]'>{orderdata.name}</td>
          <td className='px-10 w-[180px]'>{orderdata.number}</td>
          <td className='px-10 w-[100px]'>{orderdata.payment}</td>
          <td className='px-10 w-[100px]'>{orderdata.status}</td>
          <td className='px-10 w-[70px]'>Details</td>
        </tr>))}
  </tbody>
</table>
    </div>
  )
}

export default Orders