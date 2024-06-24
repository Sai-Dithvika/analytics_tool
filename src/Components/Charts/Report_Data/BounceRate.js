import axios from "axios";
import Capitalise from "../../../Helpers/Capitalise";
import { useEffect, useState } from "react";
import LineChartT from "../../Templates/LineChartT";
import useDataStore from "../../../Store/useDataStore";

const mapper = (data) => {
  const labels = data.map((item) => {
    let s = item.label1.length;
    let pagePath = item.label1.slice(1, s - 5);
    pagePath = Capitalise(pagePath) + " Page";
    if (pagePath === " Page") return "Home Page";
    return pagePath;
  });
  const value1Data = data.map((item) => parseFloat(item.value1));
  const value2Data = data.map(
    (item) => Math.ceil(parseFloat(item.value1) * parseFloat(item.value2))
  );
  return { labels, value1Data, value2Data };
};

const Bouncerate = () => {
  const [data, setData] = useState({
    labels: [],
    value1Data: [],
    value2Data: [],
  });

  const { startDate, endDate } = useDataStore();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_BACKEND}/analytics/report`,
          {
            dimensions: ["pagePath"],
            metrics: ["totalUsers", "bounceRate"],
            dateRanges: [[startDate, endDate]],
          }
        );
        setData(mapper(response.data.data));
      } catch (error) {
        console.log(error);
        setData({ labels: [], value1Data: [], value2Data: [] });
      }
    };

    fetchData();
  }, [startDate,endDate]);

  return <LineChartT data={data} />;
};

export default Bouncerate;
