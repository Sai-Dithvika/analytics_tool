import axios from "axios";
import Capitalise from "../../Helpers/Capitalise";

const mapper=(data)=>{
    const labels = data.map(item => {
        let s=item.label1.length;
        let pagePath=item.label1.slice(1,s-5);
        pagePath=Capitalise(pagePath) + " Page";
        if (pagePath === " Page") return "Home Page";
        return pagePath;
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