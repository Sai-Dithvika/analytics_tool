import { Progress } from 'rsuite';

import 'rsuite/dist/rsuite.min.css';

const style = {
  width: 120,
  display: 'inline-block',
  marginRight: 10
};

const ProgressChartT = ({data}) => {
  return (
    <div className="progress-chart">
      <h2>Donation Progress</h2>
      <div className="progress-circle">
        <div style={style}>
          <Progress.Circle percent={data.percent} />
        </div>
        
      </div>
      <p>Total Users: {data.total}</p>
      <p>Donated Users: {data.donated}</p>
    </div>
  );
};

export default ProgressChartT;