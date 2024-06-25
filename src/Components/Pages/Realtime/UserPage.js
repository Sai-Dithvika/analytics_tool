import React from 'react'
import ActiveUsersCount from '../../Charts/RealTime_Report/ActiveUsersCount';
import useDataStore from '../../../Store/useDataStore';
import Loader from '../../Templates/Loader';

const UserPage = () => {
  const {loader}=useDataStore();
  return (
    <>
    <div className={'flex flex-wrap justify-center items-center h-[90vh] '+(loader?"hidden":"")}>
      <div className="flex flex-col  justify-around  items-center box-content h-[50vh] w-[35vw] p-4 m-auto shadow-2xl rounded-lg">
        <h3>Active Users</h3>
        <ActiveUsersCount />
    </div>
    </div>
        {loader==1 &&
          <Loader/>}
        </>
  )
}

export default UserPage;
