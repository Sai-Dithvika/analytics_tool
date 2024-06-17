import axios from "axios";
import getMonthFirst from "../../../Helpers/getMonthFirst";
import { useState,useEffect } from "react";
import ProgressChartT from "../../Templates/ProgressChartT";

const date = getMonthFirst();
const DonatedUsersData= ()=>{
  const [data, setData] = useState({total:0,donated:0,percent:0});
  useEffect(()=>{
    const fetchData = async ()=>{
      try{
        const DonationResponse = await axios.post(
          `${process.env.REACT_APP_BACKEND}/analytics/report`,
          {
            dimensions: ["eventName"],
            metrics: ["totalUsers"],
            dateRanges: [["2024-06-01", "today"]],
            dimensionFilter: [
              {
                fieldName: "eventName",
                filters: ["form_submit"],
              },
              {
                fieldName: "pagePath",
                filters: ["/donate.html"],
              },
            ],
          }
        );
        const TotalResponse = await axios.post(
          `${process.env.REACT_APP_BACKEND}/analytics/report`,
          {
            metrics: ["totalUsers"],
            dateRanges: [[date, "today"]],
          }
        );
        
        const total = TotalResponse.data.data[0].value1;
        const donated = DonationResponse.data.data[0].value1;
        const percent = total === 0 ? 0 : (donated / total) * 100;
        setData({total,donated,percent});
      }
      catch(error){
        console.log(error);
        setData({total:0,donated:0,percent:0});
      }
    }
    fetchData();
  });
  return <ProgressChartT data={data} />;
}

export default DonatedUsersData;