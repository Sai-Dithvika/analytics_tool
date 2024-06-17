import React from 'react'
import RealTimeRegionData from './Charts/RealTime_Report/RealTimeRegionData';
import FormData from './Charts/RealTime_Report/FormData';

function ReamTimeHome() {
  return (
    <div>
    <div>
    <h1 style={{ textAlign: 'center' }}> Real Time Data Charts</h1>
    </div>
    <RealTimeRegionData/>
    <FormData/>
      
    </div>
  )
}

export default ReamTimeHome;
