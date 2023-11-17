import React from 'react'
import RecentUpdate from './RecentUpdate'
import SalesAnalytic from './SalesAnalytic'

const RightBoard = () => {
  return (
    <div className='w-screen md:w-[500px] h-full md:h-screen mx-auto md:my-[80px] my-5 md:ml-5'>
        <RecentUpdate />
        <SalesAnalytic />
    </div>
  )
}

export default RightBoard