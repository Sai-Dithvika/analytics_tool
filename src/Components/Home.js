import React from 'react';
import '../Components/home.css';

import Bouncerate from './Charts/Report_Data/BounceRate';
import FormSubmit from './Charts/Report_Data/FormSubmit';
import RegionData from './Charts/Report_Data/RegionData';
import PagePath from './Charts/Report_Data/PagePath';
import TotalUsersCount from './Charts/Report_Data/TotalUsersCount';
import DonatedUsersData from './Charts/Report_Data/DonatedUsersChart';
import MonthlyReport from './Charts/Report_Data/MonthlyReport';
import Navbar from './Navbar';



const Home = () => {
  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar />
   
      <div className="flex flex-wrap justify-center mt-8 m-4 gap-4">
       
      <div className="bg-white flex flex-col justify-around items-center w-full max-w-sm rounded-md p-4 shadow-lg">
          <h5 className="text-lg font-semibold mb-4">UsersCount and Donations</h5>
          <div className='flex flex-1 gap-2 items-center'>
          <TotalUsersCount />
          <DonatedUsersData />
          </div>
        </div>
        <div className="bg-white flex flex-col justify-around items-center w-full max-w-sm rounded-md p-4 shadow-lg">
          <h5 className="text-lg font-semibold mb-4">Monthly Report</h5>
          <MonthlyReport />
        </div>
        <div className="bg-white flex flex-col justify-around items-center w-full max-w-lg rounded-md p-4 shadow-xl">
          <h5 className="text-lg font-semibold mb-4">Page vs Form Submissions</h5>
          <FormSubmit />
        </div>
        <div className="bg-white flex flex-col justify-around items-center w-full max-w-xl rounded-md p-4 shadow-lg">
          <h5 className="text-lg font-semibold mb-4">Users vs Bounce Rate</h5>
          <Bouncerate />
        </div>
        <div className="bg-white flex flex-col justify-around items-center w-full max-w-2xl rounded-md p-4 shadow-lg">
          <h5 className="text-lg font-semibold mb-4">Total Users vs New Users</h5>
          <PagePath />
        </div>
        <div className="bg-white flex flex-col justify-around items-center w-full max-w-4xl rounded-md p-4 shadow-lg">
          <h5 className="text-lg font-semibold mb-4">Location vs Total Users</h5>
          <RegionData />
        </div>
      </div>
    </div>

  );
};

export default Home;
