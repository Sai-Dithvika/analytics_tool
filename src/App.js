import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home'
import ReamTimeHome from './Components/ReamTimeHome';
import Navbar from './Components/Navbar';
import Users from './Components/Users';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/realtime" element={<ReamTimeHome/>}/>
          <Route path="/link1" element = {<Users />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
