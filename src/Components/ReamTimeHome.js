import React from 'react';
import ActiveUsersCount from './Charts/RealTime_Report/ActiveUsersCount';
import RealTimeRegionData from './Charts/RealTime_Report/RealTimeRegionData';
import FormData from './Charts/RealTime_Report/FormData';
import Navbar from './Navbar';
import './RealTimeHome.css'; // Import the CSS file

function ReamTimeHome() {
return (
<div className="body">
<Navbar />
<div className="content">
  <div class="row1">
  <ActiveUsersCount />
  <FormData />

  </div>

<RealTimeRegionData />
</div>
</div>
);
}

export default ReamTimeHome;