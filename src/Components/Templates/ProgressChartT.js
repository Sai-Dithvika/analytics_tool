import React from 'react';
import { Progress } from 'rsuite';

import 'rsuite/dist/rsuite.min.css';

const style = {
  width: 120,
  display: 'inline-block',
  marginRight: 10
};

const ProgressChartT = ({percent,totalUsers,donatedUsers}) => {

  return (
    <div className="progress-chart">
      <h2>Donation Progress</h2>
      <div className="progress-circle">
        <div style={style}>
          <Progress.Circle percent={percent} />
        </div>
        
      </div>
      <p>Total Users: {totalUsers}</p>
      <p>Donated Users: {donatedUsers}</p>
    </div>
  );
};

export default ProgressChartT;