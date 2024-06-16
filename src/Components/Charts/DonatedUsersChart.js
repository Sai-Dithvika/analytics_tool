import axios from "axios";

const DonatedUsersData=async()=>{
    const response= await axios.post(`${process.env.REACT_APP_BACKEND}/analytics/donations`);
    const total = response.data.totalUsers;
        const donated = response.data.donatedUsers;
        const percent=0;
        if (total > 0) {
          const percent = (donated / total) * 100;
        }
        return {total,donated,percent};
      }

export default DonatedUsersData;