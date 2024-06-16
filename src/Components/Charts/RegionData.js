import axios from "axios";
import getYearFirst from "../../Helpers/getYearFirst";
import { useState, useEffect } from "react";
import MapChartT from "../Templates/MapChartT";

const date = getYearFirst();

const mapper = (data) => {
  var res = [["Country", "Users"]];
  for (let i of data) {
    res.push([i.label1, parseInt(i.value1)]);
  }
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

  return <MapChartT data={data} />;
};

export default RegionData;
