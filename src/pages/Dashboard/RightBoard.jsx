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
            logo: '',
            time: 'Last 24 hours',
            percentage: '+24%',
            num: '0505'
        },
        {
            title: 'Online Orders',
            logo: '',
            time: 'Last 24 hours',
            percentage: '+24%',
            num: '0505'
        },
        {
            title: 'Online Orders',
            logo: '',
            time: 'Last 24 hours',
            percentage: '+24%',
            num: '0505'
        },
    ]
  return (
    <div className='w-full min-[1000px]:w-fit h-screen px-5'>
        <div className='fixed top-0 left-0 min-[1000px]:relative flex justify-between align-baseline w-screen min-[1000px]:w-full bg-white min-[1000px]:bg-inherit h-[40px] dark:bg-[#202528] min-[1000px]:dark:bg-inherit  text-black dark:text-white transition-colors duration-1000'>
            <button className='block min-[1000px]:hidden' onClick={showSidebar}><span class="material-symbols-outlined">
menu
</span></button>
            <DarkmodeBtn />
            <div className='flex flex-row '>
            <h1>Hey Zeke</h1>
            <img src={profile} alt="zeke" className='w-[50px] h-[50px] rounded-full' />
            </div>
        </div>
        <p className='text-2xl my-5 pt-3 pb-1 font-bold text-[#363949] dark:text-white transition-colors duration-1000'>Recent Updates</p>
        <div className='bg-white dark:bg-[#202528] rounded-2xl  shadow-2xl hover:shadow text-[#A3BDCC] font-light text-xs px-7 py-4 transition-colors duration-1000  hover:transition-shadow hover:duration-1000'>
            {updates.map((update, index) => (<div key={index} className='flex gap-3 my-3'>
                <img src={update.logo} alt={update.title} className='h-[40px] w-[40px] rounded-full' />
                <div className='w-[180px] mr-2'>
                <h1><b className='text-black dark:text-white font-bold transition-colors duration-1000'>{update.title}</b> recieved his ordered drone </h1>
                <p>{update.time}</p>
                </div>
            </div>))}
        </div>

        <p className='text-2xl my-5 pt-3 pb-1 font-bold text-[#363949] dark:text-white transition-colors duration-1000'>Sales Analytics</p>
        <div>
            {sales.map((sale, index) => (<div key={index} className='flex flex-row justify-between rounded-2xl bg-white dark:bg-[#202528] text-[#363949] dark:text-white my-4 p-4'>
                <div className='flex flex-row gap-4'>
                <div><img src={profile} height='50px' width='50px' alt={sale.title} className='rounded-full' /></div>
                <div>
                    <h1>{sale.title}</h1>
                <h1>{sale.time}</h1>
                </div>
                </div>
                <div>{sale.percentage}</div>
                <div>{sale.num}</div>
            </div>))}
        </div>
    </div>
  )
}

export default RightBoard