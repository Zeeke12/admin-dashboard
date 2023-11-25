import React from 'react'

const Chart = () => {
    const chartdatas = [
        {
            logo: '',
            title: 'Total Sales',
            price: '$37,074',
            time: 'Last 24 hours'
        },
        {
            logo: '',
            title: 'Total Sales',
            price: '$37,074',
            time: 'Last 24 hours'
        },
        {
            logo: '',
            title: 'Total Sales',
            price: '$37,074',
            time: 'Last 24 hours'
        },
    ]
  return (
    <div className='flex flex-col min-[1200px]:flex-row justify-around gap-5'>
        {chartdatas.map((chartdata, index) => (<div key={index} className='bg-white dark:bg-[#202528] transition-colors duration-1000 hover:shadow hover:transition-shadow hover:duration-1000 shadow-2xl rounded-3xl h-[200px] flex-grow'>

        </div>))}
    </div>
  )
}

export default Chart