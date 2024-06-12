import {useState,useEffect} from 'react';
import { PieChart } from "@mui/x-charts/PieChart";
import axios from 'axios';
import getYearFirst from '../Helpers/getYearFirst';
import MonthConverter from '../Helpers/MonthConverter';

const mapper = (data)=>{
    var id=0;
    var res =[];
    for(let i of data){
        res.push({id:id,value:i.value1,label:MonthConverter(parseInt(i.label1))});
        id++;
    }
    return res;
}

const MonthlyReport = () => {
    const [data, setData] = useState([]);
    const date = getYearFirst();
    useEffect(() => {
        axios
          .post(process.env.REACT_APP_BACKEND, {
            dimensions: ["month"],
            metrics: ["totalUsers"],
            dateRanges: [[date, "today"]],
          })
          .then((response) => {
            setData(mapper(response.data.data));
          });
    }, []);

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