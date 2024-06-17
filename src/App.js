import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home'
import ReamTimeHome from './Components/ReamTimeHome';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/realtime" element={<ReamTimeHome/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
