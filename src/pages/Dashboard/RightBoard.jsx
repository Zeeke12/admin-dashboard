import React from 'react'
import profile from '../../assets/profile-1.jpg'
import showSidebar from '../../component/showSidebar'
import profile1 from '../../assets/profile-1.jpg'
import profile2 from '../../assets/profile-2.jpg'
import profile3 from '../../assets/profile-3.jpg'
import DarkmodeBtn from '../../component/DarkmodeBtn'


const RightBoard = () => {
    const updates = [
        {
            logo: profile1,
            title: 'Mike Tyson',
            time: '3 minutes Ago'
        },
        {
            logo: profile2,
            title: 'Mike Tyson',
            time: '3 minutes Ago'
        },
        {
            logo: profile3,
            title: 'Mike Tyson',
            time: '3 minutes Ago'
        },
    ]
    const sales =  [
        {
            title: 'Online Orders',
            logo: 'shopping_cart',
            time: 'Last 24 hours',
            percentage: '+24%',
            num: '0505',
            color: 'bg-blue-500'
        },
        {
            title: 'Online Orders',
            logo: 'shopping_bag',
            time: 'Last 24 hours',
            percentage: '+24%',
            num: '0505',
            color: 'bg-red-500'
        },
        {
            title: 'Online Orders',
            logo: 'person',
            time: 'Last 24 hours',
            percentage: '+24%',
            num: '0505',
            color: 'bg-green-500'
        },
    ]
  return (
    <div className='w-full md:w-fit h-screen  px-5'>
        <div className='fixed top-0 py-5 left-0 md:relative flex justify-between align-middle w-screen md:w-full bg-white md:bg-inherit h-[90px] z-30 dark:bg-[#202528] md:dark:bg-inherit px-3 text-black dark:text-white transition-colors duration-100'>
            <button className='block md:hidden' onClick={showSidebar}><span class="material-symbols-outlined">
                menu
            </span></button>
            <DarkmodeBtn />
            <div className='flex flex-row gap-3'>
            <h1 className='mx-5'>Hey Zeke</h1>
            <img src={profile} alt="zeke" className='w-[50px] h-[50px] rounded-full' />
            </div>
        </div>
        <p className='text-2xl  pb-1 font-bold text-[#363949] dark:text-white transition-colors duration-100'>Recent Updates</p>
        <div className='bg-white dark:bg-[#202528] rounded-2xl  shadow-2xl hover:shadow text-[#A3BDCC] font-light text-xs px-7 py-4 transition-colors duration-100  hover:transition-shadow'>
            {updates.map((update, index) => (<div key={index} className='flex gap-3 my-5'>
                <img src={update.logo} alt={update.title} className='h-[40px] w-[40px] rounded-full' />
                <div className=' '>
                <h1><b className='text-black dark:text-white font-bold transition-colors duration-1000'>{update.title}</b> recieved his ordered drone </h1>
                <p>{update.time}</p>
                </div>
            </div>))}
        </div>

        <p className='text-2xl my-3 pt-3 pb-1 font-bold text-[#363949] dark:text-white transition-colors duration-100'>Sales Analytics</p>
        <div>
            {sales.map((sale, index) => (<div key={index} className='flex flex-row justify-between rounded-2xl bg-white dark:bg-[#202528] text-[#363949] dark:text-white my-4 p-4 shadow-2xl hover:shadow transition-colors duration-100  hover:transition-shadow'>
                <div className='flex flex-row gap-4'>
                <div><span class={`material-symbols-outlined ${sale.color} p-3 text-white rounded-full`}>{sale.logo}</span></div>
                <div>
                <h1><b className='text-black dark:text-white font-bold transition-colors duration-100'>{sale.title}</b></h1>
                <p>{sale.time}</p>
                </div>
                </div>
                <div>{sale.percentage}</div>
                <div>{sale.num}</div>
            </div>))}
            <div className='rounded-2xl text-center p-5  border-[3px] border-dashed  border-blue-500 '>
                <h1>Add Product</h1>
            </div>
        </div>
    </div>

  )
}

export default RightBoard