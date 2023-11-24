import React from 'react'
import SideBar from '../../component/SideBar'
import MainBoard from './MainBoard'
import RightBoard from './RightBoard'

const Dashboard = () => {
  return (
    <div className='flex flex-col w-screen min-[1000px]:flex-row'>
        <SideBar />
        <MainBoard />
        <RightBoard />
    </div>
  )
}

export default Dashboard