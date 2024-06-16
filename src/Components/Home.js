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
//<--PAGEPATH DATA -->
import PagePath from './Charts/PagePath';
import AreaChartT from './Templates/AreaChartT';
//<--TOTALUSERS DATA-->
import TotalUsersCount from './Charts/TotalUsersCount';
import BoxT from './Templates/BoxT';
//<--DONATED USERS DATA-->
import DonatedUsersData from './Charts/DonatedUsersChart';
import ProgressChartT from './Templates/ProgressChartT';


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

  //PAGEPATH DATA REPORT
  const [pageData,setPageData]=useState([]);

  //TOTAL USERS DATA REPORT
  const [totalUsers,setTotalUsers]=useState(0); 

  //DONATED USERS DATA REPORT
  const [percentage, setPercentage] = useState(0);
  const [totalUsersData, setTotalUsersData] = useState(0);
  const [donatedUsers, setDonatedUsers] = useState(0);

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

      //PAGE PATH DATA
      const pagePathData=await PagePath();
      setPageData(pagePathData); 

      //TOTAL USERS DATA
      const totalUsersData=await TotalUsersCount();
      setTotalUsers(totalUsersData);

      //DONATED USERS DATA
      const {total,donated,percent}= await DonatedUsersData();
      setPercentage(percent);
      setTotalUsersData(total);
      setDonatedUsers(donated);

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
    <div className='comp'><AreaChartT data={pageData}/></div>
    </div>
    <div className='row'>
    <div className='comp'><LineChartT labels={bounceRateLabels} value1Data={bounceRateValue1} value2Data={bounceRateValue2}/></div>
    <div className='comp'><MapChartT data={mapData}/></div>
    <div className='comp'><BoxT userCount={totalUsers}/></div>
    <div className='comp'><ProgressChartT totalUsers={totalUsersData} donatedUsers={donatedUsers} percent={percentage}/> </div>
    </div>
    </div>
    </>
  )
}

export default Home