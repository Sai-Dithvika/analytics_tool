import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home'
import ReamTimeHome from './Components/ReamTimeHome';
import Navbar from './Components/Navbar';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/realtime" element={<ReamTimeHome/>}/>
          <Route path="/Navbar" element={<Navbar />}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
