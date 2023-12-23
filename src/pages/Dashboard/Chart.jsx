import React from 'react'
import { motion } from 'framer-motion'

const Chart = () => {
    const chartdatas = [
        {
            logo: 'analytics',
            title: 'Total Sales',
            price: '$37,074',
            time: 'Last 24 hours',
            color: 'blue'
        },
        {
            logo: 'bar_chart',
            title: 'Total Sales',
            price: '$37,074',
            time: 'Last 24 hours',
            color: 'red'
        },
        {
            logo: 'stacked_line_chart',
            title: 'Total Sales',
            price: '$37,074',
            time: 'Last 24 hours',
            color: 'green'
        },
    ]
  return (
    <div  className='flex flex-col min-[1300px]:flex-row justify-around gap-5'>
        {chartdatas.map((chartdata, index) => (<motion.div initial={{ y: 40 }} whileInView={{ y: 0 }} transition={{ duration: 1 }} key={index} className='bg-white dark:bg-[#202528] transition-colors duration-100 hover:shadow hover:transition-shadow  shadow-2xl rounded-3xl h-[200px] flex-grow flex flex-row p-5 justify-between align-middle'>
            <div cl>
            <span class={`material-symbols-outlined bg-${chartdata.color}-500 p-3 text-white rounded-full`} >
{chartdata.logo}
</span>
<h1>{chartdata.title}</h1>
<h1 className='font-extrabold text-2xl '>{chartdata.price}</h1>
<h1>{chartdata.time}</h1>
            </div>
            <div>
            
            </div>

        </motion.div>))}
    </div>
  )
}

export default Chart