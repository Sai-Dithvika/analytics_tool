import axios from "axios";
import getMonthFirst from "../../../Helpers/getMonthFirst";
import { useEffect, useState } from "react";
import BoxT from "../../Templates/BoxT";

const date = getMonthFirst();

const TotalUsersCount = () => {
  const [data, setData] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_BACKEND}/analytics/report`,
          {
            metrics: ["totalUsers"],
            dateRanges: [[date, "today"]],
          }
        );
        setData(response.data.data[0].value1);
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

  return <BoxT data={Data} />;
};

export default TotalUsersCount;
