import axios from "axios";

const mapper=(data)=>{
    const labels = data.map(item => {
        if (item.label1 === "/") return "Home";
        return item.label1.replace("/", "");
    });
    const value1Data = data.map(item => parseFloat(item.value1));
    const value2Data = data.map(item => parseFloat(item.value1) * parseFloat(item.value2));
    return {labels,value1Data,value2Data};
}

const Bouncerate= async()=>{
    try{
    const response=await axios.post(`${process.env.REACT_APP_BACKEND}/analytics/report `,
        {
            "dimensions": ["pagePath"],
            "metrics": ["totalUsers", "bounceRate"],
            "dateRanges": [[ "2024-01-01", "today"]]
          }
    )
    return mapper(response.data.data);
}catch(e){
    console.log(e);
}
}

export default Bouncerate;