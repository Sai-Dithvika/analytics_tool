import axios from "axios";
import getYearFirst from '../../Helpers/getYearFirst';

const date=getYearFirst();

const mapper = (data)=>{
    var id=0;
    var res =[
        ["City", "Users"],
    ];
    for(let i of data){
        res.push([i.label1,parseInt(i.value1)]);
        id++;
    }
    return res;
}

const RegionData=async ()=>{
    const response =await axios.post(`${process.env.REACT_APP_BACKEND}/analytics/report `,{
        dimensions: ["country"],
            metrics: ["totalUsers"],
            dateRanges: [[date, "today"]],
    })
    return mapper(response.data.data);

}

export default RegionData;