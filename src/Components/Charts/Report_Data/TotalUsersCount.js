import axios from "axios";
import getMonthFirst from "../../../Helpers/getMonthFirst";
import { useEffect, useState } from "react";
import BoxT from "../../Templates/BoxT";

const date = getMonthFirst();

const TotalUsersCount = () => {
  const [data, setData] = useState(0);
  const [data1, setData1] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_BACKEND}/analytics/report`,
          {
            "metrics": ["activeUsers","newUsers"],
            "dateRanges": [[date, "today"]],
          }
        );
        setData(response.data.data[0].value1);
        setData1(response.data.data[0].value2);
      } catch (error) {
        console.log(error);
        setData(0);
      }
    };

    fetchData();
  }, []);

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
