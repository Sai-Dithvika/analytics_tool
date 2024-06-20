import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home'
import ReamTimeHome from './Components/ReamTimeHome';
import BounceRatePage from './Components/Pages/BounceRatePage';
import Navbar from './Components/Navbar';
import DemographicPage from './Components/Pages/DemographicPage';
import FormSubmissionPage from './Components/Pages/FormSubmissionPage';
import UserPage from './Components/Pages/UserPage';

//REAL TIME REPORT IMPORTS
import RealtimeDemographicPage from './Components/Pages/Realtime/DemographicPage';
import RealtimeFormSubmisionPage from './Components/Pages/Realtime/FormSubmissionPage';
import RealtimeUserPage from './Components/Pages/Realtime/UserPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/realtime">
            <Route path="" element={<ReamTimeHome/>}/>
            <Route path="form-data" element={<RealtimeFormSubmisionPage />}/>
            <Route path= 'demographic-data' element={<RealtimeDemographicPage />} />
            <Route path='user-page' element={<RealtimeUserPage />}/>
          </Route>
          <Route path="/Navbar" element={<Navbar />}/>
          <Route path="/user-page" element={<UserPage/>}/>

          <Route path="/demographic-data" element= {<DemographicPage />} />
          
          <Route path="/bounce-rate" element = {<BounceRatePage />}/>
          <Route path="/form-data" element = {<FormSubmissionPage />} />

          
          

          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
