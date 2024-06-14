import {useState,useEffect} from 'react';
import { PieChart } from "@mui/x-charts/PieChart";


const MonthlyReport = ({data}) => {
  useEffect(()=>{
    console.log({data});
  })
  return (
    <PieChart
      series={[
        {
          data: data,
        },
      ]}
      width={400}
      height={200}
    />
  );
}

export default MonthlyReport;