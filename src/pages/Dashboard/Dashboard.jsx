import React, { useEffect } from 'react'
import Topbar from '../../component/Topbar';
import MiddleBoard from './MiddleBoard';
import RightBoard from './RightBoard';
import SideBar from '../../component/SideBar';

const Dashboard = () => {
  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, []);
    
  return (
    <div>
      <div className='flex flex-col md:flex-row py-[100px] md:py-3'>
      <SideBar />
      <MiddleBoard />
      <RightBoard />
      </div>
    </div>
  )
}

export default Dashboard