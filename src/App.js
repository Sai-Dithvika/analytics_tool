import React from 'react';
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

function AppContent() {
  const location = useLocation();
  const { startDate, endDate, setStartDate, setEndDate } = useDataStore() ;

  const handleStartDate = (event) => {
    const date = event.target.value;
    setStartDate(date);
  }

  const handleEndDate = (event) => { 
    const date = new Date(event.target.value);
    setEndDate(date);
  }
  return (
    <div className="bg-white-500 w-full min-h-screen">
      <Navbar />
      {isShowPath(location.pathname) &&
      <div className='w-full flex flex-row justify-end items-center gap-5 p-5 pr-32'>
        <span className='text-lg text-slate-950 font-bold'>From :</span>
        <DateInput value={startDate} onChange={handleStartDate} />
        <span className='text-lg text-slate-950 font-bold'>To : </span>
        <DateInput value={endDate} onChange={handleEndDate}/>
        {/* <button className=''>
          <img src="Search.svg"  alt="search" />
        </button> */}
      </div>}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/realtime">
          <Route path="" element={<ReamTimeHome />} />
          <Route path="form-data" element={<RealtimeFormSubmisionPage />} />
          <Route path="demographic-data" element={<RealtimeDemographicPage />} />
          <Route path="user-page" element={<RealtimeUserPage />} />
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