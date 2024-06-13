import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home'
import MonthlyReport from './Components/MonthlyReport';
import FormSubmit from './Components/FormSubmit';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/monthly-report" element={<MonthlyReport />} />
          <Route path="/form-report" element={<FormSubmit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
