
import axios from "axios";
import { useEffect, useState } from "react";
import BoxT from "../../Templates/BoxT";

const ActiveUsersCount = () => {
  const [data, setData] = useState(0);
  const [data1, setData1] = useState(0);

  useEffect(()=>{
    const fetchData = async () => {
        try{
            const response = await axios.post(`${process.env.REACT_APP_BACKEND}/analytics/realtime`,{
                metrics: ["activeUsers"]
            });
            setData(response.data.data[0].value1);
            const response1 = await axios.post(
              `${process.env.REACT_APP_BACKEND}/analytics/realtime`,
              {
                metrics: ["activeUsers"],
                minuteRanges: [[5,0]]
              }
            );
            setData(response.data.data[0].value1);
            setData1(response1.data.data[0].value1);
        }
        catch(error){
            console.log(error)
            setData(0);
            setData1(0);
        }
    }
    fetchData();
  });
  const Data = {
    userCount: data,
    label: "Last 30 Minutes",
  };
  const Data1 = {
    userCount: data1,
    label: "Last 5 Minutes",
  };
  return(
    <div>
        <BoxT data={Data} />
        <BoxT data={Data1} />
    </div>
  )
}

export default ActiveUsersCount