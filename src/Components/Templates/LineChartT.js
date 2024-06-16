import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

function LineChartT({ data }) {
    return (
        <LineChart
          width={500}
          height={300}
          series={[
            { data: data.value1Data, label: 'Total Users' },
            { data: data.value2Data, label: 'Bounce Rate' },
          ]}
          xAxis={[{ scaleType: 'point', data: data.labels }]}
        />
    );
}

export default LineChartT;
