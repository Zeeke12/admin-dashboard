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
  return (
    <div className='w-full min-[1000px]:w-fit h-screen px-5'>
        <div className='fixed top-0 right-0 min-[1000px]:relative flex justify-between w-screen min-[1000px]:w-full bg-white min-[1000px]:bg-inherit h-[40px] dark:bg-[#202528] min-[1000px]:dark:bg-inherit  text-black dark:text-white'>
            <button className='block min-[1000px]:hidden' onClick={showSidebar}>FFF</button>
            <DarkmodeBtn />
            <div className='flex flex-row '>
            <h1>Hey Zeke</h1>
            <img src={profile} alt="zeke" className='w-[30px] h-[30px] rounded-full' />
            </div>
        </div>
        <p className='text-2xl my-5 pt-3 pb-1 font-bold text-[#363949] dark:text-white'>Recent Updates</p>
        <div className='bg-white dark:bg-[#202528] rounded-2xl  shadow-2xl hover:shadow text-[#A3BDCC] font-light text-xs px-7 py-4'>
            {updates.map((update, index) => (<div key={index} className='flex gap-3 my-5'>
                <img src={update.logo} alt={update.title} className='h-[40px] w-[40px] rounded-full' />
                <div className='w-[180px] mr-4'>
                <h1><b className='text-black dark:text-white font-bold'>{update.title}</b> recieved his ordered drone </h1>
                <p>{update.time}</p>
                </div>
            </div>))}
        </div>
    </div>
  )
}

export default RightBoard