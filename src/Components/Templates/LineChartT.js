import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

function LineChartT({ labels, value1Data, value2Data }) {
    return (
        <LineChart
          width={500}
          height={300}
          series={[
            { data: value1Data, label: 'Total Users' },
            { data: value2Data, label: 'Bounce Rate' },
          ]}
          xAxis={[{ scaleType: 'point', data: labels }]}
        />
    );
}

export default LineChartT;
