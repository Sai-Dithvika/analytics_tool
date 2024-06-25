import React, { useState } from 'react';

import Bouncerate from './Charts/Report_Data/BounceRate';
import FormSubmit from './Charts/Report_Data/FormSubmit';
import RegionData from './Charts/Report_Data/RegionData';
import PagePath from './Charts/Report_Data/PagePath';
import TotalUsersCount from './Charts/Report_Data/TotalUsersCount';
import DonatedUsersData from './Charts/Report_Data/DonatedUsersChart';
import MonthlyReport from './Charts/Report_Data/MonthlyReport';
import  Loader from './Templates/Loader';
import useDataStore from "../Store/useDataStore";

const Home = () => {
  const {loader}=useDataStore();

  return (
    <>    
    <div className={"min-h-screen bg-slate-100 p-4 "+(loader?"hidden":"")}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 mt-4">
        <div className="bg-white flex flex-col justify-center items-center w-full rounded-md p-4 shadow-lg">
          <h5 className="text-lg font-semibold mb-4">UsersCount and Donations</h5>
          <div className='flex flex-1 gap-2 items-center justify-center w-full'>
            <TotalUsersCount />
            <DonatedUsersData />
          </div>
        </div>
        <div className="bg-white flex flex-col justify-around items-center w-full rounded-md p-4 shadow-lg">
          <h5 className="text-lg font-semibold mb-4">Monthly Report</h5>
          <MonthlyReport />
        </div>
        <div className="bg-white flex flex-col justify-around items-center w-full rounded-md p-4 shadow-lg">
          <h5 className="text-lg font-semibold mb-4">Page vs Form Submissions</h5>
          <FormSubmit />
        </div>
        <div className="bg-white flex flex-col justify-around items-center w-full rounded-md p-4 shadow-lg">
          <h5 className="text-lg font-semibold mb-4">Users vs Bounce Rate</h5>
          <Bouncerate />
        </div>
        <div className="bg-white flex flex-col justify-around items-center w-full rounded-md p-4 shadow-lg">
          <h5 className="text-lg font-semibold mb-4">Total Users vs New Users</h5>
          <PagePath />
        </div>
        <div className="bg-white flex flex-col justify-around items-center w-full rounded-md p-4 shadow-lg">
          <h5 className="text-lg font-semibold mb-4">Location vs Total Users</h5>
          <RegionData />
        </div>
      </div>
    </div>
    {loader==1 && 
    <Loader />}
    </>
  );
};

export default Home;
