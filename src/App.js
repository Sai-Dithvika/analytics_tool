import React, { useRef, useState } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import ReamTimeHome from './Components/ReamTimeHome';
import BounceRatePage from './Components/Pages/BounceRatePage';
import DemographicPage from './Components/Pages/DemographicPage';
import FormSubmissionPage from './Components/Pages/FormSubmissionPage';
import UserPage from './Components/Pages/UserPage';
import DateInput from './Components/Templates/DateInput';
// REAL TIME REPORT IMPORTS
import RealtimeDemographicPage from './Components/Pages/Realtime/DemographicPage';
import RealtimeFormSubmisionPage from './Components/Pages/Realtime/FormSubmissionPage';
import RealtimeUserPage from './Components/Pages/Realtime/UserPage';
// Import the showDateInput function
import isShowPath from './Helpers/ShowPath';
// Import the zustand variables
import useDataStore from './Store/useDataStore';
import { Button} from '@mui/material';

function AppContent() {
  const location = useLocation();
  const { startDate, endDate, setStartDate, setEndDate } = useDataStore() ;
  const [tempStartDate,setTempStartDate]=useState(startDate);
  const [tempEndDate,setTempEndDate]=useState(endDate);

  const handleDateChange = () => {
    if(tempStartDate>tempEndDate){ 
      alert("Start Date should be less than End Date");
      setTempStartDate(startDate);
      setTempEndDate(endDate);
      return;
    }

   setStartDate(tempStartDate);
   setEndDate(tempEndDate);
  }

  return (
    <div className="bg-white-500 w-full min-h-screen">
      <Navbar />
      {isShowPath(location.pathname) &&
      <div className='w-full flex flex-row justify-end items-center gap-5 p-5 pr-32'>
        <span className='text-lg text-slate-950 font-bold'>From :</span>
        <DateInput value={tempStartDate} onChange={(e)=>setTempStartDate(e.target.value)} />
        <span className='text-lg text-slate-950 font-bold'>To : </span>
        <DateInput value={tempEndDate} onChange={(e)=>setTempEndDate(e.target.value)} />
        <Button onClick={handleDateChange}>Search</Button>
        {/* <button className=''>
          <img src="Search.svg"  alt="search" />
        </button> */}
      </div>}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/realtime">
          <Route path="" element={<ReamTimeHome  />} />
          <Route path="form-data" element={<RealtimeFormSubmisionPage  />} />
          <Route path="demographic-data" element={<RealtimeDemographicPage  />} />
          <Route path="user-page" element={<RealtimeUserPage  />} />
        </Route>
        <Route path="/user-page" element={<UserPage />} />
        <Route path="/demographic-data" element={<DemographicPage />} />
        <Route path="/bounce-rate" element={<BounceRatePage />} />
        <Route path="/form-data" element={<FormSubmissionPage />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;