import React from 'react'
import RealTimeRegionData from './Charts/RealTime_Report/RealTimeRegionData';
import FormData from './Charts/RealTime_Report/FormData';
import ActiveUsersCount from './Charts/RealTime_Report/ActiveUsersCount';

function ReamTimeHome() {
  return (
    <div>
    <div>
    <h1 style={{ textAlign: 'center' }}> Real Time Data Charts</h1>
    </div>
    <RealTimeRegionData/>
    <FormData/>
    <ActiveUsersCount />
    </div>
  )
}

export default ReamTimeHome;
