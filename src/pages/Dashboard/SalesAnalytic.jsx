import React from 'react'

const SalesAnalytic = () => {
    const sales = [
        {
            image: 'shopping_cart',
            title: 'Online Orders',
            time: 'Last 24 Hours',
            percentage: '+24%',
            number: '7684',
            color: 'blue'
        },
        {
            image: 'local_mall',
            title: 'Offline Orders',
            time: 'Last 24 Hours',
            percentage: '-44%',
            number: '7684',
            color: 'red'
        },
        {
            image: 'person',
            title: 'New Customers',
            time: 'Last 24 Hours',
            percentage: '+54%',
            number: '7684',
            color: 'green'
        }
    ]
  return (
    <div className='my-10'>
        <h1 className='text-3xl font-bold text-gray-700 dark:text-white'>Sales Analytics</h1>
        <div>
            {sales.map((sale, index) => <div key={index} className='flex flex-row justify-between bg-white p-5 rounded-2xl my-3 dark:bg-[#202528] text-gray-700 dark:text-white'>
                <div><span class={`material-symbols-outlined bg-${sale.color}-500 text-white text-[28px] p-[7px] h-[42px] w-[42px] rounded-full`}>{sale.image}</span></div>
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