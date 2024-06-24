import { useState, useEffect } from "react";
import axios from "axios";
import getYearFirst from "../../../Helpers/GetYearFirst";
import MonthConverter from "../../../Helpers/MonthConverter";
import PieChartT from "../../Templates/PieChartT";

const mapper = (data) => {
  var id = 0;
  const res = [];
  for (let i of data) {
    res.push({
      id: id++,
      value: i.value1,
      label: MonthConverter(parseInt(i.label1)),
    });
  }
  return res;
};

const date = getYearFirst();

const MonthlyReport = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_BACKEND}/analytics/report`,
          {
            dimensions: ["month"],
            metrics: ["totalUsers"],
            dateRanges: [[date, "today"]],
          }
        );
        setData(mapper(response.data.data));
      } catch (e) {
        setData([]);
      }
    };
    fetchData();
  }, []);
  return <PieChartT data={data} />;
};

export default MonthlyReport;
