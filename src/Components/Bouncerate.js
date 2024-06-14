import * as React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

function Bouncerate() {
    const [labels, setLabels] = useState([]);
    const [value1Data, setValue1Data] = useState([]);
    const [value2Data, setValue2Data] = useState([]);

    useEffect(() => {
        axios
          .post(process.env.REACT_APP_BACKEND, {
            "dimensions": ["pagePath"],
            "metrics": ["totalUsers", "bounceRate"],
            "dateRanges": [[ "2024-01-01", "today"]]
          })
          .then((response) => {
            const responseData = response.data.data;
            const labels = responseData.map(item => {
                if (item.label1 === "/") return "Home";
                return item.label1.replace("/", "");
            });
            const value1Data = responseData.map(item => parseFloat(item.value1));
            const value2Data = responseData.map(item => parseFloat(item.value1) * parseFloat(item.value2));

            setLabels(labels);
            setValue1Data(value1Data);
            setValue2Data(value2Data);
          })
          .catch((error) => {
            console.error('Error fetching data:', error);
          });
    }, []);

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

export default Bouncerate;