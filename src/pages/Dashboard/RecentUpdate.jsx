import React from 'react'
import profile1 from '../../assets/profile-1.jpg'
import profile2 from '../../assets/profile-2.jpg'
import profile3 from '../../assets/profile-3.jpg'
import Updates from './Updates'

const RecentUpdate = () => {
    const updates = [
        {
            image: profile1,
            title: 'Mike Tyson',
            time: '2 minutes Ago'
        },
        {
            image: profile2,
            title: 'Mike Tyson',
            time: '3 minutes Ago'
        },
        {
            image: profile3,
            title: 'Mike Tyson',
            time: '4 minutes Ago'
        }
    ]
  return (
    <div className='w-full md:w-full   mx-auto'>
        <div className='text-2xl font-bold text-gray-700 dark:text-white'>Recent Orders</div>
        <div className='w-full bg-white dark:bg-[#202528] mr-30 shadow-2xl hover:shadow transition-shadow rounded-2xl p-3'>
            {updates.map((update, index) => <Updates key={index} image={update.image} title={update.title} time={update.time}  /> )}
        </div>
    </div>
  )
}

export default RecentUpdate