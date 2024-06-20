import axios from "axios";
import getYearFirst from "../../../Helpers/getYearFirst";
import { useState, useEffect } from "react";
import MapChartT from "../../Templates/MapChartT";
import RegionDataInference from "../../Infernces/RegionDataInference";

const date = getYearFirst();

const sortFunction = (a,b)=>{
  if(a[0]===b[0]) return 0;
  return a[1]<b[1]?-1:1;
}

const mapper = (data) => {
  var res = [["Country", "Users"]];
  for (let i of data) {
    res.push([i.label1, parseInt(i.value1)]);
  }
  res.sort(sortFunction);
  return res;
};

const RegionData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_BACKEND}/analytics/report`,
          {
            dimensions: ["country"],
            metrics: ["totalUsers"],
            dateRanges: [[date, "today"]],
          }
        );
        setData(mapper(response.data.data));
      } catch (error) {
        console.log(error);
        setData([]);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      <MapChartT data={data} />
    </div>
  );
};

export default RegionData;
