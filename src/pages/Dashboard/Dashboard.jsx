import React, { useEffect } from 'react'
import Topbar from '../../component/Topbar';
import SideBar from '../../component/SideBar';
import MiddleBoard from './MiddleBoard';
import RightBoard from './RightBoard';

const Dashboard = () => {
  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, []);
    
  return (
    <div>
      <div>
      <Topbar />
      </div>
      <div className='flex flex-row'>
      <SideBar />
      <MiddleBoard />
      <RightBoard />
      </div>
    </div>
  )
}

export default Dashboard