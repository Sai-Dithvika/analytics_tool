import axios from "axios";
import Capitalise from "../../Helpers/Capitalise";
import { useEffect, useState } from "react";
import AreaChartT from "../Templates/AreaChartT";


const mapper = (data) => {

    const res=[]
    for(let i of data){
      const s=i.label1.length;
      let pagePath=Capitalise(i.label1.slice(1,s-5)) +" Page";
      if (pagePath ===" Page"){
        pagePath="Home Page";
      }
      res.push({pagePath:pagePath,totalUsers:parseInt(i.value1),newUsers:parseInt(i.value2)});

    }
    return res;
  };

  
const PagePath=()=>{
    const [data,setData]=useState([]);
    useEffect(()=>{
      const fetchData=async()=>{
        try{
          const response=await axios.post(`${process.env.REACT_APP_BACKEND}/analytics/report`,{
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
          setData(mapper(response.data.data));
        }
        catch(error){
          console.log(error);
          setData([]);
        }
      }
      fetchData();
    });
    return <AreaChartT data={data}/>
}

export default PagePath;