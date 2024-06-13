import { BarChart } from '@mui/x-charts/BarChart';
import { useState, useEffect } from 'react';
import axios from 'axios';
import getYearFirst from '../Helpers/getYearFirst';

const mapper = (data) => {
  console.log('Raw Data:', data);

  const labels = [];
  const seriesData = {
    form_submit: [],
    form_start: []
  };

  const dataMap = {};

  for (const item of data) {
    const pagePath = item.label1;
    const eventType = item.label2;
    const value = parseInt(item.value1);

    if (!dataMap[pagePath]) {
      dataMap[pagePath] = { form_submit: 0, form_start: 0 };
      labels.push(pagePath);
    }

    if (eventType === 'form_submit') {
      dataMap[pagePath].form_submit += value;
    } else if (eventType === 'form_start') {
      dataMap[pagePath].form_start += value;
    }
  }

  for (const label of labels) {
    seriesData.form_submit.push(dataMap[label].form_submit);
    seriesData.form_start.push(dataMap[label].form_start);
  }

  console.log('Mapped Data:', { labels, seriesData });

  return {
    labels,
    seriesData
  };
};

const FormSubmit = () => {
  const [data, setData] = useState({ labels: [], seriesData: { form_submit: [], form_start: [] } });
  const date = getYearFirst();

  useEffect(() => {
    axios.post(process.env.REACT_APP_BACKEND, {
      "dimensions": [
        "pagePath",
        "eventName"
      ],
      "metrics": [
        "totalUsers"
      ],
      "dateRanges": [
        [
          "2024-06-01",
          "today"
        ]
      ],
      "dimensionFilter": [
        {
          "fieldName": "eventName",
          "filters": ["form_submit", "form_start"]
        }
      ]
    })
    .then((response) => {
      console.log('API Response:', response.data);
      const mappedData = mapper(response.data.data);
      setData(mappedData);
    })
    .catch(error => {
      console.error('API Error:', error);
    });
  }, []);

  useEffect(() => {
    console.log('Chart Data:', data);
  }, [data]);

  return (
    <BarChart
      xAxis={[{ scaleType: 'band', data: data.labels, title: 'Page Path' }]}
      series={[
        { data: data.seriesData.form_submit, label: 'Form Submit' },
        { data: data.seriesData.form_start, label: 'Form Start' }
      ]}
      categoryGapRatio={0.5}
      barGapRatio={0.1}
      width={500}
      height={300}
    />
  );
}

export default FormSubmit;
