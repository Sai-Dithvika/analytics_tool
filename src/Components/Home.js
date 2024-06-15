import React,{useEffect,useState} from 'react'
import '../Components/home.css'


// IMPORTING DATA PARSERS FROM TEMPLATE
//<--MONTHLY REPORT-->
import MonthlyReportParser from './Charts/MonthlyReport';
import PieChartT from './Templates/PieChartT';
//<--BOUNCE RATE REPORT-->
import Bouncerate from './Charts/BounceRate';
import LineChartT from './Templates/LineChartT';
//<--FORM START AND SUBMIT REPORT-->
import FormSubmit from './Charts/FormSubmit';
import BarChartT from './Templates/BarChartT';
//<--GEOGRAPHICAL REGION DATA -->
import RegionData from './Charts/RegionData';
import MapChartT from './Templates/MapChartT';


const Home = () => {
  //  FOR MONTH REPORT
  const [monthReportData,setMonthReportData]=useState([]);

  // FOR BOUNCERATE REPORT
  const [bounceRateLabels,setBounceRateLabels]=useState([]);
  const [bounceRateValue1,setBounceRateValue1]=useState([]);
  const [bounceRateValue2,setBounceRateValue2]=useState([]);

  //FORM START AND SUBMIT REPORT
  const [formData, setFormData] = useState({ labels: [], seriesData: { form_submit: [], form_start: [] } }); 

  //REGION DATA REPORT
  const [mapData,setMapData]=useState([]);

  useEffect( ()=>{
     const fetchData =async ()=>{

      //  MONTHLY REPORT PARSING DATA
      const data=await MonthlyReportParser();
      setMonthReportData(data);

      //  BOUNCERATE REPORT DATA
      const bouncedata=await Bouncerate();
      const {labels,value1Data,value2Data}= bouncedata;
      setBounceRateLabels(labels);
      setBounceRateValue1(value1Data);
      setBounceRateValue2(value2Data);

      // FORM START AND SUBMIT DATA
      const formData=await FormSubmit();
      const formSubmitData=formData;
      setFormData(formSubmitData);

      // MAP REGION DATA
      const geoData=await RegionData();
      setMapData(geoData);

     }
     fetchData();


  },[]);
  return (
    <>
    <div>
    <h1 style={{ textAlign: 'center' }}>Data Charts</h1>
    </div>
    <div className='dashboard'>
    <div className='row'>
    <div className='comp'><PieChartT data={monthReportData}/></div>
    <div className='comp'><BarChartT data={formData}/></div>
    </div>
    <div className='row'>
    <div className='comp'><LineChartT labels={bounceRateLabels} value1Data={bounceRateValue1} value2Data={bounceRateValue2}/></div>
    <div className='comp'><MapChartT data={mapData}/></div>
    </div>
    </div>
    </>
  )
}

export default Home