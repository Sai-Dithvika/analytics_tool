import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home'
import ReamTimeHome from './Components/ReamTimeHome';
import BounceRatePage from './Components/Pages/BounceRatePage';
import Navbar from './Components/Navbar';
<<<<<<< HEAD
import UserPage from './Components/Pages/UserPage';
=======
import DemographicPage from './Components/Pages/DemographicPage';
import FormSubmissionPage from './Components/Pages/FormSubmissionPage';
>>>>>>> 2a44a94296637a9406d9237963ed3f565ba0674c

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/realtime" element={<ReamTimeHome/>}/>
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
