import axios from "axios";
import { useEffect, useState } from "react";
import BoxT from "../../Templates/BoxT";
import useDataStore from "../../../Store/useDataStore";

const TotalUsersCount = () => {
  const [data, setData] = useState(0);
  const [data1, setData1] = useState(0);
  const { startDate, endDate } = useDataStore();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_BACKEND}/analytics/report`,
          {
            "metrics": ["activeUsers","newUsers"],
            "dateRanges": [[startDate,endDate]],
          }
        );
       setData(response.data.data[0].value1);
       setData1(response.data.data[0].value2);
      }
      catch(error) { 
        console.log(error);
        setData(0);
        setData1(0);
      }
    };

    fetchData();
  }, [startDate, endDate]);

  const Data = {
    userCount: data,
    label: "Total Users",
  };
  const Data1 = {
    userCount: data1,
    label: "New Users",
  };
  return (
    <div>
      <BoxT data={Data} />
      <BoxT data={Data1} />
    </div>
  );
};

export default TotalUsersCount;
