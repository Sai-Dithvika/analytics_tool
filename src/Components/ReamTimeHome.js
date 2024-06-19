import React from 'react';
import ActiveUsersCount from './Charts/RealTime_Report/ActiveUsersCount';
import RealTimeRegionData from './Charts/RealTime_Report/RealTimeRegionData';
import FormData from './Charts/RealTime_Report/FormData';
import Navbar from './Navbar';
import RegionData from './Charts/Report_Data/RegionData';
// import './RealTimeHome.css'; // Import the CSS file

function ReamTimeHome() {
return (

<div className='min-h-screen bg-slate-100'>
  <div className='flex flex-wrap gap-6 mt-10 justify-around m-4'>
    <div className='bg-white flex flex-col justify-around items-center flex-auto rounded-md p-4 shadow-xl'>
      <h5>ActiveUsersCount</h5>
      <ActiveUsersCount />
    </div>
    <div className="bg-white flex flex-col justify-around items-center flex-auto rounded-md p-4 shadow-xl">
          <h5 className="text-lg font-semibold mb-4">Total Form Submissions</h5>
          <FormData />
        </div>
    <div className="bg-white flex flex-col justify-around items-center w-full max-w-4xl rounded-md p-4 shadow-xl">
      <h5 className="text-lg font-semibold mb-4">ActiveUsers vs Location</h5>
      <RealTimeRegionData />
    </div>
  </div>
</div>
);
}

export default ReamTimeHome;