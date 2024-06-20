import axios from "axios";
import { useState, useEffect } from "react";
import MapChartT from "../../Templates/MapChartT";

const mapper = (data) => {
  var res = [["Country", "Users"]];
  for (let i of data) {
    res.push([i.label1, parseInt(i.value1)]);
  }
  return res;
};

const RealTimeRegionData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_BACKEND}/analytics/realtime`,
          {
            dimensions: ["country"],
            metrics: ["ActiveUsers"],
          }
        );
        console.log(response.data.data);
        setData(mapper(response.data.data));
      } catch (error) {
        console.log("hi"+ error);
        setData([]);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 30000);

    return () => clearInterval(interval); 
  }, []);

  return <MapChartT data={data} />;
};

export default RealTimeRegionData;
