import React from 'react'
import ActiveUsersCount from '../../Charts/RealTime_Report/ActiveUsersCount';

const UserPage = () => {
  return (
    <div className='flex flex-col justify-center items-center h-[90vh]'>
        <div>Active Users Count</div>
        <ActiveUsersCount />
    </div>
  )
}

export default UserPage;
