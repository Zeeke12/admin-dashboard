import React from 'react'
import SideBar from '../../component/SideBar'
import MainBoard from './MainBoard'
import RightBoard from './RightBoard'
import Orders from './Orders'
import { motion } from 'framer-motion'
import { useSidebar } from '../../component/SideBarContext'

const Dashboard = () => {

  const { isSidebarOpen } = useSidebar();


  return (
    <div className='grid grid-cols-[1fr] grid-rows-[1fr_0.8fr_1fr] md:grid-cols-[1fr_3fr_3fr] md:grid-rows-[1fr_1fr] xl:grid-cols-[0.8fr_3fr_1.4fr] xl:grid-rows-[1fr_2fr]'>
      <motion.div className={`${isSidebarOpen ? 'block' : 'hidden'} md:block  md:row-[1_/_span_2] xl:row-[1_/_span_3]`}>
        <SideBar />
        </motion.div>
        <div className=''>
        <MainBoard />
        </div>
        <div className=' row-[3_/_span_1] md:row-[1_/_span_1] md:col-[3_/span_3] xl:row-[1_/_span_3]'>
        <RightBoard />
        </div>
        <div className=' row-[2_/_span_1] md:col-[2_/span_3] md:row-[2_/span_2] xl:col-[2_/span_1] xl:row-[2_/span_1]'>
        <Orders />
        </div>
    </div>
  )
}


export default Dashboard