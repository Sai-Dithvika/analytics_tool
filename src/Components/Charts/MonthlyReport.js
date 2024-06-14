
import axios from 'axios';
import getYearFirst from '../../Helpers/getYearFirst';
import MonthConverter from '../../Helpers/MonthConverter';


const mapper = (data)=>{
    var id=0;
    const res=[];
    for (let i of data){
        res.push({id:id++,value:i.value1,label:MonthConverter(parseInt(i.label1))});
    }
    return res;
}; 

const date= getYearFirst();

const MonthlyReportParser=async () => {
try
   { const response = await axios
      .post(process.env.REACT_APP_BACKEND, {
        dimensions: ["month"],
        metrics: ["totalUsers"],
        dateRanges: [[date, "today"]],
      });
      
        return  (mapper(response.data.data));
         
    }
      catch(e){
        return [];
      }
}
 export default MonthlyReportParser;