import React from 'react'
import ActiveUsersCount from '../../Charts/RealTime_Report/ActiveUsersCount';

const UserPage = () => {
  return (
    <div className='flex flex-wrap justify-center items-center h-[90vh]'>
        <ActiveUsersCount />
    </div>
  )
}

export default UserPage;
