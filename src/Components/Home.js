import React,{useEffect,useState} from 'react'
import '../Components/home.css'

import FormSubmit from './FormSubmit'
import Bouncerate from './Bouncerate'
// IMPORTING DATA PARSERS FROM TEMPLATE

import MonthlyReportParser from './Charts/MonthlyReport';
import MonthlyReport from './Templates/PieChartT';
const Home = () => {
  const [monthReportData,setMonthReportData]=useState([]);
  useEffect( ()=>{
     const fetchData =async ()=>{
      const data=await MonthlyReportParser();
      setMonthReportData(data);
     }
     fetchData();
  },[]);
  return (
    <>
    <div>
    <h1 style={{ textAlign: 'center' }}>Data Charts</h1>
    </div>
    <div className='dashboard'>
    <MonthlyReport data={monthReportData}/>
    <FormSubmit />
    <Bouncerate />
    </div>
    </>
  )
}

export default Home