import React from 'react';
import RealTimeRegionData from './Charts/RealTime_Report/RealTimeRegionData';
import FormData from './Charts/RealTime_Report/FormData';
import Navbar from './Navbar';
import './RealTimeHome.css'; // Import the CSS file

function ReamTimeHome() {
  return (
    <div >
      <Navbar />
      <div class="body">
      <div className="content">
        <FormData />
        <RealTimeRegionData />
      </div>
      </div>
    </div>
  );
}

export default ReamTimeHome;
