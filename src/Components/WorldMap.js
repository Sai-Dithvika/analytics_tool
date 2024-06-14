import React ,{useEffect,useState} from "react";
import { Chart } from "react-google-charts";
import axios from 'axios';
import getYearFirst from '../Helpers/getYearFirst';


export const options = {
    // region: "034", // India
    colorAxis: { colors: ["#00853f", "black", "#e31b23"] },
    backgroundColor: "#81d4fa",
    datalessRegionColor: "#f8bbd0",
    defaultColor: "#f5f5f5",
  };
const mapper = (data)=>{
    var id=0;
    var res =[
        ["City", "Users"],
    ];
    for(let i of data){
        res.push([i.label1,parseInt(i.value1)]);
        id++;
    }
    return res;
}

function WorldMap() {
    const [data, setData] = useState([]);
    const date = getYearFirst();
    useEffect(() => {
        axios
          .post(process.env.REACT_APP_BACKEND, {
            dimensions: ["country"],
            metrics: ["totalUsers"],
            dateRanges: [[date, "today"]],
          })
          .then((response) => {
            setData(mapper(response.data.data));
            console.log(data);
          });
    }, []);
    return (
        <Chart
          
          chartType="GeoChart"
          width="100%"
          height="400px"
          data={data}
          options={options}
        />
      );
    }
    

export default WorldMap