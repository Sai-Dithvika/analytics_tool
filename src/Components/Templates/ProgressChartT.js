import { Progress } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';

const ProgressChartT = ({ data }) => {
  return (
    <div className="bg-white p-4 rounded-md shadow-md text-center">
      <h5 className="text-lg font-semibold mb-4">Donation Progress</h5>
      <div className="flex justify-center items-center mb-4">
        <div className="inline-block" style={{ width: 120 }}>
          <Progress.Circle percent={data.percent} />
        </div>
      </div>
      <p className="text-base mb-2">Total Users: {data.total}</p>
      <p className="text-base">Donated Users: {data.donated}</p>
    </div>
  );
};

export default ProgressChartT;
