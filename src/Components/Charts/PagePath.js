import axios from "axios";


const mapper = (data) => {
    console.log('Raw Data:', data);
  
    // Convert the API response into the required format
    return data.map(item => ({
      pagePath: item.label1,
      totalUsers: parseInt(item.value1),
      newUsers: parseInt(item.value2)
    }));
  };

  
const PagePath=async()=>{
    const response =  await axios.post(`${process.env.REACT_APP_BACKEND}/analytics/report`,{
        "dimensions": [
        "pagePath"
      ],
      "metrics": [
        "totalUsers",
        "newUsers"
      ],
      "dateRanges": [
        [
          "2024-06-01",
          "today"
        ]
      ]
    });
    return mapper(response.data.data);
}

export default PagePath;