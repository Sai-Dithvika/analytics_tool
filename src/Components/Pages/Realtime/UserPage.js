import React from 'react'
import ActiveUsersCount from '../../Charts/RealTime_Report/ActiveUsersCount';

const UserPage = () => {
  return (
    <div className='flex flex-wrap justify-center items-center h-[90vh]'>
      <div className="flex flex-col  justify-around  items-center box-content h-[50vh] w-[35vw] p-4 m-auto shadow-2xl rounded-lg">
        <h3>Active Users</h3>
        <ActiveUsersCount />
    </div>
    </div>
  )
}

export default UserPage;
