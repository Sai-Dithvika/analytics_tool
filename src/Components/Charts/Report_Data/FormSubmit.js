import axios from "axios";
import Capitalise from "../../../Helpers/Capitalise";
import { useState, useEffect } from "react";
import BarChartT from "../../Templates/BarChartT";
import useDataStore from "../../../Store/useDataStore";

const mapper = (data) => {
  const labels = [];
  const seriesData = {
    form_submit: [],
    form_start: [],
  };

  const dataMap = {};

  for (const item of data) {
    const s = item.label1.length;
    let pagePath = Capitalise(item.label1.slice(1, s - 5)) + " Page";
    const eventType = item.label2;
    const value = parseInt(item.value1);

    if (!dataMap[pagePath]) {
      dataMap[pagePath] = { form_submit: 0, form_start: 0 };
      labels.push(pagePath);
    }

    if (eventType === "form_submit") {
      dataMap[pagePath].form_submit += value;
    } else if (eventType === "form_start") {
      dataMap[pagePath].form_start += value;
    }
  }

  for (const label of labels) {
    seriesData.form_submit.push(dataMap[label].form_submit);
    seriesData.form_start.push(dataMap[label].form_start);
  }
  return { labels, seriesData };
};

const FormSubmit = () => {
  const [data, setData] = useState({
    labels: [],
    seriesData: { form_submit: [], form_start: [] },
  });

  const { startDate, endDate,setLoader} = useDataStore();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoader(1);
        const response = await axios.post(
          `${process.env.REACT_APP_BACKEND}/analytics/report`,
          {
            dimensions: ["pagePath", "eventName"],
            metrics: ["totalUsers"],
            dateRanges: [[startDate,endDate]],
            dimensionFilter: [
              {
                fieldName: "eventName",
                filters: ["form_submit", "form_start"],
              },
            ],
          }
        );
        setData(mapper(response.data.data));
        setLoader(0);
      } catch (e) {
        setData({
          labels: [],
          seriesData: { form_submit: [], form_start: [] },
        });
      }
    };

    fetchData();
  }, [startDate, endDate]);

  return <BarChartT data={data} />;
};

export default FormSubmit;
