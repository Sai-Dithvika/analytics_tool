import axios from "axios";

const TotalUsersCount=async()=>{
    const response=await axios.post(`${process.env.REACT_APP_BACKEND}/analytics/report`,{
        metrics: ["totalUsers"],
        dateRanges: [["2024-06-01", "today"]],
    });
    if (response.data.data && response.data.data.length > 0) {
        return (parseInt(response.data.data[0].value1));
      }else return 0;
    }


export default TotalUsersCount;