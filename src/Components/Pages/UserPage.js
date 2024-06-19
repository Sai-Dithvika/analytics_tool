import React from 'react';
import TotalUsersCount from '../Charts/Report_Data/TotalUsersCount';
import MonthlyReport from '../Charts/Report_Data/MonthlyReport';
import PagePath from '../Charts/Report_Data/PagePath';

function UserPage() {
  return (
    <div className="flex flex-col justify-center items-center mt-10 h-90vh" >
    <div className="flex flex-wrap justify-between space-x-20">
    <div className="flex flex-col  justify-evenly  items-center box-content h-[50vh] w-[35vw] p-4 m-auto shadow-2xl rounded-lg">
    <h3 className="text-center ">Users Count</h3>
    <TotalUsersCount />
    </div>
    <div className='flex flex-col justify-evenly items-center box-content h-[50vh] w-[35vw] p-4 m-auto shadow-2xl rounded-lg'>
    <h3 className="text-center">Monthly Report</h3>
    <MonthlyReport/>
    </div>
    </div>
    <div className='box-content h-[70vh] w-[75vw] p-4 m-10 shadow-2xl rounded-lg'>
    <h3 className="text-center"> Users vs New Users</h3>
    <PagePath/>
    </div>
      
    </div>
  )
}

export default UserPage;
