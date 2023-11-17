import React from 'react'
import profile1 from '../../assets/profile-1.jpg'
import profile2 from '../../assets/profile-2.jpg'
import profile3 from '../../assets/profile-3.jpg'

const SalesAnalytic = () => {
    const sales = [
        {
            image: profile1,
            title: 'Online Orders',
            time: 'Last 24 Hours',
            percentage: '+24%',
            number: '7684'
        },
        {
            image: profile2,
            title: 'Offline Orders',
            time: 'Last 24 Hours',
            percentage: '-44%',
            number: '7684'
        },
        {
            image: profile3,
            title: 'New Customers',
            time: 'Last 24 Hours',
            percentage: '+54%',
            number: '7684'
        }
    ]
  return (
    <div className='my-10'>
        <h1 className='text-3xl font-bold'>Sales Analytics</h1>
        <div>
            {sales.map((sale, index) => <div key={index} className='flex flex-row justify-between border bg-white p-5 rounded-2xl'>
                <div><img src={sale.image} className='h-10 w-10 rounded-full' alt={sale.title} /></div>
                <div>
                <div>{sale.title}</div>
                <div>{sale.time}</div>
                </div>
                <div>{sale.percentage}</div>
                <div>{sale.number}</div>
            </div>)}
        </div>
    </div>
  )
}

export default SalesAnalytic